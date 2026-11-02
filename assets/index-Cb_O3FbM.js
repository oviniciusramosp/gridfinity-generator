(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=(i,e,t=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(e).forEach(r=>{n.setAttribute(r,String(e[r]))}),t.length&&t.forEach(r=>{const s=ec(...r);n.appendChild(s)}),n};var _u=([i,e,t])=>ec(i,e,t);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=i=>Array.from(i.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),vu=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",xu=i=>i.flatMap(vu).map(t=>t.trim()).filter(Boolean).filter((t,n,r)=>r.indexOf(t)===n).join(" "),Mu=i=>i.replace(/(\w)(\w*)(_|-|\s*)/g,(e,t,n)=>t.toUpperCase()+n.toLowerCase()),Ua=(i,{nameAttr:e,icons:t,attrs:n})=>{var _;const r=i.getAttribute(e);if(r==null)return;const s=Mu(r),o=t[s];if(!o)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const a=gu(i),[c,l,u]=o,h={...l,"data-lucide":r,...n,...a},f=xu(["lucide",`lucide-${r}`,a,n]);f&&Object.assign(h,{class:f});const p=_u([c,h,u]);return(_=i.parentNode)==null?void 0:_.replaceChild(p,i)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",Et,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",Et,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",Et,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",Et,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",Et,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",Et,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",Et,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",Et,[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",Et,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",Et,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",Et,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",Et,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",Et,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",Et,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",Et,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",Et,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",Et,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",Et,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=({icons:i={},nameAttr:e="data-lucide",attrs:t={}}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${e}]`);if(Array.from(n).forEach(r=>Ua(r,{nameAttr:e,icons:i,attrs:t})),e==="data-lucide"){const r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(s=>Ua(s,{nameAttr:"icon-name",icons:i,attrs:t})))}},Gu={inset:1.9};function zu(i){const e=Math.max(.7,Gu.inset-i.wall);return[[0,i.wall],[e,1.9],[e+1.8,1.9],[e+3.1,.6]]}function tc(i){return i.wall}const oi={gridX:3,gridY:2,half:!0,height:35,wall:1.6,floor:1.6,lid:2,ledge:1.6,lidVerticalClearance:.2,clearance:.15,cutClearance:.2,svgWidth:85,svgHeight:0,offsetX:0,offsetY:0,cavityDepth:18,cavityWall:1.2,cavityFloor:1.2,entryChamfer:.4,floorRadius:.8,joinDepth:.8,joinClearance:.15,bottomMode:"auto"};function Ts(i){const e=Math.max(.1,3.75-i.wall),t=tc(i)+i.ledge-i.wall;return Math.max(t,Math.SQRT2*t+(Math.SQRT2-1)*(.5-e))}function nc(i){const r=zu(i),s=r.at(-1)[0],o=d=>15+(s-d)*17,a=d=>22+d*17,c=-i.lid-i.lidVerticalClearance,l=c-Ts(i)-1.2,h=[[0,l],[0,s],...r.toReversed().map(([d,T])=>[T,d]),[i.wall,c],[i.wall+i.ledge,c],[i.wall,c-Ts(i)],[i.wall,l]].map(([d,T],g)=>`${g?"L":"M"}${a(d)},${o(T)}`).join("")+"Z",p=[[0,0],[0,s],...r.toReversed().map(([d,T])=>[T,d])].map(([d,T],g)=>`${g?"L":"M"}${a(d)},${o(T)}`).join("")+"Z",_=a(tc(i)+i.clearance),v=o(c),m=o(-i.lidVerticalClearance);return`<svg viewBox="0 0 280 ${Math.ceil(o(l)+10)}" role="img" aria-label="Corte lateral: encaixe superior, tampa e apoio chanfrado na parede reta"><path d="${h}" fill="#dce4d8" stroke="#50684e" stroke-width="1.2"/><path d="${p}" fill="#8bcbb0"/><path d="M${a(i.wall)},${v}H${a(i.wall+i.ledge)}L${a(i.wall)},${o(c-Ts(i))}Z" fill="#d99a72" stroke="#946a4e" stroke-width=".8"/><rect x="${_}" y="${m}" width="${270-_}" height="${i.lid*17}" fill="#c5d88d" stroke="#7c9458" stroke-width=".8"/><text x="80" y="${o(s/2)}" fill="#46775f" font-size="11">Encaixe superior Gridfinity</text><text x="${_+20}" y="${(m+v)/2+3.5}" fill="#526b48" font-size="10">Tampa</text><text x="92" y="${v+24}" fill="#946a4e" font-size="11">Apoio com chanfro</text><text x="92" y="${v+40}" fill="#74816e" font-size="9">Folga vertical: ${i.lidVerticalClearance.toFixed(2)} mm</text></svg><span>Corte ampliado de uma parede · mesmas medidas do modelo 3D</span>`}function ku(i){const e=new ArrayBuffer(84+i.length/9*50),t=new DataView(e);t.setUint32(80,i.length/9,!0);for(let n=0;n<i.length/9;n++){const r=n*9,s=84+n*50,o=[i[r+3]-i[r],i[r+4]-i[r+1],i[r+5]-i[r+2]],a=[i[r+6]-i[r],i[r+7]-i[r+1],i[r+8]-i[r+2]],c=[o[1]*a[2]-o[2]*a[1],o[2]*a[0]-o[0]*a[2],o[0]*a[1]-o[1]*a[0]],l=Math.hypot(...c)||1;c.forEach((u,h)=>t.setFloat32(s+h*4,u/l,!0));for(let u=0;u<9;u++)t.setFloat32(s+12+u*4,i[r+u],!0)}return e}function ic(i,e){const t=new Float32Array(i.length);for(let n=0;n<i.length;n+=3)t[n]=i[n],t[n+1]=-i[n+1],t[n+2]=e-i[n+2];return t}function Hu(i){const e=new Map;for(let t=0;t<i.length;t+=9){const n=[0,3,6].map(r=>`${i[t+r]},${i[t+r+1]},${i[t+r+2]}`);for(let r=0;r<3;r++){const s=n[r],o=n[(r+1)%3];if(s===o)throw Error("A malha contém uma face degenerada. Simplifique o SVG.");const a=s<o,c=a?s+"|"+o:o+"|"+s,l=e.get(c)||[0,0];l[0]++,l[1]+=a?1:-1,e.set(c,l)}}if(!i.length||[...e.values()].some(([t,n])=>t!==2||n!==0))throw Error("A malha não ficou fechada. Simplifique o SVG ou ajuste as medidas antes de exportar.")}function rc(i,e){const t=new Float32Array(i);for(let n=2;n<t.length;n+=3)t[n]+=e;return t}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="180",Fi={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vu=0,Oa=1,Wu=2,sc=1,Xu=2,bn=3,kn=0,Ut=1,Qt=2,Gn=0,Ii=1,Ba=2,Ga=3,za=4,Yu=5,ti=100,qu=101,$u=102,ju=103,Zu=104,Ju=200,Ku=201,Qu=202,eh=203,co=204,uo=205,th=206,nh=207,ih=208,rh=209,sh=210,oh=211,ah=212,lh=213,ch=214,ho=0,fo=1,po=2,Oi=3,mo=4,_o=5,go=6,vo=7,oc=0,uh=1,hh=2,zn=0,dh=1,fh=2,ph=3,mh=4,_h=5,gh=6,vh=7,ac=300,Bi=301,Gi=302,xo=303,Mo=304,_s=306,yo=1e3,ri=1001,So=1002,nn=1003,xh=1004,Cr=1005,cn=1006,ws=1007,si=1008,dn=1009,lc=1010,cc=1011,hr=1012,aa=1013,ai=1014,wn=1015,xr=1016,la=1017,ca=1018,dr=1020,uc=35902,hc=35899,dc=1021,fc=1022,tn=1023,fr=1026,pr=1027,pc=1028,ua=1029,mc=1030,ha=1031,da=1033,ts=33776,ns=33777,is=33778,rs=33779,Eo=35840,bo=35841,To=35842,wo=35843,Ao=36196,Co=37492,Ro=37496,Po=37808,Lo=37809,Do=37810,Fo=37811,Io=37812,No=37813,Uo=37814,Oo=37815,Bo=37816,Go=37817,zo=37818,ko=37819,Ho=37820,Vo=37821,Wo=36492,Xo=36494,Yo=36495,qo=36283,$o=36284,jo=36285,Zo=36286,Mh=3200,yh=3201,_c=0,Sh=1,Bn="",Nt="srgb",zi="srgb-linear",ls="linear",it="srgb",gi=7680,ka=519,Eh=512,bh=513,Th=514,gc=515,wh=516,Ah=517,Ch=518,Rh=519,Ha=35044,Va="300 es",un=2e3,cs=2001;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,Jo=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Ph(i,e){return(i%e+e)%e}function As(i,e,t){return(1-t)*i+t*e}function Zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lh={DEG2RAD:ss};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class li{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(h!==v||c!==f||l!==p||u!==_){let m=1-a;const d=c*f+l*p+u*_+h*v,T=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const P=Math.sqrt(g),R=Math.atan2(P,d*T);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const x=a*T;if(c=c*m+f*x,l=l*m+p*x,u=u*m+_*x,h=h*m+v*x,m===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*p-l*f,e[t+1]=c*_+u*f+l*h-a*p,e[t+2]=l*_+u*p+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h+f*p*_;break;case"YZX":this._x=f*u*h+l*p*_,this._y=l*p*h+f*u*_,this._z=l*u*_-f*p*h,this._w=l*u*h-f*p*_;break;case"XZY":this._x=f*u*h-l*p*_,this._y=l*p*h-f*u*_,this._z=l*u*_+f*p*h,this._w=l*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cs.copy(this).projectOnVector(e),this.sub(Cs)}reflect(e){return this.sub(Cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new k,Wa=new li;class Ve{constructor(e,t,n,r,s,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],v=r[0],m=r[3],d=r[6],T=r[1],g=r[4],x=r[7],P=r[2],R=r[5],A=r[8];return s[0]=o*v+a*T+c*P,s[3]=o*m+a*g+c*R,s[6]=o*d+a*x+c*A,s[1]=l*v+u*T+h*P,s[4]=l*m+u*g+h*R,s[7]=l*d+u*x+h*A,s[2]=f*v+p*T+_*P,s[5]=f*m+p*g+_*R,s[8]=f*d+p*x+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,p=l*s-o*c,_=t*h+n*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rs.makeScale(e,t)),this}rotate(e){return this.premultiply(Rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rs=new Ve;function vc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dh(){const i=us("canvas");return i.style.display="block",i}const Xa={};function mr(i){i in Xa||(Xa[i]=!0,console.warn(i))}function Fh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ya=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qa=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ih(){const i={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=An(r.r),r.g=An(r.g),r.b=An(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?ls:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zi]:{primaries:e,whitePoint:n,transfer:ls,toXYZ:Ya,fromXYZ:qa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Ya,fromXYZ:qa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const et=Ih();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class Nh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vi===void 0&&(vi=us("canvas")),vi.width=e.width,vi.height=e.height;const r=vi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=An(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uh=0;class fa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ps(r[o].image)):s.push(Ps(r[o]))}else s=Ps(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ps(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;const Ls=new k;class Ot extends fi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=ri,r=ri,s=cn,o=si,a=tn,c=dn,l=Ot.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Xi(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ls).x}get height(){return this.source.getSize(Ls).y}get depth(){return this.source.getSize(Ls).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ac;Ot.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],_=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,x=(p+1)/2,P=(d+1)/2,R=(u+f)/4,A=(h+v)/4,F=(_+m)/4;return g>x&&g>P?g<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(g),r=R/n,s=A/n):x>P?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=R/r,s=F/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=A/s,r=F/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bh extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ot(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new fa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xc extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gh extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(s,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Pr.subVectors(this.max,Ji),xi.subVectors(e.a,Ji),Mi.subVectors(e.b,Ji),yi.subVectors(e.c,Ji),Pn.subVectors(Mi,xi),Ln.subVectors(yi,Mi),Yn.subVectors(xi,yi);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Yn.z,Yn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Yn.z,0,-Yn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Yn.y,Yn.x,0];return!Ds(t,xi,Mi,yi,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Ds(t,xi,Mi,yi,Pr))?!1:(Lr.crossVectors(Pn,Ln),t=[Lr.x,Lr.y,Lr.z],Ds(t,xi,Mi,yi,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new k,new k,new k,new k,new k,new k,new k,new k],Zt=new k,Rr=new Mr,xi=new k,Mi=new k,yi=new k,Pn=new k,Ln=new k,Yn=new k,Ji=new k,Pr=new k,Lr=new k,qn=new k;function Ds(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){qn.fromArray(i,s);const a=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),c=e.dot(qn),l=t.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const zh=new Mr,Ki=new k,Fs=new k;class gs{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Fs)),this.expandByPoint(Ki.copy(e.center).sub(Fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vn=new k,Is=new k,Dr=new k,Dn=new k,Ns=new k,Fr=new k,Us=new k;class pa{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Is.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Is);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Dr),a=Dn.dot(this.direction),c=-Dn.dot(Dr),l=Dn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*c-a,f=o*a-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Is).addScaledVector(Dr,f),p}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),r=vn.dot(vn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,r,s){Ns.subVectors(t,e),Fr.subVectors(n,e),Us.crossVectors(Ns,Fr);let o=this.direction.dot(Us),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const c=a*this.direction.dot(Fr.crossVectors(Dn,Fr));if(c<0)return null;const l=a*this.direction.dot(Ns.cross(Dn));if(l<0||c+l>o)return null;const u=-a*Dn.dot(Us);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,r,s,o,a,c,l,u,h,f,p,_,v,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,f,p,_,v,m)}set(e,t,n,r,s,o,a,c,l,u,h,f,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,_=l*u,v=l*h;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,_=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,p=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kh,e,Hh)}lookAt(e,t,n){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Fn.crossVectors(n,kt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Fn.crossVectors(n,kt)),Fn.normalize(),Ir.crossVectors(kt,Fn),r[0]=Fn.x,r[4]=Ir.x,r[8]=kt.x,r[1]=Fn.y,r[5]=Ir.y,r[9]=kt.y,r[2]=Fn.z,r[6]=Ir.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],v=n[6],m=n[10],d=n[14],T=n[3],g=n[7],x=n[11],P=n[15],R=r[0],A=r[4],F=r[8],M=r[12],b=r[1],I=r[5],N=r[9],z=r[13],G=r[2],Z=r[6],V=r[10],W=r[14],U=r[3],le=r[7],de=r[11],Me=r[15];return s[0]=o*R+a*b+c*G+l*U,s[4]=o*A+a*I+c*Z+l*le,s[8]=o*F+a*N+c*V+l*de,s[12]=o*M+a*z+c*W+l*Me,s[1]=u*R+h*b+f*G+p*U,s[5]=u*A+h*I+f*Z+p*le,s[9]=u*F+h*N+f*V+p*de,s[13]=u*M+h*z+f*W+p*Me,s[2]=_*R+v*b+m*G+d*U,s[6]=_*A+v*I+m*Z+d*le,s[10]=_*F+v*N+m*V+d*de,s[14]=_*M+v*z+m*W+d*Me,s[3]=T*R+g*b+x*G+P*U,s[7]=T*A+g*I+x*Z+P*le,s[11]=T*F+g*N+x*V+P*de,s[15]=T*M+g*z+x*W+P*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*p-n*c*p)+v*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+t*l*h-t*a*p-s*o*h+n*o*p+s*a*u-n*l*u)+d*(-r*a*u-t*c*h+t*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],T=h*m*l-v*f*l+v*c*p-a*m*p-h*c*d+a*f*d,g=_*f*l-u*m*l-_*c*p+o*m*p+u*c*d-o*f*d,x=u*v*l-_*h*l+_*a*p-o*v*p-u*a*d+o*h*d,P=_*h*c-u*v*c-_*a*f+o*v*f+u*a*m-o*h*m,R=t*T+n*g+r*x+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*A,e[2]=(a*m*s-v*c*s+v*r*l-n*m*l-a*r*d+n*c*d)*A,e[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*p-n*c*p)*A,e[4]=g*A,e[5]=(u*m*s-_*f*s+_*r*p-t*m*p-u*r*d+t*f*d)*A,e[6]=(_*c*s-o*m*s-_*r*l+t*m*l+o*r*d-t*c*d)*A,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*A,e[8]=x*A,e[9]=(_*h*s-u*v*s-_*n*p+t*v*p+u*n*d-t*h*d)*A,e[10]=(o*v*s-_*a*s+_*n*l-t*v*l-o*n*d+t*a*d)*A,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*p-t*a*p)*A,e[12]=P*A,e[13]=(u*v*r-_*h*r+_*n*f-t*v*f-u*n*m+t*h*m)*A,e[14]=(_*a*r-o*v*r-_*n*c+t*v*c+o*n*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,p=s*u,_=s*h,v=o*u,m=o*h,d=a*h,T=c*l,g=c*u,x=c*h,P=n.x,R=n.y,A=n.z;return r[0]=(1-(v+d))*P,r[1]=(p+x)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(f+d))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(_+g)*A,r[9]=(m-T)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const o=Si.set(r[4],r[5],r[6]).length(),a=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const l=1/s,u=1/o,h=1/a;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=un,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let _,v;if(c)_=s/(o-s),v=o*s/(o-s);else if(a===un)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===cs)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=un,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let _,v;if(c)_=1/(o-s),v=o/(o-s);else if(a===un)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===cs)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new k,Jt=new ft,kh=new k(0,0,0),Hh=new k(1,1,1),Fn=new k,Ir=new k,kt=new k,$a=new ft,ja=new li;class fn{constructor(e=0,t=0,n=0,r=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $a.makeRotationFromQuaternion(e),this.setFromRotationMatrix($a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ja.setFromEuler(this),this.setFromQuaternion(ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vh=0;const Za=new k,Ei=new li,xn=new ft,Nr=new k,Qi=new k,Wh=new k,Xh=new li,Ja=new k(1,0,0),Ka=new k(0,1,0),Qa=new k(0,0,1),el={type:"added"},Yh={type:"removed"},bi={type:"childadded",child:null},Os={type:"childremoved",child:null};class St extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new k,t=new fn,n=new li,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ve}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Ja,e)}rotateY(e){return this.rotateOnAxis(Ka,e)}rotateZ(e){return this.rotateOnAxis(Qa,e)}translateOnAxis(e,t){return Za.copy(e).applyQuaternion(this.quaternion),this.position.add(Za.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ja,e)}translateY(e){return this.translateOnAxis(Ka,e)}translateZ(e){return this.translateOnAxis(Qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Qi,Nr,this.up):xn.lookAt(Nr,Qi,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(xn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(el),bi.child=e,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yh),Os.child=e,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(el),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new k(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new k,Mn=new k,Bs=new k,yn=new k,Ti=new k,wi=new k,tl=new k,Gs=new k,zs=new k,ks=new k,Hs=new mt,Vs=new mt,Ws=new mt;class en{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),Mn.subVectors(n,t),Bs.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(Mn),c=Kt.dot(Bs),l=Mn.dot(Mn),u=Mn.dot(Bs),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,_=(o*u-a*c)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yn.x),c.addScaledVector(o,yn.y),c.addScaledVector(a,yn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Hs.setScalar(0),Vs.setScalar(0),Ws.setScalar(0),Hs.fromBufferAttribute(e,t),Vs.fromBufferAttribute(e,n),Ws.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hs,s.x),o.addScaledVector(Vs,s.y),o.addScaledVector(Ws,s.z),o}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),Mn.subVectors(e,t),Kt.cross(Mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Kt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ti.subVectors(r,n),wi.subVectors(s,n),Gs.subVectors(e,n);const c=Ti.dot(Gs),l=wi.dot(Gs);if(c<=0&&l<=0)return t.copy(n);zs.subVectors(e,r);const u=Ti.dot(zs),h=wi.dot(zs);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ti,o);ks.subVectors(e,s);const p=Ti.dot(ks),_=wi.dot(ks);if(_>=0&&p<=_)return t.copy(s);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(wi,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return tl.subVectors(s,r),a=(h-u)/(h-u+(p-_)),t.copy(r).addScaledVector(tl,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(Ti,o).addScaledVector(wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Xs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=Ph(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xs(o,s,e+1/3),this.g=Xs(o,s,e),this.b=Xs(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return et.workingToColorSpace(At.copy(this),e),Math.round(je(At.r*255,0,255))*65536+Math.round(je(At.g*255,0,255))*256+Math.round(je(At.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(At.copy(this),t);const n=At.r,r=At.g,s=At.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Nt){et.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Ur);const n=As(In.h,Ur.h,t),r=As(In.s,Ur.s,t),s=As(In.l,Ur.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ze;Ze.NAMES=yc;let qh=0;class Yi extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Ii,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=uo,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ma extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new k,Or=new pe;let $h=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class Sc extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ec extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jh=0;const qt=new ft,Ys=new St,Ai=new k,Ht=new Mr,er=new Mr,yt=new k;class on extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vc(e)?Ec:Sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Ys.lookAt(e),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];er.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Ht.min,er.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,er.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(er.min),Ht.expandByPoint(er.max))}Ht.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)yt.fromBufferAttribute(a,l),c&&(Ai.fromBufferAttribute(e,l),yt.add(Ai)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new k,c[F]=new k;const l=new k,u=new k,h=new k,f=new pe,p=new pe,_=new pe,v=new k,m=new k;function d(F,M,b){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),f.fromBufferAttribute(s,F),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,b),u.sub(l),h.sub(l),p.sub(f),_.sub(f);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),a[F].add(v),a[M].add(v),a[b].add(v),c[F].add(m),c[M].add(m),c[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,M=T.length;F<M;++F){const b=T[F],I=b.start,N=b.count;for(let z=I,G=I+N;z<G;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const g=new k,x=new k,P=new k,R=new k;function A(F){P.fromBufferAttribute(r,F),R.copy(P);const M=a[F];g.copy(M),g.sub(P.multiplyScalar(P.dot(M))).normalize(),x.crossVectors(R,M);const I=x.dot(c[F])<0?-1:1;o.setXYZW(F,g.x,g.y,g.z,I)}for(let F=0,M=T.length;F<M;++F){const b=T[F],I=b.start,N=b.count;for(let z=I,G=I+N;z<G;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,c=new k,l=new k,u=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let d=0;d<u;d++)f[_++]=l[p++]}return new rn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new ft,$n=new pa,Br=new gs,il=new k,Gr=new k,zr=new k,kr=new k,qs=new k,Hr=new k,rl=new k,Vr=new k;class hn extends St{constructor(e=new on,t=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(qs.fromBufferAttribute(h,e),o?Hr.addScaledVector(qs,u):Hr.addScaledVector(qs.sub(t),u))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Br.containsPoint($n.origin)===!1&&($n.intersectSphere(Br,il)===null||$n.origin.distanceToSquared(il)>(e.far-e.near)**2))&&(nl.copy(s).invert(),$n.copy(e.ray).applyMatrix4(nl),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=o[m.materialIndex],T=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,P=g;x<P;x+=3){const R=a.getX(x),A=a.getX(x+1),F=a.getX(x+2);r=Wr(this,d,e,n,l,u,h,R,A,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const T=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Wr(this,o,e,n,l,u,h,T,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],d=o[m.materialIndex],T=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,P=g;x<P;x+=3){const R=x,A=x+1,F=x+2;r=Wr(this,d,e,n,l,u,h,R,A,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const T=m,g=m+1,x=m+2;r=Wr(this,o,e,n,l,u,h,T,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Zh(i,e,t,n,r,s,o,a){let c;if(e.side===Ut?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===kn,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:i}}function Wr(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Gr),i.getVertexPosition(c,zr),i.getVertexPosition(l,kr);const u=Zh(i,e,t,n,Gr,zr,kr,rl);if(u){const h=new k;en.getBarycoord(rl,Gr,zr,kr,h),r&&(u.uv=en.getInterpolatedAttribute(r,a,c,l,h,new pe)),s&&(u.uv1=en.getInterpolatedAttribute(s,a,c,l,h,new pe)),o&&(u.normal=en.getInterpolatedAttribute(o,a,c,l,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new k,materialIndex:0};en.getNormal(Gr,zr,kr,f.normal),u.face=f,u.barycoord=h}return u}class yr extends on{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function _(v,m,d,T,g,x,P,R,A,F,M){const b=x/A,I=P/F,N=x/2,z=P/2,G=R/2,Z=A+1,V=F+1;let W=0,U=0;const le=new k;for(let de=0;de<V;de++){const Me=de*I-z;for(let De=0;De<Z;De++){const We=De*b-N;le[v]=We*T,le[m]=Me*g,le[d]=G,l.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[d]=R>0?1:-1,u.push(le.x,le.y,le.z),h.push(De/A),h.push(1-de/F),W+=1}}for(let de=0;de<F;de++)for(let Me=0;Me<A;Me++){const De=f+Me+Z*de,We=f+Me+Z*(de+1),X=f+(Me+1)+Z*(de+1),O=f+(Me+1)+Z*de;c.push(De,We,O),c.push(We,X,O),U+=6}a.addGroup(p,U,M),p+=U,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=ki(i[t]);for(const r in n)e[r]=n[r]}return e}function Jh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Kh={clone:ki,merge:Lt};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tc extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new k,sl=new pe,ol=new pe;class $t extends Tc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,sl,ol),t.subVectors(ol,sl)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ci=-90,Ri=1;class td extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Ci,Ri,e,t);r.layers=this.layers,this.add(r);const s=new $t(Ci,Ri,e,t);s.layers=this.layers,this.add(s);const o=new $t(Ci,Ri,e,t);o.layers=this.layers,this.add(o);const a=new $t(Ci,Ri,e,t);a.layers=this.layers,this.add(a);const c=new $t(Ci,Ri,e,t);c.layers=this.layers,this.add(c);const l=new $t(Ci,Ri,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class wc extends Ot{constructor(e=[],t=Bi,n,r,s,o,a,c,l,u){super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nd extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new wc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yr(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Gn});s.uniforms.tEquirect.value=t;const o=new hn(r,s),a=t.minFilter;return t.minFilter===si&&(t.minFilter=cn),new td(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class sr extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const id={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(id)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rd extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const js=new k,sd=new k,od=new Ve;class Tn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=js.subVectors(n,t).cross(sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||od.getNormalMatrix(e),r=this.coplanarPoint(js).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new gs,ad=new pe(.5,.5),Xr=new k;class _a{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],_=s[8],v=s[9],m=s[10],d=s[11],T=s[12],g=s[13],x=s[14],P=s[15];if(r[0].setComponents(l-o,p-u,d-_,P-T).normalize(),r[1].setComponents(l+o,p+u,d+_,P+T).normalize(),r[2].setComponents(l+a,p+h,d+v,P+g).normalize(),r[3].setComponents(l-a,p-h,d-v,P-g).normalize(),n)r[4].setComponents(c,f,m,x).normalize(),r[5].setComponents(l-c,p-f,d-m,P-x).normalize();else if(r[4].setComponents(l-c,p-f,d-m,P-x).normalize(),t===un)r[5].setComponents(l+c,p+f,d+m,P+x).normalize();else if(t===cs)r[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){jn.center.set(0,0,0);const t=ad.distanceTo(e.center);return jn.radius=.7071067811865476+t,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xr.x=r.normal.x>0?e.max.x:e.min.x,Xr.y=r.normal.y>0?e.max.y:e.min.y,Xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ac extends Yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hs=new k,ds=new k,al=new ft,tr=new pa,Yr=new gs,Zs=new k,ll=new k;class ld extends St{constructor(e=new on,t=new Ac){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)hs.fromBufferAttribute(t,r-1),ds.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=hs.distanceTo(ds);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;al.copy(r).invert(),tr.copy(e.ray).applyMatrix4(al);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=l){const d=u.getX(v),T=u.getX(v+1),g=qr(this,e,tr,c,d,T,v);g&&t.push(g)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),d=qr(this,e,tr,c,v,m,_-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=l){const d=qr(this,e,tr,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){const v=qr(this,e,tr,c,_-1,p,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qr(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(hs.fromBufferAttribute(a,r),ds.fromBufferAttribute(a,s),t.distanceSqToSegment(hs,ds,Zs,ll)>n)return;Zs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Zs);if(!(l<e.near||l>e.far))return{distance:l,point:ll.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const cl=new k,ul=new k;class cd extends ld{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)cl.fromBufferAttribute(t,r),ul.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+cl.distanceTo(ul);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cc extends Ot{constructor(e,t,n=ai,r,s,o,a=nn,c=nn,l,u=fr,h=1){if(u!==fr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rc extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new pe:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new k,r=[],s=[],o=[],a=new k,c=new ft;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new k)}s[0]=new k,o[0]=new k;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ga extends mn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ud extends ga{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function va(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const $r=new k,Js=new va,Ks=new va,Qs=new va;class hd extends mn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new k){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:($r.subVectors(r[0],r[1]).add(r[0]),l=$r);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:($r.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=$r),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Js.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,_,v,m),Ks.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,_,v,m),Qs.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(Js.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ks.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Qs.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Js.calc(c),Ks.calc(c),Qs.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hl(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function dd(i,e){const t=1-i;return t*t*e}function fd(i,e){return 2*(1-i)*i*e}function pd(i,e){return i*i*e}function lr(i,e,t,n){return dd(i,e)+fd(i,t)+pd(i,n)}function md(i,e){const t=1-i;return t*t*t*e}function _d(i,e){const t=1-i;return 3*t*t*i*e}function gd(i,e){return 3*(1-i)*i*i*e}function vd(i,e){return i*i*i*e}function cr(i,e,t,n,r){return md(i,e)+_d(i,t)+gd(i,n)+vd(i,r)}class Pc extends mn{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(cr(e,r.x,s.x,o.x,a.x),cr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xd extends mn{constructor(e=new k,t=new k,n=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new k){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(cr(e,r.x,s.x,o.x,a.x),cr(e,r.y,s.y,o.y,a.y),cr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lc extends mn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Md extends mn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dc extends mn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(lr(e,r.x,s.x,o.x),lr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yd extends mn{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(lr(e,r.x,s.x,o.x),lr(e,r.y,s.y,o.y),lr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fc extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(hl(a,c.x,l.x,u.x,h.x),hl(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var dl=Object.freeze({__proto__:null,ArcCurve:ud,CatmullRomCurve3:hd,CubicBezierCurve:Pc,CubicBezierCurve3:xd,EllipseCurve:ga,LineCurve:Lc,LineCurve3:Md,QuadraticBezierCurve:Dc,QuadraticBezierCurve3:yd,SplineCurve:Fc});class Sd extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new dl[r.type]().fromJSON(r))}return this}}class Ui extends Sd{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lc(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Dc(this.currentPoint.clone(),new pe(e,t),new pe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Pc(this.currentPoint.clone(),new pe(e,t),new pe(n,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Fc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const l=new ga(e,t,n,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class os extends Ui{constructor(e){super(e),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Ui().fromJSON(r))}return this}}function Ed(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Ic(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=Cd(i,e,s,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let f=t;f<r;f+=t){const p=i[f],_=i[f+1];p<a&&(a=p),_<c&&(c=_),p>u&&(u=p),_>h&&(h=_)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return _r(s,o,t,a,c,l,0),o}function Ic(i,e,t,n,r){let s;if(r===Gd(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=fl(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=fl(o/n|0,i[o],i[o+1],s);return s&&Hi(s,s.next)&&(vr(s),s=s.next),s}function ui(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hi(t,t.next)||dt(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _r(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Fd(i,n,r,s);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?Td(i,n,r,s):bd(i)){e.push(c.i,i.i,l.i),vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=wd(ui(i),e),_r(i,e,t,n,r,s,2)):o===2&&Ad(i,e,t,n,r,s):_r(ui(i),e,t,n,r,s,1);break}}}function bd(i){const e=i.prev,t=i,n=i.next;if(dt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(r,s,o),h=Math.min(a,c,l),f=Math.max(r,s,o),p=Math.max(a,c,l);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=p&&or(r,a,s,c,o,l,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Td(i,e,t,n){const r=i.prev,s=i,o=i.next;if(dt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,f=o.y,p=Math.min(a,c,l),_=Math.min(u,h,f),v=Math.max(a,c,l),m=Math.max(u,h,f),d=Ko(p,_,e,t,n),T=Ko(v,m,e,t,n);let g=i.prevZ,x=i.nextZ;for(;g&&g.z>=d&&x&&x.z<=T;){if(g.x>=p&&g.x<=v&&g.y>=_&&g.y<=m&&g!==r&&g!==o&&or(a,u,c,h,l,f,g.x,g.y)&&dt(g.prev,g,g.next)>=0||(g=g.prevZ,x.x>=p&&x.x<=v&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&or(a,u,c,h,l,f,x.x,x.y)&&dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;g&&g.z>=d;){if(g.x>=p&&g.x<=v&&g.y>=_&&g.y<=m&&g!==r&&g!==o&&or(a,u,c,h,l,f,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;x&&x.z<=T;){if(x.x>=p&&x.x<=v&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&or(a,u,c,h,l,f,x.x,x.y)&&dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wd(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Hi(n,r)&&Uc(n,t,t.next,r)&&gr(n,r)&&gr(r,n)&&(e.push(n.i,t.i,r.i),vr(t),vr(t.next),t=i=r),t=t.next}while(t!==i);return ui(t)}function Ad(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ud(o,a)){let c=Oc(o,a);o=ui(o,o.next),c=ui(c,c.next),_r(o,e,t,n,r,s,0),_r(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Cd(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=Ic(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Nd(l))}r.sort(Rd);for(let s=0;s<r.length;s++)t=Pd(r[s],t);return t}function Rd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Pd(i,e){const t=Ld(i,e);if(!t)return e;const n=Oc(t,i);return ui(n,n.next),ui(t,t.next)}function Ld(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(Hi(i,t))return t;do{if(Hi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Nc(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);gr(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Dd(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Dd(i,e){return dt(i.prev,i,e.prev)<0&&dt(e.next,i,i.next)<0}function Fd(i,e,t,n){let r=i;do r.z===0&&(r.z=Ko(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Id(r)}function Id(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Ko(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Nd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nc(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function or(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Nc(i,e,t,n,r,s,o,a)}function Ud(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Od(i,e)&&(gr(i,e)&&gr(e,i)&&Bd(i,e)&&(dt(i.prev,i,e.prev)||dt(i,e.prev,e))||Hi(i,e)&&dt(i.prev,i,i.next)>0&&dt(e.prev,e,e.next)>0)}function dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hi(i,e){return i.x===e.x&&i.y===e.y}function Uc(i,e,t,n){const r=Zr(dt(i,e,t)),s=Zr(dt(i,e,n)),o=Zr(dt(t,n,i)),a=Zr(dt(t,n,e));return!!(r!==s&&o!==a||r===0&&jr(i,t,e)||s===0&&jr(i,n,e)||o===0&&jr(t,i,n)||a===0&&jr(t,e,n))}function jr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Zr(i){return i>0?1:i<0?-1:0}function Od(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Uc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function gr(i,e){return dt(i.prev,i,i.next)<0?dt(i,e,i.next)>=0&&dt(i,i.prev,e)>=0:dt(i,e,i.prev)<0||dt(i,i.next,e)<0}function Bd(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Oc(i,e){const t=Qo(i.i,i.x,i.y),n=Qo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function fl(i,e,t,n){const r=Qo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gd(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class zd{static triangulate(e,t,n=2){return Ed(e,t,n)}}class vs{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return vs.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];pl(e),ml(n,e);let o=e.length;t.forEach(pl);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,ml(n,t[c]);const a=zd.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function pl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ml(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class xs extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const T=d*f-o;for(let g=0;g<l;g++){const x=g*h-s;_.push(x,-T,0),v.push(0,0,1),m.push(g/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<a;T++){const g=T+l*d,x=T+l*(d+1),P=T+1+l*(d+1),R=T+1+l*d;p.push(g,x,R),p.push(x,P,R)}this.setIndex(p),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class kd extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hd extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vd extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _l={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wd{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Xd=new Wd;class xa{constructor(e){this.manager=e!==void 0?e:Xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class Yd extends Error{constructor(e,t){super(e),this.response=t}}class qd extends xa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_l.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:r});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Sn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let v=0;const m=new ReadableStream({start(d){T();function T(){h.read().then(({done:g,value:x})=>{if(g)d.close();else{v+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let R=0,A=u.length;R<A;R++){const F=u[R];F.onProgress&&F.onProgress(P)}d.enqueue(x),T()}},g=>{d.error(g)})}}});return new Response(m)}else throw new Yd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{_l.add(`file:${e}`,l);const u=Sn[e];delete Sn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Sn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Sn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Bc extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $d extends Bc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const eo=new ft,gl=new k,vl=new k;class jd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(gl),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gc extends Tc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zd extends jd{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jd extends Bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Zd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kd extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ml=new pe;class Qd{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ml.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ml).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class ef extends cd{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ze(n),r=new Ze(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const v=f===s?n:r;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const u=new on;u.setAttribute("position",new Bt(c,3)),u.setAttribute("color",new Bt(l,3));const h=new Ac({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Zn{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ui,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const T=[];for(let g=0,x=d.length;g<x;g++){const P=d[g],R=new os;R.curves=P.curves,T.push(R)}return T}function n(d,T){const g=T.length;let x=!1;for(let P=g-1,R=0;R<g;P=R++){let A=T[P],F=T[R],M=F.x-A.x,b=F.y-A.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(A=T[R],M=-M,F=T[P],b=-b),d.y<A.y||d.y>F.y)continue;if(d.y===A.y){if(d.x===A.x)return!0}else{const I=b*(d.x-A.x)-M*(d.y-A.y);if(I===0)return!0;if(I<0)continue;x=!x}}else{if(d.y!==A.y)continue;if(F.x<=d.x&&d.x<=A.x||A.x<=d.x&&d.x<=F.x)return!0}}return x}const r=vs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new os,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],_=0,v;f[_]=void 0,p[_]=[];for(let d=0,T=s.length;d<T;d++)a=s[d],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new os,p:v},f[_].s.curves=a.curves,u&&_++,p[_]=[]):p[_].push({h:a,p:v[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,T=0;for(let g=0,x=f.length;g<x;g++)h[g]=[];for(let g=0,x=f.length;g<x;g++){const P=p[g];for(let R=0;R<P.length;R++){const A=P[R];let F=!0;for(let M=0;M<f.length;M++)n(A.p,f[M].p)&&(g!==M&&T++,F?(F=!1,h[M].push(A)):d=!0);F&&h[g].push(A)}}T>0&&d===!1&&(p=h)}let m;for(let d=0,T=f.length;d<T;d++){c=f[d].s,l.push(c),m=p[d];for(let g=0,x=m.length;g<x;g++)c.holes.push(m[g].h)}return l}}class tf extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yl(i,e,t,n){const r=nf(n);switch(t){case dc:return i*e;case pc:return i*e/r.components*r.byteLength;case ua:return i*e/r.components*r.byteLength;case mc:return i*e*2/r.components*r.byteLength;case ha:return i*e*2/r.components*r.byteLength;case fc:return i*e*3/r.components*r.byteLength;case tn:return i*e*4/r.components*r.byteLength;case da:return i*e*4/r.components*r.byteLength;case ts:case ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case is:case rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:case wo:return Math.max(i,16)*Math.max(e,8)/4;case Eo:case To:return Math.max(i,8)*Math.max(e,8)/2;case Ao:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wo:case Xo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case $o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jo:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nf(i){switch(i){case dn:case lc:return{byteLength:1,components:1};case hr:case cc:case xr:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case ai:case aa:case wn:return{byteLength:4,components:1};case uc:case hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function rf(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],v=h[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const v=h[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:sf,alphahash_pars_fragment:of,alphamap_fragment:af,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:uf,aomap_fragment:hf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:_f,bsdfs:gf,iridescence_fragment:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:bf,color_pars_fragment:Tf,color_pars_vertex:wf,color_vertex:Af,common:Cf,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:Ff,emissivemap_pars_fragment:If,colorspace_fragment:Nf,colorspace_pars_fragment:Uf,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:Gf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:Jf,envmap_vertex:kf,fog_vertex:Hf,fog_pars_vertex:Vf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:qf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:jf,lights_pars_begin:Zf,lights_toon_fragment:Kf,lights_toon_pars_fragment:Qf,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:rp,lights_fragment_maps:sp,lights_fragment_end:op,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:up,map_fragment:hp,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:_p,morphinstance_vertex:gp,morphcolor_vertex:vp,morphnormal_vertex:xp,morphtarget_pars_vertex:Mp,morphtarget_vertex:yp,normal_fragment_begin:Sp,normal_fragment_maps:Ep,normal_pars_fragment:bp,normal_pars_vertex:Tp,normal_vertex:wp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Fp,premultiplied_alpha_fragment:Ip,project_vertex:Np,dithering_fragment:Up,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:kp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Vp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:Yp,skinnormal_vertex:qp,specularmap_fragment:$p,specularmap_pars_fragment:jp,tonemapping_fragment:Zp,tonemapping_pars_fragment:Jp,transmission_fragment:Kp,transmission_pars_fragment:Qp,uv_pars_fragment:em,uv_pars_vertex:tm,uv_vertex:nm,worldpos_vertex:im,background_vert:rm,background_frag:sm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:lm,cube_frag:cm,depth_vert:um,depth_frag:hm,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:_m,linedashed_frag:gm,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:Mm,meshlambert_frag:ym,meshmatcap_vert:Sm,meshmatcap_frag:Em,meshnormal_vert:bm,meshnormal_frag:Tm,meshphong_vert:wm,meshphong_frag:Am,meshphysical_vert:Cm,meshphysical_frag:Rm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Fm,shadow_vert:Im,shadow_frag:Nm,sprite_vert:Um,sprite_frag:Om},be={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ln={basic:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Lt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Lt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Lt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ze(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Lt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Lt([be.points,be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Lt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Lt([be.common,be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Lt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Lt([be.sprite,be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Lt([be.common,be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Lt([be.lights,be.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ln.physical={uniforms:Lt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Jr={r:0,b:0,g:0},Jn=new fn,Bm=new ft;function Gm(i,e,t,n,r,s,o){const a=new Ze(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function _(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?t:e).get(x)),x}function v(g){let x=!1;const P=_(g);P===null?d(a,c):P&&P.isColor&&(d(P,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(g,x){const P=_(x);P&&(P.isCubeTexture||P.mapping===_s)?(u===void 0&&(u=new hn(new yr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:ki(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jn.copy(x.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Jn)),u.material.toneMapped=et.getTransfer(P.colorSpace)!==it,(h!==P||f!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new hn(new xs(2,2),new Hn({name:"BackgroundMaterial",uniforms:ki(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=et.getTransfer(P.colorSpace)!==it,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function d(g,x){g.getRGB(Jr,bc(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),c=x,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,d(a,c)},render:v,addToRenderList:m,dispose:T}}function zm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(b,I,N,z,G){let Z=!1;const V=h(z,N,I);s!==V&&(s=V,l(s.object)),Z=p(b,z,N,G),Z&&_(b,z,N,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(b,I,N,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,I,N){const z=N.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let Z=G[I.id];Z===void 0&&(Z={},G[I.id]=Z);let V=Z[z];return V===void 0&&(V=f(c()),Z[z]=V),V}function f(b){const I=[],N=[],z=[];for(let G=0;G<t;G++)I[G]=0,N[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,I,N,z){const G=s.attributes,Z=I.attributes;let V=0;const W=N.getAttributes();for(const U in W)if(W[U].location>=0){const de=G[U];let Me=Z[U];if(Me===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function _(b,I,N,z){const G={},Z=I.attributes;let V=0;const W=N.getAttributes();for(const U in W)if(W[U].location>=0){let de=Z[U];de===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));const Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),G[U]=Me,V++}s.attributes=G,s.attributesNum=V,s.index=z}function v(){const b=s.newAttributes;for(let I=0,N=b.length;I<N;I++)b[I]=0}function m(b){d(b,0)}function d(b,I){const N=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;N[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),G[b]!==I&&(i.vertexAttribDivisor(b,I),G[b]=I)}function T(){const b=s.newAttributes,I=s.enabledAttributes;for(let N=0,z=I.length;N<z;N++)I[N]!==b[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function g(b,I,N,z,G,Z,V){V===!0?i.vertexAttribIPointer(b,I,N,G,Z):i.vertexAttribPointer(b,I,N,z,G,Z)}function x(b,I,N,z){v();const G=z.attributes,Z=N.getAttributes(),V=I.defaultAttributeValues;for(const W in Z){const U=Z[W];if(U.location>=0){let le=G[W];if(le===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const de=le.normalized,Me=le.itemSize,De=e.get(le);if(De===void 0)continue;const We=De.buffer,X=De.type,O=De.bytesPerElement,E=X===i.INT||X===i.UNSIGNED_INT||le.gpuType===aa;if(le.isInterleavedBufferAttribute){const S=le.data,j=S.stride,ie=le.offset;if(S.isInstancedInterleavedBuffer){for(let q=0;q<U.locationSize;q++)d(U.location+q,S.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=S.meshPerAttribute*S.count)}else for(let q=0;q<U.locationSize;q++)m(U.location+q);i.bindBuffer(i.ARRAY_BUFFER,We);for(let q=0;q<U.locationSize;q++)g(U.location+q,Me/U.locationSize,X,de,j*O,(ie+Me/U.locationSize*q)*O,E)}else{if(le.isInstancedBufferAttribute){for(let S=0;S<U.locationSize;S++)d(U.location+S,le.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let S=0;S<U.locationSize;S++)m(U.location+S);i.bindBuffer(i.ARRAY_BUFFER,We);for(let S=0;S<U.locationSize;S++)g(U.location+S,Me/U.locationSize,X,de,Me*O,Me/U.locationSize*S*O,E)}}else if(V!==void 0){const de=V[W];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(U.location,de);break;case 3:i.vertexAttrib3fv(U.location,de);break;case 4:i.vertexAttrib4fv(U.location,de);break;default:i.vertexAttrib1fv(U.location,de)}}}}T()}function P(){F();for(const b in n){const I=n[b];for(const N in I){const z=I[N];for(const G in z)u(z[G].object),delete z[G];delete I[N]}delete n[b]}}function R(b){if(n[b.id]===void 0)return;const I=n[b.id];for(const N in I){const z=I[N];for(const G in z)u(z[G].object),delete z[G];delete I[N]}delete n[b.id]}function A(b){for(const I in n){const N=n[I];if(N[b.id]===void 0)continue;const z=N[b.id];for(const G in z)u(z[G].object),delete z[G];delete N[b.id]}}function F(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function km(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Hm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const F=A===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!F)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function Vm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Tn,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,g=T*4;let x=d.clippingState||null;c.value=x,x=u(_,f,g,p);for(let P=0;P!==g;++P)x[P]=t[P];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const d=p+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,x=p;g!==v;++g,x+=4)o.copy(h[g]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Wm(i){let e=new WeakMap;function t(o,a){return a===xo?o.mapping=Bi:a===Mo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xo||a===Mo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new nd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Di=4,Sl=[.125,.215,.35,.446,.526,.582],ni=20,to=new Gc,El=new Ze;let no=null,io=0,ro=0,so=!1;const ei=(1+Math.sqrt(5))/2,Pi=1/ei,bl=[new k(-ei,Pi,0),new k(ei,Pi,0),new k(-Pi,0,ei),new k(Pi,0,ei),new k(0,ei,-Pi),new k(0,ei,Pi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Xm=new k;class Tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Xm}=s;no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(no,io,ro),this._renderer.xr.enabled=so,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:xr,format:tn,colorSpace:zi,depthBuffer:!1},r=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(s)),this._blurMaterial=qm(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,r,s){const c=new $t(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(El),h.toneMapping=zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const v=new ma({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),m=new hn(new yr,v);let d=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,d=!0):(v.color.copy(El),d=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(c.up.set(0,l[g],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[g],s.y,s.z)):x===1?(c.up.set(0,0,l[g]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[g],s.z)):(c.up.set(0,l[g],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[g]));const P=this._cubeSize;Kr(r,x*P,g>2?P:0,P,P),h.setRenderTarget(r),d&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Bi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bl[(r-s-1)%bl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new hn(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ni-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):ni;m>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const d=[];let T=0;for(let A=0;A<ni;++A){const F=A/v,M=Math.exp(-F*F/2);d.push(M),A===0?T+=M:A<m&&(T+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-n;const x=this._sizeLods[r],P=3*x*(r>g-Di?r-g+Di:0),R=4*(this._cubeSize-x);Kr(t,P,R,3*x,2*x),c.setRenderTarget(t),c.render(h,to)}}function Ym(i){const e=[],t=[],n=[];let r=i;const s=i-Di+1+Sl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Di?c=Sl[o-i+Di-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,v=3,m=2,d=1,T=new Float32Array(v*_*p),g=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,F=R>2?0:-1,M=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];T.set(M,v*_*R),g.set(f,m*_*R);const b=[R,R,R,R,R,R];x.set(b,d*_*R)}const P=new on;P.setAttribute("position",new rn(T,v)),P.setAttribute("uv",new rn(g,m)),P.setAttribute("faceIndex",new rn(x,d)),e.push(P),r>Di&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(i,e,t){const n=new ci(i,e,t);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function qm(i,e,t){const n=new Float32Array(ni),r=new k(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Al(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Cl(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $m(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xo||c===Mo,u=c===Bi||c===Gi;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Tl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Tl(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Zm(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,_=h.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let g=0,x=T.length;g<x;g+=3){const P=T[g+0],R=T[g+1],A=T[g+2];f.push(P,R,R,A,A,P)}}else if(_!==void 0){const T=_.array;v=_.version;for(let g=0,x=T.length/3-1;g<x;g+=3){const P=g+0,R=g+1,A=g+2;f.push(P,R,R,A,A,P)}}else return;const m=new(vc(f)?Ec:Sc)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Jm(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function l(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,f*o,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,n,1)}function h(f,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,_);let d=0;for(let T=0;T<_;T++)d+=p[T]*v[T];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Km(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Qm(i,e,t){const n=new WeakMap,r=new mt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let g=0;p===!0&&(g=1),_===!0&&(g=2),v===!0&&(g=3);let x=a.attributes.position.count*g,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*P*4*h),A=new xc(R,x,P,h);A.type=wn,A.needsUpdate=!0;const F=g*4;for(let b=0;b<h;b++){const I=m[b],N=d[b],z=T[b],G=x*P*4*b;for(let Z=0;Z<I.count;Z++){const V=Z*F;p===!0&&(r.fromBufferAttribute(I,Z),R[G+V+0]=r.x,R[G+V+1]=r.y,R[G+V+2]=r.z,R[G+V+3]=0),_===!0&&(r.fromBufferAttribute(N,Z),R[G+V+4]=r.x,R[G+V+5]=r.y,R[G+V+6]=r.z,R[G+V+7]=0),v===!0&&(r.fromBufferAttribute(z,Z),R[G+V+8]=r.x,R[G+V+9]=r.y,R[G+V+10]=r.z,R[G+V+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new pe(x,P)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function e0(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const kc=new Ot,Rl=new Cc(1,1),Hc=new xc,Vc=new Gh,Wc=new wc,Pl=[],Ll=[],Dl=new Float32Array(16),Fl=new Float32Array(9),Il=new Float32Array(4);function qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Pl[r];if(s===void 0&&(s=new Float32Array(r),Pl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ms(i,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function t0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),Mt(t,n)}}function o0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),Mt(t,n)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),Mt(t,n)}}function l0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function d0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function _0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Rl.compareFunction=gc,s=Rl):s=kc,t.setTexture2D(e||s,r)}function g0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vc,r)}function v0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wc,r)}function x0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hc,r)}function M0(i){switch(i){case 5126:return t0;case 35664:return n0;case 35665:return i0;case 35666:return r0;case 35674:return s0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return u0;case 35669:case 35673:return h0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(i,e){i.uniform1fv(this.addr,e)}function S0(i,e){const t=qi(e,this.size,2);i.uniform2fv(this.addr,t)}function E0(i,e){const t=qi(e,this.size,3);i.uniform3fv(this.addr,t)}function b0(i,e){const t=qi(e,this.size,4);i.uniform4fv(this.addr,t)}function T0(i,e){const t=qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w0(i,e){const t=qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function A0(i,e){const t=qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C0(i,e){i.uniform1iv(this.addr,e)}function R0(i,e){i.uniform2iv(this.addr,e)}function P0(i,e){i.uniform3iv(this.addr,e)}function L0(i,e){i.uniform4iv(this.addr,e)}function D0(i,e){i.uniform1uiv(this.addr,e)}function F0(i,e){i.uniform2uiv(this.addr,e)}function I0(i,e){i.uniform3uiv(this.addr,e)}function N0(i,e){i.uniform4uiv(this.addr,e)}function U0(i,e,t){const n=this.cache,r=e.length,s=Ms(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||kc,s[o])}function O0(i,e,t){const n=this.cache,r=e.length,s=Ms(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Vc,s[o])}function B0(i,e,t){const n=this.cache,r=e.length,s=Ms(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wc,s[o])}function G0(i,e,t){const n=this.cache,r=e.length,s=Ms(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hc,s[o])}function z0(i){switch(i){case 5126:return y0;case 35664:return S0;case 35665:return E0;case 35666:return b0;case 35674:return T0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return F0;case 36295:return I0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return G0}}class k0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M0(t.type)}}class H0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Nl(i,e){i.seq.push(e),i.map[e.id]=e}function W0(i,e,t){const n=i.name,r=n.length;for(oo.lastIndex=0;;){const s=oo.exec(n),o=oo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Nl(t,l===void 0?new k0(a,i,e):new H0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new V0(a),Nl(t,h)),t=h}}}class as{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);W0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const X0=37297;let Y0=0;function q0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ol=new Ve;function $0(i){et._getMatrix(Ol,et.workingColorSpace,i);const e=`mat3( ${Ol.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case ls:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+q0(i.getShaderSource(e),a)}else return s}function j0(i,e){const t=$0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Z0(i,e){let t;switch(e){case dh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="Cineon";break;case mh:t="ACESFilmic";break;case gh:t="AgX";break;case vh:t="Neutral";break;case _h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qr=new k;function J0(){et.getLuminanceCoefficients(Qr);const i=Qr.x.toFixed(4),e=Qr.y.toFixed(4),t=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Q0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ar(i){return i!==""}function Gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(t_,i_)}const n_=new Map;function i_(i,e){let t=$e[e];if(t===void 0){const n=n_.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ea(t)}const r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(i){return i.replace(r_,s_)}function s_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case Gi:e="ENVMAP_TYPE_CUBE";break;case _s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function c_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oc:e="ENVMAP_BLENDING_MULTIPLY";break;case uh:e="ENVMAP_BLENDING_MIX";break;case hh:e="ENVMAP_BLENDING_ADD";break}return e}function u_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function h_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=o_(t),l=a_(t),u=l_(t),h=c_(t),f=u_(t),p=K0(t),_=Q0(s),v=r.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ar).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ar).join(`
`),d.length>0&&(d+=`
`)):(m=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),d=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?$e.tonemapping_pars_fragment:"",t.toneMapping!==zn?Z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,j0("linearToOutputTexel",t.outputColorSpace),J0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=ea(o),o=Gl(o,t),o=zl(o,t),a=ea(a),a=Gl(a,t),a=zl(a,t),o=kl(o),a=kl(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Va?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Va?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=T+m+o,x=T+d+a,P=Ul(r,r.VERTEX_SHADER,g),R=Ul(r,r.FRAGMENT_SHADER,x);r.attachShader(v,P),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(I){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(P)||"",G=r.getShaderInfoLog(R)||"",Z=N.trim(),V=z.trim(),W=G.trim();let U=!0,le=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,P,R);else{const de=Bl(r,P,"vertex"),Me=Bl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Z+`
`+de+`
`+Me)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(V===""||W==="")&&(le=!1);le&&(I.diagnostics={runnable:U,programLog:Z,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:d}})}r.deleteShader(P),r.deleteShader(R),F=new as(r,v),M=e_(r,v)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,X0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let d_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new p_(e),t.set(e,n)),n}}class p_{constructor(e){this.id=d_++,this.code=e,this.usedTimes=0}}function m_(i,e,t,n,r,s,o){const a=new Mc,c=new f_,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,b,I,N,z){const G=N.fog,Z=z.geometry,V=M.isMeshStandardMaterial?N.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),U=W&&W.mapping===_s?W.image.height:null,le=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const de=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=de!==void 0?de.length:0;let De=0;Z.morphAttributes.position!==void 0&&(De=1),Z.morphAttributes.normal!==void 0&&(De=2),Z.morphAttributes.color!==void 0&&(De=3);let We,X,O,E;if(le){const tt=ln[le];We=tt.vertexShader,X=tt.fragmentShader}else We=M.vertexShader,X=M.fragmentShader,c.update(M),O=c.getVertexShaderID(M),E=c.getFragmentShaderID(M);const S=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ie=z.isInstancedMesh===!0,q=z.isBatchedMesh===!0,ae=!!M.map,ye=!!M.matcap,C=!!W,te=!!M.aoMap,re=!!M.lightMap,ue=!!M.bumpMap,oe=!!M.normalMap,Y=!!M.displacementMap,L=!!M.emissiveMap,fe=!!M.metalnessMap,Be=!!M.roughnessMap,Ke=M.anisotropy>0,D=M.clearcoat>0,y=M.dispersion>0,K=M.iridescence>0,se=M.sheen>0,he=M.transmission>0,ne=Ke&&!!M.anisotropyMap,Fe=D&&!!M.clearcoatMap,xe=D&&!!M.clearcoatNormalMap,Pe=D&&!!M.clearcoatRoughnessMap,Ie=K&&!!M.iridescenceMap,_e=K&&!!M.iridescenceThicknessMap,Te=se&&!!M.sheenColorMap,ke=se&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,we=!!M.specularColorMap,Ye=!!M.specularIntensityMap,B=he&&!!M.transmissionMap,ve=he&&!!M.thicknessMap,Ee=!!M.gradientMap,Re=!!M.alphaMap,me=M.alphaTest>0,ce=!!M.alphaHash,Ne=!!M.extensions;let Xe=zn;M.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const ot={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:X,defines:M.defines,customVertexShaderID:O,customFragmentShaderID:E,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:q,batchingColor:q&&z._colorsTexture!==null,instancing:ie,instancingColor:ie&&z.instanceColor!==null,instancingMorph:ie&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:S===null?i.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:zi,alphaToCoverage:!!M.alphaToCoverage,map:ae,matcap:ye,envMap:C,envMapMode:C&&W.mapping,envMapCubeUVHeight:U,aoMap:te,lightMap:re,bumpMap:ue,normalMap:oe,displacementMap:f&&Y,emissiveMap:L,normalMapObjectSpace:oe&&M.normalMapType===Sh,normalMapTangentSpace:oe&&M.normalMapType===_c,metalnessMap:fe,roughnessMap:Be,anisotropy:Ke,anisotropyMap:ne,clearcoat:D,clearcoatMap:Fe,clearcoatNormalMap:xe,clearcoatRoughnessMap:Pe,dispersion:y,iridescence:K,iridescenceMap:Ie,iridescenceThicknessMap:_e,sheen:se,sheenColorMap:Te,sheenRoughnessMap:ke,specularMap:Ue,specularColorMap:we,specularIntensityMap:Ye,transmission:he,transmissionMap:B,thicknessMap:ve,gradientMap:Ee,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:me,alphaHash:ce,combine:M.combine,mapUv:ae&&v(M.map.channel),aoMapUv:te&&v(M.aoMap.channel),lightMapUv:re&&v(M.lightMap.channel),bumpMapUv:ue&&v(M.bumpMap.channel),normalMapUv:oe&&v(M.normalMap.channel),displacementMapUv:Y&&v(M.displacementMap.channel),emissiveMapUv:L&&v(M.emissiveMap.channel),metalnessMapUv:fe&&v(M.metalnessMap.channel),roughnessMapUv:Be&&v(M.roughnessMap.channel),anisotropyMapUv:ne&&v(M.anisotropyMap.channel),clearcoatMapUv:Fe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&v(M.sheenRoughnessMap.channel),specularMapUv:Ue&&v(M.specularMap.channel),specularColorMapUv:we&&v(M.specularColorMap.channel),specularIntensityMapUv:Ye&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:ve&&v(M.thicknessMap.channel),alphaMapUv:Re&&v(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(oe||Ke),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(ae||Re),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:j,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:De,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ae&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:L&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qt,flipSided:M.side===Ut,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function d(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(T(b,M),g(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function T(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function g(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const b=_[M.type];let I;if(b){const N=ln[b];I=Kh.clone(N.uniforms)}else I=M.uniforms;return I}function P(M,b){let I;for(let N=0,z=u.length;N<z;N++){const G=u[N];if(G.cacheKey===b){I=G,++I.usedTimes;break}}return I===void 0&&(I=new h_(i,b,M,s),u.push(I)),I}function R(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:F}}function __(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function g_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,_,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,_,v,m){const d=o(h,f,p,_,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(h,f,p,_,v,m){const d=o(h,f,p,_,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||g_),n.length>1&&n.sort(f||Vl),r.length>1&&r.sort(f||Vl)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function v_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Wl,i.set(n,[o])):r>=s.length?(o=new Wl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function x_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ze};break;case"SpotLight":t={position:new k,direction:new k,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function M_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let y_=0;function S_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E_(i){const e=new x_,t=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const r=new k,s=new ft,o=new ft;function a(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,T=0,g=0,x=0,P=0,R=0,A=0;l.sort(S_);for(let M=0,b=l.length;M<b;M++){const I=l[M],N=I.color,z=I.intensity,G=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=N.r*z,h+=N.g*z,f+=N.b*z;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],z);A++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,U=t.get(I);U.shadowIntensity=W.intensity,U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,n.directionalShadow[p]=U,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(N).multiplyScalar(z),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[v]=V;const W=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,W.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[v]=W.matrix,I.castShadow){const U=t.get(I);U.shadowIntensity=W.intensity,U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=Z,x++}v++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(N).multiplyScalar(z),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const W=I.shadow,U=t.get(I);U.shadowIntensity=W.intensity,U.shadowBias=W.bias,U.shadowNormalBias=W.normalBias,U.shadowRadius=W.radius,U.shadowMapSize=W.mapSize,U.shadowCameraNear=W.camera.near,U.shadowCameraFar=W.camera.far,n.pointShadow[_]=U,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=I.shadow.matrix,g++}n.point[_]=V,_++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(z),V.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==T||F.numPointShadows!==g||F.numSpotShadows!==x||F.numSpotMaps!==P||F.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=x+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,F.directionalLength=p,F.pointLength=_,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=T,F.numPointShadows=g,F.numSpotShadows=x,F.numSpotMaps=P,F.numLightProbes=A,n.version=y_++)}function c(l,u){let h=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,T=l.length;d<T;d++){const g=l[d];if(g.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(g.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Xl(i){const e=new E_(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function b_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Xl(i),e.set(r,[a])):s>=o.length?(a=new Xl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A_(i,e,t){let n=new _a;const r=new pe,s=new pe,o=new mt,a=new Hd({depthPacking:yh}),c=new Vd,l={},u=t.maxTextureSize,h={[kn]:Ut,[Ut]:kn,[Qt]:Qt},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:T_,fragmentShader:w_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new hn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let d=this.type;this.render=function(R,A,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Gn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=d!==bn&&this.type===bn,G=d===bn&&this.type!==bn;for(let Z=0,V=R.length;Z<V;Z++){const W=R[Z],U=W.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const le=U.getFrameExtents();if(r.multiply(le),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,U.mapSize.y=s.y)),U.map===null||z===!0||G===!0){const Me=this.type!==bn?{minFilter:nn,magFilter:nn}:{};U.map!==null&&U.map.dispose(),U.map=new ci(r.x,r.y,Me),U.map.texture.name=W.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const de=U.getViewportCount();for(let Me=0;Me<de;Me++){const De=U.getViewport(Me);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),N.viewport(o),U.updateMatrices(W,Me),n=U.getFrustum(),x(A,F,U.camera,W,this.type)}U.isPointLightShadow!==!0&&this.type===bn&&T(U,F),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,I)};function T(R,A){const F=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ci(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,F,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,F,p,v,null)}function g(R,A,F,M){let b=null;const I=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)b=I;else if(b=F.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=b.uuid,z=A.uuid;let G=l[N];G===void 0&&(G={},l[N]=G);let Z=G[z];Z===void 0&&(Z=b.clone(),G[z]=Z,A.addEventListener("dispose",P)),b=Z}if(b.visible=A.visible,b.wireframe=A.wireframe,M===bn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=i.properties.get(b);N.light=F}return b}function x(R,A,F,M,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===bn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const z=e.update(R),G=R.material;if(Array.isArray(G)){const Z=z.groups;for(let V=0,W=Z.length;V<W;V++){const U=Z[V],le=G[U.materialIndex];if(le&&le.visible){const de=g(R,le,M,b);R.onBeforeShadow(i,R,A,F,z,de,U),i.renderBufferDirect(F,null,z,de,R,U),R.onAfterShadow(i,R,A,F,z,de,U)}}}else if(G.visible){const Z=g(R,G,M,b);R.onBeforeShadow(i,R,A,F,z,Z,null),i.renderBufferDirect(F,null,z,Z,R,null),R.onAfterShadow(i,R,A,F,z,Z,null)}}const N=R.children;for(let z=0,G=N.length;z<G;z++)x(N[z],A,F,M,b)}function P(R){R.target.removeEventListener("dispose",P);for(const F in l){const M=l[F],b=R.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const C_={[ho]:fo,[po]:go,[mo]:vo,[Oi]:_o,[fo]:ho,[go]:po,[vo]:mo,[_o]:Oi};function R_(i,e){function t(){let B=!1;const ve=new mt;let Ee=null;const Re=new mt(0,0,0,0);return{setMask:function(me){Ee!==me&&!B&&(i.colorMask(me,me,me,me),Ee=me)},setLocked:function(me){B=me},setClear:function(me,ce,Ne,Xe,ot){ot===!0&&(me*=Xe,ce*=Xe,Ne*=Xe),ve.set(me,ce,Ne,Xe),Re.equals(ve)===!1&&(i.clearColor(me,ce,Ne,Xe),Re.copy(ve))},reset:function(){B=!1,Ee=null,Re.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,Ee=null,Re=null,me=null;return{setReversed:function(ce){if(ve!==ce){const Ne=e.get("EXT_clip_control");ce?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ve=ce;const Xe=me;me=null,this.setClear(Xe)}},getReversed:function(){return ve},setTest:function(ce){ce?S(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(ce){Ee!==ce&&!B&&(i.depthMask(ce),Ee=ce)},setFunc:function(ce){if(ve&&(ce=C_[ce]),Re!==ce){switch(ce){case ho:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case _o:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ce}},setLocked:function(ce){B=ce},setClear:function(ce){me!==ce&&(ve&&(ce=1-ce),i.clearDepth(ce),me=ce)},reset:function(){B=!1,Ee=null,Re=null,me=null,ve=!1}}}function r(){let B=!1,ve=null,Ee=null,Re=null,me=null,ce=null,Ne=null,Xe=null,ot=null;return{setTest:function(tt){B||(tt?S(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(tt){ve!==tt&&!B&&(i.stencilMask(tt),ve=tt)},setFunc:function(tt,_n,an){(Ee!==tt||Re!==_n||me!==an)&&(i.stencilFunc(tt,_n,an),Ee=tt,Re=_n,me=an)},setOp:function(tt,_n,an){(ce!==tt||Ne!==_n||Xe!==an)&&(i.stencilOp(tt,_n,an),ce=tt,Ne=_n,Xe=an)},setLocked:function(tt){B=tt},setClear:function(tt){ot!==tt&&(i.clearStencil(tt),ot=tt)},reset:function(){B=!1,ve=null,Ee=null,Re=null,me=null,ce=null,Ne=null,Xe=null,ot=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,T=null,g=null,x=null,P=null,R=null,A=new Ze(0,0,0),F=0,M=!1,b=null,I=null,N=null,z=null,G=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=W>=2);let le=null,de={};const Me=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),We=new mt().fromArray(Me),X=new mt().fromArray(De);function O(B,ve,Ee,Re){const me=new Uint8Array(4),ce=i.createTexture();i.bindTexture(B,ce),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Ee;Ne++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ve+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ce}const E={};E[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),E[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),E[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),S(i.DEPTH_TEST),o.setFunc(Oi),ue(!1),oe(Oa),S(i.CULL_FACE),te(Gn);function S(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function j(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function ie(B,ve){return h[B]!==ve?(i.bindFramebuffer(B,ve),h[B]=ve,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function q(B,ve){let Ee=p,Re=!1;if(B){Ee=f.get(ve),Ee===void 0&&(Ee=[],f.set(ve,Ee));const me=B.textures;if(Ee.length!==me.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ne=me.length;ce<Ne;ce++)Ee[ce]=i.COLOR_ATTACHMENT0+ce;Ee.length=me.length,Re=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Re=!0);Re&&i.drawBuffers(Ee)}function ae(B){return _!==B?(i.useProgram(B),_=B,!0):!1}const ye={[ti]:i.FUNC_ADD,[qu]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};ye[ju]=i.MIN,ye[Zu]=i.MAX;const C={[Ju]:i.ZERO,[Ku]:i.ONE,[Qu]:i.SRC_COLOR,[co]:i.SRC_ALPHA,[sh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[th]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[uo]:i.ONE_MINUS_SRC_ALPHA,[rh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[oh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function te(B,ve,Ee,Re,me,ce,Ne,Xe,ot,tt){if(B===Gn){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(S(i.BLEND),v=!0),B!==Yu){if(B!==m||tt!==M){if((d!==ti||x!==ti)&&(i.blendEquation(i.FUNC_ADD),d=ti,x=ti),tt)switch(B){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.ONE,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case za:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ga:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case za:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,g=null,P=null,R=null,A.set(0,0,0),F=0,m=B,M=tt}return}me=me||ve,ce=ce||Ee,Ne=Ne||Re,(ve!==d||me!==x)&&(i.blendEquationSeparate(ye[ve],ye[me]),d=ve,x=me),(Ee!==T||Re!==g||ce!==P||Ne!==R)&&(i.blendFuncSeparate(C[Ee],C[Re],C[ce],C[Ne]),T=Ee,g=Re,P=ce,R=Ne),(Xe.equals(A)===!1||ot!==F)&&(i.blendColor(Xe.r,Xe.g,Xe.b,ot),A.copy(Xe),F=ot),m=B,M=!1}function re(B,ve){B.side===Qt?j(i.CULL_FACE):S(i.CULL_FACE);let Ee=B.side===Ut;ve&&(Ee=!Ee),ue(Ee),B.blending===Ii&&B.transparent===!1?te(Gn):te(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Re=B.stencilWrite;a.setTest(Re),Re&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),L(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?S(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function oe(B){B!==Vu?(S(i.CULL_FACE),B!==I&&(B===Oa?i.cullFace(i.BACK):B===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),I=B}function Y(B){B!==N&&(V&&i.lineWidth(B),N=B)}function L(B,ve,Ee){B?(S(i.POLYGON_OFFSET_FILL),(z!==ve||G!==Ee)&&(i.polygonOffset(ve,Ee),z=ve,G=Ee)):j(i.POLYGON_OFFSET_FILL)}function fe(B){B?S(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Be(B){B===void 0&&(B=i.TEXTURE0+Z-1),le!==B&&(i.activeTexture(B),le=B)}function Ke(B,ve,Ee){Ee===void 0&&(le===null?Ee=i.TEXTURE0+Z-1:Ee=le);let Re=de[Ee];Re===void 0&&(Re={type:void 0,texture:void 0},de[Ee]=Re),(Re.type!==B||Re.texture!==ve)&&(le!==Ee&&(i.activeTexture(Ee),le=Ee),i.bindTexture(B,ve||E[B]),Re.type=B,Re.texture=ve)}function D(){const B=de[le];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(B){We.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),We.copy(B))}function ke(B){X.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function Ue(B,ve){let Ee=l.get(ve);Ee===void 0&&(Ee=new WeakMap,l.set(ve,Ee));let Re=Ee.get(B);Re===void 0&&(Re=i.getUniformBlockIndex(ve,B.name),Ee.set(B,Re))}function we(B,ve){const Re=l.get(ve).get(B);c.get(ve)!==Re&&(i.uniformBlockBinding(ve,Re,B.__bindingPointIndex),c.set(ve,Re))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,de={},h={},f=new WeakMap,p=[],_=null,v=!1,m=null,d=null,T=null,g=null,x=null,P=null,R=null,A=new Ze(0,0,0),F=0,M=!1,b=null,I=null,N=null,z=null,G=null,We.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:S,disable:j,bindFramebuffer:ie,drawBuffers:q,useProgram:ae,setBlending:te,setMaterial:re,setFlipSided:ue,setCullFace:oe,setLineWidth:Y,setPolygonOffset:L,setScissorTest:fe,activeTexture:Be,bindTexture:Ke,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:K,texImage2D:Ie,texImage3D:_e,updateUBOMapping:Ue,uniformBlockBinding:we,texStorage2D:xe,texStorage3D:Pe,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:ne,compressedTexSubImage3D:Fe,scissor:Te,viewport:ke,reset:Ye}}function P_(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,y){return p?new OffscreenCanvas(D,y):us("canvas")}function v(D,y,K){let se=1;const he=Ke(D);if((he.width>K||he.height>K)&&(se=K/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ne=Math.floor(se*he.width),Fe=Math.floor(se*he.height);h===void 0&&(h=_(ne,Fe));const xe=y?_(ne,Fe):h;return xe.width=ne,xe.height=Fe,xe.getContext("2d").drawImage(D,0,0,ne,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ne+"x"+Fe+")."),xe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function m(D){return D.generateMipmaps}function d(D){i.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(D,y,K,se,he=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ne=y;if(y===i.RED&&(K===i.FLOAT&&(ne=i.R32F),K===i.HALF_FLOAT&&(ne=i.R16F),K===i.UNSIGNED_BYTE&&(ne=i.R8)),y===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ne=i.R8UI),K===i.UNSIGNED_SHORT&&(ne=i.R16UI),K===i.UNSIGNED_INT&&(ne=i.R32UI),K===i.BYTE&&(ne=i.R8I),K===i.SHORT&&(ne=i.R16I),K===i.INT&&(ne=i.R32I)),y===i.RG&&(K===i.FLOAT&&(ne=i.RG32F),K===i.HALF_FLOAT&&(ne=i.RG16F),K===i.UNSIGNED_BYTE&&(ne=i.RG8)),y===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ne=i.RG8UI),K===i.UNSIGNED_SHORT&&(ne=i.RG16UI),K===i.UNSIGNED_INT&&(ne=i.RG32UI),K===i.BYTE&&(ne=i.RG8I),K===i.SHORT&&(ne=i.RG16I),K===i.INT&&(ne=i.RG32I)),y===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),K===i.UNSIGNED_INT&&(ne=i.RGB32UI),K===i.BYTE&&(ne=i.RGB8I),K===i.SHORT&&(ne=i.RGB16I),K===i.INT&&(ne=i.RGB32I)),y===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),K===i.UNSIGNED_INT&&(ne=i.RGBA32UI),K===i.BYTE&&(ne=i.RGBA8I),K===i.SHORT&&(ne=i.RGBA16I),K===i.INT&&(ne=i.RGBA32I)),y===i.RGB&&(K===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),y===i.RGBA){const Fe=he?ls:et.getTransfer(se);K===i.FLOAT&&(ne=i.RGBA32F),K===i.HALF_FLOAT&&(ne=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ne=Fe===it?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(D,y){let K;return D?y===null||y===ai||y===dr?K=i.DEPTH24_STENCIL8:y===wn?K=i.DEPTH32F_STENCIL8:y===hr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===dr?K=i.DEPTH_COMPONENT24:y===wn?K=i.DEPTH_COMPONENT32F:y===hr&&(K=i.DEPTH_COMPONENT16),K}function P(D,y){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==nn&&D.minFilter!==cn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function R(D){const y=D.target;y.removeEventListener("dispose",R),F(y),y.isVideoTexture&&u.delete(y)}function A(D){const y=D.target;y.removeEventListener("dispose",A),b(y)}function F(D){const y=n.get(D);if(y.__webglInit===void 0)return;const K=D.source,se=f.get(K);if(se){const he=se[y.__cacheKey];he.usedTimes--,he.usedTimes===0&&M(D),Object.keys(se).length===0&&f.delete(K)}n.remove(D)}function M(D){const y=n.get(D);i.deleteTexture(y.__webglTexture);const K=D.source,se=f.get(K);delete se[y.__cacheKey],o.memory.textures--}function b(D){const y=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(y.__webglFramebuffer[se]))for(let he=0;he<y.__webglFramebuffer[se].length;he++)i.deleteFramebuffer(y.__webglFramebuffer[se][he]);else i.deleteFramebuffer(y.__webglFramebuffer[se]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[se])}else{if(Array.isArray(y.__webglFramebuffer))for(let se=0;se<y.__webglFramebuffer.length;se++)i.deleteFramebuffer(y.__webglFramebuffer[se]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let se=0;se<y.__webglColorRenderbuffer.length;se++)y.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[se]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=D.textures;for(let se=0,he=K.length;se<he;se++){const ne=n.get(K[se]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(K[se])}n.remove(D)}let I=0;function N(){I=0}function z(){const D=I;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),I+=1,D}function G(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function Z(D,y){const K=n.get(D);if(D.isVideoTexture&&fe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const se=D.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{E(K,D,y);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+y)}function V(D,y){const K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){E(K,D,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+y)}function W(D,y){const K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){E(K,D,y);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+y)}function U(D,y){const K=n.get(D);if(D.version>0&&K.__version!==D.version){S(K,D,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+y)}const le={[yo]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},de={[nn]:i.NEAREST,[xh]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ws]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},Me={[Eh]:i.NEVER,[Rh]:i.ALWAYS,[bh]:i.LESS,[gc]:i.LEQUAL,[Th]:i.EQUAL,[Ch]:i.GEQUAL,[wh]:i.GREATER,[Ah]:i.NOTEQUAL};function De(D,y){if(y.type===wn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===cn||y.magFilter===ws||y.magFilter===Cr||y.magFilter===si||y.minFilter===cn||y.minFilter===ws||y.minFilter===Cr||y.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,le[y.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,le[y.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,le[y.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,de[y.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==Cr&&y.minFilter!==si||y.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function We(D,y){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",R));const se=y.source;let he=f.get(se);he===void 0&&(he={},f.set(se,he));const ne=G(y);if(ne!==D.__cacheKey){he[ne]===void 0&&(he[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),he[ne].usedTimes++;const Fe=he[D.__cacheKey];Fe!==void 0&&(he[D.__cacheKey].usedTimes--,Fe.usedTimes===0&&M(y)),D.__cacheKey=ne,D.__webglTexture=he[ne].texture}return K}function X(D,y,K){return Math.floor(Math.floor(D/K)/y)}function O(D,y,K,se){const ne=D.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,K,se,y.data);else{ne.sort((_e,Te)=>_e.start-Te.start);let Fe=0;for(let _e=1;_e<ne.length;_e++){const Te=ne[Fe],ke=ne[_e],Ue=Te.start+Te.count,we=X(ke.start,y.width,4),Ye=X(Te.start,y.width,4);ke.start<=Ue+1&&we===Ye&&X(ke.start+ke.count-1,y.width,4)===we?Te.count=Math.max(Te.count,ke.start+ke.count-Te.start):(++Fe,ne[Fe]=ke)}ne.length=Fe+1;const xe=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let _e=0,Te=ne.length;_e<Te;_e++){const ke=ne[_e],Ue=Math.floor(ke.start/4),we=Math.ceil(ke.count/4),Ye=Ue%y.width,B=Math.floor(Ue/y.width),ve=we,Ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Ye,B,ve,Ee,K,se,y.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function E(D,y,K){let se=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=i.TEXTURE_3D);const he=We(D,y),ne=y.source;t.bindTexture(se,D.__webglTexture,i.TEXTURE0+K);const Fe=n.get(ne);if(ne.version!==Fe.__version||he===!0){t.activeTexture(i.TEXTURE0+K);const xe=et.getPrimaries(et.workingColorSpace),Pe=y.colorSpace===Bn?null:et.getPrimaries(y.colorSpace),Ie=y.colorSpace===Bn||xe===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let _e=v(y.image,!1,r.maxTextureSize);_e=Be(y,_e);const Te=s.convert(y.format,y.colorSpace),ke=s.convert(y.type);let Ue=g(y.internalFormat,Te,ke,y.colorSpace,y.isVideoTexture);De(se,y);let we;const Ye=y.mipmaps,B=y.isVideoTexture!==!0,ve=Fe.__version===void 0||he===!0,Ee=ne.dataReady,Re=P(y,_e);if(y.isDepthTexture)Ue=x(y.format===pr,y.type),ve&&(B?t.texStorage2D(i.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Te,ke,null));else if(y.isDataTexture)if(Ye.length>0){B&&ve&&t.texStorage2D(i.TEXTURE_2D,Re,Ue,Ye[0].width,Ye[0].height);for(let me=0,ce=Ye.length;me<ce;me++)we=Ye[me],B?Ee&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Te,ke,we.data):t.texImage2D(i.TEXTURE_2D,me,Ue,we.width,we.height,0,Te,ke,we.data);y.generateMipmaps=!1}else B?(ve&&t.texStorage2D(i.TEXTURE_2D,Re,Ue,_e.width,_e.height),Ee&&O(y,_e,Te,ke)):t.texImage2D(i.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Te,ke,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){B&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ue,Ye[0].width,Ye[0].height,_e.depth);for(let me=0,ce=Ye.length;me<ce;me++)if(we=Ye[me],y.format!==tn)if(Te!==null)if(B){if(Ee)if(y.layerUpdates.size>0){const Ne=yl(we.width,we.height,y.format,y.type);for(const Xe of y.layerUpdates){const ot=we.data.subarray(Xe*Ne/we.data.BYTES_PER_ELEMENT,(Xe+1)*Ne/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Xe,we.width,we.height,1,Te,ot)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,_e.depth,Te,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ue,we.width,we.height,_e.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,_e.depth,Te,ke,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ue,we.width,we.height,_e.depth,0,Te,ke,we.data)}else{B&&ve&&t.texStorage2D(i.TEXTURE_2D,Re,Ue,Ye[0].width,Ye[0].height);for(let me=0,ce=Ye.length;me<ce;me++)we=Ye[me],y.format!==tn?Te!==null?B?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Ee&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,we.width,we.height,Te,ke,we.data):t.texImage2D(i.TEXTURE_2D,me,Ue,we.width,we.height,0,Te,ke,we.data)}else if(y.isDataArrayTexture)if(B){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ue,_e.width,_e.height,_e.depth),Ee)if(y.layerUpdates.size>0){const me=yl(_e.width,_e.height,y.format,y.type);for(const ce of y.layerUpdates){const Ne=_e.data.subarray(ce*me/_e.data.BYTES_PER_ELEMENT,(ce+1)*me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,_e.width,_e.height,1,Te,ke,Ne)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Te,ke,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,Te,ke,_e.data);else if(y.isData3DTexture)B?(ve&&t.texStorage3D(i.TEXTURE_3D,Re,Ue,_e.width,_e.height,_e.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Te,ke,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,Te,ke,_e.data);else if(y.isFramebufferTexture){if(ve)if(B)t.texStorage2D(i.TEXTURE_2D,Re,Ue,_e.width,_e.height);else{let me=_e.width,ce=_e.height;for(let Ne=0;Ne<Re;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Ue,me,ce,0,Te,ke,null),me>>=1,ce>>=1}}else if(Ye.length>0){if(B&&ve){const me=Ke(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Re,Ue,me.width,me.height)}for(let me=0,ce=Ye.length;me<ce;me++)we=Ye[me],B?Ee&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te,ke,we):t.texImage2D(i.TEXTURE_2D,me,Ue,Te,ke,we);y.generateMipmaps=!1}else if(B){if(ve){const me=Ke(_e);t.texStorage2D(i.TEXTURE_2D,Re,Ue,me.width,me.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,ke,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Te,ke,_e);m(y)&&d(se),Fe.__version=ne.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function S(D,y,K){if(y.image.length!==6)return;const se=We(D,y),he=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+K);const ne=n.get(he);if(he.version!==ne.__version||se===!0){t.activeTexture(i.TEXTURE0+K);const Fe=et.getPrimaries(et.workingColorSpace),xe=y.colorSpace===Bn?null:et.getPrimaries(y.colorSpace),Pe=y.colorSpace===Bn||Fe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,_e=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let ce=0;ce<6;ce++)!Ie&&!_e?Te[ce]=v(y.image[ce],!0,r.maxCubemapSize):Te[ce]=_e?y.image[ce].image:y.image[ce],Te[ce]=Be(y,Te[ce]);const ke=Te[0],Ue=s.convert(y.format,y.colorSpace),we=s.convert(y.type),Ye=g(y.internalFormat,Ue,we,y.colorSpace),B=y.isVideoTexture!==!0,ve=ne.__version===void 0||se===!0,Ee=he.dataReady;let Re=P(y,ke);De(i.TEXTURE_CUBE_MAP,y);let me;if(Ie){B&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ye,ke.width,ke.height);for(let ce=0;ce<6;ce++){me=Te[ce].mipmaps;for(let Ne=0;Ne<me.length;Ne++){const Xe=me[Ne];y.format!==tn?Ue!==null?B?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,0,0,Xe.width,Xe.height,Ue,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,Ye,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,0,0,Xe.width,Xe.height,Ue,we,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,Ye,Xe.width,Xe.height,0,Ue,we,Xe.data)}}}else{if(me=y.mipmaps,B&&ve){me.length>0&&Re++;const ce=Ke(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Ye,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(_e){B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Te[ce].width,Te[ce].height,Ue,we,Te[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,Te[ce].width,Te[ce].height,0,Ue,we,Te[ce].data);for(let Ne=0;Ne<me.length;Ne++){const ot=me[Ne].image[ce].image;B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,0,0,ot.width,ot.height,Ue,we,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,Ye,ot.width,ot.height,0,Ue,we,ot.data)}}else{B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue,we,Te[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,Ue,we,Te[ce]);for(let Ne=0;Ne<me.length;Ne++){const Xe=me[Ne];B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,0,0,Ue,we,Xe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,Ye,Ue,we,Xe.image[ce])}}}m(y)&&d(i.TEXTURE_CUBE_MAP),ne.__version=he.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function j(D,y,K,se,he,ne){const Fe=s.convert(K.format,K.colorSpace),xe=s.convert(K.type),Pe=g(K.internalFormat,Fe,xe,K.colorSpace),Ie=n.get(y),_e=n.get(K);if(_e.__renderTarget=y,!Ie.__hasExternalTextures){const Te=Math.max(1,y.width>>ne),ke=Math.max(1,y.height>>ne);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ne,Pe,Te,ke,y.depth,0,Fe,xe,null):t.texImage2D(he,ne,Pe,Te,ke,0,Fe,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),L(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,he,_e.__webglTexture,0,Y(y)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,he,_e.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(D,y,K){if(i.bindRenderbuffer(i.RENDERBUFFER,D),y.depthBuffer){const se=y.depthTexture,he=se&&se.isDepthTexture?se.type:null,ne=x(y.stencilBuffer,he),Fe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=Y(y);L(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ne,y.width,y.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ne,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ne,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,D)}else{const se=y.textures;for(let he=0;he<se.length;he++){const ne=se[he],Fe=s.convert(ne.format,ne.colorSpace),xe=s.convert(ne.type),Pe=g(ne.internalFormat,Fe,xe,ne.colorSpace),Ie=Y(y);K&&L(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Pe,y.width,y.height):L(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Pe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(D,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(y.depthTexture);se.__renderTarget=y,(!se.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const he=se.__webglTexture,ne=Y(y);if(y.depthTexture.format===fr)L(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(y.depthTexture.format===pr)L(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ae(D){const y=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const se=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){const he=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),y.__depthDisposeCallback=he}y.__boundDepthTexture=se}if(D.depthTexture&&!y.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const se=D.texture.mipmaps;se&&se.length>0?q(y.__webglFramebuffer[0],D):q(y.__webglFramebuffer,D)}else if(K){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=i.createRenderbuffer(),ie(y.__webglDepthbuffer[se],D,!1);else{const he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=y.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ne)}}else{const se=D.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ie(y.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(D,y,K){const se=n.get(D);y!==void 0&&j(se.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ae(D)}function C(D){const y=D.texture,K=n.get(D),se=n.get(y);D.addEventListener("dispose",A);const he=D.textures,ne=D.isWebGLCubeRenderTarget===!0,Fe=he.length>1;if(Fe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=y.version,o.memory.textures++),ne){K.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[xe]=[];for(let Pe=0;Pe<y.mipmaps.length;Pe++)K.__webglFramebuffer[xe][Pe]=i.createFramebuffer()}else K.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)K.__webglFramebuffer[xe]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let xe=0,Pe=he.length;xe<Pe;xe++){const Ie=n.get(he[xe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&L(D)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const Pe=he[xe];K.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[xe]);const Ie=s.convert(Pe.format,Pe.colorSpace),_e=s.convert(Pe.type),Te=g(Pe.internalFormat,Ie,_e,Pe.colorSpace,D.isXRRenderTarget===!0),ke=Y(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Te,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,K.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),De(i.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)j(K.__webglFramebuffer[xe][Pe],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Pe);else j(K.__webglFramebuffer[xe],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(y)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let xe=0,Pe=he.length;xe<Pe;xe++){const Ie=he[xe],_e=n.get(Ie);let Te=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,_e.__webglTexture),De(Te,Ie),j(K.__webglFramebuffer,D,Ie,i.COLOR_ATTACHMENT0+xe,Te,0),m(Ie)&&d(Te)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,se.__webglTexture),De(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)j(K.__webglFramebuffer[Pe],D,y,i.COLOR_ATTACHMENT0,xe,Pe);else j(K.__webglFramebuffer,D,y,i.COLOR_ATTACHMENT0,xe,0);m(y)&&d(xe),t.unbindTexture()}D.depthBuffer&&ae(D)}function te(D){const y=D.textures;for(let K=0,se=y.length;K<se;K++){const he=y[K];if(m(he)){const ne=T(D),Fe=n.get(he).__webglTexture;t.bindTexture(ne,Fe),d(ne),t.unbindTexture()}}}const re=[],ue=[];function oe(D){if(D.samples>0){if(L(D)===!1){const y=D.textures,K=D.width,se=D.height;let he=i.COLOR_BUFFER_BIT;const ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(D),xe=y.length>1;if(xe)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Pe=D.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ie]);const _e=n.get(y[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,K,se,0,0,K,se,he,i.NEAREST),c===!0&&(re.length=0,ue.length=0,re.push(i.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(re.push(ne),ue.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ie]);const _e=n.get(y[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Y(D){return Math.min(r.maxSamples,D.samples)}function L(D){const y=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(D){const y=o.render.frame;u.get(D)!==y&&(u.set(D,y),D.update())}function Be(D,y){const K=D.colorSpace,se=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==zi&&K!==Bn&&(et.getTransfer(K)===it?(se!==tn||he!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),y}function Ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=U,this.rebindTextures=ye,this.setupRenderTarget=C,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=j,this.useMultisampledRTT=L}function L_(i,e){function t(n,r=Bn){let s;const o=et.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===la)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lc)return i.BYTE;if(n===cc)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===xr)return i.HALF_FLOAT;if(n===dc)return i.ALPHA;if(n===fc)return i.RGB;if(n===tn)return i.RGBA;if(n===fr)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===pc)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===mc)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===da)return i.RGBA_INTEGER;if(n===ts||n===ns||n===is||n===rs)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ts)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ns)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===bo||n===To||n===wo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===Co||n===Ro)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ao||n===Co)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ro)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Po||n===Lo||n===Do||n===Fo||n===Io||n===No||n===Uo||n===Oo||n===Bo||n===Go||n===zo||n===ko||n===Ho||n===Vo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Po)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===Yo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wo)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===$o||n===jo||n===Zo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Rc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:D_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends fi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new I_,d={},T=t.getContextAttributes();let g=null,x=null;const P=[],R=[],A=new pe;let F=null;const M=new $t;M.viewport=new mt;const b=new $t;b.viewport=new mt;const I=[M,b],N=new Kd;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let S=P[E];return S===void 0&&(S=new $s,P[E]=S),S.getTargetRaySpace()},this.getControllerGrip=function(E){let S=P[E];return S===void 0&&(S=new $s,P[E]=S),S.getGripSpace()},this.getHand=function(E){let S=P[E];return S===void 0&&(S=new $s,P[E]=S),S.getHandSpace()};function Z(E){const S=R.indexOf(E.inputSource);if(S===-1)return;const j=P[S];j!==void 0&&(j.update(E.inputSource,E.frame,l||o),j.dispatchEvent({type:E.type,data:E.inputSource}))}function V(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",W);for(let E=0;E<P.length;E++){const S=R[E];S!==null&&(R[E]=null,P[E].disconnect(S))}z=null,G=null,m.reset();for(const E in d)delete d[E];e.setRenderTarget(g),p=null,f=null,h=null,r=null,x=null,O.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){s=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){a=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(E){l=E},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(E){if(r=E,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ie=null,q=null;T.depth&&(q=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=T.stencil?pr:fr,ie=T.stencil?dr:ai);const ae={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new ci(f.textureWidth,f.textureHeight,{format:tn,type:dn,depthTexture:new Cc(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const j={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ci(p.framebufferWidth,p.framebufferHeight,{format:tn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),O.setContext(r),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(E){for(let S=0;S<E.removed.length;S++){const j=E.removed[S],ie=R.indexOf(j);ie>=0&&(R[ie]=null,P[ie].disconnect(j))}for(let S=0;S<E.added.length;S++){const j=E.added[S];let ie=R.indexOf(j);if(ie===-1){for(let ae=0;ae<P.length;ae++)if(ae>=R.length){R.push(j),ie=ae;break}else if(R[ae]===null){R[ae]=j,ie=ae;break}if(ie===-1)break}const q=P[ie];q&&q.connect(j)}}const U=new k,le=new k;function de(E,S,j){U.setFromMatrixPosition(S.matrixWorld),le.setFromMatrixPosition(j.matrixWorld);const ie=U.distanceTo(le),q=S.projectionMatrix.elements,ae=j.projectionMatrix.elements,ye=q[14]/(q[10]-1),C=q[14]/(q[10]+1),te=(q[9]+1)/q[5],re=(q[9]-1)/q[5],ue=(q[8]-1)/q[0],oe=(ae[8]+1)/ae[0],Y=ye*ue,L=ye*oe,fe=ie/(-ue+oe),Be=fe*-ue;if(S.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Be),E.translateZ(fe),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),q[10]===-1)E.projectionMatrix.copy(S.projectionMatrix),E.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{const Ke=ye+fe,D=C+fe,y=Y-Be,K=L+(ie-Be),se=te*C/D*Ke,he=re*C/D*Ke;E.projectionMatrix.makePerspective(y,K,se,he,Ke,D),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function Me(E,S){S===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(S.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(r===null)return;let S=E.near,j=E.far;m.texture!==null&&(m.depthNear>0&&(S=m.depthNear),m.depthFar>0&&(j=m.depthFar)),N.near=b.near=M.near=S,N.far=b.far=M.far=j,(z!==N.near||G!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,G=N.far),N.layers.mask=E.layers.mask|6,M.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;const ie=E.parent,q=N.cameras;Me(N,ie);for(let ae=0;ae<q.length;ae++)Me(q[ae],ie);q.length===2?de(N,M,b):N.projectionMatrix.copy(M.projectionMatrix),De(E,N,ie)};function De(E,S,j){j===null?E.matrix.copy(S.matrixWorld):(E.matrix.copy(j.matrixWorld),E.matrix.invert(),E.matrix.multiply(S.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(S.projectionMatrix),E.projectionMatrixInverse.copy(S.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Jo*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(E){c=E,f!==null&&(f.fixedFoveation=E),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=E)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(E){return d[E]};let We=null;function X(E,S){if(u=S.getViewerPose(l||o),_=S,u!==null){const j=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ie=!1;j.length!==N.cameras.length&&(N.cameras.length=0,ie=!0);for(let C=0;C<j.length;C++){const te=j[C];let re=null;if(p!==null)re=p.getViewport(te);else{const oe=h.getViewSubImage(f,te);re=oe.viewport,C===0&&(e.setRenderTargetTextures(x,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(x))}let ue=I[C];ue===void 0&&(ue=new $t,ue.layers.enable(C),ue.viewport=new mt,I[C]=ue),ue.matrix.fromArray(te.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(te.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(re.x,re.y,re.width,re.height),C===0&&(N.matrix.copy(ue.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ie===!0&&N.cameras.push(ue)}const q=r.enabledFeatures;if(q&&q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const C=h.getDepthInformation(j[0]);C&&C.isValid&&C.texture&&m.init(C,r.renderState)}if(q&&q.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<j.length;C++){const te=j[C].camera;if(te){let re=d[te];re||(re=new Rc,d[te]=re);const ue=h.getCameraImage(te);re.sourceTexture=ue}}}}for(let j=0;j<P.length;j++){const ie=R[j],q=P[j];ie!==null&&q!==void 0&&q.update(ie,S,l||o)}We&&We(E,S),S.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:S}),_=null}const O=new zc;O.setAnimationLoop(X),this.setAnimationLoop=function(E){We=E},this.dispose=function(){}}}const Kn=new fn,U_=new ft;function O_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,bc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,T,g):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ut&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ut&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),g=T.envMap,x=T.envMapRotation;g&&(m.envMap.value=g,Kn.copy(x),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(Kn)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=g*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function B_(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,g){const x=g.program;n.uniformBlockBinding(T,x)}function l(T,g){let x=r[T.id];x===void 0&&(_(T),x=u(T),r[T.id]=x,T.addEventListener("dispose",m));const P=g.program;n.updateUBOMapping(T,P);const R=e.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function u(T){const g=h();T.__bindingPointIndex=g;const x=i.createBuffer(),P=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const g=r[T.id],x=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let R=0,A=x.length;R<A;R++){const F=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,b=F.length;M<b;M++){const I=F[M];if(p(I,R,M,P)===!0){const N=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let Z=0;Z<z.length;Z++){const V=z[Z],W=v(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,g,x,P){const R=T.value,A=g+"_"+x;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const F=P[A];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return P[A]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(T){const g=T.uniforms;let x=0;const P=16;for(let A=0,F=g.length;A<F;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let b=0,I=M.length;b<I;b++){const N=M[b],z=Array.isArray(N.value)?N.value:[N.value];for(let G=0,Z=z.length;G<Z;G++){const V=z[G],W=v(V),U=x%P,le=U%W.boundary,de=U+le;x+=le,de!==0&&P-de<W.storage&&(x+=P-de),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=W.storage}}}const R=x%P;return R>0&&(x+=P-R),T.__size=x,T.__cache={},this}function v(T){const g={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(g.boundary=4,g.storage=4):T.isVector2?(g.boundary=8,g.storage=8):T.isVector3||T.isColor?(g.boundary=16,g.storage=12):T.isVector4?(g.boundary=16,g.storage=16):T.isMatrix3?(g.boundary=48,g.storage=48):T.isMatrix4?(g.boundary=64,g.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),g}function m(T){const g=T.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class G_{constructor(e={}){const{canvas:t=Dh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const T=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=Nt;let R=0,A=0,F=null,M=-1,b=null;const I=new mt,N=new mt;let z=null;const G=new Ze(0);let Z=0,V=t.width,W=t.height,U=1,le=null,de=null;const Me=new mt(0,0,V,W),De=new mt(0,0,V,W);let We=!1;const X=new _a;let O=!1,E=!1;const S=new ft,j=new k,ie=new mt,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function ye(){return F===null?U:1}let C=n;function te(w,$){return t.getContext(w,$)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oa}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",me,!1),C===null){const $="webgl2";if(C=te($,w),C===null)throw te($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let re,ue,oe,Y,L,fe,Be,Ke,D,y,K,se,he,ne,Fe,xe,Pe,Ie,_e,Te,ke,Ue,we,Ye;function B(){re=new jm(C),re.init(),Ue=new L_(C,re),ue=new Hm(C,re,e,Ue),oe=new R_(C,re),ue.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),Y=new Km(C),L=new __,fe=new P_(C,re,oe,L,ue,Ue,Y),Be=new Wm(x),Ke=new $m(x),D=new rf(C),we=new zm(C,D),y=new Zm(C,D,Y,we),K=new e0(C,y,D,Y),_e=new Qm(C,ue,fe),xe=new Vm(L),se=new m_(x,Be,Ke,re,ue,we,xe),he=new O_(x,L),ne=new v_,Fe=new b_(re),Ie=new Gm(x,Be,Ke,oe,K,p,c),Pe=new A_(x,K,ue),Ye=new B_(C,Y,ue,oe),Te=new km(C,re,Y),ke=new Jm(C,re,Y),Y.programs=se.programs,x.capabilities=ue,x.extensions=re,x.properties=L,x.renderLists=ne,x.shadowMap=Pe,x.state=oe,x.info=Y}B();const ve=new N_(x,C);this.xr=ve,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(V,W,!1))},this.getSize=function(w){return w.set(V,W)},this.setSize=function(w,$,Q=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,W=$,t.width=Math.floor(w*U),t.height=Math.floor($*U),Q===!0&&(t.style.width=w+"px",t.style.height=$+"px"),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(V*U,W*U).floor()},this.setDrawingBufferSize=function(w,$,Q){V=w,W=$,U=Q,t.width=Math.floor(w*Q),t.height=Math.floor($*Q),this.setViewport(0,0,w,$)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,$,Q,ee){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,$,Q,ee),oe.viewport(I.copy(Me).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,$,Q,ee){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,$,Q,ee),oe.scissor(N.copy(De).multiplyScalar(U).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(w){oe.setScissorTest(We=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(w=!0,$=!0,Q=!0){let ee=0;if(w){let J=!1;if(F!==null){const ge=F.texture.format;J=ge===da||ge===ha||ge===ua}if(J){const ge=F.texture.type,Ae=ge===dn||ge===ai||ge===hr||ge===dr||ge===la||ge===ca,Le=Ie.getClearColor(),Ce=Ie.getClearAlpha(),ze=Le.r,He=Le.g,Oe=Le.b;Ae?(_[0]=ze,_[1]=He,_[2]=Oe,_[3]=Ce,C.clearBufferuiv(C.COLOR,0,_)):(v[0]=ze,v[1]=He,v[2]=Oe,v[3]=Ce,C.clearBufferiv(C.COLOR,0,v))}else ee|=C.COLOR_BUFFER_BIT}$&&(ee|=C.DEPTH_BUFFER_BIT),Q&&(ee|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ie.dispose(),ne.dispose(),Fe.dispose(),L.dispose(),Be.dispose(),Ke.dispose(),K.dispose(),we.dispose(),Ye.dispose(),se.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",an),ve.removeEventListener("sessionend",Pa),Wn.stop()};function Ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=Y.autoReset,$=Pe.enabled,Q=Pe.autoUpdate,ee=Pe.needsUpdate,J=Pe.type;B(),Y.autoReset=w,Pe.enabled=$,Pe.autoUpdate=Q,Pe.needsUpdate=ee,Pe.type=J}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){const $=w.target;$.removeEventListener("dispose",ce),Ne($)}function Ne(w){Xe(w),L.remove(w)}function Xe(w){const $=L.get(w).programs;$!==void 0&&($.forEach(function(Q){se.releaseProgram(Q)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,Q,ee,J,ge){$===null&&($=q);const Ae=J.isMesh&&J.matrixWorld.determinant()<0,Le=uu(w,$,Q,ee,J);oe.setMaterial(ee,Ae);let Ce=Q.index,ze=1;if(ee.wireframe===!0){if(Ce=y.getWireframeAttribute(Q),Ce===void 0)return;ze=2}const He=Q.drawRange,Oe=Q.attributes.position;let Je=He.start*ze,nt=(He.start+He.count)*ze;ge!==null&&(Je=Math.max(Je,ge.start*ze),nt=Math.min(nt,(ge.start+ge.count)*ze)),Ce!==null?(Je=Math.max(Je,0),nt=Math.min(nt,Ce.count)):Oe!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,Oe.count));const pt=nt-Je;if(pt<0||pt===1/0)return;we.setup(J,ee,Le,Q,Ce);let at,st=Te;if(Ce!==null&&(at=D.get(Ce),st=ke,st.setIndex(at)),J.isMesh)ee.wireframe===!0?(oe.setLineWidth(ee.wireframeLinewidth*ye()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(J.isLine){let Ge=ee.linewidth;Ge===void 0&&(Ge=1),oe.setLineWidth(Ge*ye()),J.isLineSegments?st.setMode(C.LINES):J.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else J.isPoints?st.setMode(C.POINTS):J.isSprite&&st.setMode(C.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))st.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ge=J._multiDrawStarts,ct=J._multiDrawCounts,Qe=J._multiDrawCount,Gt=Ce?D.get(Ce).bytesPerElement:1,_i=L.get(ee).currentProgram.getUniforms();for(let zt=0;zt<Qe;zt++)_i.setValue(C,"_gl_DrawID",zt),st.render(Ge[zt]/Gt,ct[zt])}else if(J.isInstancedMesh)st.renderInstances(Je,pt,J.count);else if(Q.isInstancedBufferGeometry){const Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ct=Math.min(Q.instanceCount,Ge);st.renderInstances(Je,pt,ct)}else st.render(Je,pt)};function ot(w,$,Q){w.transparent===!0&&w.side===Qt&&w.forceSinglePass===!1?(w.side=Ut,w.needsUpdate=!0,Ar(w,$,Q),w.side=kn,w.needsUpdate=!0,Ar(w,$,Q),w.side=Qt):Ar(w,$,Q)}this.compile=function(w,$,Q=null){Q===null&&(Q=w),d=Fe.get(Q),d.init($),g.push(d),Q.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),w!==Q&&w.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),d.setupLights();const ee=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const ge=J.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const Le=ge[Ae];ot(Le,Q,J),ee.add(Le)}else ot(ge,Q,J),ee.add(ge)}),d=g.pop(),ee},this.compileAsync=function(w,$,Q=null){const ee=this.compile(w,$,Q);return new Promise(J=>{function ge(){if(ee.forEach(function(Ae){L.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){J(w);return}setTimeout(ge,10)}re.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let tt=null;function _n(w){tt&&tt(w)}function an(){Wn.stop()}function Pa(){Wn.start()}const Wn=new zc;Wn.setAnimationLoop(_n),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){tt=w,ve.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},ve.addEventListener("sessionstart",an),ve.addEventListener("sessionend",Pa),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera($),$=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,$,F),d=Fe.get(w,g.length),d.init($),g.push(d),S.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X.setFromProjectionMatrix(S,un,$.reversedDepth),E=this.localClippingEnabled,O=xe.init(this.clippingPlanes,E),m=ne.get(w,T.length),m.init(),T.push(m),ve.enabled===!0&&ve.isPresenting===!0){const ge=x.xr.getDepthSensingMesh();ge!==null&&Es(ge,$,-1/0,x.sortObjects)}Es(w,$,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(le,de),ae=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,ae&&Ie.addToRenderList(m,w),this.info.render.frame++,O===!0&&xe.beginShadows();const Q=d.state.shadowsArray;Pe.render(Q,w,$),O===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,J=m.transmissive;if(d.setupLights(),$.isArrayCamera){const ge=$.cameras;if(J.length>0)for(let Ae=0,Le=ge.length;Ae<Le;Ae++){const Ce=ge[Ae];Da(ee,J,w,Ce)}ae&&Ie.render(w);for(let Ae=0,Le=ge.length;Ae<Le;Ae++){const Ce=ge[Ae];La(m,w,Ce,Ce.viewport)}}else J.length>0&&Da(ee,J,w,$),ae&&Ie.render(w),La(m,w,$);F!==null&&A===0&&(fe.updateMultisampleRenderTarget(F),fe.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(x,w,$),we.resetDefaultState(),M=-1,b=null,g.pop(),g.length>0?(d=g[g.length-1],O===!0&&xe.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Es(w,$,Q,ee){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){ee&&ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(S);const Ae=K.update(w),Le=w.material;Le.visible&&m.push(w,Ae,Le,Q,ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const Ae=K.update(w),Le=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ie.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ie.copy(Ae.boundingSphere.center)),ie.applyMatrix4(w.matrixWorld).applyMatrix4(S)),Array.isArray(Le)){const Ce=Ae.groups;for(let ze=0,He=Ce.length;ze<He;ze++){const Oe=Ce[ze],Je=Le[Oe.materialIndex];Je&&Je.visible&&m.push(w,Ae,Je,Q,ie.z,Oe)}}else Le.visible&&m.push(w,Ae,Le,Q,ie.z,null)}}const ge=w.children;for(let Ae=0,Le=ge.length;Ae<Le;Ae++)Es(ge[Ae],$,Q,ee)}function La(w,$,Q,ee){const J=w.opaque,ge=w.transmissive,Ae=w.transparent;d.setupLightsView(Q),O===!0&&xe.setGlobalState(x.clippingPlanes,Q),ee&&oe.viewport(I.copy(ee)),J.length>0&&wr(J,$,Q),ge.length>0&&wr(ge,$,Q),Ae.length>0&&wr(Ae,$,Q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Da(w,$,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ee.id]===void 0&&(d.state.transmissionRenderTarget[ee.id]=new ci(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?xr:dn,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ge=d.state.transmissionRenderTarget[ee.id],Ae=ee.viewport||I;ge.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Le=x.getRenderTarget(),Ce=x.getActiveCubeFace(),ze=x.getActiveMipmapLevel();x.setRenderTarget(ge),x.getClearColor(G),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),ae&&Ie.render(Q);const He=x.toneMapping;x.toneMapping=zn;const Oe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),d.setupLightsView(ee),O===!0&&xe.setGlobalState(x.clippingPlanes,ee),wr(w,Q,ee),fe.updateMultisampleRenderTarget(ge),fe.updateRenderTargetMipmap(ge),re.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let nt=0,pt=$.length;nt<pt;nt++){const at=$[nt],st=at.object,Ge=at.geometry,ct=at.material,Qe=at.group;if(ct.side===Qt&&st.layers.test(ee.layers)){const Gt=ct.side;ct.side=Ut,ct.needsUpdate=!0,Fa(st,Q,ee,Ge,ct,Qe),ct.side=Gt,ct.needsUpdate=!0,Je=!0}}Je===!0&&(fe.updateMultisampleRenderTarget(ge),fe.updateRenderTargetMipmap(ge))}x.setRenderTarget(Le,Ce,ze),x.setClearColor(G,Z),Oe!==void 0&&(ee.viewport=Oe),x.toneMapping=He}function wr(w,$,Q){const ee=$.isScene===!0?$.overrideMaterial:null;for(let J=0,ge=w.length;J<ge;J++){const Ae=w[J],Le=Ae.object,Ce=Ae.geometry,ze=Ae.group;let He=Ae.material;He.allowOverride===!0&&ee!==null&&(He=ee),Le.layers.test(Q.layers)&&Fa(Le,$,Q,Ce,He,ze)}}function Fa(w,$,Q,ee,J,ge){w.onBeforeRender(x,$,Q,ee,J,ge),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(x,$,Q,ee,w,ge),J.transparent===!0&&J.side===Qt&&J.forceSinglePass===!1?(J.side=Ut,J.needsUpdate=!0,x.renderBufferDirect(Q,$,ee,J,w,ge),J.side=kn,J.needsUpdate=!0,x.renderBufferDirect(Q,$,ee,J,w,ge),J.side=Qt):x.renderBufferDirect(Q,$,ee,J,w,ge),w.onAfterRender(x,$,Q,ee,J,ge)}function Ar(w,$,Q){$.isScene!==!0&&($=q);const ee=L.get(w),J=d.state.lights,ge=d.state.shadowsArray,Ae=J.state.version,Le=se.getParameters(w,J.state,ge,$,Q),Ce=se.getProgramCacheKey(Le);let ze=ee.programs;ee.environment=w.isMeshStandardMaterial?$.environment:null,ee.fog=$.fog,ee.envMap=(w.isMeshStandardMaterial?Ke:Be).get(w.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",ce),ze=new Map,ee.programs=ze);let He=ze.get(Ce);if(He!==void 0){if(ee.currentProgram===He&&ee.lightsStateVersion===Ae)return Na(w,Le),He}else Le.uniforms=se.getUniforms(w),w.onBeforeCompile(Le,x),He=se.acquireProgram(Le,Ce),ze.set(Ce,He),ee.uniforms=Le.uniforms;const Oe=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=xe.uniform),Na(w,Le),ee.needsLights=du(w),ee.lightsStateVersion=Ae,ee.needsLights&&(Oe.ambientLightColor.value=J.state.ambient,Oe.lightProbe.value=J.state.probe,Oe.directionalLights.value=J.state.directional,Oe.directionalLightShadows.value=J.state.directionalShadow,Oe.spotLights.value=J.state.spot,Oe.spotLightShadows.value=J.state.spotShadow,Oe.rectAreaLights.value=J.state.rectArea,Oe.ltc_1.value=J.state.rectAreaLTC1,Oe.ltc_2.value=J.state.rectAreaLTC2,Oe.pointLights.value=J.state.point,Oe.pointLightShadows.value=J.state.pointShadow,Oe.hemisphereLights.value=J.state.hemi,Oe.directionalShadowMap.value=J.state.directionalShadowMap,Oe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Oe.spotShadowMap.value=J.state.spotShadowMap,Oe.spotLightMatrix.value=J.state.spotLightMatrix,Oe.spotLightMap.value=J.state.spotLightMap,Oe.pointShadowMap.value=J.state.pointShadowMap,Oe.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=He,ee.uniformsList=null,He}function Ia(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=as.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function Na(w,$){const Q=L.get(w);Q.outputColorSpace=$.outputColorSpace,Q.batching=$.batching,Q.batchingColor=$.batchingColor,Q.instancing=$.instancing,Q.instancingColor=$.instancingColor,Q.instancingMorph=$.instancingMorph,Q.skinning=$.skinning,Q.morphTargets=$.morphTargets,Q.morphNormals=$.morphNormals,Q.morphColors=$.morphColors,Q.morphTargetsCount=$.morphTargetsCount,Q.numClippingPlanes=$.numClippingPlanes,Q.numIntersection=$.numClipIntersection,Q.vertexAlphas=$.vertexAlphas,Q.vertexTangents=$.vertexTangents,Q.toneMapping=$.toneMapping}function uu(w,$,Q,ee,J){$.isScene!==!0&&($=q),fe.resetTextureUnits();const ge=$.fog,Ae=ee.isMeshStandardMaterial?$.environment:null,Le=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zi,Ce=(ee.isMeshStandardMaterial?Ke:Be).get(ee.envMap||Ae),ze=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Oe=!!Q.morphAttributes.position,Je=!!Q.morphAttributes.normal,nt=!!Q.morphAttributes.color;let pt=zn;ee.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(pt=x.toneMapping);const at=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,st=at!==void 0?at.length:0,Ge=L.get(ee),ct=d.state.lights;if(O===!0&&(E===!0||w!==b)){const Pt=w===b&&ee.id===M;xe.setState(ee,w,Pt)}let Qe=!1;ee.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ct.state.version||Ge.outputColorSpace!==Le||J.isBatchedMesh&&Ge.batching===!1||!J.isBatchedMesh&&Ge.batching===!0||J.isBatchedMesh&&Ge.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ge.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||J.isInstancedMesh&&Ge.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ge.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ge.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ge.instancingMorph===!1&&J.morphTexture!==null||Ge.envMap!==Ce||ee.fog===!0&&Ge.fog!==ge||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==xe.numPlanes||Ge.numIntersection!==xe.numIntersection)||Ge.vertexAlphas!==ze||Ge.vertexTangents!==He||Ge.morphTargets!==Oe||Ge.morphNormals!==Je||Ge.morphColors!==nt||Ge.toneMapping!==pt||Ge.morphTargetsCount!==st)&&(Qe=!0):(Qe=!0,Ge.__version=ee.version);let Gt=Ge.currentProgram;Qe===!0&&(Gt=Ar(ee,$,J));let _i=!1,zt=!1,ji=!1;const ut=Gt.getUniforms(),Xt=Ge.uniforms;if(oe.useProgram(Gt.program)&&(_i=!0,zt=!0,ji=!0),ee.id!==M&&(M=ee.id,zt=!0),_i||b!==w){oe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",w.projectionMatrix),ut.setValue(C,"viewMatrix",w.matrixWorldInverse);const Dt=ut.map.cameraPosition;Dt!==void 0&&Dt.setValue(C,j.setFromMatrixPosition(w.matrixWorld)),ue.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&ut.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,zt=!0,ji=!0)}if(J.isSkinnedMesh){ut.setOptional(C,J,"bindMatrix"),ut.setOptional(C,J,"bindMatrixInverse");const Pt=J.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(C,"boneTexture",Pt.boneTexture,fe))}J.isBatchedMesh&&(ut.setOptional(C,J,"batchingTexture"),ut.setValue(C,"batchingTexture",J._matricesTexture,fe),ut.setOptional(C,J,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",J._indirectTexture,fe),ut.setOptional(C,J,"batchingColorTexture"),J._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",J._colorsTexture,fe));const Yt=Q.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&_e.update(J,Q,Gt),(zt||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,ut.setValue(C,"receiveShadow",J.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Xt.envMap.value=Ce,Xt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&$.environment!==null&&(Xt.envMapIntensity.value=$.environmentIntensity),zt&&(ut.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&hu(Xt,ji),ge&&ee.fog===!0&&he.refreshFogUniforms(Xt,ge),he.refreshMaterialUniforms(Xt,ee,U,W,d.state.transmissionRenderTarget[w.id]),as.upload(C,Ia(Ge),Xt,fe)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(as.upload(C,Ia(Ge),Xt,fe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&ut.setValue(C,"center",J.center),ut.setValue(C,"modelViewMatrix",J.modelViewMatrix),ut.setValue(C,"normalMatrix",J.normalMatrix),ut.setValue(C,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Pt=ee.uniformsGroups;for(let Dt=0,bs=Pt.length;Dt<bs;Dt++){const Xn=Pt[Dt];Ye.update(Xn,Gt),Ye.bind(Xn,Gt)}}return Gt}function hu(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function du(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,$,Q){const ee=L.get(w);ee.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),L.get(w.texture).__webglTexture=$,L.get(w.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,$){const Q=L.get(w);Q.__webglFramebuffer=$,Q.__useDefaultFramebuffer=$===void 0};const fu=C.createFramebuffer();this.setRenderTarget=function(w,$=0,Q=0){F=w,R=$,A=Q;let ee=!0,J=null,ge=!1,Ae=!1;if(w){const Ce=L.get(w);if(Ce.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(C.FRAMEBUFFER,null),ee=!1;else if(Ce.__webglFramebuffer===void 0)fe.setupRenderTarget(w);else if(Ce.__hasExternalTextures)fe.rebindTextures(w,L.get(w.texture).__webglTexture,L.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(Ce.__boundDepthTexture!==Oe){if(Oe!==null&&L.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(w)}}const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ae=!0);const He=L.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[$])?J=He[$][Q]:J=He[$],ge=!0):w.samples>0&&fe.useMultisampledRTT(w)===!1?J=L.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?J=He[Q]:J=He,I.copy(w.viewport),N.copy(w.scissor),z=w.scissorTest}else I.copy(Me).multiplyScalar(U).floor(),N.copy(De).multiplyScalar(U).floor(),z=We;if(Q!==0&&(J=fu),oe.bindFramebuffer(C.FRAMEBUFFER,J)&&ee&&oe.drawBuffers(w,J),oe.viewport(I),oe.scissor(N),oe.setScissorTest(z),ge){const Ce=L.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce.__webglTexture,Q)}else if(Ae){const Ce=$;for(let ze=0;ze<w.textures.length;ze++){const He=L.get(w.textures[ze]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ze,He.__webglTexture,Q,Ce)}}else if(w!==null&&Q!==0){const Ce=L.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,Q)}M=-1},this.readRenderTargetPixels=function(w,$,Q,ee,J,ge,Ae,Le=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=L.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){oe.bindFramebuffer(C.FRAMEBUFFER,Ce);try{const ze=w.textures[Le],He=ze.format,Oe=ze.type;if(!ue.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-ee&&Q>=0&&Q<=w.height-J&&(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Le),C.readPixels($,Q,ee,J,Ue.convert(He),Ue.convert(Oe),ge))}finally{const ze=F!==null?L.get(F).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,$,Q,ee,J,ge,Ae,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=L.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce)if($>=0&&$<=w.width-ee&&Q>=0&&Q<=w.height-J){oe.bindFramebuffer(C.FRAMEBUFFER,Ce);const ze=w.textures[Le],He=ze.format,Oe=ze.type;if(!ue.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.bufferData(C.PIXEL_PACK_BUFFER,ge.byteLength,C.STREAM_READ),w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Le),C.readPixels($,Q,ee,J,Ue.convert(He),Ue.convert(Oe),0);const nt=F!==null?L.get(F).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,nt);const pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Fh(C,pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ge),C.deleteBuffer(Je),C.deleteSync(pt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,$=null,Q=0){const ee=Math.pow(2,-Q),J=Math.floor(w.image.width*ee),ge=Math.floor(w.image.height*ee),Ae=$!==null?$.x:0,Le=$!==null?$.y:0;fe.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,Q,0,0,Ae,Le,J,ge),oe.unbindTexture()};const pu=C.createFramebuffer(),mu=C.createFramebuffer();this.copyTextureToTexture=function(w,$,Q=null,ee=null,J=0,ge=null){ge===null&&(J!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=J,J=0):ge=0);let Ae,Le,Ce,ze,He,Oe,Je,nt,pt;const at=w.isCompressedTexture?w.mipmaps[ge]:w.image;if(Q!==null)Ae=Q.max.x-Q.min.x,Le=Q.max.y-Q.min.y,Ce=Q.isBox3?Q.max.z-Q.min.z:1,ze=Q.min.x,He=Q.min.y,Oe=Q.isBox3?Q.min.z:0;else{const Yt=Math.pow(2,-J);Ae=Math.floor(at.width*Yt),Le=Math.floor(at.height*Yt),w.isDataArrayTexture?Ce=at.depth:w.isData3DTexture?Ce=Math.floor(at.depth*Yt):Ce=1,ze=0,He=0,Oe=0}ee!==null?(Je=ee.x,nt=ee.y,pt=ee.z):(Je=0,nt=0,pt=0);const st=Ue.convert($.format),Ge=Ue.convert($.type);let ct;$.isData3DTexture?(fe.setTexture3D($,0),ct=C.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(fe.setTexture2DArray($,0),ct=C.TEXTURE_2D_ARRAY):(fe.setTexture2D($,0),ct=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,$.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,$.unpackAlignment);const Qe=C.getParameter(C.UNPACK_ROW_LENGTH),Gt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),_i=C.getParameter(C.UNPACK_SKIP_PIXELS),zt=C.getParameter(C.UNPACK_SKIP_ROWS),ji=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,at.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,He),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Oe);const ut=w.isDataArrayTexture||w.isData3DTexture,Xt=$.isDataArrayTexture||$.isData3DTexture;if(w.isDepthTexture){const Yt=L.get(w),Pt=L.get($),Dt=L.get(Yt.__renderTarget),bs=L.get(Pt.__renderTarget);oe.bindFramebuffer(C.READ_FRAMEBUFFER,Dt.__webglFramebuffer),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Xn=0;Xn<Ce;Xn++)ut&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,L.get(w).__webglTexture,J,Oe+Xn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,L.get($).__webglTexture,ge,pt+Xn)),C.blitFramebuffer(ze,He,Ae,Le,Je,nt,Ae,Le,C.DEPTH_BUFFER_BIT,C.NEAREST);oe.bindFramebuffer(C.READ_FRAMEBUFFER,null),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||L.has(w)){const Yt=L.get(w),Pt=L.get($);oe.bindFramebuffer(C.READ_FRAMEBUFFER,pu),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,mu);for(let Dt=0;Dt<Ce;Dt++)ut?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yt.__webglTexture,J,Oe+Dt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yt.__webglTexture,J),Xt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,ge,pt+Dt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,ge),J!==0?C.blitFramebuffer(ze,He,Ae,Le,Je,nt,Ae,Le,C.COLOR_BUFFER_BIT,C.NEAREST):Xt?C.copyTexSubImage3D(ct,ge,Je,nt,pt+Dt,ze,He,Ae,Le):C.copyTexSubImage2D(ct,ge,Je,nt,ze,He,Ae,Le);oe.bindFramebuffer(C.READ_FRAMEBUFFER,null),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Xt?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(ct,ge,Je,nt,pt,Ae,Le,Ce,st,Ge,at.data):$.isCompressedArrayTexture?C.compressedTexSubImage3D(ct,ge,Je,nt,pt,Ae,Le,Ce,st,at.data):C.texSubImage3D(ct,ge,Je,nt,pt,Ae,Le,Ce,st,Ge,at):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ge,Je,nt,Ae,Le,st,Ge,at.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ge,Je,nt,at.width,at.height,st,at.data):C.texSubImage2D(C.TEXTURE_2D,ge,Je,nt,Ae,Le,st,Ge,at);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_i),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ji),ge===0&&$.generateMipmaps&&C.generateMipmap(ct),oe.unbindTexture()},this.initRenderTarget=function(w){L.get(w).__webglFramebuffer===void 0&&fe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?fe.setTextureCube(w,0):w.isData3DTexture?fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?fe.setTexture2DArray(w,0):fe.setTexture2D(w,0),oe.unbindTexture()},this.resetState=function(){R=0,A=0,F=null,oe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const z_=Nt;class fs extends xa{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,r){const s=this,o=new qd(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e){const t=this;function n(X,O){if(X.nodeType!==1)return;const E=x(X);let S=!1,j=null;switch(X.nodeName){case"svg":O=_(X,O);break;case"style":s(X);break;case"g":O=_(X,O);break;case"path":O=_(X,O),X.hasAttribute("d")&&(j=r(X));break;case"rect":O=_(X,O),j=c(X);break;case"polygon":O=_(X,O),j=l(X);break;case"polyline":O=_(X,O),j=u(X);break;case"circle":O=_(X,O),j=h(X);break;case"ellipse":O=_(X,O),j=f(X);break;case"line":O=_(X,O),j=p(X);break;case"defs":S=!0;break;case"use":O=_(X,O);const ae=(X.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ye=X.viewportElement.getElementById(ae);ye?n(ye,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+ae);break}j&&(O.fill!==void 0&&O.fill!=="none"&&j.color.setStyle(O.fill,z_),R(j,Me),N.push(j),j.userData={node:X,style:O});const ie=X.childNodes;for(let q=0;q<ie.length;q++){const ae=ie[q];S&&ae.nodeName!=="style"&&ae.nodeName!=="defs"||n(ae,O)}E&&(G.pop(),G.length>0?Me.copy(G[G.length-1]):Me.identity())}function r(X){const O=new Zn,E=new pe,S=new pe,j=new pe;let ie=!0,q=!1;const ae=X.getAttribute("d");if(ae===""||ae==="none")return null;const ye=ae.match(/[a-df-z][^a-df-z]*/ig);for(let C=0,te=ye.length;C<te;C++){const re=ye[C],ue=re.charAt(0),oe=re.slice(1).trim();ie===!0&&(q=!0,ie=!1);let Y;switch(ue){case"M":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=2)E.x=Y[L+0],E.y=Y[L+1],S.x=E.x,S.y=E.y,L===0?O.moveTo(E.x,E.y):O.lineTo(E.x,E.y),L===0&&j.copy(E);break;case"H":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L++)E.x=Y[L],S.x=E.x,S.y=E.y,O.lineTo(E.x,E.y),L===0&&q===!0&&j.copy(E);break;case"V":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L++)E.y=Y[L],S.x=E.x,S.y=E.y,O.lineTo(E.x,E.y),L===0&&q===!0&&j.copy(E);break;case"L":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=2)E.x=Y[L+0],E.y=Y[L+1],S.x=E.x,S.y=E.y,O.lineTo(E.x,E.y),L===0&&q===!0&&j.copy(E);break;case"C":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=6)O.bezierCurveTo(Y[L+0],Y[L+1],Y[L+2],Y[L+3],Y[L+4],Y[L+5]),S.x=Y[L+2],S.y=Y[L+3],E.x=Y[L+4],E.y=Y[L+5],L===0&&q===!0&&j.copy(E);break;case"S":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=4)O.bezierCurveTo(v(E.x,S.x),v(E.y,S.y),Y[L+0],Y[L+1],Y[L+2],Y[L+3]),S.x=Y[L+0],S.y=Y[L+1],E.x=Y[L+2],E.y=Y[L+3],L===0&&q===!0&&j.copy(E);break;case"Q":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=4)O.quadraticCurveTo(Y[L+0],Y[L+1],Y[L+2],Y[L+3]),S.x=Y[L+0],S.y=Y[L+1],E.x=Y[L+2],E.y=Y[L+3],L===0&&q===!0&&j.copy(E);break;case"T":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=2){const Be=v(E.x,S.x),Ke=v(E.y,S.y);O.quadraticCurveTo(Be,Ke,Y[L+0],Y[L+1]),S.x=Be,S.y=Ke,E.x=Y[L+0],E.y=Y[L+1],L===0&&q===!0&&j.copy(E)}break;case"A":Y=m(oe,[3,4],7);for(let L=0,fe=Y.length;L<fe;L+=7){if(Y[L+5]==E.x&&Y[L+6]==E.y)continue;const Be=E.clone();E.x=Y[L+5],E.y=Y[L+6],S.x=E.x,S.y=E.y,o(O,Y[L],Y[L+1],Y[L+2],Y[L+3],Y[L+4],Be,E),L===0&&q===!0&&j.copy(E)}break;case"m":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=2)E.x+=Y[L+0],E.y+=Y[L+1],S.x=E.x,S.y=E.y,L===0?O.moveTo(E.x,E.y):O.lineTo(E.x,E.y),L===0&&j.copy(E);break;case"h":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L++)E.x+=Y[L],S.x=E.x,S.y=E.y,O.lineTo(E.x,E.y),L===0&&q===!0&&j.copy(E);break;case"v":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L++)E.y+=Y[L],S.x=E.x,S.y=E.y,O.lineTo(E.x,E.y),L===0&&q===!0&&j.copy(E);break;case"l":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=2)E.x+=Y[L+0],E.y+=Y[L+1],S.x=E.x,S.y=E.y,O.lineTo(E.x,E.y),L===0&&q===!0&&j.copy(E);break;case"c":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=6)O.bezierCurveTo(E.x+Y[L+0],E.y+Y[L+1],E.x+Y[L+2],E.y+Y[L+3],E.x+Y[L+4],E.y+Y[L+5]),S.x=E.x+Y[L+2],S.y=E.y+Y[L+3],E.x+=Y[L+4],E.y+=Y[L+5],L===0&&q===!0&&j.copy(E);break;case"s":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=4)O.bezierCurveTo(v(E.x,S.x),v(E.y,S.y),E.x+Y[L+0],E.y+Y[L+1],E.x+Y[L+2],E.y+Y[L+3]),S.x=E.x+Y[L+0],S.y=E.y+Y[L+1],E.x+=Y[L+2],E.y+=Y[L+3],L===0&&q===!0&&j.copy(E);break;case"q":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=4)O.quadraticCurveTo(E.x+Y[L+0],E.y+Y[L+1],E.x+Y[L+2],E.y+Y[L+3]),S.x=E.x+Y[L+0],S.y=E.y+Y[L+1],E.x+=Y[L+2],E.y+=Y[L+3],L===0&&q===!0&&j.copy(E);break;case"t":Y=m(oe);for(let L=0,fe=Y.length;L<fe;L+=2){const Be=v(E.x,S.x),Ke=v(E.y,S.y);O.quadraticCurveTo(Be,Ke,E.x+Y[L+0],E.y+Y[L+1]),S.x=Be,S.y=Ke,E.x=E.x+Y[L+0],E.y=E.y+Y[L+1],L===0&&q===!0&&j.copy(E)}break;case"a":Y=m(oe,[3,4],7);for(let L=0,fe=Y.length;L<fe;L+=7){if(Y[L+5]==0&&Y[L+6]==0)continue;const Be=E.clone();E.x+=Y[L+5],E.y+=Y[L+6],S.x=E.x,S.y=E.y,o(O,Y[L],Y[L+1],Y[L+2],Y[L+3],Y[L+4],Be,E),L===0&&q===!0&&j.copy(E)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(E.copy(j),O.currentPath.currentPoint.copy(E),ie=!0);break;default:console.warn(re)}q=!1}return O}function s(X){if(!(!X.sheet||!X.sheet.cssRules||!X.sheet.cssRules.length))for(let O=0;O<X.sheet.cssRules.length;O++){const E=X.sheet.cssRules[O];if(E.type!==1)continue;const S=E.selectorText.split(/,/gm).filter(Boolean).map(j=>j.trim());for(let j=0;j<S.length;j++){const ie=Object.fromEntries(Object.entries(E.style).filter(([,q])=>q!==""));z[S[j]]=Object.assign(z[S[j]]||{},ie)}}}function o(X,O,E,S,j,ie,q,ae){if(O==0||E==0){X.lineTo(ae.x,ae.y);return}S=S*Math.PI/180,O=Math.abs(O),E=Math.abs(E);const ye=(q.x-ae.x)/2,C=(q.y-ae.y)/2,te=Math.cos(S)*ye+Math.sin(S)*C,re=-Math.sin(S)*ye+Math.cos(S)*C;let ue=O*O,oe=E*E;const Y=te*te,L=re*re,fe=Y/ue+L/oe;if(fe>1){const xe=Math.sqrt(fe);O=xe*O,E=xe*E,ue=O*O,oe=E*E}const Be=ue*L+oe*Y,Ke=(ue*oe-Be)/Be;let D=Math.sqrt(Math.max(0,Ke));j===ie&&(D=-D);const y=D*O*re/E,K=-D*E*te/O,se=Math.cos(S)*y-Math.sin(S)*K+(q.x+ae.x)/2,he=Math.sin(S)*y+Math.cos(S)*K+(q.y+ae.y)/2,ne=a(1,0,(te-y)/O,(re-K)/E),Fe=a((te-y)/O,(re-K)/E,(-te-y)/O,(-re-K)/E)%(Math.PI*2);X.currentPath.absellipse(se,he,O,E,ne,ne+Fe,ie===0,S)}function a(X,O,E,S){const j=X*E+O*S,ie=Math.sqrt(X*X+O*O)*Math.sqrt(E*E+S*S);let q=Math.acos(Math.max(-1,Math.min(1,j/ie)));return X*S-O*E<0&&(q=-q),q}function c(X){const O=g(X.getAttribute("x")||0),E=g(X.getAttribute("y")||0),S=g(X.getAttribute("rx")||X.getAttribute("ry")||0),j=g(X.getAttribute("ry")||X.getAttribute("rx")||0),ie=g(X.getAttribute("width")),q=g(X.getAttribute("height")),ae=1-.551915024494,ye=new Zn;return ye.moveTo(O+S,E),ye.lineTo(O+ie-S,E),(S!==0||j!==0)&&ye.bezierCurveTo(O+ie-S*ae,E,O+ie,E+j*ae,O+ie,E+j),ye.lineTo(O+ie,E+q-j),(S!==0||j!==0)&&ye.bezierCurveTo(O+ie,E+q-j*ae,O+ie-S*ae,E+q,O+ie-S,E+q),ye.lineTo(O+S,E+q),(S!==0||j!==0)&&ye.bezierCurveTo(O+S*ae,E+q,O,E+q-j*ae,O,E+q-j),ye.lineTo(O,E+j),(S!==0||j!==0)&&ye.bezierCurveTo(O,E+j*ae,O+S*ae,E,O+S,E),ye}function l(X){function O(ie,q,ae){const ye=g(q),C=g(ae);j===0?S.moveTo(ye,C):S.lineTo(ye,C),j++}const E=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new Zn;let j=0;return X.getAttribute("points").replace(E,O),S.currentPath.autoClose=!0,S}function u(X){function O(ie,q,ae){const ye=g(q),C=g(ae);j===0?S.moveTo(ye,C):S.lineTo(ye,C),j++}const E=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,S=new Zn;let j=0;return X.getAttribute("points").replace(E,O),S.currentPath.autoClose=!1,S}function h(X){const O=g(X.getAttribute("cx")||0),E=g(X.getAttribute("cy")||0),S=g(X.getAttribute("r")||0),j=new Ui;j.absarc(O,E,S,0,Math.PI*2);const ie=new Zn;return ie.subPaths.push(j),ie}function f(X){const O=g(X.getAttribute("cx")||0),E=g(X.getAttribute("cy")||0),S=g(X.getAttribute("rx")||0),j=g(X.getAttribute("ry")||0),ie=new Ui;ie.absellipse(O,E,S,j,0,Math.PI*2);const q=new Zn;return q.subPaths.push(ie),q}function p(X){const O=g(X.getAttribute("x1")||0),E=g(X.getAttribute("y1")||0),S=g(X.getAttribute("x2")||0),j=g(X.getAttribute("y2")||0),ie=new Zn;return ie.moveTo(O,E),ie.lineTo(S,j),ie.currentPath.autoClose=!1,ie}function _(X,O){O=Object.assign({},O);let E={};if(X.hasAttribute("class")){const q=X.getAttribute("class").split(/\s/).filter(Boolean).map(ae=>ae.trim());for(let ae=0;ae<q.length;ae++)E=Object.assign(E,z["."+q[ae]])}X.hasAttribute("id")&&(E=Object.assign(E,z["#"+X.getAttribute("id")]));function S(q,ae,ye){ye===void 0&&(ye=function(te){return te.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),te}),X.hasAttribute(q)&&(O[ae]=ye(X.getAttribute(q))),E[q]&&(O[ae]=ye(E[q])),X.style&&X.style[q]!==""&&(O[ae]=ye(X.style[q]))}function j(q){return Math.max(0,Math.min(1,g(q)))}function ie(q){return Math.max(0,g(q))}return S("fill","fill"),S("fill-opacity","fillOpacity",j),S("fill-rule","fillRule"),S("opacity","opacity",j),S("stroke","stroke"),S("stroke-opacity","strokeOpacity",j),S("stroke-width","strokeWidth",ie),S("stroke-linejoin","strokeLineJoin"),S("stroke-linecap","strokeLineCap"),S("stroke-miterlimit","strokeMiterLimit",ie),S("visibility","visibility"),O}function v(X,O){return X-(O-X)}function m(X,O,E){if(typeof X!="string")throw new TypeError("Invalid input: "+typeof X);const S={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},j=0,ie=1,q=2,ae=3;let ye=j,C=!0,te="",re="";const ue=[];function oe(Be,Ke,D){const y=new SyntaxError('Unexpected character "'+Be+'" at index '+Ke+".");throw y.partial=D,y}function Y(){te!==""&&(re===""?ue.push(Number(te)):ue.push(Number(te)*Math.pow(10,Number(re)))),te="",re=""}let L;const fe=X.length;for(let Be=0;Be<fe;Be++){if(L=X[Be],Array.isArray(O)&&O.includes(ue.length%E)&&S.FLAGS.test(L)){ye=ie,te=L,Y();continue}if(ye===j){if(S.WHITESPACE.test(L))continue;if(S.DIGIT.test(L)||S.SIGN.test(L)){ye=ie,te=L;continue}if(S.POINT.test(L)){ye=q,te=L;continue}S.COMMA.test(L)&&(C&&oe(L,Be,ue),C=!0)}if(ye===ie){if(S.DIGIT.test(L)){te+=L;continue}if(S.POINT.test(L)){te+=L,ye=q;continue}if(S.EXP.test(L)){ye=ae;continue}S.SIGN.test(L)&&te.length===1&&S.SIGN.test(te[0])&&oe(L,Be,ue)}if(ye===q){if(S.DIGIT.test(L)){te+=L;continue}if(S.EXP.test(L)){ye=ae;continue}S.POINT.test(L)&&te[te.length-1]==="."&&oe(L,Be,ue)}if(ye===ae){if(S.DIGIT.test(L)){re+=L;continue}if(S.SIGN.test(L)){if(re===""){re+=L;continue}re.length===1&&S.SIGN.test(re)&&oe(L,Be,ue)}}S.WHITESPACE.test(L)?(Y(),ye=j,C=!1):S.COMMA.test(L)?(Y(),ye=j,C=!0):S.SIGN.test(L)?(Y(),ye=ie,te=L):S.POINT.test(L)?(Y(),ye=q,te=L):oe(L,Be,ue)}return Y(),ue}const d=["mm","cm","in","pt","pc","px"],T={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(X){let O="px";if(typeof X=="string"||X instanceof String)for(let S=0,j=d.length;S<j;S++){const ie=d[S];if(X.endsWith(ie)){O=ie,X=X.substring(0,X.length-ie.length);break}}let E;return O==="px"&&t.defaultUnit!=="px"?E=T.in[t.defaultUnit]/t.defaultDPI:(E=T[O][t.defaultUnit],E<0&&(E=T[O].in*t.defaultDPI)),E*parseFloat(X)}function x(X){if(!(X.hasAttribute("transform")||X.nodeName==="use"&&(X.hasAttribute("x")||X.hasAttribute("y"))))return null;const O=P(X);return G.length>0&&O.premultiply(G[G.length-1]),Me.copy(O),G.push(O),O}function P(X){const O=new Ve,E=Z;if(X.nodeName==="use"&&(X.hasAttribute("x")||X.hasAttribute("y"))){const S=g(X.getAttribute("x")),j=g(X.getAttribute("y"));O.translate(S,j)}if(X.hasAttribute("transform")){const S=X.getAttribute("transform").split(")");for(let j=S.length-1;j>=0;j--){const ie=S[j].trim();if(ie==="")continue;const q=ie.indexOf("("),ae=ie.length;if(q>0&&q<ae){const ye=ie.slice(0,q),C=m(ie.slice(q+1));switch(E.identity(),ye){case"translate":if(C.length>=1){const te=C[0];let re=0;C.length>=2&&(re=C[1]),E.translate(te,re)}break;case"rotate":if(C.length>=1){let te=0,re=0,ue=0;te=C[0]*Math.PI/180,C.length>=3&&(re=C[1],ue=C[2]),V.makeTranslation(-re,-ue),W.makeRotation(te),U.multiplyMatrices(W,V),V.makeTranslation(re,ue),E.multiplyMatrices(V,U)}break;case"scale":if(C.length>=1){const te=C[0];let re=te;C.length>=2&&(re=C[1]),E.scale(te,re)}break;case"skewX":C.length===1&&E.set(1,Math.tan(C[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":C.length===1&&E.set(1,0,0,Math.tan(C[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":C.length===6&&E.set(C[0],C[2],C[4],C[1],C[3],C[5],0,0,1);break}}O.premultiply(E)}}return O}function R(X,O){function E(q){de.set(q.x,q.y,1).applyMatrix3(O),q.set(de.x,de.y)}function S(q){const ae=q.xRadius,ye=q.yRadius,C=Math.cos(q.aRotation),te=Math.sin(q.aRotation),re=new k(ae*C,ae*te,0),ue=new k(-ye*te,ye*C,0),oe=re.applyMatrix3(O),Y=ue.applyMatrix3(O),L=Z.set(oe.x,Y.x,0,oe.y,Y.y,0,0,0,1),fe=V.copy(L).invert(),D=W.copy(fe).transpose().multiply(fe).elements,y=I(D[0],D[1],D[4]),K=Math.sqrt(y.rt1),se=Math.sqrt(y.rt2);if(q.xRadius=1/K,q.yRadius=1/se,q.aRotation=Math.atan2(y.sn,y.cs),!((q.aEndAngle-q.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ne=V.set(K,0,0,0,se,0,0,0,1),Fe=W.set(y.cs,y.sn,0,-y.sn,y.cs,0,0,0,1),xe=ne.multiply(Fe).multiply(L),Pe=Ie=>{const{x:_e,y:Te}=new k(Math.cos(Ie),Math.sin(Ie),0).applyMatrix3(xe);return Math.atan2(Te,_e)};q.aStartAngle=Pe(q.aStartAngle),q.aEndAngle=Pe(q.aEndAngle),A(O)&&(q.aClockwise=!q.aClockwise)}}function j(q){const ae=M(O),ye=b(O);q.xRadius*=ae,q.yRadius*=ye;const C=ae>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);q.aRotation+=C,A(O)&&(q.aStartAngle*=-1,q.aEndAngle*=-1,q.aClockwise=!q.aClockwise)}const ie=X.subPaths;for(let q=0,ae=ie.length;q<ae;q++){const C=ie[q].curves;for(let te=0;te<C.length;te++){const re=C[te];re.isLineCurve?(E(re.v1),E(re.v2)):re.isCubicBezierCurve?(E(re.v0),E(re.v1),E(re.v2),E(re.v3)):re.isQuadraticBezierCurve?(E(re.v0),E(re.v1),E(re.v2)):re.isEllipseCurve&&(le.set(re.aX,re.aY),E(le),re.aX=le.x,re.aY=le.y,F(O)?S(re):j(re))}}}function A(X){const O=X.elements;return O[0]*O[4]-O[1]*O[3]<0}function F(X){const O=X.elements,E=O[0]*O[3]+O[1]*O[4];if(E===0)return!1;const S=M(X),j=b(X);return Math.abs(E/(S*j))>Number.EPSILON}function M(X){const O=X.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function b(X){const O=X.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function I(X,O,E){let S,j,ie,q,ae;const ye=X+E,C=X-E,te=Math.sqrt(C*C+4*O*O);return ye>0?(S=.5*(ye+te),ae=1/S,j=X*ae*E-O*ae*O):ye<0?j=.5*(ye-te):(S=.5*te,j=-.5*te),C>0?ie=C+te:ie=C-te,Math.abs(ie)>2*Math.abs(O)?(ae=-2*O/ie,q=1/Math.sqrt(1+ae*ae),ie=ae*q):Math.abs(O)===0?(ie=1,q=0):(ae=-.5*ie/O,ie=1/Math.sqrt(1+ae*ae),q=ae*ie),C>0&&(ae=ie,ie=-q,q=ae),{rt1:S,rt2:j,cs:ie,sn:q}}const N=[],z={},G=[],Z=new Ve,V=new Ve,W=new Ve,U=new Ve,le=new pe,de=new k,Me=new Ve,De=new DOMParser().parseFromString(e,"image/svg+xml");return n(De.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:N,xml:De.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function s(v,m,d,T){const g=v.x,x=m.x,P=d.x,R=T.x,A=v.y,F=m.y,M=d.y,b=T.y,I=(R-P)*(A-M)-(b-M)*(g-P),N=(x-g)*(A-M)-(F-A)*(g-P),z=(b-M)*(x-g)-(R-P)*(F-A),G=I/z,Z=N/z;if(z===0&&I!==0||G<=0||G>=1||Z<0||Z>1)return null;if(I===0&&z===0){for(let V=0;V<2;V++)if(o(V===0?d:T,v,m),r.loc==n.ORIGIN){const W=V===0?d:T;return{x:W.x,y:W.y,t:r.t}}else if(r.loc==n.BETWEEN){const W=+(g+r.t*(x-g)).toPrecision(10),U=+(A+r.t*(F-A)).toPrecision(10);return{x:W,y:U,t:r.t}}return null}else{for(let U=0;U<2;U++)if(o(U===0?d:T,v,m),r.loc==n.ORIGIN){const le=U===0?d:T;return{x:le.x,y:le.y,t:r.t}}const V=+(g+G*(x-g)).toPrecision(10),W=+(A+G*(F-A)).toPrecision(10);return{x:V,y:W,t:G}}}function o(v,m,d){const T=d.x-m.x,g=d.y-m.y,x=v.x-m.x,P=v.y-m.y,R=T*P-x*g;if(v.x===m.x&&v.y===m.y){r.loc=n.ORIGIN,r.t=0;return}if(v.x===d.x&&v.y===d.y){r.loc=n.DESTINATION,r.t=1;return}if(R<-Number.EPSILON){r.loc=n.LEFT;return}if(R>Number.EPSILON){r.loc=n.RIGHT;return}if(T*x<0||g*P<0){r.loc=n.BEHIND;return}if(Math.sqrt(T*T+g*g)<Math.sqrt(x*x+P*P)){r.loc=n.BEYOND;return}let A;T!==0?A=x/T:A=P/g,r.loc=n.BETWEEN,r.t=A}function a(v,m){const d=[],T=[];for(let g=1;g<v.length;g++){const x=v[g-1],P=v[g];for(let R=1;R<m.length;R++){const A=m[R-1],F=m[R],M=s(x,P,A,F);M!==null&&d.find(b=>b.t<=M.t+Number.EPSILON&&b.t>=M.t-Number.EPSILON)===void 0&&(d.push(M),T.push(new pe(M.x,M.y)))}}return T}function c(v,m,d){const T=new pe;m.getCenter(T);const g=[];return d.forEach(x=>{x.boundingBox.containsPoint(T)&&a(v,x.points).forEach(R=>{g.push({identifier:x.identifier,isCW:x.isCW,point:R})})}),g.sort((x,P)=>x.point.x-P.point.x),g}function l(v,m,d,T,g){(g==null||g==="")&&(g="nonzero");const x=new pe;v.boundingBox.getCenter(x);const P=[new pe(d,x.y),new pe(T,x.y)],R=c(P,v.boundingBox,m);R.sort((N,z)=>N.point.x-z.point.x);const A=[],F=[];R.forEach(N=>{N.identifier===v.identifier?A.push(N):F.push(N)});const M=A[0].point.x,b=[];let I=0;for(;I<F.length&&F[I].point.x<M;)b.length>0&&b[b.length-1]===F[I].identifier?b.pop():b.push(F[I].identifier),I++;if(b.push(v.identifier),g==="evenodd"){const N=b.length%2===0,z=b[b.length-2];return{identifier:v.identifier,isHole:N,for:z}}else if(g==="nonzero"){let N=!0,z=null,G=null;for(let Z=0;Z<b.length;Z++){const V=b[Z];N?(G=m[V].isCW,N=!1,z=V):G!==m[V].isCW&&(G=m[V].isCW,N=!0)}return{identifier:v.identifier,isHole:N,for:z}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(v=>{const m=v.getPoints();let d=-999999999,T=999999999,g=-999999999,x=999999999;for(let P=0;P<m.length;P++){const R=m[P];R.y>d&&(d=R.y),R.y<T&&(T=R.y),R.x>g&&(g=R.x),R.x<x&&(x=R.x)}return h<=g&&(h=g+1),u>=x&&(u=x-1),{curves:v.curves,points:m,isCW:vs.isClockWise(m),identifier:-1,boundingBox:new Qd(new pe(x,T),new pe(g,d))}});f=f.filter(v=>v.points.length>1);for(let v=0;v<f.length;v++)f[v].identifier=v;const p=f.map(v=>l(v,f,u,h,e.userData?e.userData.style.fillRule:void 0)),_=[];return f.forEach(v=>{if(!p[v.identifier].isHole){const d=new os;d.curves=v.curves,p.filter(g=>g.isHole&&g.for===v.identifier).forEach(g=>{const x=f[g.identifier],P=new Ui;P.curves=x.curves,d.holes.push(P)}),_.push(d)}}),_}static getStrokeStyle(e,t,n,r,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,t,n,r){const s=[],o=[],a=[];if(fs.pointsToStrokeWithBuffers(e,t,n,r,s,o,a)===0)return null;const c=new on;return c.setAttribute("position",new Bt(s,3)),c.setAttribute("normal",new Bt(o,3)),c.setAttribute("uv",new Bt(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,r,s,o,a,c){const l=new pe,u=new pe,h=new pe,f=new pe,p=new pe,_=new pe,v=new pe,m=new pe,d=new pe,T=new pe,g=new pe,x=new pe,P=new pe,R=new pe,A=new pe,F=new pe,M=new pe;n=n!==void 0?n:12,r=r!==void 0?r:.001,c=c!==void 0?c:0,e=C(e);const b=e.length;if(b<2)return 0;const I=e[0].equals(e[b-1]);let N,z=e[0],G;const Z=t.strokeWidth/2,V=1/(b-1);let W=0,U,le,de,Me,De=!1,We=0,X=c*3,O=c*2;E(e[0],e[1],l).multiplyScalar(Z),m.copy(e[0]).sub(l),d.copy(e[0]).add(l),T.copy(m),g.copy(d);for(let te=1;te<b;te++){N=e[te],te===b-1?I?G=e[1]:G=void 0:G=e[te+1];const re=l;if(E(z,N,re),h.copy(re).multiplyScalar(Z),x.copy(N).sub(h),P.copy(N).add(h),U=W+V,le=!1,G!==void 0){E(N,G,u),h.copy(u).multiplyScalar(Z),R.copy(N).sub(h),A.copy(N).add(h),de=!0,h.subVectors(G,z),re.dot(h)<0&&(de=!1),te===1&&(De=de),h.subVectors(G,N),h.normalize();const ue=Math.abs(re.dot(h));if(ue>Number.EPSILON){const oe=Z/ue;h.multiplyScalar(-oe),f.subVectors(N,z),p.copy(f).setLength(oe).add(h),F.copy(p).negate();const Y=p.length(),L=f.length();f.divideScalar(L),_.subVectors(G,N);const fe=_.length();switch(_.divideScalar(fe),f.dot(F)<L&&_.dot(F)<fe&&(le=!0),M.copy(p).add(N),F.add(N),Me=!1,le?de?(A.copy(F),P.copy(F)):(R.copy(F),x.copy(F)):ie(),t.strokeLineJoin){case"bevel":q(de,le,U);break;case"round":ae(de,le),de?j(N,x,R,U,0):j(N,A,P,U,1);break;case"miter":case"miter-clip":default:const Be=Z*t.strokeMiterLimit/Y;if(Be<1)if(t.strokeLineJoin!=="miter-clip"){q(de,le,U);break}else ae(de,le),de?(_.subVectors(M,x).multiplyScalar(Be).add(x),v.subVectors(M,R).multiplyScalar(Be).add(R),S(x,U,0),S(_,U,0),S(N,U,.5),S(N,U,.5),S(_,U,0),S(v,U,0),S(N,U,.5),S(v,U,0),S(R,U,0)):(_.subVectors(M,P).multiplyScalar(Be).add(P),v.subVectors(M,A).multiplyScalar(Be).add(A),S(P,U,1),S(_,U,1),S(N,U,.5),S(N,U,.5),S(_,U,1),S(v,U,1),S(N,U,.5),S(v,U,1),S(A,U,1));else le?(de?(S(d,W,1),S(m,W,0),S(M,U,0),S(d,W,1),S(M,U,0),S(F,U,1)):(S(d,W,1),S(m,W,0),S(M,U,1),S(m,W,0),S(F,U,0),S(M,U,1)),de?R.copy(M):A.copy(M)):de?(S(x,U,0),S(M,U,0),S(N,U,.5),S(N,U,.5),S(M,U,0),S(R,U,0)):(S(P,U,1),S(M,U,1),S(N,U,.5),S(N,U,.5),S(M,U,1),S(A,U,1)),Me=!0;break}}else ie()}else ie();!I&&te===b-1&&ye(e[0],T,g,de,!0,W),W=U,z=N,m.copy(R),d.copy(A)}if(!I)ye(N,x,P,de,!1,U);else if(le&&s){let te=M,re=F;De!==de&&(te=F,re=M),de?(Me||De)&&(re.toArray(s,0),re.toArray(s,9),Me&&te.toArray(s,3)):(Me||!De)&&(re.toArray(s,3),re.toArray(s,9),Me&&te.toArray(s,0))}return We;function E(te,re,ue){return ue.subVectors(re,te),ue.set(-ue.y,ue.x).normalize()}function S(te,re,ue){s&&(s[X]=te.x,s[X+1]=te.y,s[X+2]=0,o&&(o[X]=0,o[X+1]=0,o[X+2]=1),X+=3,a&&(a[O]=re,a[O+1]=ue,O+=2)),We+=3}function j(te,re,ue,oe,Y){l.copy(re).sub(te).normalize(),u.copy(ue).sub(te).normalize();let L=Math.PI;const fe=l.dot(u);Math.abs(fe)<1&&(L=Math.abs(Math.acos(fe))),L/=n,h.copy(re);for(let Be=0,Ke=n-1;Be<Ke;Be++)f.copy(h).rotateAround(te,L),S(h,oe,Y),S(f,oe,Y),S(te,oe,.5),h.copy(f);S(f,oe,Y),S(ue,oe,Y),S(te,oe,.5)}function ie(){S(d,W,1),S(m,W,0),S(x,U,0),S(d,W,1),S(x,U,0),S(P,U,1)}function q(te,re,ue){re?te?(S(d,W,1),S(m,W,0),S(x,U,0),S(d,W,1),S(x,U,0),S(F,U,1),S(x,ue,0),S(R,ue,0),S(F,ue,.5)):(S(d,W,1),S(m,W,0),S(P,U,1),S(m,W,0),S(F,U,0),S(P,U,1),S(P,ue,1),S(F,ue,0),S(A,ue,1)):te?(S(x,ue,0),S(R,ue,0),S(N,ue,.5)):(S(P,ue,1),S(A,ue,0),S(N,ue,.5))}function ae(te,re){re&&(te?(S(d,W,1),S(m,W,0),S(x,U,0),S(d,W,1),S(x,U,0),S(F,U,1),S(x,W,0),S(N,U,.5),S(F,U,1),S(N,U,.5),S(R,W,0),S(F,U,1)):(S(d,W,1),S(m,W,0),S(P,U,1),S(m,W,0),S(F,U,0),S(P,U,1),S(P,W,1),S(F,U,0),S(N,U,.5),S(N,U,.5),S(F,U,0),S(A,W,1)))}function ye(te,re,ue,oe,Y,L){switch(t.strokeLineCap){case"round":Y?j(te,ue,re,L,.5):j(te,re,ue,L,.5);break;case"square":if(Y)l.subVectors(re,te),u.set(l.y,-l.x),h.addVectors(l,u).add(te),f.subVectors(u,l).add(te),oe?(h.toArray(s,3),f.toArray(s,0),f.toArray(s,9)):(h.toArray(s,3),a[7]===1?f.toArray(s,9):h.toArray(s,9),f.toArray(s,0));else{l.subVectors(ue,te),u.set(l.y,-l.x),h.addVectors(l,u).add(te),f.subVectors(u,l).add(te);const fe=s.length;oe?(h.toArray(s,fe-3),f.toArray(s,fe-6),f.toArray(s,fe-12)):(f.toArray(s,fe-6),h.toArray(s,fe-3),f.toArray(s,fe-12))}break}}function C(te){let re=!1;for(let oe=1,Y=te.length-1;oe<Y;oe++)if(te[oe].distanceTo(te[oe+1])<r){re=!0;break}if(!re)return te;const ue=[];ue.push(te[0]);for(let oe=1,Y=te.length-1;oe<Y;oe++)te[oe].distanceTo(te[oe+1])>=r&&ue.push(te[oe]);return ue.push(te[te.length-1]),ue}}}const Xc='<svg xmlns="http://www.w3.org/2000/svg" width="85mm" height="44mm" viewBox="0 0 85 44"><rect x="1" y="1" width="14" height="42" rx="7"/><rect x="23" y="1" width="14" height="42" rx="7"/><circle cx="58" cy="12" r="10"/><circle cx="58" cy="35" r="7"/><rect x="76" y="2" width="8" height="40" rx="3"/></svg>';function Sr(i){var a,c,l,u,h,f;if(i.length>5e5)throw Error("O SVG excede o limite de 500 KB. Simplifique os caminhos.");const e=new DOMParser().parseFromString(i,"image/svg+xml");if(e.querySelector("parsererror")||e.documentElement.localName!=="svg")throw Error("O arquivo não é um SVG válido.");if(e.querySelector("script,foreignObject,image,use,text,style,animate,animateTransform,set"))throw Error("Use apenas formas vetoriais. Converta texto e referências em caminhos e remova imagens, estilos e scripts.");for(const p of e.querySelectorAll("*"))for(const _ of p.attributes)if(/^on/i.test(_.name)||/url\(|https?:|javascript:/i.test(_.value)&&_.name!=="xmlns")throw Error("O SVG contém conteúdo externo ou ativo. Exporte somente os caminhos.");const t=new fs,n=t.parse(new XMLSerializer().serializeToString(e));if(n.paths.length>100)throw Error("Máximo de 100 caminhos. Simplifique o SVG.");const r=[];for(const p of n.paths)if(!(((c=(a=p.userData)==null?void 0:a.style)==null?void 0:c.visibility)==="hidden"||((u=(l=p.userData)==null?void 0:l.style)==null?void 0:u.display)==="none")){if(((f=(h=p.userData)==null?void 0:h.style)==null?void 0:f.fill)==="none")throw Error("Converta os traços sem preenchimento em contornos fechados antes de importar.");for(const _ of fs.createShapes(p)){const v=d=>{const T=d.getPoints(32).map(g=>[g.x,g.y]);return T.filter((g,x)=>!x||Math.hypot(g[0]-T[x-1][0],g[1]-T[x-1][1])>1e-6).filter((g,x,P)=>x!==P.length-1||Math.hypot(g[0]-P[0][0],g[1]-P[0][1])>1e-6)},m=v(_);m.length<3||r.push({outer:m,holes:_.holes.map(v)})}}if(!r.length)throw Error("Nenhum contorno preenchido encontrado no SVG.");const s=r.flatMap(p=>p.outer);if(s.length>16e3)throw Error("SVG muito complexo. Simplifique as curvas.");if(s.some(p=>p.some(_=>!Number.isFinite(_))))throw Error("Coordenadas inválidas no SVG.");if(Math.max(...s.map(p=>p[0]))-Math.min(...s.map(p=>p[0]))<.001)throw Error("O SVG precisa ter largura maior que zero.");return r}const k_='<svg xmlns="http://www.w3.org/2000/svg" width="94mm" height="42mm" viewBox="0 0 94 42"><path d="M4 2 Q0 21 4 40 L90 40 Q94 21 90 2 Z" fill="#000"/></svg>',Yc={width:57.4,height:36.2,symmetry:"all",linkedAxes:!0,corners:{tl:{rx:8,ry:8},tr:{rx:8,ry:8},br:{rx:8,ry:8},bl:{rx:8,ry:8}}},ps={all:[["tl","Todos os cantos",["tl","tr","br","bl"]]],sides:[["tl","Lado esquerdo · A e D",["tl","bl"]],["tr","Lado direito · B e C",["tr","br"]]],ends:[["tl","Parte superior · A e B",["tl","tr"]],["bl","Parte inferior · D e C",["bl","br"]]],free:[["tl","A · superior esquerdo",["tl"]],["tr","B · superior direito",["tr"]],["bl","D · inferior esquerdo",["bl"]],["br","C · inferior direito",["br"]]]};function Cn(i){var t;if(!ps[i.symmetry])throw Error("Escolha uma simetria válida.");const e={};for(const[n,,r]of ps[i.symmetry]){const s=(t=i.corners)==null?void 0:t[n];if(!s)throw Error("Defina os raios de todos os cantos.");for(const o of r)e[o]={rx:s.rx,ry:i.linkedAxes?s.rx:s.ry}}return e}function qc(i){const{width:e,height:t}=i;if(!Number.isFinite(e)||!Number.isFinite(t)||e<1||t<1||e>336||t>336)throw Error("Use largura e comprimento de 1 a 336 mm.");if(typeof i.linkedAxes!="boolean")throw Error("Defina se os raios X e Y são iguais.");const n=Cn(i);for(const[p,_]of Object.entries(n)){if(!Number.isFinite(_.rx)||!Number.isFinite(_.ry)||_.rx<0||_.ry<0||_.rx>336||_.ry>336)throw Error(`Raio inválido no canto ${p.toUpperCase()}. Use valores de 0 a 336 mm.`);if(_.rx===0!=(_.ry===0))throw Error("Para um canto vivo, zere os dois raios X e Y desse canto.")}const{tl:r,tr:s,br:o,bl:a}=n,c=1e-7;if(r.rx+s.rx>e+c||a.rx+o.rx>e+c)throw Error("Os raios X dos cantos vizinhos ultrapassam a largura. Reduza os raios ou aumente a largura.");if(r.ry+a.ry>t+c||s.ry+o.ry>t+c)throw Error("Os raios Y dos cantos vizinhos ultrapassam o comprimento. Reduza os raios ou aumente o comprimento.");const l=[],u=(p,_)=>{const v=[Number(p.toFixed(8)),Number(_.toFixed(8))],m=l.at(-1);(!m||Math.hypot(v[0]-m[0],v[1]-m[1])>1e-7)&&l.push(v)};for(const[p,_,v,m,d]of[["tr",e-s.rx,s.ry,-Math.PI/2,[e,0]],["br",e-o.rx,t-o.ry,0,[e,t]],["bl",a.rx,t-a.ry,Math.PI/2,[0,t]],["tl",r.rx,r.ry,Math.PI,[0,0]]]){const T=n[p];if(T.rx===0){u(...d);continue}const g=Math.max(T.rx,T.ry),x=Math.max(8,Math.min(128,Math.ceil(Math.PI/(4*Math.acos(Math.max(-1,1-.01/g))))));for(let P=0;P<=x;P++){const R=m+P*Math.PI/(2*x);u(_+T.rx*Math.cos(R),v+T.ry*Math.sin(R))}}Math.hypot(l[0][0]-l.at(-1)[0],l[0][1]-l.at(-1)[1])<1e-7&&l.pop();const h=l.map(p=>p.join(",")).join(" ");return{svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${e}mm" height="${t}mm" viewBox="0 0 ${e} ${t}"><title>Contorno paramétrico ${e} x ${t} mm</title><polygon fill="#000" points="${h}"/></svg>`,art:[{outer:l,holes:[]}],points:l,corners:n,width:e,height:t}}function H_(i,e){const t=structuredClone(i);t.symmetry="all",t.linkedAxes=!0;let n=0,r=0;if(e==="rounded")n=r=Math.min(8,t.width/2,t.height/2);else if(e==="capsule")n=r=Math.min(t.width,t.height)/2;else if(e==="ellipse")n=t.width/2,r=t.height/2,t.linkedAxes=!1;else if(e==="circle")t.height=t.width,n=r=t.width/2;else if(e!=="rectangle")throw Error("Preset de forma inválido.");for(const s of["tl","tr","br","bl"])t.corners[s]={rx:n,ry:r};return t}function ya(i,e,t){const n=Cn(i),r=new Set(ps[i.symmetry].find(a=>a[0]===e)[2]),s=[["rx",i.width,"tl","tr"],["rx",i.width,"bl","br"],["ry",i.height,"tl","bl"],["ry",i.height,"tr","br"]];let o=336;for(const[a,c,l,u]of s){if(!i.linkedAxes&&a!==t)continue;const h=Number(r.has(l))+Number(r.has(u));if(!h)continue;const f=[l,u].filter(p=>!r.has(p)).reduce((p,_)=>p+(Number.isFinite(n[_][a])?n[_][a]:0),0);o=Math.min(o,(c-f)/h)}return Math.max(0,Math.floor((Number.isFinite(o)?o:0)*100+1e-7)/100)}var Rt=Uint8Array,Vt=Uint16Array,Sa=Int32Array,Ea=new Rt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ba=new Rt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Yl=new Rt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$c=function(i,e){for(var t=new Vt(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Sa(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},jc=$c(Ea,2),V_=jc.b,ta=jc.r;V_[28]=258,ta[258]=28;var W_=$c(ba,0),ql=W_.r,na=new Vt(32768);for(var lt=0;lt<32768;++lt){var Un=(lt&43690)>>1|(lt&21845)<<1;Un=(Un&52428)>>2|(Un&13107)<<2,Un=(Un&61680)>>4|(Un&3855)<<4,na[lt]=((Un&65280)>>8|(Un&255)<<8)>>1}var ur=(function(i,e,t){for(var n=i.length,r=0,s=new Vt(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Vt(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Vt(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[na[h]>>c]=l}else for(a=new Vt(n),r=0;r<n;++r)i[r]&&(a[r]=na[o[i[r]-1]++]>>15-i[r]);return a}),hi=new Rt(288);for(var lt=0;lt<144;++lt)hi[lt]=8;for(var lt=144;lt<256;++lt)hi[lt]=9;for(var lt=256;lt<280;++lt)hi[lt]=7;for(var lt=280;lt<288;++lt)hi[lt]=8;var ms=new Rt(32);for(var lt=0;lt<32;++lt)ms[lt]=5;var X_=ur(hi,9,0),Y_=ur(ms,5,0),Zc=function(i){return(i+7)/8|0},Jc=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new Rt(i.subarray(e,t))},q_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ys=function(i,e,t){var n=new Error(e||q_[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,ys),!t)throw n;return n},En=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},nr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},ao=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return{t:Qc,l:0};if(r==1){var o=new Rt(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(P,R){return P.f-R.f}),t.push({s:-1,f:25001});var a=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=r-1;)a=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var p=new Vt(f+1),_=ia(t[u-1],p,0);if(_>e){var n=0,v=0,m=_-e,d=1<<m;for(s.sort(function(R,A){return p[A.s]-p[R.s]||R.f-A.f});n<r;++n){var T=s[n].s;if(p[T]>e)v+=d-(1<<_-p[T]),p[T]=e;else break}for(v>>=m;v>0;){var g=s[n].s;p[g]<e?v-=1<<e-p[g]++-1:++n}for(;n>=0&&v;--n){var x=s[n].s;p[x]==e&&(--p[x],++v)}_=e}return{t:new Rt(p),l:_}},ia=function(i,e,t){return i.s==-1?Math.max(ia(i.l,e,t+1),ia(i.r,e,t+1)):e[i.s]=t},$l=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Vt(++e),n=0,r=i[0],s=1,o=function(c){t[n++]=c},a=1;a<=e;++a)if(i[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return{c:t.subarray(0,n),n:e}},ir=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Kc=function(i,e,t){var n=t.length,r=Zc(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},jl=function(i,e,t,n,r,s,o,a,c,l,u){En(e,u++,t),++r[256];for(var h=ao(r,15),f=h.t,p=h.l,_=ao(s,15),v=_.t,m=_.l,d=$l(f),T=d.c,g=d.n,x=$l(v),P=x.c,R=x.n,A=new Vt(19),F=0;F<T.length;++F)++A[T[F]&31];for(var F=0;F<P.length;++F)++A[P[F]&31];for(var M=ao(A,7),b=M.t,I=M.l,N=19;N>4&&!b[Yl[N-1]];--N);var z=l+5<<3,G=ir(r,hi)+ir(s,ms)+o,Z=ir(r,f)+ir(s,v)+o+14+3*N+ir(A,b)+2*A[16]+3*A[17]+7*A[18];if(c>=0&&z<=G&&z<=Z)return Kc(e,u,i.subarray(c,c+l));var V,W,U,le;if(En(e,u,1+(Z<G)),u+=2,Z<G){V=ur(f,p,0),W=f,U=ur(v,m,0),le=v;var de=ur(b,I,0);En(e,u,g-257),En(e,u+5,R-1),En(e,u+10,N-4),u+=14;for(var F=0;F<N;++F)En(e,u+3*F,b[Yl[F]]);u+=3*N;for(var Me=[T,P],De=0;De<2;++De)for(var We=Me[De],F=0;F<We.length;++F){var X=We[F]&31;En(e,u,de[X]),u+=b[X],X>15&&(En(e,u,We[F]>>5&127),u+=We[F]>>12)}}else V=X_,W=hi,U=Y_,le=ms;for(var F=0;F<a;++F){var O=n[F];if(O>255){var X=O>>18&31;nr(e,u,V[X+257]),u+=W[X+257],X>7&&(En(e,u,O>>23&31),u+=Ea[X]);var E=O&31;nr(e,u,U[E]),u+=le[E],E>3&&(nr(e,u,O>>5&8191),u+=ba[E])}else nr(e,u,V[O]),u+=W[O]}return nr(e,u,V[256]),u+W[256]},$_=new Sa([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Qc=new Rt(0),j_=function(i,e,t,n,r,s){var o=s.z||i.length,a=new Rt(n+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(n,a.length-r),l=s.l,u=(s.r||0)&7;if(e){u&&(c[0]=s.r>>3);for(var h=$_[e-1],f=h>>13,p=h&8191,_=(1<<t)-1,v=s.p||new Vt(32768),m=s.h||new Vt(_+1),d=Math.ceil(t/3),T=2*d,g=function(te){return(i[te]^i[te+1]<<d^i[te+2]<<T)&_},x=new Sa(25e3),P=new Vt(288),R=new Vt(32),A=0,F=0,M=s.i||0,b=0,I=s.w||0,N=0;M+2<o;++M){var z=g(M),G=M&32767,Z=m[z];if(v[G]=Z,m[z]=G,I<=M){var V=o-M;if((A>7e3||b>24576)&&(V>423||!l)){u=jl(i,c,0,x,P,R,F,b,N,M-N,u),b=A=F=0,N=M;for(var W=0;W<286;++W)P[W]=0;for(var W=0;W<30;++W)R[W]=0}var U=2,le=0,de=p,Me=G-Z&32767;if(V>2&&z==g(M-Me))for(var De=Math.min(f,V)-1,We=Math.min(32767,M),X=Math.min(258,V);Me<=We&&--de&&G!=Z;){if(i[M+U]==i[M+U-Me]){for(var O=0;O<X&&i[M+O]==i[M+O-Me];++O);if(O>U){if(U=O,le=Me,O>De)break;for(var E=Math.min(Me,O-2),S=0,W=0;W<E;++W){var j=M-Me+W&32767,ie=v[j],q=j-ie&32767;q>S&&(S=q,Z=j)}}}G=Z,Z=v[G],Me+=G-Z&32767}if(le){x[b++]=268435456|ta[U]<<18|ql[le];var ae=ta[U]&31,ye=ql[le]&31;F+=Ea[ae]+ba[ye],++P[257+ae],++R[ye],I=M+U,++A}else x[b++]=i[M],++P[i[M]]}}for(M=Math.max(M,I);M<o;++M)x[b++]=i[M],++P[i[M]];u=jl(i,c,l,x,P,R,F,b,N,M-N,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=v,s.i=M,s.w=I)}else{for(var M=s.w||0;M<o+l;M+=65535){var C=M+65535;C>=o&&(c[u/8|0]=l,C=o),u=Kc(c,u+1,i.subarray(M,C))}s.i=o}return Jc(a,0,n+Zc(u)+r)},Z_=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),J_=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Z_[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},K_=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new Rt(s.length+i.length);o.set(s),o.set(i,s.length),i=o,r.w=s.length}return j_(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},eu=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},bt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function Q_(i,e){return K_(i,e||{},0,0)}var tu=function(i,e,t,n){for(var r in i){var s=i[r],o=e+r,a=n;Array.isArray(s)&&(a=eu(n,s[1]),s=s[0]),s instanceof Rt?t[o]=[s,a]:(t[o+="/"]=[new Rt(0),a],tu(s,o,t,n))}},Zl=typeof TextEncoder<"u"&&new TextEncoder,eg=typeof TextDecoder<"u"&&new TextDecoder,tg=0;try{eg.decode(Qc,{stream:!0}),tg=1}catch{}function On(i,e){var t;if(Zl)return Zl.encode(i);for(var n=i.length,r=new Rt(i.length+(i.length>>1)),s=0,o=function(l){r[s++]=l},t=0;t<n;++t){if(s+5>r.length){var a=new Rt(s+8+(n-t<<1));a.set(r),r=a}var c=i.charCodeAt(t);c<128||e?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|i.charCodeAt(++t)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return Jc(r,0,s)}var ra=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&ys(9),e+=n+4}return e},Jl=function(i,e,t,n,r,s,o,a){var c=n.length,l=t.extra,u=a&&a.length,h=ra(l);bt(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&ys(10),bt(i,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(bt(i,e,t.crc),bt(i,e+4,s<0?-s-2:s),bt(i,e+8,t.size)),bt(i,e+12,c),bt(i,e+14,h),e+=16,o!=null&&(bt(i,e,u),bt(i,e+6,t.attrs),bt(i,e+10,o),e+=14),i.set(n,e),e+=c,h)for(var _ in l){var v=l[_],m=v.length;bt(i,e,+_),bt(i,e+2,m),i.set(v,e+4),e+=4+m}return u&&(i.set(a,e),e+=u),e},ng=function(i,e,t,n,r){bt(i,e,101010256),bt(i,e+8,t),bt(i,e+10,t),bt(i,e+12,n),bt(i,e+16,r)};function ig(i,e){e||(e={});var t={},n=[];tu(i,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],c=a[0],l=a[1],u=l.level==0?0:8,h=On(o),f=h.length,p=l.comment,_=p&&On(p),v=_&&_.length,m=ra(l.extra);f>65535&&ys(11);var d=u?Q_(c,l):c,T=d.length,g=J_();g.p(c),n.push(eu(l,{size:c.length,crc:g.d(),c:d,f:h,m:_,u:f!=o.length||_&&p.length!=v,o:r,compression:u})),r+=30+f+m+T,s+=76+2*(f+m)+(v||0)+T}for(var x=new Rt(s+22),P=r,R=s-r,A=0;A<n.length;++A){var h=n[A];Jl(x,h.o,h,h.f,h.u,h.c.length);var F=30+h.f.length+ra(h.extra);x.set(h.c,h.o+F),Jl(x,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+F+(h.m?h.m.length:0)}return ng(x,r,n.length,R,P),x}const rg="0",sg="50%",og=["0"],ag=["70"],lg=["0"],cg="0",ug="0",hg="0",dg="0",fg="0",pg="0",mg="0",_g="1",gg="0",vg="0",xg="",Mg="",yg=[],Sg=[],Eg="by_first_filament",bg="",Tg="0.5,0.5",wg="3",Ag="3",Cg="0",Rg="100%",Pg="monotonic",Lg="0",Dg="1",Fg="0",Ig=["50"],Ng="0.1",Ug="auto_brim",Og="5",Bg=["0"],Gg=`;===== A1 20251031 =======================
M1007 S0 ; turn off mass estimation
G392 S0
M620 S[next_extruder]A
M204 S9000
G1 Z{max_layer_z + 3.0} F1200

M400
M106 P1 S0
M106 P2 S0
{if old_filament_temp > 142 && next_extruder < 255}
M104 S[old_filament_temp]
{endif}

G1 X267 F18000

{if long_retractions_when_cut[previous_extruder]}
M620.11 S1 I[previous_extruder] E-{retraction_distances_when_cut[previous_extruder]} F1200
{else}
M620.11 S0
{endif}
M400

M620.1 E F{flush_volumetric_speeds[previous_extruder]/2.4053*60} T{flush_temperatures[previous_extruder]}
M620.10 A0 F{flush_volumetric_speeds[previous_extruder]/2.4053*60}
T[next_extruder]
M620.1 E F{flush_volumetric_speeds[next_extruder]/2.4053*60} T{flush_temperatures[next_extruder]}
M620.10 A1 F{flush_volumetric_speeds[next_extruder]/2.4053*60} L[flush_length] H[nozzle_diameter] T{flush_temperatures[next_extruder]}

G1 Y128 F9000

{if next_extruder < 255}

{if long_retractions_when_cut[previous_extruder]}
M620.11 S1 I[previous_extruder] E{retraction_distances_when_cut[previous_extruder]} F{flush_volumetric_speeds[previous_extruder]/2.4053*60}
M628 S1
G92 E0
G1 E{retraction_distances_when_cut[previous_extruder]} F{flush_volumetric_speeds[previous_extruder]/2.4053*60}
M400
M629 S1
{else}
M620.11 S0
{endif}

M400
G92 E0
M628 S0

{if flush_length_1 > 1}
; FLUSH_START
; always use highest temperature to flush
M400
M1002 set_filament_type:UNKNOWN
M109 S[flush_temperatures[next_extruder]]
M106 P1 S60
{if flush_length_1 > 23.7}
G1 E23.7 F{flush_volumetric_speeds[previous_extruder]/2.4053*60} ; do not need pulsatile flushing for start part
G1 E{(flush_length_1 - 23.7) * 0.02} F50
G1 E{(flush_length_1 - 23.7) * 0.23} F{flush_volumetric_speeds[previous_extruder]/2.4053*60}
G1 E{(flush_length_1 - 23.7) * 0.02} F50
G1 E{(flush_length_1 - 23.7) * 0.23} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{(flush_length_1 - 23.7) * 0.02} F50
G1 E{(flush_length_1 - 23.7) * 0.23} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{(flush_length_1 - 23.7) * 0.02} F50
G1 E{(flush_length_1 - 23.7) * 0.23} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
{else}
G1 E{flush_length_1} F{flush_volumetric_speeds[previous_extruder]/2.4053*60}
{endif}
; FLUSH_END
G1 E-[old_retract_length_toolchange] F1800
G1 E[old_retract_length_toolchange] F300
M400
M1002 set_filament_type:{filament_type[next_extruder]}
{endif}

{if flush_length_1 > 45 && flush_length_2 > 1}
; WIPE
M400
M106 P1 S178
M400 S3
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
M400
M106 P1 S0
{endif}

{if flush_length_2 > 1}
M106 P1 S60
; FLUSH_START
G1 E{flush_length_2 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_2 * 0.02} F50
G1 E{flush_length_2 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_2 * 0.02} F50
G1 E{flush_length_2 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_2 * 0.02} F50
G1 E{flush_length_2 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_2 * 0.02} F50
G1 E{flush_length_2 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_2 * 0.02} F50
; FLUSH_END
G1 E-[new_retract_length_toolchange] F1800
G1 E[new_retract_length_toolchange] F300
{endif}

{if flush_length_2 > 45 && flush_length_3 > 1}
; WIPE
M400
M106 P1 S178
M400 S3
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
M400
M106 P1 S0
{endif}

{if flush_length_3 > 1}
M106 P1 S60
; FLUSH_START
G1 E{flush_length_3 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_3 * 0.02} F50
G1 E{flush_length_3 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_3 * 0.02} F50
G1 E{flush_length_3 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_3 * 0.02} F50
G1 E{flush_length_3 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_3 * 0.02} F50
G1 E{flush_length_3 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_3 * 0.02} F50
; FLUSH_END
G1 E-[new_retract_length_toolchange] F1800
G1 E[new_retract_length_toolchange] F300
{endif}

{if flush_length_3 > 45 && flush_length_4 > 1}
; WIPE
M400
M106 P1 S178
M400 S3
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
M400
M106 P1 S0
{endif}

{if flush_length_4 > 1}
M106 P1 S60
; FLUSH_START
G1 E{flush_length_4 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_4 * 0.02} F50
G1 E{flush_length_4 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_4 * 0.02} F50
G1 E{flush_length_4 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_4 * 0.02} F50
G1 E{flush_length_4 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_4 * 0.02} F50
G1 E{flush_length_4 * 0.18} F{flush_volumetric_speeds[next_extruder]/2.4053*60}
G1 E{flush_length_4 * 0.02} F50
; FLUSH_END
{endif}

M629

M400
M106 P1 S60
M109 S[new_filament_temp]
G1 E6 F{flush_volumetric_speeds[next_extruder]/2.4053*60} ;Compensate for filament spillage during waiting temperature
M400
G92 E0
G1 E-[new_retract_length_toolchange] F1800
M400
M106 P1 S178
M400 S3
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
G1 X-38.2 F18000
G1 X-48.2 F3000
M400
G1 Z{max_layer_z + 3.0} F3000
M106 P1 S0
{if layer_z <= (initial_layer_print_height + 0.001)}
M204 S[initial_layer_acceleration]
{else}
M204 S[default_acceleration]
{endif}
{else}
G1 X[x_after_toolchange] Y[y_after_toolchange] Z[z_after_toolchange] F12000
{endif}

M622.1 S0
M9833 F{outer_wall_volumetric_speed/2.4} A0.3 ; cali dynamic extrusion compensation
M1002 judge_flag filament_need_cali_flag
M622 J1
  G92 E0
  G1 E-[new_retract_length_toolchange] F1800
  M400
  
  M106 P1 S178
  M400 S4
  G1 X-38.2 F18000
  G1 X-48.2 F3000
  G1 X-38.2 F18000 ;wipe and shake
  G1 X-48.2 F3000
  G1 X-38.2 F12000 ;wipe and shake
  G1 X-48.2 F3000
  M400
  M106 P1 S0 
M623

M621 S[next_extruder]A
G392 S0

M1007 S1
`,zg="0",kg=["200"],Hg=["1"],Vg=["1"],Wg="",Xg=["70"],Yg=["35"],qg=["35"],$g="0",jg=["10"],Zg=["uniform_cooling"],Jg=["0"],Kg=["0.008"],Qg=["-0.041"],ev=["0.033"],tv=["-0.035"],nv="none",iv="Cool Plate",rv=["6000"],sv="-1",ov=[""],av=["Bambu PLA Basic @BBL A1"],lv="0",cv=["Standard"],uv="0.20mm Standard @BBL A1",hv=["30"],dv="1",fv="1",pv="1",mv="0",_v=["50"],gv=["","",""],vv="disabled",xv=["70"],Mv="0.075",yv="0",Sv="1",Ev="0",bv="0",Tv=["0"],wv="2",Av="0",Cv="0",Rv=["1"],Pv=["1"],Lv="0",Dv=["0"],Fv="1",Iv="0",Nv="0",Uv="0",Ov="0",Bv="0",Gv=["0"],zv=["0"],kv="enabled",Hv="1",Vv=[],Wv="56.5",Xv="256",Yv="25",qv="73",$v=["#018001"],jv=["1"],Zv=[],Jv=["0x0"],Kv=[],Qv=[],ex=["Direct Drive"],tx=["Direct Drive Standard"],nx=["80"],ix="undefine",rx=["80"],sx=["60"],ox="0",ax=["0"],lx=["100"],cx=["25"],ux=["10"],hx=["10"],dx=["#00AE42"],fx=["0"],px=["20"],mx=["1.24"],_x=["nil"],gx=["1"],vx=["45"],xx=["45"],Mx=["12"],yx=["70"],Sx=["12"],Ex=["45"],bx=["50"],Tx=["1.75"],wx=["1"],Ax=[`; filament end gcode 

`],Cx=["0"],Rx=["Direct Drive Standard"],Px=["0.98"],Lx=["0"],Dx=["0"],Fx=["0"],Ix=["GFL99"],Nx=["0"],Ux=["0"],Ox=["nil"],Bx=["1"],Gx=["1"],zx="Auto For Flush",kx=["12"],Hx=["None"],Vx=["15"],Wx=[""],Xx=["0"],Yx=[""],qx=["0"],$x=[""],jx=[""],Zx="",Jx=["1"],Kx=["0"],Qx=["50"],e1=["30"],t1=["10"],n1=["10"],i1=["0"],r1=["0"],s1=["0"],o1=["45"],a1=["60"],l1=["3"],c1=["0"],u1=["0"],h1=["-1"],d1=["-1"],f1=["nil"],p1=["14"],m1=["nil"],_1=["nil"],g1=["nil"],v1=["nil"],x1=["nil"],M1=["nil"],y1=["15%"],S1=["10%"],E1=["10"],b1=["none"],T1=["1"],w1=["Generic PLA @BBL A1"],A1=["100%"],C1=["0"],R1=[`; filament start gcode
{if  (bed_temperature[current_extruder] >45)||(bed_temperature_initial_layer[current_extruder] >45)}M106 P3 S255
{elsif(bed_temperature[current_extruder] >35)||(bed_temperature_initial_layer[current_extruder] >35)}M106 P3 S180
{endif};Prevent PLA from jamming


{if activate_air_filtration[current_extruder] && support_air_filtration}
M106 P3 S{during_print_exhaust_fan_speed_num[current_extruder]} 
{endif}`],P1=["10"],L1=["0"],D1=["-1"],F1=["20"],I1=["4"],N1=["PLA"],U1=["1"],O1=["Generic"],B1=["0"],G1=["nil"],z1=["nil"],k1=["nil"],H1=["nil"],V1="{input_filename_base}_{filament_type[0]}_{print_time}.gcode",W1="1",X1="0",Y1=["0"],q1=["0"],$1=["0"],j1="0",Z1="0",J1="1",K1=["1"],Q1=["1.2"],eM=["0","280","280","280","280","0","280","280","280","280","0","280","280","280","280","0"],tM=["140","140","140","140","140","140","140","140"],nM="project",iM=["0"],rM="none",sM="0",oM="displacement",aM="classic",lM="4",cM="0.5",uM="0.8",hM="1",dM="0.3",fM=["250"],pM="0",mM="marlin",_M=["17.4"],gM="0",vM="0",xM="0",MM=["226x224","256x224","256x256","226x256"],yM=["0"],SM=["-0.008"],EM=["0.23415"],bM=["0.22"],TM=["0.088"],wM=["65"],AM=["65"],CM=["2"],RM=["2"],PM=["10"],LM="1",DM="0",FM="45",IM="0",NM="9",UM="1",OM="0",BM="0.4",GM="15%",zM=["","",""],kM=["500"],HM="1",VM=["105"],WM="9",XM="0.5",YM="0.2",qM=["50"],$M=["6000"],jM=["0"],ZM="9",JM="0.45",KM=["300"],QM="0",ey="0",ty="2",ny="0.8",iy="2",ry="2",sy="22.5",oy="0.8",ay="0.42",ly="zig-zag",cy=["250"],uy="45",hy=["-1"],dy="10%",fy="0.21",py="zig-zag",my="0.15",_y="30",gy="no ironing",vy="0",xy=`; layer num/total_layer_count: {layer_num+1}/[total_layer_count]
; update layer progress
M73 L{layer_num+1}
M991 S0 P{layer_num} ;notify layer change`,My="0.2",yy="0.42",Sy="zigzag",Ey="crosszag",by=["0"],Ty=["0"],wy="0",Ay=`;===== date: 20260513 =====================
G392 S0 ;turn off nozzle clog detect

M400 ; wait for buffer to clear
G92 E0 ; zero the extruder
G90
G1 Z{max_layer_z + 0.4} F900 ; lower z a little
G1 X0 Y{first_layer_center_no_wipe_tower[1]} F18000 ; move to safe pos
G1 X-13.0 F3000 ; move to safe pos
{if !spiral_mode && print_sequence != "by object"}
M1002 judge_flag timelapse_record_flag
M622 J1
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M400 P100
M971 S11 C11 O0
M991 S0 P-1 ;end timelapse at safe pos
M623
{endif}

M140 S0 ; turn off bed
M106 S0 ; turn off fan
M106 P2 S0 ; turn off remote part cooling fan
M106 P3 S0 ; turn off chamber cooling fan

;G1 X27 F15000 ; wipe

; pull back filament to AMS
M620 S255
G1 X267 F15000
T255
G1 X-28.5 F18000
G1 X-48.2 F3000
G1 X-28.5 F18000
G1 X-48.2 F3000
M621 S255

M104 S0 ; turn off hotend

M400 ; wait all motion done
M17 S
M17 Z0.4 ; lower z motor current to reduce impact if there is something in the bottom
{if (max_layer_z + 100.0) < 256}
    G1 Z{max_layer_z + 100.0} F600
    G1 Z{max_layer_z +98.0}
{else}
    G1 Z256 F600
    G1 Z256
{endif}
M400 P100
M17 R ; restore z current

G90
G1 X-48 Y180 F3600

M220 S100  ; Reset feedrate magnitude
M201.2 K1.0 ; Reset acc magnitude
M73.2   R1.0 ;Reset left time magnitude
M1002 set_gcode_claim_speed_level : 0

;=====printer finish  sound=========
M17
M400 S1
M1006 S1
M1006 A0 B20 L100 C37 D20 M40 E42 F20 N60
M1006 A0 B10 L100 C44 D10 M60 E44 F10 N60
M1006 A0 B10 L100 C46 D10 M80 E46 F10 N80
M1006 A44 B20 L100 C39 D20 M60 E48 F20 N60
M1006 A0 B10 L100 C44 D10 M60 E44 F10 N60
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N60
M1006 A0 B10 L100 C39 D10 M60 E39 F10 N60
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N60
M1006 A0 B10 L100 C44 D10 M60 E44 F10 N60
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N60
M1006 A0 B10 L100 C39 D10 M60 E39 F10 N60
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N60
M1006 A0 B10 L100 C48 D10 M60 E44 F10 N80
M1006 A0 B10 L100 C0 D10 M60 E0 F10  N80
M1006 A44 B20 L100 C49 D20 M80 E41 F20 N80
M1006 A0 B20 L100 C0 D20 M60 E0 F20 N80
M1006 A0 B20 L100 C37 D20 M30 E37 F20 N60
M1006 W
;=====printer finish  sound=========

;M17 X0.8 Y0.8 Z0.5 ; lower motor current to 45% power
M400
M18 X Y Z

`,Cy="0",Ry="25",Py=["5000","5000"],Ly=["12000","12000"],Dy=["5000","5000"],Fy=["6000","6000"],Iy=["6000","6000"],Ny=["6000","6000"],Uy=["1500","1500"],Oy="0",By=["3","3"],Gy=["9","9"],zy=["9","9"],ky=["3","3"],Hy="0",Vy=["30","30"],Wy=["500","200"],Xy=["500","200"],Yy=["30","30"],qy=["0","0"],$y=["0","0"],jy="M400 U1",Zy="260",Jy=`;===== machine: A1 =========================
;===== date: 20260513 ==================
G392 S0
M9833.2
;M400
;M73 P1.717

;===== start to heat heatbead&hotend==========
M1002 gcode_claim_action : 2
M1002 set_filament_type:{filament_type[initial_no_support_extruder]}
M104 S140
M140 S[bed_temperature_initial_layer_single]

;=====start printer sound ===================
M17
M400 S1
M1006 S1
M1006 A0 B10 L100 C37 D10 M60 E37 F10 N60
M1006 A0 B10 L100 C41 D10 M60 E41 F10 N60
M1006 A0 B10 L100 C44 D10 M60 E44 F10 N60
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N60
M1006 A43 B10 L100 C46 D10 M70 E39 F10 N80
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N80
M1006 A0 B10 L100 C43 D10 M60 E39 F10 N80
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N80
M1006 A0 B10 L100 C41 D10 M80 E41 F10 N80
M1006 A0 B10 L100 C44 D10 M80 E44 F10 N80
M1006 A0 B10 L100 C49 D10 M80 E49 F10 N80
M1006 A0 B10 L100 C0 D10 M80 E0 F10 N80
M1006 A44 B10 L100 C48 D10 M60 E39 F10 N80
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N80
M1006 A0 B10 L100 C44 D10 M80 E39 F10 N80
M1006 A0 B10 L100 C0 D10 M60 E0 F10 N80
M1006 A43 B10 L100 C46 D10 M60 E39 F10 N80
M1006 W
M18 
;=====start printer sound ===================

;=====avoid end stop =================
G91
G380 S2 Z40 F1200
G380 S3 Z-15 F1200
G90

;===== reset machine status =================
;M290 X39 Y39 Z8
M204 S6000

M630 S0 P0
G91
M17 Z0.3 ; lower the z-motor current

G90
M17 X0.65 Y1.2 Z0.6 ; reset motor current to default
M960 S5 P1 ; turn on logo lamp
G90
M220 S100 ;Reset Feedrate
M221 S100 ;Reset Flowrate
M73.2   R1.0 ;Reset left time magnitude
;M211 X0 Y0 Z0 ; turn off soft endstop to prevent protential logic problem

;====== cog noise reduction=================
M982.2 S1 ; turn on cog noise reduction

M1002 gcode_claim_action : 13

G28 X
G91
G1 Z5 F1200
G90
G0 X128 F30000
G0 Y254 F3000
G91
G1 Z-5 F1200

M109 S25 H140

M17 E0.3
M83
G1 E10 F1200
G1 E-0.5 F30
M17 D

G28 Z P0 T140; home z with low precision,permit 300deg temperature
M104 S{nozzle_temperature_initial_layer[initial_extruder]}

M1002 judge_flag build_plate_detect_flag
M622 S1
  G39.4
  G90
  G1 Z5 F1200
M623

;M400
;M73 P1.717

;===== prepare print temperature and material ==========
M1002 gcode_claim_action : 24

M400
;G392 S1
M211 X0 Y0 Z0 ;turn off soft endstop
M975 S1 ; turn on

G90
G1 X-28.5 F30000
G1 X-48.2 F3000

M620 M ;enable remap
M620 S[initial_no_support_extruder]A   ; switch material if AMS exist
    M1002 gcode_claim_action : 4
    M400
    M1002 set_filament_type:UNKNOWN
    M109 S[nozzle_temperature_initial_layer]
{if (filament_type[initial_no_support_extruder] == "PLA") && (nozzle_diameter != 0.2)}
    M104 S220
{else}
    M104 S250
{endif}
    M400
    T[initial_no_support_extruder]
    G1 X-48.2 F3000
    M400

{if (filament_type[initial_no_support_extruder] == "PLA") && (nozzle_diameter != 0.2)}
    M620.1 E F{flush_volumetric_speeds[initial_no_support_extruder]/2.4053*60} T220
    M109 S220 ;set nozzle to common flush temp
{else}
    M620.1 E F{flush_volumetric_speeds[initial_no_support_extruder]/2.4053*60} T{flush_temperatures[initial_no_support_extruder]}
    M109 S250 ;set nozzle to common flush temp
{endif}
    M106 P1 S0
    G92 E0
    G1 E50 F200
    M400
    M1002 set_filament_type:{filament_type[initial_no_support_extruder]}
M621 S[initial_no_support_extruder]A

{if (filament_type[initial_no_support_extruder] == "PLA") && (nozzle_diameter != 0.2)}
    M109 S220 H300
{else}
    M109 S{flush_temperatures[initial_no_support_extruder]} H300
{endif}
G92 E0
G1 E50 F200 ; lower extrusion speed to avoid clog
M400
M106 P1 S178
G92 E0
G1 E5 F200
M104 S{nozzle_temperature_initial_layer[initial_no_support_extruder]}
G92 E0
G1 E-0.5 F300

G1 X-28.5 F30000
G1 X-48.2 F3000
G1 X-28.5 F30000 ;wipe and shake
G1 X-48.2 F3000
G1 X-28.5 F30000 ;wipe and shake
G1 X-48.2 F3000

;G392 S0

M400
M106 P1 S0
;===== prepare print temperature and material end =====

;M400
;M73 P1.717

;===== auto extrude cali start =========================
M975 S1
;G392 S1

G90
M83
T1000
G1 X-48.2 Y0 Z10 F10000
M400
M1002 set_filament_type:UNKNOWN

M412 S1 ;  ===turn on  filament runout detection===
M400 P10
M620.3 W1; === turn on filament tangle detection===
M400 S2

M1002 set_filament_type:{filament_type[initial_no_support_extruder]}

;M1002 set_flag extrude_cali_flag=1
M1002 judge_flag extrude_cali_flag

M622 J1
    M1002 gcode_claim_action : 8

    M109 S{nozzle_temperature[initial_extruder]}
    G1 E10 F{outer_wall_volumetric_speed/2.4*60}
    M983 F{outer_wall_volumetric_speed/2.4} A0.3 H[nozzle_diameter]; cali dynamic extrusion compensation

    M106 P1 S255
    M400 S5
    G1 X-28.5 F18000
    G1 X-48.2 F3000
    G1 X-28.5 F18000 ;wipe and shake
    G1 X-48.2 F3000
    G1 X-28.5 F12000 ;wipe and shake
    G1 X-48.2 F3000
    M400
    M106 P1 S0

    M1002 judge_last_extrude_cali_success
    M622 J0
        M983 F{outer_wall_volumetric_speed/2.4} A0.3 H[nozzle_diameter]; cali dynamic extrusion compensation
        M106 P1 S255
        M400 S5
        G1 X-28.5 F18000
        G1 X-48.2 F3000
        G1 X-28.5 F18000 ;wipe and shake
        G1 X-48.2 F3000
        G1 X-28.5 F12000 ;wipe and shake
        M400
        M106 P1 S0
    M623
    
    G1 X-48.2 F3000
    M400
    M984 A0.1 E1 S1 F{outer_wall_volumetric_speed/2.4} H[nozzle_diameter]
    M106 P1 S178
    M400 S7
    G1 X-28.5 F18000
    G1 X-48.2 F3000
    G1 X-28.5 F18000 ;wipe and shake
    G1 X-48.2 F3000
    G1 X-28.5 F12000 ;wipe and shake
    G1 X-48.2 F3000
    M400
    M106 P1 S0
M623 ; end of "draw extrinsic para cali paint"

;G392 S0
;===== auto extrude cali end ========================

;M400
;M73 P1.717

M104 S170 ; prepare to wipe nozzle
M106 S255 ; turn on fan

;===== mech mode fast check start =====================
M1002 gcode_claim_action : 3

G1 X128 Y128 F20000
G1 Z5 F1200
M400 P200
M970.3 Q1 A5 K0 O3
M974 Q1 S2 P0

M970.2 Q1 K1 W58 Z0.1
M974 S2

G1 X128 Y128 F20000
G1 Z5 F1200
M400 P200
M970.3 Q0 A10 K0 O1
M974 Q0 S2 P0

M970.2 Q0 K1 W78 Z0.1
M974 S2

M975 S1
G1 F30000
G1 X0 Y5
G28 X ; re-home XY

G1 Z4 F1200

;===== mech mode fast check end =======================

;M400
;M73 P1.717

;===== wipe nozzle ===============================
M1002 gcode_claim_action : 14

M975 S1
M106 S255 ; turn on fan (G28 has turn off fan)
M211 S; push soft endstop status
M211 X0 Y0 Z0 ;turn off Z axis endstop

;===== remove waste by touching start =====

M104 S170 ; set temp down to heatbed acceptable

M83
G1 E-1 F500
G90
M83

M109 S170
G0 X108 Y-0.5 F30000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X110 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X112 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X114 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X116 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X118 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X120 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X122 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X124 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X126 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X128 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X130 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X132 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X134 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X136 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X138 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X140 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X142 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X144 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X146 F10000
G380 S3 Z-5 F1200
G1 Z2 F1200
G1 X148 F10000
G380 S3 Z-5 F1200

G1 Z5 F30000
;===== remove waste by touching end =====

G1 Z10 F1200
G0 X118 Y261 F30000
G1 Z5 F1200
M109 S{nozzle_temperature_initial_layer[initial_extruder]-50}

G28 Z P0 T300; home z with low precision,permit 300deg temperature
G29.2 S0 ; turn off ABL
M104 S140 ; prepare to abl
G0 Z5 F20000

G0 X128 Y261 F20000  ; move to exposed steel surface
G0 Z-1.01 F1200      ; stop the nozzle

G91
G2 I1 J0 X2 Y0 F2000.1
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5

G90
G1 Z10 F1200

;===== brush material wipe nozzle =====

G90
G1 Y250 F30000
G1 X55
G1 Z1.300 F1200
G1 Y262.5 F6000
G91
G1 X-35 F30000
G1 Y-0.5
G1 X45
G1 Y-0.5
G1 X-45
G1 Y-0.5
G1 X45
G1 Y-0.5
G1 X-45
G1 Y-0.5
G1 X45
G1 Z5.000 F1200

G90
G1 X30 Y250.000 F30000
G1 Z1.300 F1200
G1 Y262.5 F6000
G91
G1 X35 F30000
G1 Y-0.5
G1 X-45
G1 Y-0.5
G1 X45
G1 Y-0.5
G1 X-45
G1 Y-0.5
G1 X45
G1 Y-0.5
G1 X-45
G1 Z10.000 F1200

;===== brush material wipe nozzle end =====

G90
;G0 X128 Y261 F20000  ; move to exposed steel surface
G1 Y250 F30000
G1 X138
G1 Y261
G0 Z-1.01 F1200      ; stop the nozzle

G91
G2 I1 J0 X2 Y0 F2000.1
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5
G2 I1 J0 X2
G2 I-0.75 J0 X-1.5

M109 S140
M106 S255 ; turn on fan (G28 has turn off fan)

M211 R; pop softend status

;===== wipe nozzle end ================================

;M400
;M73 P1.717

;===== bed leveling ==================================
M1002 judge_flag g29_before_print_flag

G90
G1 Z5 F1200
G1 X0 Y0 F30000
G29.2 S1 ; turn on ABL

M190 S[bed_temperature_initial_layer_single]; ensure bed temp
M109 S140
M106 S0 ; turn off fan , too noisy

M622 J1
    M1002 gcode_claim_action : 1
    G29 A1 X{first_layer_print_min[0]} Y{first_layer_print_min[1]} I{first_layer_print_size[0]} J{first_layer_print_size[1]}
    M400
    M500 ; save cali data
M623
;===== bed leveling end ================================

;===== home after wipe mouth============================
M1002 judge_flag g29_before_print_flag
M622 J0

    M1002 gcode_claim_action : 13
    G28

M623

;===== home after wipe mouth end =======================

;M400
;M73 P1.717

G1 X108.000 Y-0.500 F30000
G1 Z0.300 F1200
M400
G2814 Z0.32

M104 S{nozzle_temperature_initial_layer[initial_extruder]} ; prepare to print

;===== nozzle load line ===============================
;G90
;M83
;G1 Z5 F1200
;G1 X88 Y-0.5 F20000
;G1 Z0.3 F1200

;M109 S{nozzle_temperature_initial_layer[initial_extruder]}

;G1 E2 F300
;G1 X168 E4.989 F6000
;G1 Z1 F1200
;===== nozzle load line end ===========================

;===== extrude cali test ===============================

M400
    M900 S
    M900 C
    G90
    M83

    M109 S{nozzle_temperature_initial_layer[initial_extruder]}
    G0 X128 E8  F{outer_wall_volumetric_speed/(24/20)    * 60}
    G0 X133 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)/4     * 60}
    G0 X138 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)     * 60}
    G0 X143 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)/4     * 60}
    G0 X148 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)     * 60}
    G0 X153 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)/4     * 60}
    G91
    G1 X1 Z-0.300
    G1 X4
    G1 Z1 F1200
    G90
    M400

M900 R

M1002 judge_flag extrude_cali_flag
M622 J1
    G90
    G1 X108.000 Y1.000 F30000
    G91
    G1 Z-0.700 F1200
    G90
    M83
    G0 X128 E10  F{outer_wall_volumetric_speed/(24/20)    * 60}
    G0 X133 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)/4     * 60}
    G0 X138 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)     * 60}
    G0 X143 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)/4     * 60}
    G0 X148 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)     * 60}
    G0 X153 E.3742  F{outer_wall_volumetric_speed/(0.3*0.5)/4     * 60}
    G91
    G1 X1 Z-0.300
    G1 X4
    G1 Z1 F1200
    G90
    M400
M623

G1 Z0.2

;M400
;M73 P1.717

;========turn off light and wait extrude temperature =============
M1002 gcode_claim_action : 0
M400

;===== for Textured PEI Plate , lower the nozzle as the nozzle was touching topmost of the texture when homing ==
;curr_bed_type={curr_bed_type}
{if curr_bed_type=="Textured PEI Plate"}
G29.1 Z{-0.02} ; for Textured PEI Plate
{endif}

M960 S1 P0 ; turn off laser
M960 S2 P0 ; turn off laser
M106 S0 ; turn off fan
M106 P2 S0 ; turn off big fan
M106 P3 S0 ; turn off chamber fan

M975 S1 ; turn on mech mode supression
G90
M83
T1000

M211 X0 Y0 Z0 ;turn off soft endstop
;G392 S1 ; turn on clog detection
M1007 S1 ; turn on mass estimation
G29.4
`,Ky="0",Qy="29",eS="1",tS="0",nS=["0.28"],iS="0",rS="85%",sS="25%",oS=["0.08"],aS="15",lS="0",cS="0",uS="0%",hS="project_settings",dS=["0"],fS=["0.4"],pS=["0"],mS="4.76",_S=["220"],gS=["220"],vS=["240"],xS=["190"],MS=["stainless_steel"],yS=["92"],SS=["Standard"],ES="0",bS="0",TS=["0"],wS="0",AS=["5000"],CS="9",RS="0.42",PS=["200"],LS=["0"],DS=["50"],FS=["30"],IS=["10"],NS=["100"],US=["50%"],OS=["95%"],BS=["10"],GS="0",zS=["0"],kS=["0"],HS=[],VS=["0"],WS="0",XS="0",YS=["0.02"],qS="3",$S="0",jS="0",ZS="1",JS="0",KS="150%",QS="-1",eE="90",tE="90",nE="1",iE="8",rE="1",sE="35",oE="Default",aE=["Bambu Lab A1 0.4 nozzle"],lE=["1"],cE=["Direct Drive Standard"],uE="1",hE="0",dE="by layer",fE="0.20mm Standard @BBL A1",pE=["0x0","256x0","256x256","0x256"],mE="256",_E=["1"],gE=["Direct Drive Standard"],vE="Bambu Lab A1",xE="",ME="Bambu Lab A1 0.4 nozzle",yE="i3",SE="FFF",EE="0.4",bE="",TE="",wE="0.1",AE="1.5",CE="90%",RE="-1",PE="0",LE="0",DE=["1"],FE="Auto",IE=["3"],NE="0.012",UE=["0%"],OE=["2"],BE=["0"],GE=["255"],zE=["0"],kE=["0"],HE=["1"],VE=["18"],WE=["0"],XE=["0.8"],YE=["1"],qE=["30"],$E="1",jE="0",ZE="155",JE="15%",KE="0",QE="aligned",eb="1",tb="0",nb="0",ib="1",rb="10",sb="10%",ob="10",ab="none",lb="0",cb="1",ub="15%",hb="0.45",db="15%",fb="2",pb="0.45",mb="2",_b="1",gb="0",vb="1",xb="0.049",Mb="regular",yb=["1"],Sb=["8"],Eb=["20"],bb=["100000"],Tb=["400"],wb=["1000"],Ab=["100000"],Cb=["0"],Rb=["1000"],Pb=["50%"],Lb=["0"],Db="80",Fb="1",Ib="0",Nb=["100%"],Ub="400%",Ob="20",Bb="15%",Gb="0",zb="-45",kb="45",Hb="0.45",Vb="lightning",Wb=["270"],Xb="0",Yb="200%",qb="0",$b="-5",jb=["30x-3","54x245"],Zb=["45"],Jb=["45"],Kb="0",Qb="0",eT="default",tT="2.5",nT="0.5",iT="0.2",rT="0",sT="0",oT="0",aT="0",lT="0",cT="0",uT="2",hT="0",dT="0",fT="1",pT="auto",mT="0.5",_T=["80"],gT="2",vT="0",xT="10%",MT="0",yT="zig-zag",ST="0.15",ET="30",bT="0.42",TT="0.2",wT="0",AT="0.35",CT="0",RT="1",PT=["150"],LT="default",DT="30",FT="0.2",IT="tree(auto)",NT="0",UT=["45"],OT="",BT=["65"],GT=["65"],zT="0",kT=["50x50"],HT=`;===================== date: 20250206 =====================
{if !spiral_mode && print_sequence != "by object"}
; don't support timelapse gcode in spiral_mode and by object sequence for I3 structure printer
; SKIPPABLE_START
; SKIPTYPE: timelapse
M622.1 S1 ; for prev firmware, default turned on
M1002 judge_flag timelapse_record_flag
M622 J1
G92 E0
G1 Z{max_layer_z + 0.4}
G1 X0 Y{first_layer_center_no_wipe_tower[1]} F18000 ; move to safe pos
G1 X-48.2 F3000 ; move to safe pos
M400
M1004 S5 P1  ; external shutter
M400 P300
M971 S11 C11 O0
G92 E0
G1 X0 F18000
M623

; SKIPTYPE: head_wrap_detect
M622.1 S1
M1002 judge_flag g39_3rd_layer_detect_flag
M622 J1
    ; enable nozzle clog detect at 3rd layer
    {if layer_num == 2}
      M400
      G90
      M83
      M204 S5000
      G0 Z2 F4000
      G0 X261 Y250 F20000
      M400 P200
      G39 S1
      G0 Z2 F4000
    {endif}


    M622.1 S1
    M1002 judge_flag g39_detection_flag
    M622 J1
      {if !in_head_wrap_detect_zone}
        M622.1 S0
        M1002 judge_flag g39_mass_exceed_flag
        M622 J1
        {if layer_num > 2}
            G392 S0
            M400
            G90
            M83
            M204 S5000
            G0 Z{max_layer_z + 0.4} F4000
            G39.3 S1
            G0 Z{max_layer_z + 0.4} F4000
            G392 S0
          {endif}
        M623
    {endif}
    M623
M623
; SKIPPABLE_END
{endif}
`,VT="0",WT="200%",XT="5",YT="all top",qT="5",$T="1",jT=["1"],ZT=["2000"],JT="100%",KT="9",QT="0.42",ew="monotonicline",tw=["200"],nw="0",iw=["10000"],rw="9",sw=["250"],ow=["700"],aw=["0"],lw="45",cw="2",uw="5",hw="5",dw="-1",fw=["Bambu Lab H2D 0.4 nozzle","Bambu Lab H2D Pro 0.4 nozzle","Bambu Lab H2S 0.4 nozzle","Bambu Lab P2S 0.4 nozzle","Bambu Lab H2C 0.4 nozzle","Bambu Lab X2D 0.4 nozzle","Bambu Lab A2L 0.4 nozzle"],pw="0",mw="1",_w="02.08.02.60",gw=["80%"],vw=["0 0 0 0 0 0"],xw="1",Mw="0",yw="classic",Sw="2",Ew="inner wall/outer wall",bw="10",Tw="25%",ww="100%",Aw=["1"],Cw=["2"],Rw="80%",Pw="0",Lw="0",Dw=["15"],Fw=["220"],Iw="",Nw="20",Uw=[],Ow="0",Bw="0",Gw="0",zw=["0.4"],kw=["Auto Lift"],Hw={accel_to_decel_enable:rg,accel_to_decel_factor:sg,activate_air_filtration:og,additional_cooling_fan_speed:ag,additional_fan_full_speed_layer:lg,alternate_extra_wall:cg,ams_filament_load_time_ams:ug,ams_filament_load_time_ams_lite:hg,ams_filament_load_time_n3f_s:dg,ams_filament_unload_time_ams:fg,ams_filament_unload_time_ams_lite:pg,ams_filament_unload_time_n3f_s:mg,apply_scarf_seam_on_circles:_g,auxiliary_fan:gg,avoid_crossing_wall_includes_support:vg,bed_custom_model:xg,bed_custom_texture:Mg,bed_exclude_area:yg,bed_heat_soak_area:Sg,bed_temperature_formula:Eg,before_layer_change_gcode:bg,best_object_pos:Tg,bottom_color_penetration_layers:wg,bottom_shell_layers:Ag,bottom_shell_thickness:Cg,bottom_surface_density:Rg,bottom_surface_pattern:Pg,bridge_angle:Lg,bridge_flow:Dg,bridge_no_support:Fg,bridge_speed:Ig,brim_object_gap:Ng,brim_type:Ug,brim_width:Og,chamber_temperatures:Bg,change_filament_gcode:Gg,circle_compensation_manual_offset:zg,circle_compensation_speed:kg,close_additional_fan_first_x_layers:Hg,close_fan_the_first_x_layers:Vg,compatible_printers_condition:Wg,complete_print_exhaust_fan_speed:Xg,cool_plate_temp:Yg,cool_plate_temp_initial_layer:qg,cooling_filter_enabled:$g,cooling_perimeter_transition_distance:jg,cooling_slowdown_logic:Zg,counter_coef_1:Jg,counter_coef_2:Kg,counter_coef_3:Qg,counter_limit_max:ev,counter_limit_min:tv,counterbore_hole_bridging:nv,curr_bed_type:iv,default_acceleration:rv,default_ams_type:sv,default_filament_colour:ov,default_filament_profile:av,default_jerk:lv,default_nozzle_volume_type:cv,default_print_profile:uv,deretraction_speed:hv,detect_floating_vertical_shell:dv,detect_narrow_internal_solid_infill:fv,detect_overhang_wall:pv,detect_thin_wall:mv,diameter_limit:_v,different_settings_to_system:gv,draft_shield:vv,during_print_exhaust_fan_speed:xv,elefant_foot_compensation:Mv,embedding_wall_into_infill:yv,enable_arc_fitting:Sv,enable_circle_compensation:Ev,enable_filament_dynamic_map:bv,enable_height_slowdown:Tv,enable_long_retraction_when_cut:wv,enable_mixed_color_sublayer:Av,enable_order_independent_overlap_carving:Cv,enable_overhang_bridge_fan:Rv,enable_overhang_speed:Pv,enable_pre_heating:Lv,enable_pressure_advance:Dv,enable_prime_tower:Fv,enable_support:Iv,enable_support_ironing:Nv,enable_tower_interface_features:Uv,enable_wrapping_detection:Ov,enforce_support_layers:Bv,eng_plate_temp:Gv,eng_plate_temp_initial_layer:zv,ensure_vertical_shell_thickness:kv,exclude_object:Hv,extruder_ams_count:Vv,extruder_clearance_dist_to_rod:Wv,extruder_clearance_height_to_lid:Xv,extruder_clearance_height_to_rod:Yv,extruder_clearance_max_radius:qv,extruder_colour:$v,extruder_max_nozzle_count:jv,extruder_nozzle_stats:Zv,extruder_offset:Jv,extruder_printable_area:Kv,extruder_printable_height:Qv,extruder_type:ex,extruder_variant_list:tx,fan_cooling_layer_time:nx,fan_direction:ix,fan_max_speed:rx,fan_min_speed:sx,farthest_point_timelapse:ox,filament_adaptive_volumetric_speed:ax,filament_adhesiveness_category:lx,filament_bridge_speed:cx,filament_change_length:ux,filament_change_length_nc:hx,filament_colour:dx,filament_cooling_before_tower:fx,filament_cost:px,filament_density:mx,filament_deretraction_speed:_x,filament_dev_ams_drying_ams_limitations:gx,filament_dev_ams_drying_heat_distortion_temperature:vx,filament_dev_ams_drying_temperature:xx,filament_dev_ams_drying_time:Mx,filament_dev_chamber_drying_bed_temperature:yx,filament_dev_chamber_drying_time:Sx,filament_dev_drying_cooling_temperature:Ex,filament_dev_drying_softening_temperature:bx,filament_diameter:Tx,filament_enable_overhang_speed:wx,filament_end_gcode:Ax,filament_extruder_compatibility:Cx,filament_extruder_variant:Rx,filament_flow_ratio:Px,filament_flush_temp:Lx,filament_flush_temp_fast:Dx,filament_flush_volumetric_speed:Fx,filament_ids:Ix,filament_is_mixed:Nx,filament_is_support:Ux,filament_long_retractions_when_cut:Ox,filament_map:Bx,filament_map_2:Gx,filament_map_mode:zx,filament_max_volumetric_speed:kx,filament_metal_stickiness:Hx,filament_minimal_purge_on_wipe_tower:Vx,filament_mixed_components:Wx,filament_mixed_gradient:Xx,filament_mixed_gradient_curve:Yx,filament_mixed_gradient_per_part:qx,filament_mixed_gradient_range:$x,filament_mixed_sublayer_ratios:jx,filament_notes:Zx,filament_nozzle_map:Jx,filament_overhang_1_4_speed:Kx,filament_overhang_2_4_speed:Qx,filament_overhang_3_4_speed:e1,filament_overhang_4_4_speed:t1,filament_overhang_totally_speed:n1,filament_pre_cooling_temperature:i1,filament_pre_cooling_temperature_nc:r1,filament_preheat_temperature_delta:s1,filament_prime_volume:o1,filament_prime_volume_nc:a1,filament_printable:l1,filament_ramming_travel_time:c1,filament_ramming_travel_time_nc:u1,filament_ramming_volumetric_speed:h1,filament_ramming_volumetric_speed_nc:d1,filament_retract_before_wipe:f1,filament_retract_length_nc:p1,filament_retract_restart_extra:m1,filament_retract_when_changing_layer:_1,filament_retraction_distances_when_cut:g1,filament_retraction_length:v1,filament_retraction_minimum_travel:x1,filament_retraction_speed:M1,filament_scarf_gap:y1,filament_scarf_height:S1,filament_scarf_length:E1,filament_scarf_seam_type:b1,filament_self_index:T1,filament_settings_id:w1,filament_shrink:A1,filament_soluble:C1,filament_start_gcode:R1,filament_tower_interface_pre_extrusion_dist:P1,filament_tower_interface_pre_extrusion_length:L1,filament_tower_interface_print_temp:D1,filament_tower_interface_purge_volume:F1,filament_tower_ironing_area:I1,filament_type:N1,filament_velocity_adaptation_factor:U1,filament_vendor:O1,filament_volume_map:B1,filament_wipe:G1,filament_wipe_distance:z1,filament_z_hop:k1,filament_z_hop_types:H1,filename_format:V1,fill_multiline:W1,filter_out_gap_fill:X1,first_layer_print_sequence:Y1,first_x_layer_fan_speed:q1,first_x_layer_part_fan_speed:$1,flush_into_infill:j1,flush_into_objects:Z1,flush_into_support:J1,flush_multiplier:K1,flush_multiplier_fast:Q1,flush_volumes_matrix:eM,flush_volumes_vector:tM,from:nM,full_fan_speed_layer:iM,fuzzy_skin:rM,fuzzy_skin_first_layer:sM,fuzzy_skin_mode:oM,fuzzy_skin_noise_type:aM,fuzzy_skin_octaves:lM,fuzzy_skin_persistence:cM,fuzzy_skin_point_distance:uM,fuzzy_skin_scale:hM,fuzzy_skin_thickness:dM,gap_infill_speed:fM,gcode_add_line_number:pM,gcode_flavor:mM,grab_length:_M,group_algo_with_time:gM,has_filament_switcher:vM,has_scarf_joint_seam:xM,head_wrap_detect_zone:MM,hole_coef_1:yM,hole_coef_2:SM,hole_coef_3:EM,hole_limit_max:bM,hole_limit_min:TM,hot_plate_temp:wM,hot_plate_temp_initial_layer:AM,hotend_cooling_rate:CM,hotend_heating_rate:RM,impact_strength_z:PM,independent_support_layer_height:LM,infill_combination:DM,infill_direction:FM,infill_instead_top_bottom_surfaces:IM,infill_jerk:NM,infill_lock_depth:UM,infill_rotate_step:OM,infill_shift_step:BM,infill_wall_overlap:GM,inherits_group:zM,initial_layer_acceleration:kM,initial_layer_flow_ratio:HM,initial_layer_infill_speed:VM,initial_layer_jerk:WM,initial_layer_line_width:XM,initial_layer_print_height:YM,initial_layer_speed:qM,initial_layer_travel_acceleration:$M,inner_wall_acceleration:jM,inner_wall_jerk:ZM,inner_wall_line_width:JM,inner_wall_speed:KM,interface_shells:QM,interlocking_beam:ey,interlocking_beam_layer_count:ty,interlocking_beam_width:ny,interlocking_boundary_avoidance:iy,interlocking_depth:ry,interlocking_orientation:sy,internal_bridge_support_thickness:oy,internal_solid_infill_line_width:ay,internal_solid_infill_pattern:ly,internal_solid_infill_speed:cy,ironing_direction:uy,ironing_fan_speed:hy,ironing_flow:dy,ironing_inset:fy,ironing_pattern:py,ironing_spacing:my,ironing_speed:_y,ironing_type:gy,is_infill_first:vy,layer_change_gcode:xy,layer_height:My,line_width:yy,locked_skeleton_infill_pattern:Sy,locked_skin_infill_pattern:Ey,long_retractions_when_cut:by,long_retractions_when_ec:Ty,machine_bed_mass_Y:wy,machine_end_gcode:Ay,machine_hotend_change_time:Cy,machine_load_filament_time:Ry,machine_max_acceleration_e:Py,machine_max_acceleration_extruding:Ly,machine_max_acceleration_retracting:Dy,machine_max_acceleration_travel:Fy,machine_max_acceleration_x:Iy,machine_max_acceleration_y:Ny,machine_max_acceleration_z:Uy,machine_max_force_Y:Oy,machine_max_jerk_e:By,machine_max_jerk_x:Gy,machine_max_jerk_y:zy,machine_max_jerk_z:ky,machine_max_printed_mass:Hy,machine_max_speed_e:Vy,machine_max_speed_x:Wy,machine_max_speed_y:Xy,machine_max_speed_z:Yy,machine_min_extruding_rate:qy,machine_min_travel_rate:$y,machine_pause_gcode:jy,machine_prepare_compensation_time:Zy,machine_start_gcode:Jy,machine_switch_extruder_time:Ky,machine_unload_filament_time:Qy,master_extruder_id:eS,max_bridge_length:tS,max_layer_height:nS,max_travel_detour_distance:iS,min_bead_width:rS,min_feature_size:sS,min_layer_height:oS,minimum_sparse_infill_area:aS,mmu_segmented_region_interlocking_depth:lS,mmu_segmented_region_max_width:cS,monotonic_travel_into_wall:uS,name:hS,no_slow_down_for_cooling_on_outwalls:dS,nozzle_diameter:fS,nozzle_flush_dataset:pS,nozzle_height:mS,nozzle_temperature:_S,nozzle_temperature_initial_layer:gS,nozzle_temperature_range_high:vS,nozzle_temperature_range_low:xS,nozzle_type:MS,nozzle_volume:yS,nozzle_volume_type:SS,only_one_wall_first_layer:ES,ooze_prevention:bS,other_layers_print_sequence:TS,other_layers_print_sequence_nums:wS,outer_wall_acceleration:AS,outer_wall_jerk:CS,outer_wall_line_width:RS,outer_wall_speed:PS,overhang_1_4_speed:LS,overhang_2_4_speed:DS,overhang_3_4_speed:FS,overhang_4_4_speed:IS,overhang_fan_speed:NS,overhang_fan_threshold:US,overhang_threshold_participating_cooling:OS,overhang_totally_speed:BS,override_filament_scarf_seam_setting:GS,override_process_overhang_speed:zS,physical_extruder_map:kS,post_process:HS,pre_start_fan_time:VS,precise_outer_wall:WS,precise_z_height:XS,pressure_advance:YS,prime_tower_brim_width:qS,prime_tower_enable_framework:$S,prime_tower_extra_rib_length:jS,prime_tower_fillet_wall:ZS,prime_tower_flat_ironing:JS,prime_tower_infill_gap:KS,prime_tower_lift_height:QS,prime_tower_lift_speed:eE,prime_tower_max_speed:tE,prime_tower_rib_wall:nE,prime_tower_rib_width:iE,prime_tower_skip_points:rE,prime_tower_width:sE,prime_volume_mode:oE,print_compatible_printers:aE,print_extruder_id:lE,print_extruder_variant:cE,print_flow_ratio:uE,print_in_clockwise:hE,print_sequence:dE,print_settings_id:fE,printable_area:pE,printable_height:mE,printer_extruder_id:_E,printer_extruder_variant:gE,printer_model:vE,printer_notes:xE,printer_settings_id:ME,printer_structure:yE,printer_technology:SE,printer_variant:EE,printing_by_object_gcode:bE,process_notes:TE,raft_contact_distance:wE,raft_expansion:AE,raft_first_layer_density:CE,raft_first_layer_expansion:RE,raft_layers:PE,reduce_crossing_wall:LE,reduce_fan_stop_start_freq:DE,reduce_infill_retraction_mode:FE,required_nozzle_HRC:IE,resolution:NE,retract_before_wipe:UE,retract_length_toolchange:OE,retract_lift_above:BE,retract_lift_below:GE,retract_restart_extra:zE,retract_restart_extra_toolchange:kE,retract_when_changing_layer:HE,retraction_distances_when_cut:VE,retraction_distances_when_ec:WE,retraction_length:XE,retraction_minimum_travel:YE,retraction_speed:qE,role_base_wipe_speed:$E,scan_first_layer:jE,scarf_angle_threshold:ZE,seam_gap:JE,seam_placement_away_from_overhangs:KE,seam_position:QE,seam_slope_conditional:eb,seam_slope_entire_loop:tb,seam_slope_gap:nb,seam_slope_inner_walls:ib,seam_slope_min_length:rb,seam_slope_start_height:sb,seam_slope_steps:ob,seam_slope_type:ab,silent_mode:lb,single_extruder_multi_material:cb,skeleton_infill_density:ub,skeleton_infill_line_width:hb,skin_infill_density:db,skin_infill_depth:fb,skin_infill_line_width:pb,skirt_distance:mb,skirt_height:_b,skirt_loops:gb,skirt_per_object:vb,slice_closing_radius:xb,slicing_mode:Mb,slow_down_for_layer_cooling:yb,slow_down_layer_time:Sb,slow_down_min_speed:Eb,slowdown_end_acc:bb,slowdown_end_height:Tb,slowdown_end_speed:wb,slowdown_start_acc:Ab,slowdown_start_height:Cb,slowdown_start_speed:Rb,small_perimeter_speed:Pb,small_perimeter_threshold:Lb,smooth_coefficient:Db,smooth_speed_discontinuity_area:Fb,solid_infill_filament:Ib,sparse_infill_acceleration:Nb,sparse_infill_anchor:Ub,sparse_infill_anchor_max:Ob,sparse_infill_density:Bb,sparse_infill_filament:Gb,sparse_infill_lattice_angle_1:zb,sparse_infill_lattice_angle_2:kb,sparse_infill_line_width:Hb,sparse_infill_pattern:Vb,sparse_infill_speed:Wb,spiral_mode:Xb,spiral_mode_max_xy_smoothing:Yb,spiral_mode_smooth:qb,standby_temperature_delta:$b,start_end_points:jb,supertack_plate_temp:Zb,supertack_plate_temp_initial_layer:Jb,support_air_filtration:Kb,support_angle:Qb,support_base_pattern:eT,support_base_pattern_spacing:tT,support_bottom_interface_spacing:nT,support_bottom_z_distance:iT,support_chamber_temp_control:rT,support_cooling_filter:sT,support_critical_regions_only:oT,support_expansion:aT,support_fast_purge_mode:lT,support_filament:cT,support_interface_bottom_layers:uT,support_interface_filament:hT,support_interface_loop_pattern:dT,support_interface_not_for_body:fT,support_interface_pattern:pT,support_interface_spacing:mT,support_interface_speed:_T,support_interface_top_layers:gT,support_ironing_direction:vT,support_ironing_flow:xT,support_ironing_inset:MT,support_ironing_pattern:yT,support_ironing_spacing:ST,support_ironing_speed:ET,support_line_width:bT,support_object_first_layer_gap:TT,support_object_skip_flush:wT,support_object_xy_distance:AT,support_on_build_plate_only:CT,support_remove_small_overhang:RT,support_speed:PT,support_style:LT,support_threshold_angle:DT,support_top_z_distance:FT,support_type:IT,symmetric_infill_y_axis:NT,temperature_vitrification:UT,template_custom_gcode:OT,textured_plate_temp:BT,textured_plate_temp_initial_layer:GT,thick_bridges:zT,thumbnail_size:kT,time_lapse_gcode:HT,timelapse_type:VT,top_area_threshold:WT,top_color_penetration_layers:XT,top_one_wall_type:YT,top_shell_layers:qT,top_shell_thickness:$T,top_solid_infill_flow_ratio:jT,top_surface_acceleration:ZT,top_surface_density:JT,top_surface_jerk:KT,top_surface_line_width:QT,top_surface_pattern:ew,top_surface_speed:tw,top_z_overrides_xy_distance:nw,travel_acceleration:iw,travel_jerk:rw,travel_short_distance_acceleration:sw,travel_speed:ow,travel_speed_z:aw,tree_support_branch_angle:lw,tree_support_branch_diameter:cw,tree_support_branch_diameter_angle:uw,tree_support_branch_distance:hw,tree_support_wall_count:dw,upward_compatible_machine:fw,use_firmware_retraction:pw,use_relative_e_distances:mw,version:_w,vertical_shell_speed:gw,volumetric_speed_coefficients:vw,wall_distribution_count:xw,wall_filament:Mw,wall_generator:yw,wall_loops:Sw,wall_sequence:Ew,wall_transition_angle:bw,wall_transition_filter_deviation:Tw,wall_transition_length:ww,wipe:Aw,wipe_distance:Cw,wipe_speed:Rw,wipe_tower_no_sparse_layers:Pw,wipe_tower_rotation_angle:Lw,wipe_tower_x:Dw,wipe_tower_y:Fw,wrapping_detection_gcode:Iw,wrapping_detection_layers:Nw,wrapping_exclude_area:Uw,xy_contour_compensation:Ow,xy_hole_compensation:Bw,z_direction_outwall_speed_continuous:Gw,z_hop:zw,z_hop_types:kw},Qn=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[e]);function Vw(i,e,t,{profile:n="generic"}={}){var d;if(!["generic","bambu-a1-04"].includes(n))throw Error("Perfil 3MF desconhecido.");const r=n==="bambu-a1-04",s=r?256:180,o=[{name:"1 - Caixa",vertices:i.box},{name:"2 - Tampa e paredes",vertices:ic(i.upper,e.lid)}];(d=i.lower)!=null&&d.length&&o.push({name:"3 - Fundo da tampa",vertices:rc(i.lower,e.cavityDepth)});const a=o.map(T=>{Hu(T.vertices);const g=[1/0,1/0,1/0],x=[-1/0,-1/0,-1/0];for(let P=0;P<T.vertices.length;P++){const R=P%3;g[R]=Math.min(g[R],T.vertices[P]),x[R]=Math.max(x[R],T.vertices[P])}return{...T,min:g,max:x,width:x[0]-g[0]}}),c=10,l=a.reduce((T,g)=>T+g.width,0)+c*(a.length-1),u=Math.max(...a.map(T=>T.max[1]-T.min[1]));let h=Math.max(10,(s-l)/2);const f=Math.max(10,(s-u)/2),p=T=>r?T*2+2:T+1,_=a.map((T,g)=>{const x=new Map,P=[],R=[];for(let b=0;b<T.vertices.length;b+=3){const I=Array.from(T.vertices.subarray(b,b+3)),N=I.join(",");x.has(N)||(x.set(N,P.length),P.push([I[0]-T.min[0]+h,I[1]-T.min[1]+f,I[2]-T.min[2]])),R.push(x.get(N))}h+=T.width+c;const A=P.map(b=>`<vertex x="${b[0]}" y="${b[1]}" z="${b[2]}"/>`).join(""),F=[];for(let b=0;b<R.length;b+=3)F.push(`<triangle v1="${R[b]}" v2="${R[b+1]}" v3="${R[b+2]}"/>`);const M=`<mesh><vertices>${A}</vertices><triangles>${F.join("")}</triangles></mesh>`;return r?`<object id="${g*2+1}" type="model" name="${Qn(T.name)}">${M}</object><object id="${p(g)}" type="model" name="${Qn(T.name)}"><components><component objectid="${g*2+1}"/></components></object>`:`<object id="${p(g)}" type="model" name="${Qn(T.name)}">${M}</object>`}).join(""),v=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="pt-BR" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"${r?' xmlns:BambuStudio="http://schemas.bambulab.com/package/2021"':""}><metadata name="Title">Forma Gridfinity ${Qn(e.gridX)} x ${Qn(e.gridY)}</metadata><metadata name="Application">${r?"BambuStudio-02.08.02.60":"Forma Gridfinity Studio"}</metadata><metadata name="Generator">Forma Gridfinity Studio</metadata>${r?'<metadata name="BambuStudio:3mfVersion">1</metadata>':""}<resources>${_}</resources><build>${a.map((T,g)=>`<item objectid="${p(g)}"/>`).join("")}</build></model>`,m={"[Content_Types].xml":On('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/><Default Extension="json" ContentType="application/json"/></Types>'),"_rels/.rels":On('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="model" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":On(v)};if(r){m["Metadata/project_settings.config"]=On(JSON.stringify(Hw,null,2));const T=a.map((x,P)=>`<object id="${p(P)}"><metadata key="name" value="${Qn(x.name)}"/><metadata key="extruder" value="1"/><part id="${P*2+1}" subtype="normal_part"><metadata key="name" value="${Qn(x.name)}"/><metadata key="extruder" value="1"/></part></object>`).join(""),g=a.map((x,P)=>`<model_instance><metadata key="object_id" value="${p(P)}"/><metadata key="instance_id" value="0"/><metadata key="identify_id" value="${P+1}"/></model_instance>`).join("");m["Metadata/model_settings.config"]=On(`<?xml version="1.0" encoding="UTF-8"?><config>${T}<plate><metadata key="plater_id" value="1"/><metadata key="plater_name" value="Gridfinity"/><metadata key="locked" value="false"/>${g}</plate></config>`)}return t&&(m["Metadata/forma-project.json"]=On(JSON.stringify(t,null,2))),ig(m,{level:6})}function Ww({data:i,width:e,height:t},{landscape:n=!1,threshold:r=160}={}){if(!e||!t||e*t>3e6||i.length!==e*t*4)throw Error("Imagem inválida ou grande demais para converter.");const s=e*t,o=new Uint8Array(s),a=new Uint8Array(s),c=new Int32Array(s);let l=0,u=0;for(let A=0;A<s;A++){const F=i[A*4+3]/255;o[A]=(i[A*4]*.2126+i[A*4+1]*.7152+i[A*4+2]*.0722)*F+255*(1-F)<r?1:0}const h=A=>{!o[A]&&!a[A]&&(a[A]=1,c[u++]=A)};for(let A=0;A<e;A++)h(A),h((t-1)*e+A);for(let A=0;A<t;A++)h(A*e),h(A*e+e-1);for(;l<u;){const A=c[l++],F=A%e,M=Math.floor(A/e);F&&h(A-1),F<e-1&&h(A+1),M&&h(A-e),M<t-1&&h(A+e)}const f=A=>A>=0&&A<s&&!a[A],p=[],_=new Map,v=e+1,m=(A,F)=>{if(p.length>15e4)throw Error("Imagem com muito ruído. Limpe o fundo ou ajuste o limiar de preto.");const M=p.length;p.push([A,F]),_.has(A)||_.set(A,[]),_.get(A).push(M)};for(let A=0;A<t;A++)for(let F=0;F<e;F++){const M=A*e+F;if(!f(M))continue;const b=A*v+F,I=b+1,N=I+v,z=b+v;(!A||!f(M-e))&&m(b,I),(F===e-1||!f(M+1))&&m(I,N),(A===t-1||!f(M+e))&&m(N,z),(!F||!f(M-1))&&m(z,b)}const d=n?297:210,T=n?210:297,g=new Uint8Array(p.length),x=[];for(let A=0;A<p.length;A++){if(g[A])continue;const F=[];let M=A;for(;!g[M];){g[M]=1;const[G,Z]=p[M];if(F.push([G%v/e*d,Math.floor(G/v)/t*T]),Z===p[A][0])break;if(M=(_.get(Z)||[]).find(V=>!g[V]),M===void 0)throw Error("Não foi possível fechar o contorno preto. Use linhas contínuas sobre fundo branco.")}if(F.reduce((G,Z,V)=>{const W=F[(V+1)%F.length];return G+Z[0]*W[1]-W[0]*Z[1]},0)/2<1)continue;const I=new Set([0]);for(const G of[0,1])for(const Z of[-1,1]){let V=0;for(let W=1;W<F.length;W++)F[W][G]*Z>F[V][G]*Z&&(V=W);I.add(V)}const N=[...I].sort((G,Z)=>G-Z),z=[];for(let G=0;G<N.length;G++){const Z=N[G],V=N[(G+1)%N.length],W=[];let U=Z;do W.push(F[U]),U=(U+1)%F.length;while(U!==V);W.push(F[V]),z.push(...Xw(W,.06).slice(0,-1))}z.length>=3&&x.push({outer:z,holes:[]})}if(!x.length)throw Error("Nenhum contorno preto encontrado. Use uma forma preenchida ou um contorno fechado sobre fundo branco.");if(x.length>32)throw Error("Há muitos contornos ou ruído na imagem. Limpe o fundo ou ajuste o limiar de preto.");const{w:P,h:R}=$i(x);if(P>=d-.1&&R>=T-.1)throw Error("O preto ocupa toda a folha. Use fundo branco, com margem ao redor do objeto.");return{art:x,width:P,height:R,pageWidth:d,pageHeight:T,svg:Ta(x)}}function Xw(i,e){const t=new Set([0,i.length-1]),n=[[0,i.length-1]];for(;n.length;){const[r,s]=n.pop(),o=i[r],a=i[s],c=a[0]-o[0],l=a[1]-o[1],u=c*c+l*l;let h=-1,f=e*e;for(let p=r+1;p<s;p++){const _=i[p],v=u?Math.max(0,Math.min(1,((_[0]-o[0])*c+(_[1]-o[1])*l)/u)):0,m=(_[0]-o[0]-v*c)**2+(_[1]-o[1]-v*l)**2;m>f&&(f=m,h=p)}h>=0&&(t.add(h),n.push([r,h],[h,s]))}return[...t].sort((r,s)=>r-s).map(r=>i[r])}function $i(i){const e=i.flatMap(c=>c.outer),t=e.map(c=>c[0]),n=e.map(c=>c[1]),r=Math.min(...t),s=Math.max(...t),o=Math.min(...n),a=Math.max(...n);return{minX:r,minY:o,maxX:s,maxY:a,w:s-r,h:a-o}}function Ta(i){const e=$i(i);return`<svg xmlns="http://www.w3.org/2000/svg" width="${e.w}mm" height="${e.h}mm" viewBox="${e.minX} ${e.minY} ${e.w} ${e.h}">${i.map(t=>`<polygon fill="black" points="${t.outer.map(n=>n.join(",")).join(" ")}"/>`).join("")}</svg>`}function nu(i,e,t){const n=$i(i);if(!Number.isFinite(e)||!Number.isFinite(t)||e<1||t<1||e>336||t>336)throw Error("Use medidas entre 1 e 336 mm.");return i.map(r=>({outer:r.outer.map(([s,o])=>[(s-n.minX)*e/n.w,(o-n.minY)*t/n.h]),holes:[]}))}const Kl={type:"change"},wa={type:"start"},iu={type:"end"},es=new pa,Ql=new Tn,Yw=Math.cos(70*Lh.DEG2RAD),vt=new k,It=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lo=1e-6;class qw extends tf{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new li,this._lastTargetPosition=new k,this._quat=new li().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xl,this._sphericalDelta=new xl,this._scale=1,this._panOffset=new k,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new k,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jw.bind(this),this._onPointerDown=$w.bind(this),this._onPointerUp=Zw.bind(this),this._onContextMenu=iA.bind(this),this._onMouseWheel=Qw.bind(this),this._onKeyDown=eA.bind(this),this._onTouchStart=tA.bind(this),this._onTouchMove=nA.bind(this),this._onMouseDown=Jw.bind(this),this._onMouseMove=Kw.bind(this),this._interceptControlDown=rA.bind(this),this._interceptControlUp=sA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kl),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=It:n>Math.PI&&(n-=It),r<-Math.PI?r+=It:r>Math.PI&&(r-=It),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=vt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new k(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(es.origin.copy(this.object.position),es.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(es.direction))<Yw?this.object.lookAt(this.target):(Ql.setFromNormalAndCoplanarPoint(this.object.up,this.target),es.intersectPlane(Ql,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lo||this._lastTargetPosition.distanceToSquared(this.target)>lo?(this.dispatchEvent(Kl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?It/60*this.autoRotateSpeed*e:It/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;vt.copy(r).sub(this.target);let s=vt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(It*this._rotateDelta.x/t.clientHeight),this._rotateUp(It*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-It*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(It*this._rotateDelta.x/t.clientHeight),this._rotateUp(It*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $w(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function jw(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Zw(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(iu),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Jw(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=rt.DOLLY;break;case Fi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}break;case Fi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(wa)}function Kw(i){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Qw(i){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(i.preventDefault(),this.dispatchEvent(wa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(iu))}function eA(i){this.enabled!==!1&&this._handleKeyDown(i)}function tA(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=rt.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=rt.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(wa)}function nA(i){switch(this._trackPointer(i),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=rt.NONE}}function iA(i){this.enabled!==!1&&i.preventDefault()}function rA(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sA(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oA(i){const e=new rd;e.background=new Ze("#e8ece8");const t=new $t(36,1,.1,3e3);t.up.set(0,0,1),t.position.set(180,-210,190);const n=new G_({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(devicePixelRatio,2)),n.localClippingEnabled=!0,n.outputColorSpace=Nt,i.appendChild(n.domElement);const r=new qw(t,n.domElement);r.enableDamping=!0,r.target.set(0,0,18),r.maxDistance=1e3,r.minDistance=20,e.add(new $d(16777215,8885899,2.6));for(const[I,N]of[[[100,-140,200],3],[[-120,60,130],1.8]]){const z=new Jd(16777215,N);z.position.set(...I),e.add(z)}const s=new ef(504,24,11582385,13358026);s.rotation.x=Math.PI/2,s.position.z=-.5,e.add(s);const o="http://www.w3.org/2000/svg",a=document.createElementNS(o,"svg");a.classList.add("measurement-overlay"),a.setAttribute("aria-label","Cotas das aberturas em milímetros"),a.setAttribute("role","img"),a.style.display="none",i.appendChild(a);let c=!1,l=[];function u(I,N){const z=document.createElementNS(o,I);for(const[G,Z]of Object.entries(N))z.setAttribute(G,Z);return z}function h(){l=[],a.replaceChildren()}function f(){if(h(),!!g)for(const[I,N]of(g.openings||[]).entries()){const[z,G]=N.min,[Z,V]=N.max,W=g.lidThickness+.15,U=4,le=g.openings.length>1?`${I+1} · `:"",de=[{a:[z,G-U,W],b:[Z,G-U,W],ends:[[z,G,W],[Z,G,W]],label:`${le}X ${(Z-z).toFixed(2)} mm`},{a:[Z+U,G,W],b:[Z+U,V,W],ends:[[Z,G,W],[Z,V,W]],label:`${le}Y ${(V-G).toFixed(2)} mm`},{a:[z-U,G-U,g.lidThickness],b:[z-U,G-U,N.floorZ],ends:[[z,G,g.lidThickness],[z,G,N.floorZ]],label:`${le}Prof. ${N.depth.toFixed(2)} mm`}];for(const Me of de){const De=u("g",{}),We=u("path",{}),X=u("text",{"text-anchor":"middle"});X.textContent=Me.label,De.append(We,X),a.appendChild(De),l.push({...Me,line:We,text:X})}}}function p(){if(a.style.display=c&&(m!=null&&m.visible)&&l.length?"block":"none",a.style.display==="none")return;const I=i.clientWidth,N=i.clientHeight;a.setAttribute("viewBox",`0 0 ${I} ${N}`),m.updateWorldMatrix(!0,!1),t.updateMatrixWorld();const z=Z=>{const V=m.localToWorld(new k(...Z)).project(t);return[(V.x+1)*I/2,(1-V.y)*N/2,V.z]},G=[];for(const Z of l){const V=z(Z.a),W=z(Z.b),U=Z.ends.map(z),le=W[0]-V[0],de=W[1]-V[1],Me=Math.hypot(le,de)||1,De=-de/Me*4,We=le/Me*4;Z.line.parentNode.style.display=[V,W].some(j=>j[2]<-1||j[2]>1)?"none":"",Z.line.setAttribute("d",`M${U[0][0]},${U[0][1]}L${V[0]},${V[1]}L${W[0]},${W[1]}L${U[1][0]},${U[1][1]}M${V[0]-De},${V[1]-We}L${V[0]+De},${V[1]+We}M${W[0]-De},${W[1]-We}L${W[0]+De},${W[1]+We}`);const X=Z.text.getComputedTextLength()/2+5,O=17,E=Math.max(X+5,Math.min(I-X-5,(V[0]+W[0])/2+De*3));let S=Math.max(O,Math.min(N-10,(V[1]+W[1])/2+We*3-3));for(let j=0;j<l.length*2&&G.some(ie=>Math.abs(E-ie.x)<X+ie.halfWidth&&Math.abs(S-ie.y)<O);j++)S+=O+2,S>N-10&&(S=O);G.push({x:E,y:S,halfWidth:X}),Z.text.setAttribute("x",E),Z.text.setAttribute("y",S)}}const _=new sr;e.add(_);let v,m,d,T,g,x="exploded",P=!1,R=!0;const A=new Tn(new k(0,-1,0),0);function F(I,N){const z=new on;return z.setAttribute("position",new rn(I,3)),z.computeVertexNormals(),new hn(z,new kd({color:N,roughness:.48,metalness:.03,side:Qt,clippingPlanes:P?[A]:[]}))}function M(){if(g){v.visible=["exploded","assembled","box"].includes(x),m.visible=!["box","lower"].includes(x),d&&(d.visible=!["box","upper"].includes(x)),m.rotation.x=x==="print"?Math.PI:0,m.position.set(x==="print"&&d?-(g.w+12)/2:0,0,x==="print"?g.lidThickness:x==="exploded"?g.height+(d?24+g.cavityFloor:12)-g.upperMinZ:x==="upper"||x==="lid"?g.depth:x==="joint"?g.depth+6:g.seat),T&&(T.visible=R&&m.visible&&x!=="print",T.position.copy(m.position),T.rotation.copy(m.rotation)),d&&d.position.set(x==="print"?(g.w+12)/2:0,0,x==="print"||x==="lower"||x==="lid"||x==="joint"?g.depth:x==="exploded"?g.height+12+g.depth:g.seat);for(const I of[v,m,d,T].filter(Boolean))I.material.clippingPlanes=P?[A]:[]}}function b(){if(x==="joint"&&g){const[N,z]=g.jointPoint,[G,Z]=g.jointCenter,V=G-N,W=Z-z,U=Math.hypot(V,W)||1;r.target.set(N,z,4),t.position.set(N+V/U*17,z+W/U*17,17),r.update();return}const I=g?Math.max(x==="print"&&d?g.w*2+24:g.w,g.d,90):130;r.target.set(0,0,g?x==="print"?g.depth/2:g.seat/2:18),t.position.set(I*1.45,-I*1.65,I*1.6),r.update()}return new ResizeObserver(()=>{const{width:I,height:N}=i.getBoundingClientRect();n.setSize(I,N),t.aspect=I/N,t.updateProjectionMatrix()}).observe(i),n.setAnimationLoop(()=>{r.update(),n.render(e,t),p()}),{setModel(I){var z;const N=!g;for(const G of[..._.children])_.remove(G),G.geometry.dispose(),G.material.dispose();g=I,v=F(I.box,"#6c8e6b"),m=F(I.upper,"#c5d88d"),d=I.lower.length?F(I.lower,"#86b7ad"):null,T=(z=I.objectPreview)!=null&&z.length?F(I.objectPreview,"#9555dc"):null,T&&(T.material.dispose(),T.material=new ma({color:"#9545db",transparent:!0,opacity:.25,depthWrite:!1,side:Qt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),T.renderOrder=2),_.add(...[v,m,d,T].filter(Boolean)),M(),f(),N&&b()},clearMeasurements:h,object(I){R=I,M()},measurements(I){c=I,p()},mode(I){const N=x==="print"||x==="joint";x=I,M(),(I==="print"||I==="joint"||N)&&b()},section(I){P=I,M()},fit:b,top(){t.position.set(.01,-.01,Math.max((g==null?void 0:g.w)||130,(g==null?void 0:g.d)||100)*2.9),r.target.set(0,0,0),r.update()},capture(){return n.render(e,t),n.domElement.toDataURL("image/png")}}}const Aa={Upload:Ou,Box:Su,Layers:Pu,ArrowUpRight:yu,Download:Tu,Check:Eu,RotateCcw:Iu,ScanLine:Nu,Move3d:Du,ChevronRight:bu,Settings2:Uu,FileCode2:wu,Plus:Fu,Minus:Lu,X:Bu,Focus:Au,Grid2x2:Cu,Info:Ru},ht=i=>`<i data-lucide="${i}"></i>`,_t=(i,e,t,n,r,s="mm")=>`<label class="field"><span>${e}</span><div class="input-wrap"><input id="${i}" data-param="${i}" type="number" min="${t}" max="${n}" step="${r}" value="${oi[i]}"><small>${s}</small></div></label>`;document.querySelector("#app").innerHTML=`
<header><a class="brand" href="/">${ht("box")}<b>forma<span> / </span></b><span class="brand-sub">GRIDFINITY STUDIO</span></a><div class="header-right"><button id="open-project" class="load-project">Abrir projeto</button><input id="load-project" type="file" accept=".json,application/json" hidden><span class="local-dot"></span> Tudo no seu navegador <a href="https://github.com/topics/gridfinity-generator" target="_blank" rel="noreferrer">Referências ${ht("arrow-up-right")}</a></div></header>
<div class="title-row"><div><div class="eyebrow">DO CONTORNO AO OBJETO</div><h1>Um lugar para cada coisa<span>.</span></h1><p>Transforme seus SVGs em organizadores feitos para encaixar.</p></div><div class="project-tag">${ht("grid-2x2")} PROJETO LOCAL <span>01</span></div></div>
<main><aside class="panel config"><div class="panel-heading"><h2>${ht("settings-2")} Seu modelo</h2><button id="reset" class="icon-btn" title="Restaurar parâmetros">${ht("rotate-ccw")}</button></div><div class="config-scroll">
<section><h3><span>01</span> Contornos das cavidades <span class="tag">2D</span></h3><label class="field"><span>Origem do contorno</span><select id="contour-mode"><option value="svg">Importar SVG</option><option value="png">PNG de folha A4</option><option value="parametric">Desenhar forma</option></select></label><div id="shape-editor" hidden><div class="shape-presets"><button data-shape-preset="rounded">Retângulo arredondado</button><button data-shape-preset="capsule">Cápsula</button><button data-shape-preset="ellipse">Elipse</button><button data-shape-preset="circle">Círculo</button><button data-shape-preset="rectangle">Cantos vivos</button></div><div class="fields"><label class="field"><span>Largura nominal · X</span><div class="input-wrap"><input id="shape-width" data-shape-dimension="width" type="number" min="1" max="336" step="0.1" value="57.4"><small>mm</small></div></label><label class="field"><span>Comprimento nominal · Y</span><div class="input-wrap"><input id="shape-height" data-shape-dimension="height" type="number" min="1" max="336" step="0.1" value="36.2"><small>mm</small></div></label></div><div id="shape-sketch" class="shape-sketch" aria-label="Vista superior do contorno"></div><label class="field"><span>Simetria dos cantos</span><select id="shape-symmetry"><option value="all">Todos os cantos iguais</option><option value="sides">Esquerda e direita diferentes</option><option value="ends">Superior e inferior diferentes</option><option value="free">Quatro cantos independentes</option></select></label><label class="axis-link"><input id="shape-linked" type="checkbox" checked> Raios X e Y iguais (cantos circulares)</label><div id="shape-radii"></div><p class="hint">Desmarque para usar cantos elípticos, com raios X e Y diferentes. Medidas nominais; a folga do objeto é aplicada depois. Raios incompatíveis são bloqueados.</p><button id="download-shape" class="text-btn">Baixar contorno SVG</button></div><div id="png-editor" hidden><label class="dropzone"><input id="png-upload" type="file" accept="image/png,.png">${ht("upload")}<strong>Escolher PNG da folha A4</strong><span>Contorno preto fechado · fundo branco · até 15 MB</span></label><div class="fields png-options"><label class="field"><span>Orientação da folha</span><select id="png-orientation"><option value="portrait">Retrato · 210 × 297 mm</option><option value="landscape">Paisagem · 297 × 210 mm</option></select></label><label class="field"><span>Limiar de preto</span><input id="png-threshold" type="range" min="40" max="240" value="160" step="1"><output id="png-threshold-value">160</output></label></div><p class="hint">A imagem inteira equivale à folha A4. Os eixos X e Y são esticados separadamente para caber nela. Mantenha toda a folha na imagem, com margem ao redor dos contornos.</p><p id="png-status" class="hint" aria-live="polite">Escolha um PNG para extrair os contornos.</p><div id="png-sketch" class="shape-sketch" hidden></div></div><label class="dropzone" id="dropzone"><input id="upload" type="file" accept=".svg,image/svg+xml">${ht("upload")}<strong>Solte seu SVG aqui</strong><span>ou clique para escolher · até 500 KB</span></label><div class="file-row" id="svg-file-row"><div>${ht("file-code-2")}<span id="filename">kit-ferramentas.svg <small>Exemplo · 5 cavidades</small></span></div><div class="demo-buttons"><button id="demo" class="text-btn">Ferramentas</button><button id="instax" class="text-btn">Instax</button></div></div><p class="hint" id="svg-source-hint">Cada forma preenchida define uma cavidade com fundo fechado. A largura abaixo é a medida real do desenho.</p><div class="fields">${_t("svgWidth","Largura do desenho · X",1,336,.01)}${_t("svgHeight","Comprimento do desenho · Y",1,336,.01)}${_t("cutClearance","Folga do objeto por lado",.05,2,.05)}</div><button id="download-imported-svg" class="text-btn">Baixar contorno ajustado .svg</button><p class="hint" id="source-size-hint">Ajuste X e Y independentemente. A folga positiva é acrescentada a cada lado da abertura.</p><div class="fields opening-controls"><label class="field"><span>Abertura final · X</span><div class="input-wrap"><input id="opening-x" type="number" min="1" max="340" step="0.01"><small>mm</small></div></label><label class="field"><span>Abertura final · Y</span><div class="input-wrap"><input id="opening-y" type="number" min="1" max="340" step="0.01"><small>mm</small></div></label></div><p class="hint">Abertura central, já com folga, sem chanfro. Edite para fazer o ajuste fino; a folga é preservada.</p><details><summary>Posição do desenho</summary><div class="fields">${_t("offsetX","Deslocamento X",-336,336,.5)}${_t("offsetY","Deslocamento Y",-336,336,.5)}</div></details></section>
<section><h3><span>02</span> Cavidades do inserto</h3><label class="field"><span>Fechamento do fundo</span><select id="bottomMode" data-param="bottomMode"><option value="auto">Usar piso da caixa quando possível</option><option value="separate">Gerar fundo separado</option></select></label><p id="construction-note" class="hint" aria-live="polite">Verificando o aproveitamento do piso…</p><div class="fields">${_t("cavityDepth","Profundidade útil",2,100,.5)}${_t("cavityWall","Parede da cavidade",.8,4,.2)}${_t("cavityFloor","Fundo da cavidade",.8,4,.2)}${_t("entryChamfer","Chanfro da entrada",0,2,.1)}${_t("floorRadius","Raio do fundo",0,4,.1)}</div><p class="hint">Chanfro a 45° na abertura e raio entre parede e fundo. Use 0 para desativar cada acabamento.</p><p class="hint">Profundidade útil: da face superior da tampa ao piso interno. No modo automático, a altura do corpo se ajusta à profundidade útil, aproveitando o piso. A altura pode ser livre, sem múltiplos de 7 mm.</p></section><section><h3><span>03</span> Dimensões da caixa</h3><div class="half-toggle"><div>${ht("grid-2x2")}<span>Meio grid<small>Passos de 21 mm · grid padrão de 42 mm</small></span></div><label class="switch"><input id="half" type="checkbox" checked aria-label="Usar meio grid"><span></span></label></div><div class="fields">${_t("gridX","Largura · X",.5,8,.5,"grid")}${_t("gridY","Comprimento · Y",.5,8,.5,"grid")}${_t("height","Altura do corpo",14,140,.05)}${_t("wall","Parede",.8,4,.2)}</div><div id="dimensions" class="dimension-note"></div><div id="fit-error" class="error" role="alert" hidden></div><button id="auto-fit" class="auto-fit">Ajustar ao menor tamanho · passos de 0,5 grid</button><p id="fit-note" class="hint" aria-live="polite">Calcula a menor área que comporta o contorno, as paredes, a folga e o apoio.</p><details><summary>Espessura do fundo</summary>${_t("floor","Fundo da caixa",.8,4,.2)}</details></section>
<section><h3><span>04</span> Tampa e apoio interno</h3><div class="support-diagram" id="support-diagram">${nc(oi)}</div><div class="fields">${_t("lid","Espessura da tampa",.8,5,.2)}${_t("lidVerticalClearance","Folga vertical da tampa",.05,1,.05)}${_t("ledge","Largura do apoio",.8,4,.2)}${_t("clearance","Folga tampa–caixa por lado",.05,1,.05)}${_t("joinDepth","Profundidade do encaixe",.3,3,.1)}${_t("joinClearance","Folga do encaixe",0,.5,.05)}</div><p class="hint">Encaixe lateral pela parede da caixa, ignorando a garganta superior. Folga inicial para calibração em PLA: 0,15 mm por lado (0,30 mm no total). Ajuste conforme a impressão; a montagem pela garganta depende da flexão das peças.</p><p class="hint">A parede interna permanece reta no alojamento da tampa. O encaixe superior fica acima dela, e o apoio triangular nasce diretamente da parede. A distância do apoio ao início do encaixe é a espessura da tampa mais a folga vertical. No modo piso da caixa, a altura do corpo se ajusta para manter a profundidade útil. Quando houver fundo separado, seu encaixe existe somente na tampa. A caixa tem borda lateral com chanfro inferior de 45° ou mais íngreme, crescendo gradualmente até a largura do apoio. Sem pinos, pilares ou encaixe de fundo.</p></section>
</div><div class="config-footer">${ht("info")} Sem upload para servidores. Seus arquivos ficam aqui.</div></aside>
<div class="workspace"><div class="panel preview-panel"><div class="preview-top"><div class="preview-title"><span class="live-dot"></span><h2>Preview 3D</h2><span id="model-status">Calculando</span></div><div class="segmented" id="views"><button data-view="exploded" class="active">Explodido</button><button data-view="assembled">Montado</button><button data-view="box">Caixa</button><button data-view="lid">Tampa</button><button data-view="upper">Tampa + paredes</button><button data-view="lower">Fundo</button><button data-view="joint">Encaixe</button><button data-view="print">Impressão ↓</button></div></div><label class="measure-toggle"><input id="show-measurements" type="checkbox"> Mostrar cotas da abertura <span>Seção central com folga · sem chanfro · profundidade útil</span></label><label class="measure-toggle"><input id="show-object" type="checkbox" checked> Mostrar projeção do objeto <span>Roxo · contorno nominal sem folga</span></label><div class="canvas-wrap"><div id="viewer"></div><div class="canvas-label"><span>FORMA / 001</span><b id="canvas-size">3 × 2 GRID</b></div><div class="canvas-tools"><button id="fit" title="Enquadrar modelo">${ht("focus")}</button><button id="top" title="Vista superior">${ht("scan-line")}</button><button id="section" title="Corte lateral para ver o apoio interno" aria-pressed="false">${ht("layers")}</button></div><div class="legend"><span><i></i> Caixa</span><span><i></i> Tampa + paredes</span><span id="object-legend"><i style="background:#9545db;opacity:.5"></i> Objeto</span><span id="lower-legend"><i></i> Fundo separado</span></div><div class="orbit-hint">${ht("move-3d")} Arraste para girar · Scroll para aproximar</div><div id="busy" class="busy">Gerando geometria…</div></div><div class="preview-footer"><span>${ht("box")} Geometria real · mesmas peças no STL</span><span>UNIDADES EM MILÍMETROS</span></div></div>
<div id="error" class="error" role="alert" hidden></div>
<div class="bottom-grid"><div class="panel model-info"><div class="eyebrow">PENSADO PARA IMPRIMIR</div><h2>Menos material.<br>Mais possibilidades.</h2><p id="construction-description">O piso da caixa fecha as cavidades quando possível. Fundo separado apenas quando necessário.</p><div class="metrics"><div><strong id="footprint">—</strong><span>base externa · mm</span></div><div><strong id="mass">—</strong><span>PLA · volume sólido estimado</span></div><div><strong id="seat">—</strong><span>altura do apoio · mm</span></div></div></div><div class="panel export-panel"><div class="export-icon">${ht("download")}</div><h2>Pronto para dar forma?</h2><p id="approval-text">Revise o modelo e aprove o preview para liberar os arquivos de impressão.</p><button id="approve" class="primary" disabled>${ht("check")} Aprovar preview <span>→</span></button><div id="exports" hidden><label class="field"><span>Perfil do arquivo 3MF</span><select id="export-profile"><option value="bambu-a1-04">Bambu A1 · 0,4 mm · PLA · camada 0,20 mm</option><option value="generic">3MF genérico · somente geometria</option></select></label><button id="export-3mf" class="primary">${ht("download")} Projeto completo .3mf</button><p class="hint">Peças separadas e orientadas · revise o filamento no Studio · arquivo não fatiado</p><div class="export-buttons"><button id="export-box">${ht("download")} Caixa .stl</button><button id="export-upper">${ht("download")} Tampa + paredes .stl</button><button id="export-lower">${ht("download")} Fundo .stl</button></div><button id="project" class="text-btn">Salvar projeto .json</button></div><p class="print-note" id="print-note">Tampa: face superior na mesa e paredes para cima. Fundo: face plana na mesa e rebaixos abertos para cima. A vista Encaixe mostra o degrau e o rebaixo ampliados. O pequeno raio interno pode produzir um avanço curto entre camadas na ponta das paredes.</p><small id="part-count">Peças orientadas para impressão · escala 1:1</small></div></div>
<footer class="page-footer"><span>FEITO PARA O SEU JEITO DE ORGANIZAR.</span><span>42 mm de padrão. Infinitas possibilidades.</span></footer></div></main>`;sa({icons:Aa});const H=i=>document.querySelector(i),Se={...oi};let pn="svg",qe=structuredClone(Yc),sn=Xc,Tt=Sr(sn),Ct=null,Vn=0,Er=!1,Vi,rr=!1,Wi=null,ii=null,jt=!0;const Rn=oA(H("#viewer")),Ca=new Worker(new URL("/gridfinity-generator/assets/model.worker-DBCn32TO.js",import.meta.url),{type:"module"});function di(){Er=!1,H("#exports").hidden=!0,H("#approve").disabled=!0,H("#approve").innerHTML=`${ht("check")} Aprovar preview <span>→</span>`,H("#approval-text").textContent="Revise o modelo e aprove o preview para liberar os arquivos de impressão.",sa({icons:Aa})}function Wt(i=!1){if(H("#height").disabled=Se.bottomMode==="auto",!jt){di(),Ct=null,H("#auto-fit").disabled=!0;return}Rn.clearMeasurements(),su(),H("#fit-error").hidden=!0,H("#auto-fit").disabled=i,H("#fit-note").textContent=i?"Buscando o menor tamanho possível…":"Passos de 0,5 grid; considera paredes, folga, deslocamento e apoio.",Vn++,di(),Ct=null,H("#model-status").textContent="Atualizando",H("#busy").hidden=!1,H("#error").hidden=!0,clearTimeout(Vi),Vi=setTimeout(()=>Ca.postMessage({id:Vn,params:{...Se},art:Tt,autoFit:i}),180)}Ca.onmessage=({data:i})=>{var t;if(i.id!==Vn)return;if(H("#busy").hidden=!0,H("#auto-fit").disabled=!1,i.error){ru(i.error),H("#model-status").textContent="Revise os parâmetros",H("#viewer").style.opacity=".25";return}if(i.fittedParams){Object.assign(Se,i.fittedParams);for(const n of["gridX","gridY"])H("#"+n).value=Se[n],H("#"+n).step=.5,H("#"+n).min=.5;H("#half").checked=!0,H("#fit-note").textContent=`Menor caixa: ${Se.gridX} × ${Se.gridY} grids.`}Ct=i,H("#support-diagram").innerHTML=nc(Se),H("#viewer").style.opacity="1",Rn.setModel(i);const e=i.lower.length>0;Se.height=i.bodyHeight,H("#height").value=Number(i.bodyHeight.toFixed(3)),H("#height").disabled=i.usesBoxFloor;for(const n of document.querySelectorAll("[data-view]"))n.hidden=!e&&["lower","joint","lid"].includes(n.dataset.view);if((t=document.querySelector("[data-view].active"))!=null&&t.hidden){for(const n of document.querySelectorAll("[data-view]"))n.classList.toggle("active",n.dataset.view==="assembled");Rn.mode("assembled")}H("#export-lower").hidden=!e,H("#lower-legend").hidden=!e;for(const n of["cavityFloor","joinDepth","joinClearance"])H("#"+n).closest(".field").hidden=i.usesBoxFloor;H("#construction-note").textContent=i.usesBoxFloor?`2 peças · piso da caixa · ${i.usefulDepth.toFixed(2)} mm úteis · corpo ${i.bodyHeight.toFixed(2)} mm + borda ${i.stackingLipHeight.toFixed(2)} mm · encaixe vertical ${i.lidPocketGap.toFixed(2)} mm.`:`3 peças · fundo separado · ${i.usefulDepth.toFixed(2)} mm úteis. A caixa não tem apoios nem encaixes sob esse fundo.`,H("#construction-description").textContent=i.usesBoxFloor?"Caixa e tampa com paredes. O piso plano da caixa fecha as cavidades, dispensando uma peça e seus encaixes.":"Caixa, tampa com paredes e fundo separado. A caixa continua com somente a borda lateral de apoio.",H("#print-note").textContent=i.usesBoxFloor?"Caixa: pés na mesa. Tampa: face superior na mesa, paredes abertas para cima. Não há fundo separado.":"Tampa: face superior na mesa. Fundo separado: face plana na mesa e rebaixo para cima. Nenhum pilar ou encaixe é acrescentado à caixa.",H("#part-count").textContent=`${e?3:2} STLs · escala 1:1`,H("#model-status").textContent="Atualizado",H("#approve").disabled=!1,H("#footprint").textContent=`${i.w.toFixed(1)} × ${i.d.toFixed(1)}`,H("#mass").textContent=`${(i.volume/1e3*1.24).toFixed(1)} g`,H("#seat").textContent=i.seat.toFixed(1),H("#dimensions").textContent=`${i.w.toFixed(1)} × ${i.d.toFixed(1)} × ${i.height.toFixed(2)} mm totais · ${i.usefulDepth.toFixed(2)} mm úteis · encaixe ${i.lidPocketGap.toFixed(2)} mm`,H("#canvas-size").textContent=`${Se.gridX} × ${Se.gridY} GRID`};Ca.onerror=()=>{H("#auto-fit").disabled=!1,H("#busy").hidden=!0,H("#error").hidden=!1,H("#error").textContent="Não foi possível gerar a geometria. Recarregue a página."};function ru(i){const e=/invade a parede|borda lateral suficiente|borda interna ocupa|contorno não cabe/.test(i);H("#error").hidden=e,H("#fit-error").hidden=!e,H(e?"#fit-error":"#error").textContent=i,e&&(H("#dimensions").textContent="O contorno não cabe na caixa atual.")}function su(){if(!Tt.length)return;const i=$i(Tt),e=(Se.svgHeight||i.h*Se.svgWidth/i.w)+2*Se.cutClearance;for(const[t,n]of[["opening-x",Se.svgWidth+2*Se.cutClearance],["opening-y",e]])document.activeElement!==H("#"+t)&&(H("#"+t).value=Number.isFinite(n)?Number(n.toFixed(3)):"");document.activeElement!==H("#svgHeight")&&(H("#svgHeight").value=Number((Se.svgHeight||i.h*Se.svgWidth/i.w).toFixed(3))),pn==="png"&&(Number.isFinite(Se.svgWidth)&&Number.isFinite(Se.svgHeight)&&Se.svgWidth>=1&&(Se.svgHeight===0||Se.svgHeight>=1)?aA():H("#png-sketch").hidden=!0)}for(const[i,e,t]of[["opening-x","svgWidth","width"],["opening-y","svgHeight","height"]])H("#"+i).oninput=n=>{const r=n.target.value===""?NaN:Number(n.target.value),s=r-2*Se.cutClearance;pn==="parametric"?(qe[t]=s,pi(),mi()):(Se[e]=s,H("#"+e).value=Number.isFinite(s)?Number(s.toFixed(3)):"",Wt())};H("#auto-fit").onclick=()=>Wt(!0);H("#download-imported-svg").onclick=()=>{try{const i=$i(Tt),e=nu(Tt,Se.svgWidth,Se.svgHeight||i.h*Se.svgWidth/i.w);br(Ta(e),"forma-contorno-ajustado.svg","image/svg+xml")}catch(i){ru(i.message)}};function Ss(){const i=Se.cavityDepth+Se.lid-Se.cavityFloor;H("#cavityDepth").value=Number.isFinite(i)?Number(i.toFixed(3)):""}for(const i of document.querySelectorAll("[data-param]"))i.addEventListener("input",()=>{const e=i.dataset.param,t=i.value===""?NaN:Number(i.value),n=Se.cavityDepth+Se.lid-Se.cavityFloor;e==="bottomMode"?Se.bottomMode=i.value:e==="cavityDepth"?Se.cavityDepth=t-Se.lid+Se.cavityFloor:(Se[e]=t,["lid","cavityFloor"].includes(e)&&(Se.cavityDepth=n-Se.lid+Se.cavityFloor,Ss())),Wt()});H("#half").onchange=i=>{Se.half=i.target.checked;for(const e of["gridX","gridY"]){const t=Se.half?.5:1;Se[e]=Math.max(t,Math.ceil(Se[e]/t)*t),H("#"+e).value=Se[e],H("#"+e).step=t,H("#"+e).min=t}Wt()};async function ou(i){if(i)try{if(i.size>5e5)throw Error("O SVG excede o limite de 500 KB.");const e=await i.text(),t=Sr(e);Se.svgHeight=0,Tr("svg"),jt=!0,sn=e,Tt=t,H("#filename").textContent=i.name;const n=document.createElement("small");n.textContent=`${Tt.length} ${Tt.length===1?"cavidade":"cavidades"} · largura definida manualmente`,H("#filename").append(n),Wt()}catch(e){jt=!1,H("#auto-fit").disabled=!0,Vn++,clearTimeout(Vi),di(),Ct=null,H("#busy").hidden=!0,H("#viewer").style.opacity=".25",H("#model-status").textContent="SVG inválido",H("#error").hidden=!1,H("#error").textContent=e.message}}H("#upload").onchange=i=>ou(i.target.files[0]);H("#dropzone").ondragover=i=>{i.preventDefault(),H("#dropzone").classList.add("dragging")};H("#dropzone").ondragleave=()=>H("#dropzone").classList.remove("dragging");H("#dropzone").ondrop=i=>{i.preventDefault(),H("#dropzone").classList.remove("dragging"),ou(i.dataTransfer.files[0])};H("#demo").onclick=()=>{Tr("svg"),jt=!0,sn=Xc,Tt=Sr(sn),Se.svgHeight=0,H("#filename").innerHTML="kit-ferramentas.svg <small>Exemplo · 5 cavidades</small>",Wt()};H("#instax").onclick=()=>{Tr("svg"),jt=!0,sn=k_,Tt=Sr(sn),Se.svgHeight=0,Se.svgWidth=94,H("#svgWidth").value=94,H("#filename").innerHTML="exemplo-instax.svg <small>Exemplo · 1 cavidade fechada</small>",Wt()};H("#reset").onclick=()=>{Object.assign(Se,oi),pn==="parametric"&&(Se.svgWidth=qe.width);for(const i of document.querySelectorAll("[data-param]"))i.value=Se[i.dataset.param];Ss(),H("#half").checked=!0;for(const i of["gridX","gridY"])H("#"+i).step=.5,H("#"+i).min=.5;Wt()};H("#views").onclick=i=>{const e=i.target.closest("[data-view]");if(e){for(const t of H("#views").children)t.classList.toggle("active",t===e);Rn.mode(e.dataset.view)}};H("#show-object").onchange=i=>{Rn.object(i.target.checked),H("#object-legend").hidden=!i.target.checked};H("#show-measurements").onchange=i=>Rn.measurements(i.target.checked);H("#fit").onclick=()=>Rn.fit();H("#top").onclick=()=>Rn.top();H("#section").onclick=()=>{rr=!rr,Rn.section(rr),H("#section").classList.toggle("active",rr),H("#section").setAttribute("aria-pressed",rr)};H("#approve").onclick=()=>{Ct&&(Er=!0,H("#exports").hidden=!1,H("#approve").disabled=!0,H("#approve").innerHTML=`${ht("check")} Preview aprovado`,H("#approval-text").textContent="Arquivos liberados. Qualquer alteração pede uma nova aprovação.",sa({icons:Aa}))};function br(i,e,t){const n=URL.createObjectURL(new Blob([i],{type:t})),r=document.createElement("a");r.href=n,r.download=e,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}for(const i of["box","upper","lower"])H("#export-"+i).onclick=()=>{if(!Er||!Ct||i==="lower"&&!Ct.lower.length)return;const e=i==="upper"?ic(Ct.upper,Se.lid):i==="lower"?rc(Ct.lower,Se.cavityDepth):Ct.box,t={box:"1-caixa",upper:"2-tampa-paredes",lower:"3-tampa-fundo"}[i];br(ku(e),`forma-${Se.gridX}x${Se.gridY}-${t}.stl`,"model/stl")};H("#open-project").onclick=()=>H("#load-project").click();H("#load-project").onchange=async i=>{try{const e=i.target.files[0];if(!e)return;if(e.size>6e5)throw Error("Projeto muito grande.");const t=JSON.parse(await e.text());if(![1,2,3,4,5,6,7].includes(t.version)||!t.params||typeof t.svg!="string")throw Error("Projeto inválido.");H("#export-profile").value=t.exportProfile==="generic"?"generic":"bambu-a1-04";const n=t.shapeSource==="parametric"?structuredClone(t.shapeDefinition):structuredClone(Yc),r=t.shapeSource==="parametric"?qc(n):null,s=r?r.art:Sr(t.svg);for(const o of Object.keys(oi))Se[o]=t.params[o]??oi[o];Se.cutClearance=Math.max(.05,Se.cutClearance||oi.cutClearance),ii=t.pngCalibration||null,Wi=null,jt=!0,qe=n,sn=r?r.svg:t.svg,Tt=s,r&&(Se.svgWidth=qe.width),Tr(r?"parametric":t.shapeSource==="png"?"png":"svg"),pn==="png"&&(H("#png-status").textContent="Contorno A4 restaurado. Para alterar a extração, envie o PNG novamente.",ii&&(H("#png-orientation").value=ii.landscape?"landscape":"portrait",H("#png-threshold").value=ii.threshold,H("#png-threshold-value").value=ii.threshold)),pi(),r&&(cu(r),H("#download-shape").disabled=!1);for(const o of document.querySelectorAll("[data-param]"))o.value=Se[o.dataset.param];Ss(),H("#half").checked=Se.half;for(const o of["gridX","gridY"])H("#"+o).step=Se.half?.5:1,H("#"+o).min=Se.half?.5:1;H("#filename").textContent=e.name,Wt()}catch(e){jt=!1,H("#auto-fit").disabled=!0,Vn++,clearTimeout(Vi),Ct=null,di(),H("#busy").hidden=!0,H("#error").hidden=!1,H("#error").textContent="Não foi possível abrir o projeto: "+e.message}i.target.value=""};function au(){return{version:7,pngCalibration:ii,exportProfile:H("#export-profile").value,shapeSource:pn,shapeDefinition:pn==="parametric"?qe:null,construction:Se.bottomMode==="auto"?"automatic-floor":"wall-and-bottom",params:Se,svg:sn}}H("#project").onclick=()=>{Er&&br(JSON.stringify(au(),null,2),"forma-projeto.json","application/json")};H("#export-3mf").onclick=()=>{if(!(!Er||!Ct))try{br(Vw(Ct,Se,au(),{profile:H("#export-profile").value}),`forma-${Se.gridX}x${Se.gridY}.3mf`,"model/3mf")}catch(i){H("#error").hidden=!1,H("#error").textContent="Não foi possível exportar o 3MF: "+i.message}};function Tr(i){pn=i,H("#contour-mode").value=i;const e=i==="parametric";H("#shape-editor").hidden=!e,H("#png-editor").hidden=i!=="png";for(const t of["dropzone","svg-file-row","svg-source-hint"])H("#"+t).hidden=i!=="svg";for(const t of["svgWidth","svgHeight"])H("#"+t).closest(".field").hidden=e;for(const t of["download-imported-svg","source-size-hint"])H("#"+t).hidden=e}function pi(){H("#shape-width").value=Number.isFinite(qe.width)?qe.width:"",H("#shape-height").value=Number.isFinite(qe.height)?qe.height:"",H("#shape-symmetry").value=qe.symmetry,H("#shape-linked").checked=qe.linkedAxes;const i=Cn(qe);H("#shape-radii").innerHTML=ps[qe.symmetry].map(([e,t])=>`<div class="radius-group"><strong>${t}</strong>${(qe.linkedAxes?["rx"]:["rx","ry"]).map(n=>{const r=qe.linkedAxes?"Raio":n==="rx"?"Raio X":"Raio Y",s=Number.isFinite(i[e][n])?i[e][n]:"",o=ya(qe,e,n),a=`radius-${e}-${n}`;return`<div class="radius-control"><label class="field" for="${a}-number"><span>${r}</span><div class="input-wrap"><input id="${a}-number" aria-label="${t} · ${r} em mm" data-radius-corner="${e}" data-radius-axis="${n}" type="number" min="0" max="${o}" step="0.01" value="${s}"><small>mm</small></div></label><label class="radius-slider"><span class="sr-only">${t} · ${r}</span><input aria-label="${t} · ${r}" data-radius-corner="${e}" data-radius-axis="${n}" type="range" min="0" max="${o}" step="0.01" value="${s}"><span class="radius-limits"><span>0 mm</span><span data-radius-max="${e}-${n}">${o} mm</span></span></label></div>`}).join("")}</div>`).join("")}function lu(){const i=Cn(qe);for(const e of H("#shape-radii").querySelectorAll("[data-radius-corner]")){const{radiusCorner:t,radiusAxis:n}=e.dataset,r=ya(qe,t,n);e.max=r,e!==document.activeElement&&(e.value=Number.isFinite(i[t][n])?i[t][n]:""),H(`[data-radius-max="${t}-${n}"]`).textContent=`${r} mm`}}function cu(i){const{width:e,height:t,points:n}=i,r=Math.max(e,t)*.12,s=Math.max(e,t)*.045;H("#shape-sketch").innerHTML=`<svg viewBox="${-r} ${-r} ${e+2*r} ${t+2*r}" role="img" aria-label="Contorno de ${e} por ${t} milímetros; cantos A, B, C e D"><polygon points="${n.map(o=>o.join(",")).join(" ")}" fill="#dce9bd" stroke="#738c5c" stroke-width="${s/10}"/>${[["A",0,-r*.3],["B",e,-r*.3],["C",e,t+r*.65],["D",0,t+r*.65]].map(([o,a,c])=>`<text x="${a}" y="${c}" text-anchor="middle" font-size="${s}" fill="#566c47">${o}</text>`).join("")}</svg><span>${e} × ${t} mm · vista superior</span>`}function mi(){try{const i=qc(qe);jt=!0,sn=i.svg,Tt=i.art,Se.svgHeight=0,Se.svgWidth=qe.width,H("#svgWidth").value=Se.svgWidth,cu(i),H("#download-shape").disabled=!1,Wt()}catch(i){jt=!1,H("#auto-fit").disabled=!0,Vn++,clearTimeout(Vi),di(),Ct=null,H("#busy").hidden=!0,H("#viewer").style.opacity=".25",H("#model-status").textContent="Revise o contorno",H("#error").hidden=!1,H("#error").textContent=i.message,H("#shape-sketch").textContent=i.message,H("#download-shape").disabled=!0}}H("#contour-mode").onchange=i=>{Tr(i.target.value),pn==="parametric"?(pi(),mi()):pn==="png"?(su(),H("#png-status").textContent=Wi?"Contorno extraído da folha A4.":"Escolha um PNG; o contorno atual será substituído."):(H("#upload").value="",H("#filename").textContent="Contorno atual · importe um SVG para substituir",Wt())};for(const i of document.querySelectorAll("[data-shape-dimension]"))i.oninput=()=>{qe[i.dataset.shapeDimension]=i.value===""?NaN:Number(i.value),lu(),mi()};H("#shape-symmetry").onchange=i=>{qe.corners=Cn(qe),qe.symmetry=i.target.value,qe.corners=Cn(qe),pi(),mi()};H("#shape-linked").onchange=i=>{qe.corners=Cn(qe),qe.linkedAxes=i.target.checked,qe.corners=Cn(qe),pi(),mi()};H("#shape-radii").oninput=i=>{const e=i.target;if(e.dataset.radiusCorner){if(qe.corners[e.dataset.radiusCorner][e.dataset.radiusAxis]=e.value===""?NaN:Number(e.value),qe.linkedAxes)qe.corners[e.dataset.radiusCorner].ry=qe.corners[e.dataset.radiusCorner].rx;else if(e.type==="range"){const t=qe.corners[e.dataset.radiusCorner],n=e.dataset.radiusAxis==="rx"?"ry":"rx";Number(e.value)===0?t[n]=0:t[n]===0&&(t[n]=Math.min(Number(e.value),ya(qe,e.dataset.radiusCorner,n)))}qe.corners=Cn(qe),lu(),mi()}};for(const i of document.querySelectorAll("[data-shape-preset]"))i.onclick=()=>{try{qe=H_(qe,i.dataset.shapePreset),pi(),mi()}catch(e){H("#error").hidden=!1,H("#error").textContent=e.message}};H("#download-shape").onclick=()=>{pn==="parametric"&&!H("#download-shape").disabled&&br(sn,"forma-contorno-parametrico.svg","image/svg+xml")};function aA(){const i=$i(Tt),e=nu(Tt,Se.svgWidth,Se.svgHeight||i.h*Se.svgWidth/i.w);H("#png-sketch").hidden=!1,H("#png-sketch").innerHTML=Ta(e)+`<span>${Se.svgWidth.toFixed(2)} × ${(Se.svgHeight||i.h*Se.svgWidth/i.w).toFixed(2)} mm · ${Tt.length} contorno(s) · sem folga</span>`}function Ra(){if(Wi)try{const i={landscape:H("#png-orientation").value==="landscape",threshold:Number(H("#png-threshold").value)},e=Ww(Wi,i);ii={...i,pageWidth:e.pageWidth,pageHeight:e.pageHeight},jt=!0,Tt=e.art,sn=e.svg,Se.svgWidth=e.width,Se.svgHeight=e.height,H("#svgWidth").value=Number(e.width.toFixed(3)),H("#svgHeight").value=Number(e.height.toFixed(3)),H("#png-status").textContent=`${Tt.length} contorno(s) extraído(s) · folha ${e.pageWidth} × ${e.pageHeight} mm. Ajuste fino de X e Y abaixo.`,Wt()}catch(i){jt=!1,H("#auto-fit").disabled=!0,Vn++,clearTimeout(Vi),di(),Ct=null,H("#busy").hidden=!0,H("#png-sketch").hidden=!0,H("#png-status").textContent=i.message,H("#error").hidden=!1,H("#error").textContent=i.message,H("#viewer").style.opacity=".25"}}H("#png-upload").onchange=async i=>{const e=i.target.files[0];if(!e)return;let t;try{if(e.size>15e6)throw Error("Use um PNG de até 15 MB.");if(e.type!=="image/png"&&!/\.png$/i.test(e.name))throw Error("Escolha uma imagem PNG.");jt=!1,Vn++,di(),Ct=null,H("#auto-fit").disabled=!0,t=await createImageBitmap(e);const n=Math.min(1,1400/Math.max(t.width,t.height)),r=document.createElement("canvas");r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n));const s=r.getContext("2d",{willReadFrequently:!0});s.fillStyle="#fff",s.fillRect(0,0,r.width,r.height),s.drawImage(t,0,0,r.width,r.height),Wi=s.getImageData(0,0,r.width,r.height),H("#png-status").textContent=e.name,Ra()}catch(n){H("#png-status").textContent=n.message}finally{t==null||t.close(),i.target.value=""}};H("#png-orientation").onchange=()=>{Wi&&Ra()};H("#png-threshold").oninput=()=>{H("#png-threshold-value").value=H("#png-threshold").value};H("#png-threshold").onchange=()=>Ra();pi();Ss();Wt();
