// Trace black outlines on an A4 page. The two image axes are calibrated independently.
export function traceA4({data,width,height},{landscape=false,threshold=160}={}){
 if(!width||!height||width*height>3000000||data.length!==width*height*4)throw Error('Imagem inválida ou grande demais para converter.');
 const n=width*height,black=new Uint8Array(n),outside=new Uint8Array(n),queue=new Int32Array(n);let head=0,tail=0;
 for(let i=0;i<n;i++){const a=data[i*4+3]/255;black[i]=(data[i*4]*.2126+data[i*4+1]*.7152+data[i*4+2]*.0722)*a+255*(1-a)<threshold?1:0;}
 const visit=i=>{if(!black[i]&&!outside[i]){outside[i]=1;queue[tail++]=i;}};
 for(let x=0;x<width;x++){visit(x);visit((height-1)*width+x);}for(let y=0;y<height;y++){visit(y*width);visit(y*width+width-1);}
 while(head<tail){const i=queue[head++],x=i%width,y=Math.floor(i/width);if(x)visit(i-1);if(x<width-1)visit(i+1);if(y)visit(i-width);if(y<height-1)visit(i+width);}
 const solid=i=>i>=0&&i<n&&!outside[i],edges=[],next=new Map(),stride=width+1;
 const add=(a,b)=>{if(edges.length>150000)throw Error('Imagem com muito ruído. Limpe o fundo ou ajuste o limiar de preto.');const index=edges.length;edges.push([a,b]);if(!next.has(a))next.set(a,[]);next.get(a).push(index);};
 for(let y=0;y<height;y++)for(let x=0;x<width;x++){
 const i=y*width+x;if(!solid(i))continue;const a=y*stride+x,b=a+1,c=b+stride,d=a+stride;
 if(!y||!solid(i-width))add(a,b);if(x===width-1||!solid(i+1))add(b,c);if(y===height-1||!solid(i+width))add(c,d);if(!x||!solid(i-1))add(d,a);
 }
 const pageWidth=landscape?297:210,pageHeight=landscape?210:297,used=new Uint8Array(edges.length),art=[];
 for(let start=0;start<edges.length;start++){
 if(used[start])continue;const loop=[];let current=start;
 while(!used[current]){used[current]=1;const [a,b]=edges[current];loop.push([a%stride/width*pageWidth,Math.floor(a/stride)/height*pageHeight]);if(b===edges[start][0])break;current=(next.get(b)||[]).find(i=>!used[i]);if(current===undefined)throw Error('Não foi possível fechar o contorno preto. Use linhas contínuas sobre fundo branco.');}
 const area=loop.reduce((sum,p,i)=>{const q=loop[(i+1)%loop.length];return sum+p[0]*q[1]-q[0]*p[1];},0)/2;
 if(area<1)continue; // Discard holes and specks below 1 mm².
 // Remove pixel stair steps with a 0.06 mm tolerance, keeping extrema as anchors.
 const anchors=new Set([0]);for(const axis of [0,1])for(const sign of [-1,1]){let best=0;for(let i=1;i<loop.length;i++)if(loop[i][axis]*sign>loop[best][axis]*sign)best=i;anchors.add(best);}
 const sorted=[...anchors].sort((a,b)=>a-b),points=[];
 for(let i=0;i<sorted.length;i++){const from=sorted[i],to=sorted[(i+1)%sorted.length],part=[];let k=from;do{part.push(loop[k]);k=(k+1)%loop.length;}while(k!==to);part.push(loop[to]);points.push(...simplify(part,.06).slice(0,-1));}
 if(points.length>=3)art.push({outer:points,holes:[]});
 }
 if(!art.length)throw Error('Nenhum contorno preto encontrado. Use uma forma preenchida ou um contorno fechado sobre fundo branco.');
 if(art.length>32)throw Error('Há muitos contornos ou ruído na imagem. Limpe o fundo ou ajuste o limiar de preto.');
 const {w,h}=artBounds(art);if(w>=pageWidth-.1&&h>=pageHeight-.1)throw Error('O preto ocupa toda a folha. Use fundo branco, com margem ao redor do objeto.');
 return {art,width:w,height:h,pageWidth,pageHeight,svg:artSVG(art)};
}
function simplify(points,tolerance){
 const keep=new Set([0,points.length-1]),stack=[[0,points.length-1]];
 while(stack.length){const [a,b]=stack.pop(),p=points[a],q=points[b],dx=q[0]-p[0],dy=q[1]-p[1],length=dx*dx+dy*dy;let far=-1,max=tolerance*tolerance;
 for(let i=a+1;i<b;i++){const r=points[i],t=length?Math.max(0,Math.min(1,((r[0]-p[0])*dx+(r[1]-p[1])*dy)/length)):0,d=(r[0]-p[0]-t*dx)**2+(r[1]-p[1]-t*dy)**2;if(d>max){max=d;far=i;}}
 if(far>=0){keep.add(far);stack.push([a,far],[far,b]);}
 }return [...keep].sort((a,b)=>a-b).map(i=>points[i]);
}
export function artBounds(art){const p=art.flatMap(a=>a.outer),xs=p.map(p=>p[0]),ys=p.map(p=>p[1]);const minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);return {minX,minY,maxX,maxY,w:maxX-minX,h:maxY-minY};}
export function artSVG(art){const b=artBounds(art);return `<svg xmlns="http://www.w3.org/2000/svg" width="${b.w}mm" height="${b.h}mm" viewBox="${b.minX} ${b.minY} ${b.w} ${b.h}">${art.map(a=>`<polygon fill="black" points="${a.outer.map(p=>p.join(',')).join(' ')}"/>`).join('')}</svg>`;}
export function scaleArt(art,width,height){const b=artBounds(art);if(!Number.isFinite(width)||!Number.isFinite(height)||width<1||height<1||width>336||height>336)throw Error('Use medidas entre 1 e 336 mm.');return art.map(a=>({outer:a.outer.map(([x,y])=>[(x-b.minX)*width/b.w,(y-b.minY)*height/b.h]),holes:[]}));}
