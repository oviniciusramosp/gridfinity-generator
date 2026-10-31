import {buildModel,triangles,initKernel} from './geometry.js';
import {smallestBox} from './auto-fit.js';
import {assertWatertight,printOrientation,lowerPrintOrientation} from './mesh.js';
import wasmUrl from 'manifold-3d/manifold.wasm?url';
const ready=initKernel(()=>wasmUrl);
self.onmessage=async({data:{id,params,art,autoFit}})=>{let m;try{
 await ready;if(autoFit){const result=smallestBox(params,art);m=result.model;params=result.params;}else m=buildModel(params,art);
 const box=triangles(m.box),upper=triangles(m.upper),lower=m.lowerPart?triangles(m.lowerPart):new Float32Array(0);
 for(const v of [box,upper,printOrientation(upper,params.lid)])assertWatertight(v);
 if(lower.length){assertWatertight(lower);assertWatertight(lowerPrintOrientation(lower,params.cavityDepth));}
 self.postMessage({id,fittedParams:autoFit?params:null,box,upper,lower,objectPreview:m.objectPreview,seat:m.seat,w:m.w,d:m.d,cutCount:m.cutCount,openings:m.openings,jointPoint:m.jointPoint,jointCenter:m.jointCenter,depth:m.usesBoxFloor?-m.floorZ:params.cavityDepth,upperMinZ:m.upper.boundingBox().min[2],height:m.totalHeight,bodyHeight:m.bodyHeight,stackingLipHeight:m.stackingLipHeight,lidPocketGap:m.lidPocketGap,cavityFloor:params.cavityFloor,lidThickness:params.lid,usesBoxFloor:m.usesBoxFloor,recess:m.recess,usefulDepth:m.usefulDepth,floorTop:m.floorTop,volume:m.boxVolume+m.upper.volume()+(m.lowerPart?.volume()||0)},[box.buffer,upper.buffer,lower.buffer,m.objectPreview.buffer]);
 }catch(e){self.postMessage({id,error:e.message});}finally{m?.dispose();}};
