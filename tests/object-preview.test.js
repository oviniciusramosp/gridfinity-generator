import test from 'node:test';
import assert from 'node:assert/strict';
import {initKernel,buildModel,defaults} from '../src/geometry.js';
await initKernel();
const art=[{outer:[[0,0],[20,0],[20,10],[0,10]],holes:[]}];
test('projeção usa contorno nominal calibrado, sem folga, na profundidade útil',()=>{
 const p={...defaults,svgWidth:30,svgHeight:14,offsetX:3,offsetY:-2,cutClearance:.4},m=buildModel(p,art),v=m.objectPreview;
 const axis=k=>Array.from(v).filter((_,i)=>i%3===k),bounds=k=>[Math.min(...axis(k)),Math.max(...axis(k))];
 assert.deepEqual(bounds(0),[-12,18]);assert.deepEqual(bounds(1),[-9,5]);
 const z=bounds(2);assert.ok(Math.abs(z[0]-m.floorZ)<1e-5);assert.ok(Math.abs(z[1]-p.lid)<1e-5);
 const aperture=m.openings[0];assert.ok(Math.abs(aperture.max[0]-aperture.min[0]-30.8)<.001);
 const n=buildModel({...p,cutClearance:.6},art);assert.deepEqual(n.objectPreview,v);n.dispose();m.dispose();
});
test('sem contorno não há projeção de objeto',()=>{const m=buildModel(defaults);assert.equal(m.objectPreview.length,0);m.dispose();});
