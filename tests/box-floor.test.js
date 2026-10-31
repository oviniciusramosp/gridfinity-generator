import test from 'node:test';
import assert from 'node:assert/strict';
import {defaults,buildModel,initKernel,triangles} from '../src/geometry.js';
import {assertWatertight,printOrientation} from '../src/mesh.js';
const {Manifold,CrossSection}=await initKernel();
const oval=[];for(let c=0;c<4;c++)for(let i=0;i<=16;i++){const a=c*Math.PI/2+i*Math.PI/32;oval.push([(c===0||c===3?49.4:8)+8*Math.cos(a),(c<2?28.2:8)+8*Math.sin(a)]);}
const art=[{outer:oval,holes:[]}],params={...defaults,gridX:2,gridY:1.5,wall:1.2,height:49,svgWidth:57.4,cutClearance:.05,cavityDepth:41.2};
function overlap(a,b){const v=Manifold.intersection(a,b),result=v.volume();v.delete();return result;}
function assertEmptyLowerBox(m,p){
 const z0=m.floorTop+.05,z1=m.seat-m.ledgeChamferHeight-.05,r=Math.max(.1,3.75-p.wall);
 const square=CrossSection.square([m.w-2*p.wall-.1-2*r,m.d-2*p.wall-.1-2*r],true),outline=square.offset(r,'Round',2,32),extrusion=outline.extrude(z1-z0),probe=extrusion.translate([0,0,z0]);
 assert.ok(overlap(m.box,probe)<1e-5,'caixa deve ser vazia abaixo da borda lateral, sem pilares nem encaixes de fundo');
 for(const solid of [probe,extrusion,outline,square])solid.delete();
}
test('oval 57,4 × 36,2 com 42 mm úteis cabe em 2 × 1,5 e usa o piso da caixa',()=>{
 const m=buildModel(params,art);assert.equal(m.usesBoxFloor,true);assert.equal(m.lowerPart,undefined);assert.equal(m.w,83.5);assert.equal(m.d,62.5);assert.ok(Math.abs(m.usefulDepth-42)<1e-8);assert.ok(Math.abs(m.recess-.2)<1e-8);
 const mounted=m.upper.translate([0,0,m.seat]);assert.ok(overlap(m.box,mounted)<1e-4);assert.ok(m.box.minGap(mounted,.1)<1e-5);assert.ok(Math.abs(mounted.boundingBox().min[2]-m.floorTop)<.002);
 const floorHits=m.box.rayCast([0,0,50],[0,0,0]);assert.ok(Math.abs(floorHits[0].position[2]-m.floorTop)<.002);assert.ok(Math.abs((m.seat+params.lid)-floorHits[0].position[2]-42)<.002);
 for(const solid of [m.box,m.upper]){const pieces=solid.decompose();assert.equal(pieces.length,1);pieces.forEach(p=>p.delete());assertWatertight(triangles(solid));}assertWatertight(printOrientation(triangles(m.upper),params.lid));assertEmptyLowerBox(m,params);mounted.delete();m.dispose();
});
test('rebaixo automático preserva a profundidade solicitada sem engrossar o piso',()=>{
 const p={...params,height:56},m=buildModel(p,art);assert.ok(Math.abs(m.recess-.2)<1e-8);assert.ok(Math.abs(m.floorTop-(4.75+p.floor))<1e-8);assert.ok(Math.abs(m.seat+p.lid-m.floorTop-42)<1e-8);assertEmptyLowerBox(m,p);m.dispose();
});
test('mesmo com fundo separado a caixa nunca recebe apoios ou encaixes sob ele',()=>{
 const p={...params,bottomMode:'separate',height:56},m=buildModel(p,art);assert.equal(m.usesBoxFloor,false);assert.ok(m.lowerPart);assertEmptyLowerBox(m,p);const floor=m.lowerPart.translate([0,0,m.seat]);assert.ok(floor.boundingBox().min[2]>m.floorTop+.5,'fundo separado não deve receber suporte do piso');assert.ok(overlap(m.box,floor)<1e-8);floor.delete();m.dispose();
});
test('altura automática preserva profundidade e encaixe ao reutilizar o piso',()=>{const m=buildModel({...params,height:42},art);assert.equal(m.usefulDepth,42);assert.ok(Math.abs(m.bodyHeight-48.55)<1e-8);assert.ok(Math.abs(m.lidPocketGap-2.2)<1e-8);m.dispose();});

test('garganta não restringe a caixa mínima e preserva seção central e encaixe',()=>{
 const p={...params,gridX:1.5,gridY:1},m=buildModel(p,art);
 assert.equal(m.w,62.5);assert.equal(m.d,41.5);assert.equal(m.usefulDepth,42);
 assert.equal(m.openings.length,1);const o=m.openings[0];
 assert.ok(Math.abs(o.max[0]-o.min[0]-57.5)<.002);
 assert.ok(Math.abs(o.max[1]-o.min[1]-36.3)<.002);
 assert.equal(o.depth,42);assert.ok(Math.abs(p.lid-o.floorZ-42)<1e-8);
 const mounted=m.upper.translate([0,0,m.seat]);assert.ok(overlap(m.box,mounted)<1e-4);
 for(const part of [m.box,m.upper])assertWatertight(triangles(part));
 assertEmptyLowerBox(m,p);mounted.delete();m.dispose();
});
test('cotas acompanham escala, deslocamento, folga e remoção do chanfro',()=>{
 const p={...params,svgWidth:50,offsetX:2,offsetY:-1,cutClearance:.2,entryChamfer:0},m=buildModel(p,art),o=m.openings[0];
 assert.ok(Math.abs(o.max[0]-o.min[0]-50.4)<.002);
 assert.ok(Math.abs(o.max[1]-o.min[1]-(36.2*50/57.4+.4))<.002);
 assert.ok(Math.abs((o.max[0]+o.min[0])/2-2)<.002);
 assert.ok(Math.abs((o.max[1]+o.min[1])/2+1)<.002);m.dispose();
});

test('cotas da seção central permanecem iguais ao variar chanfro e raio de fundo',()=>{
 const baseline=buildModel({...params,entryChamfer:0,floorRadius:0},art);
 for(const finishes of [{entryChamfer:.4,floorRadius:.8},{entryChamfer:.8,floorRadius:2}]){
 const m=buildModel({...params,...finishes},art);assert.deepEqual(m.openings,baseline.openings);m.dispose();
 }
 baseline.dispose();
});
