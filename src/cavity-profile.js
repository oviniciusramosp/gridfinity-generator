// Loft offset contours while retaining every polygon vertex at every height.
// Shared perimeter fractions provide correspondence even when offsets add vertices.
const area=loop=>loop.reduce((s,p,i)=>{const q=loop[(i+1)%loop.length];return s+p[0]*q[1]-q[0]*p[1];},0)/2;
const center=loop=>loop.reduce((s,p)=>[s[0]+p[0]/loop.length,s[1]+p[1]/loop.length],[0,0]);
function canonical(loop){
 let start=0;for(let i=1;i<loop.length;i++)if(loop[i][0]>loop[start][0]+1e-7||(Math.abs(loop[i][0]-loop[start][0])<1e-7&&loop[i][1]<loop[start][1]))start=i;
 return [...loop.slice(start),...loop.slice(0,start)];
}
function perimeter(loop){
 const lengths=[0];for(let i=0;i<loop.length;i++){const a=loop[i],b=loop[(i+1)%loop.length];lengths.push(lengths.at(-1)+Math.hypot(b[0]-a[0],b[1]-a[1]));}
 const total=lengths.at(-1);return {loop,fractions:lengths.map(x=>x/total)};
}
function sample({loop,fractions},t){
 let i=0;while(i<loop.length-1&&fractions[i+1]<t-1e-12)i++;
 const a=loop[i],b=loop[(i+1)%loop.length],f=(t-fractions[i])/(fractions[i+1]-fractions[i]);return [a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f];
}
export function cavityProfile(kernel,cut,p,own){
 const bottom=-p.cavityDepth+p.cavityFloor,levels=[];
 const add=(z,delta)=>{const shape=delta?own(cut.offset(delta,'Round',2,32)):cut;levels.push({z,polygons:shape.toPolygons().map(canonical)});};
 if(p.floorRadius){for(let i=0;i<=8;i++){const a=i*Math.PI/16;add(bottom+p.floorRadius*(1-Math.cos(a)),-p.floorRadius*(1-Math.sin(a)));}}
 else add(bottom,0);
 add(p.lid-p.entryChamfer,0);
 if(p.entryChamfer)add(p.lid,p.entryChamfer);
 add(p.lid+.05,p.entryChamfer);
 const reference=levels.at(-1).polygons;
 if(!reference.length||levels.some(l=>l.polygons.length!==reference.length))throw Error('Os acabamentos unem, dividem ou eliminam um contorno estreito. Reduza o raio ou o chanfro, ou afaste as cavidades.');
 // Pair components by orientation and nearest centroid rather than offset output order.
 for(const l of levels){const available=[...l.polygons];l.polygons=reference.map(ref=>{const c=center(ref);let best=-1,distance=Infinity;for(let i=0;i<available.length;i++){const loop=available[i];if(!loop||Math.sign(area(loop))!==Math.sign(area(ref)))continue;const q=center(loop),d=Math.hypot(c[0]-q[0],c[1]-q[1]);if(d<distance){best=i;distance=d;}}if(best<0)throw Error('O raio altera os contornos da cavidade. Reduza o raio do fundo.');const loop=available[best];available[best]=null;return loop;});}
 const rings=reference.map((_,j)=>{
 const paths=levels.map(l=>perimeter(l.polygons[j]));
 const fractions=paths.flatMap(p=>p.fractions.slice(0,-1)).sort((a,b)=>a-b).filter((t,i,a)=>!i||t-a[i-1]>1e-7);
 if(fractions.length>12000)throw Error('Contorno muito complexo para o acabamento. Simplifique o SVG.');
 return paths.map(path=>fractions.map(t=>sample(path,t)));
 });
 const counts=rings.map(r=>r[0].length),stride=counts.reduce((a,b)=>a+b,0),vertices=[],indices=[];
 const contoursAt=i=>rings.map(r=>r[i]);
 for(let i=0;i<levels.length;i++)for(const contour of contoursAt(i))for(const [x,y] of contour)vertices.push(x,y,levels[i].z);
 for(let k=0;k<levels.length-1;k++){let offset=0;for(const n of counts){for(let i=0;i<n;i++){const a=k*stride+offset+i,b=k*stride+offset+(i+1)%n;indices.push(a,b,b+stride,a,b+stride,a+stride);}offset+=n;}}
 for(const [a,b,c] of kernel.triangulate(contoursAt(0)))indices.push(a,c,b);
 const top=(levels.length-1)*stride;for(const [a,b,c] of kernel.triangulate(contoursAt(levels.length-1)))indices.push(top+a,top+b,top+c);
 const solid=own(new kernel.Manifold(new kernel.Mesh({numProp:3,vertProperties:new Float32Array(vertices),triVerts:new Uint32Array(indices)})));
 if(solid.status()!=='NoError')throw Error('Não foi possível aplicar os acabamentos neste contorno. Reduza o raio ou o chanfro.');
 return solid;
}
