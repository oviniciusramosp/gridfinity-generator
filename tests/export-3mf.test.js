import test from 'node:test';
import assert from 'node:assert/strict';
import {unzipSync,strFromU8} from 'fflate';
import {export3MF} from '../src/export-3mf.js';
import {initKernel,buildModel,triangles,defaults} from '../src/geometry.js';
import {createParametricShape,defaultShape} from '../src/shape-editor.js';
import {assertWatertight} from '../src/mesh.js';
await initKernel();
for(const bottomMode of ['auto','separate'])test(`3MF ${bottomMode}: peças independentes, fechadas, sobre a mesa e sem sobreposição`,()=>{
 const p={...defaults,gridX:2,gridY:1.5,height:56,wall:1.2,svgWidth:57.4,cutClearance:.05,cavityDepth:41.2,bottomMode};
 const m=buildModel(p,createParametricShape(defaultShape).art),model={box:triangles(m.box),upper:triangles(m.upper),lower:m.lowerPart?triangles(m.lowerPart):new Float32Array()},project={version:5,params:p};
 const files=unzipSync(export3MF(model,p,project)),xml=strFromU8(files['3D/3dmodel.model']);
 assert.match(strFromU8(files['_rels/.rels']),/Target="\/3D\/3dmodel.model"/);assert.match(xml,/unit="millimeter"/);
 assert.deepEqual(JSON.parse(strFromU8(files['Metadata/forma-project.json'])),project);
 const objects=[...xml.matchAll(/<object[^>]*>(.*?)<\/object>/g)];assert.equal(objects.length,bottomMode==='auto'?2:3);assert.equal([...xml.matchAll(/<item /g)].length,objects.length);
 let previousMax=-Infinity;
 for(const [,object] of objects){
 const vertices=[...object.matchAll(/<vertex x="([^"]+)" y="([^"]+)" z="([^"]+)"/g)].map(v=>v.slice(1).map(Number));
 const faces=[...object.matchAll(/<triangle v1="(\d+)" v2="(\d+)" v3="(\d+)"/g)].map(v=>v.slice(1).map(Number));
 assertWatertight(new Float32Array(faces.flatMap(f=>f.flatMap(i=>vertices[i]))));
 assert.equal(Math.min(...vertices.map(v=>v[2])),0);assert.ok(vertices.every(v=>v.every(Number.isFinite)));
 const minX=Math.min(...vertices.map(v=>v[0])),maxX=Math.max(...vertices.map(v=>v[0]));assert.ok(minX>=previousMax+9.99);previousMax=maxX;
 }
 m.dispose();
});
for(const bottomMode of ['auto','separate'])test(`projeto Bambu A1 ${bottomMode}: perfil real, componentes e atribuição de mesa consistentes`,()=>{
 const p={...defaults,gridX:2,gridY:1.5,height:56,wall:1.2,svgWidth:57.4,cutClearance:.05,cavityDepth:41.2,bottomMode},m=buildModel(p,createParametricShape(defaultShape).art);
 const model={box:triangles(m.box),upper:triangles(m.upper),lower:m.lowerPart?triangles(m.lowerPart):new Float32Array()},files=unzipSync(export3MF(model,p,{params:p},{profile:'bambu-a1-04'}));
 const config=JSON.parse(strFromU8(files['Metadata/project_settings.config'])),xml=strFromU8(files['3D/3dmodel.model']),settings=strFromU8(files['Metadata/model_settings.config']);
 assert.equal(config.printer_model,'Bambu Lab A1');assert.deepEqual(config.nozzle_diameter,['0.4']);assert.equal(config.layer_height,'0.2');assert.deepEqual(config.filament_type,['PLA']);assert.ok(config.machine_start_gcode.length>100);assert.equal(config.enable_support,'0');assert.equal(config.sparse_infill_pattern,'lightning');
 assert.match(xml,/BambuStudio:3mfVersion/);assert.match(xml,/<metadata name="Generator">Forma Gridfinity Studio/);
 const ids=[...xml.matchAll(/<item objectid="(\d+)"/g)].map(m=>Number(m[1]));assert.deepEqual(ids,bottomMode==='auto'?[2,4]:[2,4,6]);
 for(const id of ids){assert.match(settings,new RegExp(`<object id="${id}">`));assert.match(settings,new RegExp(`<metadata key="object_id" value="${id}"`));assert.match(xml,new RegExp(`<component objectid="${id-1}"`));}
 assert.equal([...settings.matchAll(/<model_instance>/g)].length,ids.length);m.dispose();
});
