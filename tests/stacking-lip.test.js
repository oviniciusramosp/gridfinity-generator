import test from 'node:test';
import assert from 'node:assert/strict';
import {initKernel,buildModel,triangles,defaults,bottomPlan} from '../src/geometry.js';
import {assertWatertight,printOrientation} from '../src/mesh.js';
import {stackingProfile} from '../src/stacking-profile.js';
import {defaultShape,createParametricShape} from '../src/shape-editor.js';
const {Manifold}=await initKernel();
const p={...defaults,gridX:2,gridY:1.5,wall:1.2,svgWidth:57.4,height:49,cavityDepth:41.2};
const art=createParametricShape(defaultShape).art;
function overlap(a,b){const hit=Manifold.intersection(a,b),v=hit.volume();hit.delete();return v;}
test('encaixe tem espessura da tampa mais folga, com profundidade e piso preservados',()=>{
 const m=buildModel(p,art);assert.ok(Math.abs(m.bodyHeight-48.55)<1e-8);assert.ok(Math.abs(m.totalHeight-52.35)<1e-8);assert.equal(m.usefulDepth,42);assert.equal(m.floorTop,6.35);assert.ok(Math.abs(m.bodyHeight-m.seat-p.lid-.2)<1e-8);assert.ok(Math.abs(m.seat+p.lid-m.floorTop-42)<1e-8);assert.ok(Math.abs(m.box.boundingBox().max[2]-m.totalHeight)<.002);
 const mounted=m.upper.translate([0,0,m.seat]);assert.ok(overlap(m.box,mounted)<1e-5);assert.ok(m.box.minGap(mounted,.05)<1e-5);
 for(const solid of [m.box,m.upper])assertWatertight(triangles(solid));assertWatertight(printOrientation(triangles(m.upper),p.lid));mounted.delete();m.dispose();
});
test('tampa acompanha parede da caixa e ignora garganta para montagem por flexão',()=>{
 const q={...p,clearance:.15},m=buildModel(q,art),bounds=m.upper.boundingBox();
 for(const [axis,size] of [[0,m.w],[1,m.d]])assert.ok(Math.abs((size-2*q.wall-(bounds.max[axis]-bounds.min[axis]))/2-q.clearance)<.002);
 const mounted=m.upper.translate([0,0,m.seat]);assert.ok(overlap(m.box,mounted)<1e-5);mounted.delete();
 // Rigid insertion intersects the throat intentionally; it no longer shrinks the lid.
 const lifted=m.upper.translate([0,0,m.seat+2]);assert.ok(overlap(m.box,lifted)>.01);lifted.delete();m.dispose();
});
test('perfil da borda segue chanfro, trecho reto e chanfro superior',()=>{
 const m=buildModel(p),half=m.w/2;
 for(const [z,inset] of [[.35,1.55],[1.5,1.9],[3.15,1.25],[3.79,.61]]){
 const hit=m.box.rayCast([0,0,m.bodyHeight+z],[m.w,0,m.bodyHeight+z])[0];assert.ok(Math.abs(hit.position[0]-(half-inset))<.002);
 }assert.equal(stackingProfile.height,3.8);m.dispose();
});
test('outra caixa com pés de meio grid empilha sem invadir a tampa ou a borda',()=>{
 const m=buildModel(p,art),next=buildModel(p),stack=next.box.translate([0,0,m.bodyHeight]),lid=m.upper.translate([0,0,m.seat]);
 assert.ok(overlap(m.box,stack)<1e-5);assert.ok(overlap(lid,stack)<1e-5);assert.ok(stack.boundingBox().min[2]-lid.boundingBox().max[2]>=p.lidVerticalClearance-.002);
 stack.delete();lid.delete();next.dispose();m.dispose();
});
test('altura livre é aceita no modo fundo separado e a folga acompanha a espessura',()=>{
 const q={...p,bottomMode:'separate',height:53.35,lid:3,cavityDepth:40.2,lidVerticalClearance:.3},m=buildModel(q,art);
 assert.ok(Math.abs(m.bodyHeight-53.35)<1e-8);assert.ok(Math.abs(m.lidPocketGap-3.3)<1e-8);assert.ok(Math.abs(m.bodyHeight-m.seat-3.3)<1e-8);assert.equal(m.usefulDepth,42);assert.ok(m.lowerPart);m.dispose();
 const a=bottomPlan(p),b=bottomPlan({...p,lid:3,cavityDepth:40.2});assert.ok(Math.abs(a.bodyHeight-b.bodyHeight)<1e-8);
});
test('alojamento mantém parede reta sem colar e apoio nasce dessa parede',()=>{
 const m=buildModel(p);
 for(const z of [m.seat+.01,m.seat+p.lid/2,m.bodyHeight-.01,m.seat-m.ledgeChamferHeight-.1]){
 const hit=m.box.rayCast([0,0,z],[m.w,0,z])[0];assert.ok(Math.abs(hit.position[0]-(m.w/2-p.wall))<.002,`parede engrossada em z=${z}`);
 }
 const probe=m.box.rayCast([m.w/2-p.wall-p.ledge+.1,0,m.seat+.1],[m.w/2-p.wall-p.ledge+.1,0,m.seat-.1])[0];assert.ok(Math.abs(probe.position[2]-m.seat)<.002);m.dispose();
});
test('parede fina alonga entrada do encaixe para preservar chanfro imprimível',()=>{
 const q={...p,wall:.8},m=buildModel(q),z=.5,hit=m.box.rayCast([0,0,m.bodyHeight+z],[m.w,0,m.bodyHeight+z])[0];
 assert.ok(Math.abs(m.stackingLipHeight-4.2)<1e-8);assert.ok(Math.abs(hit.position[0]-(m.w/2-q.wall-z))<.002);assertWatertight(triangles(m.box));m.dispose();
});
