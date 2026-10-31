import test from 'node:test';
import assert from 'node:assert/strict';

import {defaults as baseDefaults,buildModel,triangles,stlBuffer,validate,printOrientation,initKernel} from '../src/geometry.js';
const defaults={...baseDefaults,bottomMode:'separate'};
const {Manifold}=await initKernel();
const measureVolume=m=>m.volume();
const measureBoundingBox=m=>{const b=m.boundingBox();return [b.min,b.max]};
test('base padrão tem envelope 42N−0,5 e altura total solicitada',()=>{
 const m=buildModel({...defaults,half:false,gridX:1,gridY:1});
 assert.ok(Math.abs(m.w-41.5)<1e-5);assert.ok(Math.abs(m.bounds[0][2])<1e-5);assert.ok(Math.abs(m.bounds[1][2]-38.8)<1e-5);
});
test('meio grid permite 1,5 × 0,5 com pés integrados ao corpo',()=>{
 const m=buildModel({...defaults,gridX:1.5,gridY:.5,svgWidth:10});
 assert.ok(Math.abs(m.w-62.5)<1e-5);assert.ok(Math.abs(m.d-20.5)<1e-5);
 assert.ok(m.boxVolume>0);assert.throws(()=>buildModel({...defaults,half:false,gridX:1.5}),/passos/);
});
test('rebaixo define plano de apoio e folga reduz a tampa por ambos os lados',()=>{
 const p={...defaults,lidVerticalClearance:.3,lid:2.4};const m=buildModel(p),bounds=measureBoundingBox(m.lid);
 assert.ok(Math.abs(m.seat-32.3)<1e-8);assert.ok(Math.abs(bounds[1][0]-bounds[0][0]-(m.w-2*(p.wall+p.clearance)))<1e-5);
});
test('caixa permanece oca abaixo do ressalto, economizando material',()=>{
 const a=buildModel({...defaults,ledge:1}),b=buildModel({...defaults,ledge:2});
 assert.ok(b.boxVolume>a.boxVolume);assert.ok(b.boxVolume-a.boxVolume<4000,'ressalto deve ocupar somente a faixa abaixo da tampa');
});
test('validação bloqueia tampas sem apoio e dimensões impossíveis',()=>{
 assert.throws(()=>validate({...defaults,lidVerticalClearance:.2,height:7}),/fundo|limites/);
 assert.throws(()=>validate({...defaults,clearance:.9,ledge:.8}),/folga/);
 assert.throws(()=>validate({...defaults,wall:NaN}),/números/);
});
test('STL binário contém triângulos finitos e volume consistente',()=>{
 const m=buildModel({...defaults,gridX:1,gridY:1,half:false}),v=triangles(m.box),b=stlBuffer(v);
 assert.equal(b.byteLength,84+v.length/9*50);assert.equal(new DataView(b).getUint32(80,true),v.length/9);
 assert.ok(v.every(Number.isFinite));
 let volume=0;for(let i=0;i<v.length;i+=9)volume+=(v[i]*(v[i+4]*v[i+8]-v[i+5]*v[i+7])+v[i+1]*(v[i+5]*v[i+6]-v[i+3]*v[i+8])+v[i+2]*(v[i+3]*v[i+7]-v[i+4]*v[i+6]))/6;
 assert.ok(Math.abs(volume-measureVolume(m.box))/measureVolume(m.box)<1e-4);
});

test('sentido do contorno SVG não muda o resultado',()=>{
 const outer=[[0,0],[20,0],[20,20],[0,20]],p={...defaults,svgWidth:20};
 const a=buildModel(p,[{outer,holes:[]}]),b=buildModel(p,[{outer:[...outer].reverse(),holes:[]}]);
 assert.ok(Math.abs(a.lidVolume-b.lidVolume)<.01);
 assert.ok(a.lidVolume>0);
});

test('cavidades possuem fundo fechado e vazio útil até a abertura',()=>{
 const p={...defaults,svgWidth:20},m=buildModel(p,[{outer:[[-10,-10],[10,-10],[10,10],[-10,10]],holes:[]}]);
 const probe=(z)=>Manifold.cube([2,2,.4],true).translate([0,0,z]);
 const filled=measureVolume(Manifold.intersection(m.lid,probe(-p.cavityDepth+.4)));
 const empty=measureVolume(Manifold.intersection(m.lid,probe(-5)));
 assert.ok(filled>1.5);assert.ok(Math.abs(empty)<1e-6);
 const mounted=m.lid.translate([0,0,m.seat]);
 assert.ok(Math.abs(measureVolume(Manifold.intersection(mounted,m.box)))<1e-5,'inserto não pode colidir com caixa nem ressalto');
 const print=printOrientation(triangles(m.lid),p.lid),zs=[];for(let i=2;i<print.length;i+=3)zs.push(print[i]);
 assert.ok(Math.abs(Math.min(...zs))<.01);assert.ok(Math.abs(Math.max(...zs)-(p.cavityDepth+p.lid))<.01);
});
test('bloqueia cavidades que invadem a borda ou encostam no fundo',()=>{
 const art=[{outer:[[0,0],[20,0],[20,20],[0,20]],holes:[]}];
 assert.throws(()=>buildModel({...defaults,svgWidth:123},art),/parede|apoio/);
 assert.throws(()=>buildModel({...defaults,cavityDepth:30},art),/fundo/);
});

