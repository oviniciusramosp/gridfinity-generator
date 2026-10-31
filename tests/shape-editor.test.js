import test from 'node:test';
import assert from 'node:assert/strict';
import {defaultShape,createParametricShape,applyShapePreset,resolvedCorners} from '../src/shape-editor.js';
import {defaults,buildModel,initKernel,triangles} from '../src/geometry.js';
import {assertWatertight,printOrientation} from '../src/mesh.js';
await initKernel();
const fresh=()=>structuredClone(defaultShape);
const bounds=points=>[Math.min(...points.map(p=>p[0])),Math.max(...points.map(p=>p[0])),Math.min(...points.map(p=>p[1])),Math.max(...points.map(p=>p[1]))];
test('retângulo paramétrico preserva 57,4 × 36,2 e os raios R8',()=>{
 const shape=createParametricShape(fresh());assert.deepEqual(bounds(shape.points),[0,57.4,0,36.2]);for(const r of Object.values(shape.corners))assert.deepEqual(r,{rx:8,ry:8});assert.match(shape.svg,/width="57.4mm"/);assert.match(shape.svg,/height="36.2mm"/);
});
test('raio zero produz quatro cantos vivos',()=>{const shape=createParametricShape(applyShapePreset(fresh(),'rectangle'));assert.equal(shape.points.length,4);assert.deepEqual(bounds(shape.points),[0,57.4,0,36.2]);});
test('elipse e círculo usam raios X/Y corretos em todos os pontos',()=>{
 for(const preset of ['ellipse','circle']){const def=applyShapePreset(fresh(),preset),shape=createParametricShape(def),rx=def.width/2,ry=def.height/2;for(const [x,y] of shape.points)assert.ok(Math.abs(((x-rx)/rx)**2+((y-ry)/ry)**2-1)<1e-7);if(preset==='circle')assert.equal(def.width,def.height);}
});
test('simetria por lado permite extremidades diferentes sem alterar a largura',()=>{
 const def=fresh();def.symmetry='sides';def.corners.tl={rx:4,ry:4};def.corners.tr={rx:16,ry:16};const shape=createParametricShape(def);assert.equal(shape.corners.tl.rx,4);assert.equal(shape.corners.bl.rx,4);assert.equal(shape.corners.tr.rx,16);assert.equal(shape.corners.br.rx,16);assert.deepEqual(bounds(shape.points),[0,57.4,0,36.2]);
});
test('quatro cantos aceitam raios elípticos independentes e pares superior/inferior',()=>{
 const def=fresh();def.symmetry='free';def.linkedAxes=false;def.corners={tl:{rx:3,ry:2},tr:{rx:12,ry:7},br:{rx:8,ry:5},bl:{rx:15,ry:9}};assert.deepEqual(createParametricShape(def).corners,def.corners);def.symmetry='ends';const resolved=resolvedCorners(def);assert.deepEqual(resolved.tl,resolved.tr);assert.deepEqual(resolved.bl,resolved.br);
});
test('raios incompatíveis são rejeitados sem normalização silenciosa',()=>{
 const def=fresh();def.corners.tl={rx:30,ry:30};assert.throws(()=>createParametricShape(def),/raios X/);assert.equal(def.corners.tl.rx,30);
 const flat=fresh();flat.linkedAxes=false;flat.corners.tl={rx:8,ry:20};assert.throws(()=>createParametricShape(flat),/raios Y/);
 flat.corners.tl={rx:0,ry:8};assert.throws(()=>createParametricShape(flat),/zere os dois/);flat.width=NaN;assert.throws(()=>createParametricShape(flat),/largura/);
});
test('formas simétricas, elípticas e assimétricas geram STLs fechados',()=>{
 const asym=fresh();asym.symmetry='sides';asym.corners.tl={rx:4,ry:4};asym.corners.tr={rx:16,ry:16};
 for(const def of [fresh(),applyShapePreset(fresh(),'ellipse'),asym]){const shape=createParametricShape(def),m=buildModel({...defaults,svgWidth:def.width},shape.art);assert.equal(m.usesBoxFloor,true);assertWatertight(triangles(m.box));assertWatertight(printOrientation(triangles(m.upper),defaults.lid));m.dispose();}
});

test('limites dos sliders respeitam dimensões, simetria e cantos vizinhos',async()=>{
 const {radiusLimit}=await import('../src/shape-editor.js');
 const d=structuredClone(defaultShape);assert.equal(radiusLimit(d,'tl','rx'),18.1);
 d.linkedAxes=false;assert.equal(radiusLimit(d,'tl','rx'),28.7);assert.equal(radiusLimit(d,'tl','ry'),18.1);
 d.symmetry='sides';d.linkedAxes=true;assert.equal(radiusLimit(d,'tr','rx'),18.1);
 d.symmetry='free';d.corners.bl={rx:4,ry:4};assert.equal(radiusLimit(d,'tl','rx'),32.2);
 d.linkedAxes=false;assert.equal(radiusLimit(d,'tl','rx'),49.4);assert.equal(radiusLimit(d,'tl','ry'),32.2);
 d.width=10;d.corners.tr.rx=12;assert.equal(radiusLimit(d,'tl','rx'),0);
});
