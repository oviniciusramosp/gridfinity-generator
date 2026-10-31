export function stlBuffer(vertices){
 const buffer=new ArrayBuffer(84+vertices.length/9*50),view=new DataView(buffer);view.setUint32(80,vertices.length/9,true);
 for(let i=0;i<vertices.length/9;i++){
 const j=i*9,o=84+i*50,a=[vertices[j+3]-vertices[j],vertices[j+4]-vertices[j+1],vertices[j+5]-vertices[j+2]],b=[vertices[j+6]-vertices[j],vertices[j+7]-vertices[j+1],vertices[j+8]-vertices[j+2]],n=[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],l=Math.hypot(...n)||1;
 n.forEach((v,k)=>view.setFloat32(o+k*4,v/l,true));for(let k=0;k<9;k++)view.setFloat32(o+12+k*4,vertices[j+k],true);
 }return buffer;
}

// Same approved mesh, rotated 180° around X and placed on the print bed.
export function printOrientation(vertices,lidThickness){
 const out=new Float32Array(vertices.length);for(let i=0;i<vertices.length;i+=3){out[i]=vertices[i];out[i+1]=-vertices[i+1];out[i+2]=lidThickness-vertices[i+2];}return out;
}

export function assertWatertight(vertices){
 const edges=new Map();
 for(let i=0;i<vertices.length;i+=9){
 const points=[0,3,6].map(k=>`${vertices[i+k]},${vertices[i+k+1]},${vertices[i+k+2]}`);
 for(let j=0;j<3;j++){
 const a=points[j],b=points[(j+1)%3];if(a===b)throw Error('A malha contém uma face degenerada. Simplifique o SVG.');
 const forward=a<b,key=forward?a+'|'+b:b+'|'+a,value=edges.get(key)||[0,0];value[0]++;value[1]+=forward?1:-1;edges.set(key,value);
 }
 }
 if(!vertices.length||[...edges.values()].some(([n,balance])=>n!==2||balance!==0))throw Error('A malha não ficou fechada. Simplifique o SVG ou ajuste as medidas antes de exportar.');
}

// Cup floors remain down: translate only, preserving the assembly XY orientation.
export function lowerPrintOrientation(vertices,depth){
 const out=new Float32Array(vertices);for(let i=2;i<out.length;i+=3)out[i]+=depth;return out;
}
