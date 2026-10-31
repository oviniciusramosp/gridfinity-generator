import test from 'node:test';
import assert from 'node:assert/strict';
import {smallestBox} from '../src/auto-fit.js';
import {initKernel,buildModel,defaults,validate,triangles} from '../src/geometry.js';
import {createParametricShape,defaultShape} from '../src/shape-editor.js';
import {assertWatertight} from '../src/mesh.js';
await initKernel();
const art=createParametricShape(defaultShape).art,params={...defaults,gridX:.5,gridY:.5,height:49,cavityDepth:41.2,wall:1.2,svgWidth:57.4};
test('busca a menor área válida em passos de meio grid, preservando objeto e folga',()=>{
 const {model,params:p}=smallestBox(params,art);assert.equal(p.half,true);assert.equal(p.gridX,2);assert.equal(p.gridY,1.5);assert.equal(p.svgWidth,57.4);assert.equal(p.cutClearance,.2);
 for(let x=.5;x<=3;x+=.5)for(let y=.5;y<=3;y+=.5){if(x*y>=p.gridX*p.gridY)continue;assert.throws(()=>buildModel({...params,gridX:x,gridY:y},art),/parede|borda/);}
 assertWatertight(triangles(model.box));assertWatertight(triangles(model.upper));model.dispose();
});
test('ajuste X e Y independente chega à geometria real e ao ajuste automático',()=>{
 const p={...params,svgWidth:50,svgHeight:70,offsetX:3,offsetY:-2},r=smallestBox(p,art),o=r.model.openings[0];assert.ok(Math.abs(o.max[0]-o.min[0]-50.4)<.002);assert.ok(Math.abs(o.max[1]-o.min[1]-70.4)<.002);assert.equal(r.params.offsetX,3);assert.equal(r.params.offsetY,-2);r.model.dispose();
});
test('não disfarça altura inválida como erro de largura e recusa folga zero',()=>{
 assert.throws(()=>smallestBox({...params,height:14,bottomMode:'separate'},art),/fundo/);assert.throws(()=>validate({...defaults,cutClearance:0}),/folga.*positiva/);assert.throws(()=>smallestBox({...params,svgWidth:336},art),/não cabe/);
});
