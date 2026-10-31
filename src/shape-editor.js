export const defaultShape={width:57.4,height:36.2,symmetry:'all',linkedAxes:true,corners:{tl:{rx:8,ry:8},tr:{rx:8,ry:8},br:{rx:8,ry:8},bl:{rx:8,ry:8}}};
export const cornerGroups={all:[['tl','Todos os cantos',['tl','tr','br','bl']]],sides:[['tl','Lado esquerdo · A e D',['tl','bl']],['tr','Lado direito · B e C',['tr','br']]],ends:[['tl','Parte superior · A e B',['tl','tr']],['bl','Parte inferior · D e C',['bl','br']]],free:[['tl','A · superior esquerdo',['tl']],['tr','B · superior direito',['tr']],['bl','D · inferior esquerdo',['bl']],['br','C · inferior direito',['br']]]};
export function resolvedCorners(def){
 if(!cornerGroups[def.symmetry])throw Error('Escolha uma simetria válida.');
 const result={};for(const [key,,members] of cornerGroups[def.symmetry]){const r=def.corners?.[key];if(!r)throw Error('Defina os raios de todos os cantos.');for(const member of members)result[member]={rx:r.rx,ry:def.linkedAxes?r.rx:r.ry};}return result;
}
export function createParametricShape(def){
 const {width:w,height:h}=def;
 if(!Number.isFinite(w)||!Number.isFinite(h)||w<1||h<1||w>336||h>336)throw Error('Use largura e comprimento de 1 a 336 mm.');
 if(typeof def.linkedAxes!=='boolean')throw Error('Defina se os raios X e Y são iguais.');
 const corners=resolvedCorners(def);
 for(const [name,r] of Object.entries(corners)){
 if(!Number.isFinite(r.rx)||!Number.isFinite(r.ry)||r.rx<0||r.ry<0||r.rx>336||r.ry>336)throw Error(`Raio inválido no canto ${name.toUpperCase()}. Use valores de 0 a 336 mm.`);
 if((r.rx===0)!==(r.ry===0))throw Error('Para um canto vivo, zere os dois raios X e Y desse canto.');
 }
 const {tl,tr,br,bl}=corners,eps=1e-7;
 if(tl.rx+tr.rx>w+eps||bl.rx+br.rx>w+eps)throw Error('Os raios X dos cantos vizinhos ultrapassam a largura. Reduza os raios ou aumente a largura.');
 if(tl.ry+bl.ry>h+eps||tr.ry+br.ry>h+eps)throw Error('Os raios Y dos cantos vizinhos ultrapassam o comprimento. Reduza os raios ou aumente o comprimento.');
 const points=[];
 const push=(x,y)=>{const p=[Number(x.toFixed(8)),Number(y.toFixed(8))],last=points.at(-1);if(!last||Math.hypot(p[0]-last[0],p[1]-last[1])>1e-7)points.push(p);};
 for(const [name,cx,cy,start,sharp] of [['tr',w-tr.rx,tr.ry,-Math.PI/2,[w,0]],['br',w-br.rx,h-br.ry,0,[w,h]],['bl',bl.rx,h-bl.ry,Math.PI/2,[0,h]],['tl',tl.rx,tl.ry,Math.PI,[0,0]]]){
 const r=corners[name];if(r.rx===0){push(...sharp);continue;}
 const radius=Math.max(r.rx,r.ry),segments=Math.max(8,Math.min(128,Math.ceil(Math.PI/(4*Math.acos(Math.max(-1,1-.01/radius))))));
 for(let i=0;i<=segments;i++){const a=start+i*Math.PI/(2*segments);push(cx+r.rx*Math.cos(a),cy+r.ry*Math.sin(a));}
 }
 if(Math.hypot(points[0][0]-points.at(-1)[0],points[0][1]-points.at(-1)[1])<1e-7)points.pop();
 const coords=points.map(p=>p.join(',')).join(' ');
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}mm" height="${h}mm" viewBox="0 0 ${w} ${h}"><title>Contorno paramétrico ${w} x ${h} mm</title><polygon fill="#000" points="${coords}"/></svg>`;
 return {svg,art:[{outer:points,holes:[]}],points,corners,width:w,height:h};
}
export function applyShapePreset(def,preset){
 const next=structuredClone(def);next.symmetry='all';next.linkedAxes=true;
 let rx=0,ry=0;
 if(preset==='rounded')rx=ry=Math.min(8,next.width/2,next.height/2);
 else if(preset==='capsule')rx=ry=Math.min(next.width,next.height)/2;
 else if(preset==='ellipse'){rx=next.width/2;ry=next.height/2;next.linkedAxes=false;}
 else if(preset==='circle'){next.height=next.width;rx=ry=next.width/2;}
 else if(preset!=='rectangle')throw Error('Preset de forma inválido.');
 for(const key of ['tl','tr','br','bl'])next.corners[key]={rx,ry};return next;
}

// Largest radius allowed for a symmetry group while keeping all neighboring corners fixed.
export function radiusLimit(def,key,axis){
 const corners=resolvedCorners(def),members=new Set(cornerGroups[def.symmetry].find(g=>g[0]===key)[2]);
 const constraints=[['rx',def.width,'tl','tr'],['rx',def.width,'bl','br'],['ry',def.height,'tl','bl'],['ry',def.height,'tr','br']];
 let max=336;
 for(const [a,size,left,right] of constraints){
 if(!def.linkedAxes&&a!==axis)continue;
 const count=Number(members.has(left))+Number(members.has(right));if(!count)continue;
 const fixed=[left,right].filter(k=>!members.has(k)).reduce((sum,k)=>sum+(Number.isFinite(corners[k][a])?corners[k][a]:0),0);
 max=Math.min(max,(size-fixed)/count);
 }
 return Math.max(0,Math.floor((Number.isFinite(max)?max:0)*100+1e-7)/100);
}