function assertClosed(v){
 const edges=new Map();for(let i=0;i<v.length;i+=9){const points=[0,3,6].map(k=>Array.from(v.slice(i+k,i+k+3)).map(x=>Object.is(x,-0)?0:x).join(','));
 for(let j=0;j<3;j++){const a=points[j],b=points[(j+1)%3];assert.notEqual(a,b,'triângulo degenerado');const key=[a,b].sort().join('|');edges.set(key,(edges.get(key)||0)+1);}}
 for(const count of edges.values())assert.equal(count,2,'cada aresta do STL deve pertencer exatamente a duas faces');
}
test('STLs têm uma superfície fechada, sem microaberturas ou faces duplicadas',()=>{
 const art=[{outer:[[-12,-8],[12,-8],[12,8],[-12,8]],holes:[]}];
 for(const half of [true,false]){const m=buildModel({...defaults,half,svgWidth:24},art);assertClosed(triangles(m.box));assertClosed(printOrientation(triangles(m.upper),defaults.lid));assertClosed(triangles(m.lowerPart));m.dispose();}
});

test('chanfro abre somente a entrada e o raio preenche o canto interno do fundo',()=>{
 const p={...defaults,svgWidth:20,cutClearance:.05,entryChamfer:.4,floorRadius:.8};
 const art=[{outer:[[-10,-10],[10,-10],[10,10],[-10,10]],holes:[]}];
 const finished=buildModel(p,art),sharp=buildModel({...p,entryChamfer:0,floorRadius:0},art);
 const occupied=(model,x,z)=>{const probe=Manifold.cube([.02,.02,.02],true).translate([x,0,z]),hit=Manifold.intersection(model.lid,probe),v=hit.volume();probe.delete();hit.delete();return v;};
 assert.ok(occupied(sharp,10.2,p.lid-.1)>7e-6);
 assert.ok(occupied(finished,10.2,p.lid-.1)<1e-8,'chanfro deve alargar a abertura');
 assert.ok(occupied(finished,10.1,0)>7e-6,'trecho reto deve manter a medida de encaixe');
 const bottom=-p.cavityDepth+p.cavityFloor;
 assert.ok(occupied(finished,9.5,bottom+.03)>7e-6,'raio deve eliminar o canto entre parede e fundo');
 assert.ok(occupied(sharp,9.5,bottom+.03)<1e-8);
 assert.ok(occupied(finished,0,bottom+.03)<1e-8,'centro deve preservar a profundidade útil');
 assertClosed(printOrientation(triangles(finished.upper),p.lid));assertClosed(triangles(finished.lowerPart));
 finished.dispose();sharp.dispose();
});
test('acabamentos rejeitam espessura insuficiente e raio que apaga contorno estreito',()=>{
 assert.throws(()=>validate({...defaults,entryChamfer:1.1}),/chanfro/);
 assert.throws(()=>validate({...defaults,floorRadius:-1}),/raio/);
 const art=[{outer:[[0,0],[1,0],[1,10],[0,10]],holes:[]}];
 assert.throws(()=>buildModel({...defaults,svgWidth:1,cutClearance:.05,floorRadius:.8},art),/raio/);
});
test('acabamentos preservam fechamento em curvas, concavidades e múltiplas cavidades',()=>{
 const circle=Array.from({length:48},(_,i)=>[8*Math.cos(i*Math.PI/24)-15,8*Math.sin(i*Math.PI/24)]);
 const lShape=[[0,-8],[14,-8],[14,8],[7,8],[7,0],[0,0]];
 const m=buildModel({...defaults,svgWidth:55},[{outer:circle,holes:[]},{outer:lShape,holes:[]}]);
 assertClosed(triangles(m.upper));assertClosed(printOrientation(triangles(m.upper),defaults.lid));assertClosed(triangles(m.lowerPart));m.dispose();
});
