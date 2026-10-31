import test from 'node:test';
import assert from 'node:assert/strict';
import {defaults as baseDefaults,buildModel,initKernel,triangles} from '../src/geometry.js';
import {assertWatertight,printOrientation,lowerPrintOrientation,stlBuffer} from '../src/mesh.js';
const defaults={...baseDefaults,bottomMode:'separate'};
const {Manifold}=await initKernel();
const art=[{outer:[[-25,-8],[-5,-8],[-5,8],[-25,8]],holes:[]},{outer:[[5,-8],[25,-8],[25,8],[5,8]],holes:[]}];
function volumeIntersection(a,b){const m=Manifold.intersection(a,b);const v=m.volume();m.delete();return v;}
test('caixa, tampa com paredes e fundo são três peças únicas e fechadas, inclusive com vários recortes',()=>{
 const p={...defaults,svgWidth:50},m=buildModel(p,art);
 for(const solid of [m.box,m.upper,m.lowerPart]){const parts=solid.decompose();assert.equal(parts.length,1);for(const x of parts)x.delete();assertWatertight(triangles(solid));}
 assertWatertight(printOrientation(triangles(m.upper),p.lid));assertWatertight(lowerPrintOrientation(triangles(m.lowerPart),p.cavityDepth));
 const bottom=m.lowerPart.boundingBox(),top=m.upper.boundingBox();assert.ok(Math.abs(bottom.max[2]-bottom.min[2]-p.cavityFloor)<1e-5,'fundo deve ser apenas uma placa, sem paredes altas');assert.ok(top.min[2]<bottom.max[2]-p.joinDepth+.01,'degrau das paredes deve penetrar na placa de fundo');
 assert.ok(volumeIntersection(m.upper,m.lowerPart)<1e-7,'encaixe não pode ter interferência');
 const upper=m.upper.translate([0,0,m.seat]),lower=m.lowerPart.translate([0,0,m.seat]);
 assert.ok(volumeIntersection(upper,m.box)<1e-5);assert.ok(volumeIntersection(lower,m.box)<1e-5);
 assert.ok(m.box.minGap(lower,.2)>=.19,'caixa não deve ter apoios sob o fundo separado');
 assert.ok(m.box.minGap(upper,.2)<1e-5,'borda interna deve sustentar a placa');
 const probe=Manifold.cube([.04,.04,.04],true).translate([25.72,0,-p.cavityDepth+p.cavityFloor-p.joinDepth/2]);assert.ok(volumeIntersection(m.upper,probe)<1e-8);assert.ok(volumeIntersection(m.lowerPart,probe)<1e-8,'folga entre o degrau e a canaleta deve permanecer vazia');probe.delete();
 upper.delete();lower.delete();m.dispose();
});
test('as duas partes imprimem com uma face plana na mesa e sem tetos suspensos',()=>{
 const p={...defaults,svgWidth:50},m=buildModel(p,art);
 for(const [name,vertices] of [['placa',printOrientation(triangles(m.upper),p.lid)],['cavidades',lowerPrintOrientation(triangles(m.lowerPart),p.cavityDepth)]]){
 let min=Infinity,bedArea=0;
 for(let i=0;i<vertices.length;i+=9){const a=Array.from(vertices.slice(i,i+3)),b=Array.from(vertices.slice(i+3,i+6)),c=Array.from(vertices.slice(i+6,i+9));min=Math.min(min,a[2],b[2],c[2]);const u=b.map((x,k)=>x-a[k]),v=c.map((x,k)=>x-a[k]),normal=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],length=Math.hypot(...normal);if(length<1e-9)continue;
 if(Math.max(a[2],b[2],c[2])<.001)bedArea+=length/2;
 else if(name==='cavidades')assert.ok(normal[2]/length>=-1e-4,'cavidades não devem ter faces descendentes acima da mesa');
 else {const z=Math.min(a[2],b[2],c[2]),end=p.lid+p.cavityDepth-p.cavityFloor,roundBand=z>=end-p.floorRadius-.001&&z<=end+.001;if(!roundBand)assert.ok(normal[2]/length>-.9999,'tampa não deve fechar o fundo no alto');if(z>p.entryChamfer+.001&&!roundBand)assert.ok(normal[2]/length>=-1e-4,'faces descendentes devem se limitar ao chanfro e ao pequeno raio interno');}}
 assert.ok(Math.abs(min)<.001);assert.ok(bedArea>100);const buffer=stlBuffer(vertices);assert.equal(new DataView(buffer).getUint32(80,true),vertices.length/9);
 }
 m.dispose();
});
test('folga ajustável muda a canaleta do fundo e preserva a tampa com paredes',()=>{
 const a=buildModel({...defaults,svgWidth:50,joinClearance:.05},art),b=buildModel({...defaults,svgWidth:50,joinClearance:.2},art);
 assert.ok(b.lowerPart.volume()<a.lowerPart.volume());assert.ok(Math.abs(b.upper.volume()-a.upper.volume())<.001);a.dispose();b.dispose();
});

test('um único recorte produz fundo plano do tamanho da cavidade, sem margem retangular extra',()=>{
 const p={...defaults,svgWidth:20},m=buildModel(p,[{outer:[[-10,-10],[10,-10],[10,10],[-10,10]],holes:[]}]);
 const b=m.lowerPart.boundingBox(),expected=20+2*p.cutClearance+2*p.cavityWall;
 assert.ok(Math.abs(b.max[0]-b.min[0]-expected)<.002);assert.ok(Math.abs(b.max[1]-b.min[1]-expected)<.002);
 assert.ok(Math.abs(b.max[2]-b.min[2]-p.cavityFloor)<1e-5);m.dispose();
});

test('a parte superior fica aberta na ponta das paredes; não conserva película de fundo',()=>{
 const p={...defaults,svgWidth:50},m=buildModel(p,art);
 const probe=Manifold.cube([1,1,p.cavityDepth+p.lid+2],true).translate([-15,0,(p.lid-p.cavityDepth)/2]);
 assert.ok(volumeIntersection(m.upper,probe)<1e-8,'coluna central deve atravessar a tampa e as paredes sem tocar fundo');
 probe.delete();m.dispose();
});

test('rebaixo do fundo é aberto para fora, sem uma moldura externa elevada',()=>{
 const p={...defaults,svgWidth:20,cutClearance:.05},m=buildModel(p,[{outer:[[-10,-10],[10,-10],[10,10],[-10,10]],holes:[]}]);
 const probe=Manifold.cube([.05,.05,.1],true).translate([10+p.cavityWall-.1,0,-p.cavityDepth+p.cavityFloor-.2]);
 assert.ok(volumeIntersection(m.lowerPart,probe)<1e-8,'borda externa deve estar rebaixada');
 assert.ok(volumeIntersection(m.upper,probe)>.00024,'ponta da parede deve ocupar o rebaixo externo');probe.delete();m.dispose();
});
