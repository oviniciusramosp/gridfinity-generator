import {buildModel,validate} from './geometry.js';
import {lidPocketInset} from './stacking-profile.js';
import {artBounds} from './png-contour.js';
// Ascending footprint area, then perimeter; every candidate is checked by the CAD kernel.
export function smallestBox(params,art){
 validate({...params,half:true,gridX:8,gridY:8});
 if(!art.length)throw Error('Importe ou desenhe um contorno antes de ajustar a caixa.');
 const bounds=artBounds(art),height=params.svgHeight||bounds.h*params.svgWidth/bounds.w;
 const margin=2*(lidPocketInset(params)+params.cavityWall+params.cutClearance+.1)+.5;
 const minX=Math.max(1,Math.ceil((params.svgWidth+2*Math.abs(params.offsetX)+margin)/21-1e-8));
 const minY=Math.max(1,Math.ceil((height+2*Math.abs(params.offsetY)+margin)/21-1e-8));
 const candidates=[];for(let x=minX;x<=16;x++)for(let y=minY;y<=16;y++)candidates.push([x/2,y/2]);
 candidates.sort((a,b)=>a[0]*a[1]-b[0]*b[1]||a[0]+a[1]-b[0]-b[1]||a[0]-b[0]);
 for(const [gridX,gridY] of candidates){const next={...params,half:true,gridX,gridY};try{return {model:buildModel(next,art),params:next};}catch(e){if(!/invade a parede|borda lateral suficiente|borda interna ocupa/.test(e.message))throw e;}}
 throw Error('O contorno não cabe em até 8 × 8 grids com as paredes e a folga atuais. Reduza o contorno ou o deslocamento.');
}
