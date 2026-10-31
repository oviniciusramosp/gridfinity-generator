import {cavityProfile} from './cavity-profile.js';
import {stackingLevels,stackingHeight,lidPocketInset} from './stacking-profile.js';
import ManifoldModule from 'manifold-3d';
import {defaults,dimensions,validate,bottomPlan,supportChamferHeight} from './parameters.js';
export {defaults,dimensions,validate,bottomPlan,supportChamferHeight} from './parameters.js';
export {stlBuffer,printOrientation} from './mesh.js';
let kernel;
export async function initKernel(locateFile){kernel=await ManifoldModule(locateFile?{locateFile}:{});kernel.setup();return kernel;}
function roundedPoints(w,d,r=3.75){
 r=Math.max(.1,Math.min(r,w/2-.01,d/2-.01));const out=[];
 for(let c=0;c<4;c++){const angle=c*Math.PI/2,cx=(c===0||c===3?1:-1)*(w/2-r),cy=(c<2?1:-1)*(d/2-r);for(let i=0;i<=8;i++){const a=angle+i*Math.PI/16;out.push([cx+r*Math.cos(a),cy+r*Math.sin(a)]);}}return out;
}
function foot(pitch,own){
 const levels=[[0,pitch-6.4,.8],[.8,pitch-4.8,1.6],[2.6,pitch-4.8,1.6],[4.75,pitch-.5,3.75],[4.8,pitch-.5,3.75]],vertices=[],indices=[],n=36;
 for(const [z,w,r] of levels)for(const [x,y] of roundedPoints(w,w,r))vertices.push(x,y,z);
 for(let k=0;k<4;k++)for(let i=0;i<n;i++){const a=k*n+i,b=k*n+(i+1)%n,c=b+n,d=a+n;indices.push(a,b,c,a,c,d);}
 for(let i=1;i<n-1;i++){indices.push(0,i+1,i);indices.push(4*n,4*n+i,4*n+i+1);}
 return own(new kernel.Manifold(new kernel.Mesh({numProp:3,vertProperties:new Float32Array(vertices),triVerts:new Uint32Array(indices)})));
}
export function buildModel(p,art=[]){
 if(!kernel)throw Error('Motor de geometria ainda não foi carregado.');p={...defaults,...p};validate(p);
 const plan=bottomPlan(p);
 const {Manifold,CrossSection}=kernel,owned=[],own=o=>(owned.push(o),o);let box,lid,upper,lowerPart,success=false;
 const rr=(w,d,r=3.75)=>own(new CrossSection([roundedPoints(w,d,r)]));
 const union=(...s)=>own(Manifold.union(s)),subtract=(a,...b)=>own(Manifold.difference([a,...b]));
 const prism=(s,h,z=0)=>{if(h<=0)throw Error('Altura insuficiente para a borda interna.');const m=own(s.extrude(h));return z?own(m.translate([0,0,z])):m;};
 const offset=(s,delta)=>own(s.offset(delta,'Round',2,32));
 try{
 const {bodyHeight,totalHeight}=plan,pocketInset=lidPocketInset(p);
 const {w,d,seat}=dimensions(p),pitch=p.half?21:42;
 const outer=rr(w,d),inner=rr(w-2*p.wall,d-2*p.wall,3.75-p.wall),pocket=inner,lower=rr(w-2*(pocketInset+p.ledge),d-2*(pocketInset+p.ledge),Math.max(.5,3.75-pocketInset-p.ledge));
 const feet=[],f=foot(pitch,own),nx=Math.round(p.gridX*42/pitch),ny=Math.round(p.gridY*42/pitch);
 for(let x=0;x<nx;x++)for(let y=0;y<ny;y++)feet.push(own(f.translate([(x-(nx-1)/2)*pitch,(y-(ny-1)/2)*pitch,0])));
 const ledgeChamferHeight=supportChamferHeight(p),ledgeStart=seat-ledgeChamferHeight;
 // A convex loft closes the hollow gradually up to the full-width, flat seat.
 const supportVoid=own(Manifold.hull([
 ...inner.toPolygons()[0].map(([x,y])=>[x,y,ledgeStart]),
 ...lower.toPolygons()[0].map(([x,y])=>[x,y,seat])
 ]));
 const shell=subtract(prism(outer,bodyHeight-4.75,4.75),prism(pocket,bodyHeight-seat+.1,seat),prism(inner,ledgeStart-(4.75+p.floor),4.75+p.floor),supportVoid);
 const rimVoids=[],rimLevels=stackingLevels(p);
 for(let i=0;i<rimLevels.length-1;i++){
 const [z0,inset0]=rimLevels[i],[z1,inset1]=rimLevels[i+1];
 const sectionPoints=(inset,z)=>roundedPoints(w-2*inset,d-2*inset,3.75-inset).map(([x,y])=>[x,y,bodyHeight+z]);
 rimVoids.push(own(Manifold.hull([...sectionPoints(inset0,z0),...sectionPoints(inset1,z1)])));
 }
 const rim=subtract(prism(outer,stackingHeight(p),bodyHeight),...rimVoids);
 box=union(shell,rim,...feet);
 const lidOutline=rr(w-2*(pocketInset+p.clearance),d-2*(pocketInset+p.clearance),3.75-pocketInset-p.clearance);let objectPreview=new Float32Array(0),openings=[],cut,cutCount=0,jointPoint=[0,0],jointCenter=[0,1];
 if(art.length){
 const points=art.flatMap(a=>a.outer),xs=points.map(a=>a[0]),ys=points.map(a=>a[1]),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),scale=p.svgWidth/(maxX-minX),scaleY=p.svgHeight?p.svgHeight/(maxY-minY):scale,cx=(minX+maxX)/2,cy=(minY+maxY)/2;
 const contours=art.map(a=>{if(a.holes.length)throw Error('Use um contorno simples e preenchido para cada cavidade, sem contornos internos.');const pts=a.outer.map(([x,y])=>[(x-cx)*scale+p.offsetX,-(y-cy)*scaleY+p.offsetY]);const area=pts.reduce((sum,a,i)=>{const b=pts[(i+1)%pts.length];return sum+a[0]*b[1]-b[0]*a[1];},0);return area<0?pts.reverse():pts;});
 cut=own(new CrossSection(contours,'NonZero'));
 // Preview only: nominal object, before clearance and cavity finishes.
 objectPreview=triangles(prism(cut,plan.usefulDepth,plan.floorZ));
 if(p.cutClearance)cut=offset(cut,p.cutClearance);
 const safe=rr(w-2*(pocketInset+.1),d-2*(pocketInset+.1),Math.max(.5,3.75-pocketInset-.1));
 const cavityOuter=offset(cut,p.cavityWall);
 // Measure the straight cavity section, including object clearance but excluding finishes.
 openings=cut.decompose().map(own).map(component=>{const {min,max}=component.bounds();return {min,max,depth:plan.usefulDepth,floorZ:plan.floorZ};});
 const focusLoop=cavityOuter.toPolygons()[0];jointPoint=focusLoop.reduce((a,b)=>b[1]<a[1]?b:a);jointCenter=focusLoop.reduce((s,p)=>[s[0]+p[0]/focusLoop.length,s[1]+p[1]/focusLoop.length],[0,0]);
 if(own(CrossSection.difference(cavityOuter,safe)).area()>1e-5)throw Error('A cavidade invade a parede da caixa. Reduza o desenho ou a espessura das paredes.');
 const pass=offset(cavityOuter,.1);
 const bearing=own(CrossSection.difference(own(CrossSection.difference(pocket,lower)),pass));
 if(own(CrossSection.intersection(bearing,lidOutline)).area()<10)throw Error('Não sobra borda lateral suficiente para apoiar a tampa. Aumente a caixa ou reduza o desenho.');
 box=subtract(box,prism(pass,ledgeChamferHeight+.1,ledgeStart-.05));
 const profileParams={...p,cavityDepth:-plan.floorZ+p.cavityFloor};
 const voidShape=(p.entryChamfer||p.floorRadius)?cavityProfile(kernel,cut,profileParams,own):prism(cut,p.lid-plan.floorZ+.1,plan.floorZ);
 // The upper part carries the face plate and all full-height cavity walls.
 const floorZ=plan.floorZ;
 const wallBase=union(prism(lidOutline,p.lid),prism(cavityOuter,p.lid-floorZ,floorZ));
 // Extend the open end beyond the split plane to avoid a float32-thin closing skin.
 const opening=p.floorRadius?offset(cut,-p.floorRadius):cut;
 const openEnd=prism(offset(opening,.001),.052,floorZ-.05);
 const fullWalls=subtract(wallBase,voidShape,openEnd);
 if(plan.usesBoxFloor){upper=fullWalls;}else{
 // A centered, reduced-width tongue continues each wall into the bottom plate.
 const shoulder=p.cavityWall/2;
 const tongueOuter=cavityOuter,tongueInner=offset(cut,shoulder);
 const tongue=own(CrossSection.difference(tongueOuter,tongueInner));
 upper=union(fullWalls,prism(tongue,p.joinDepth+.02,floorZ-p.joinDepth));
 // No rectangular carrier margin: one cavity follows its outline exactly.
 // Multiple disconnected floors share only their convex envelope to remain one part.
 const components=cavityOuter.decompose().map(own);
 const capOutline=components.length>1?own(cavityOuter.hull()):cavityOuter;
 const socketInner=offset(cut,shoulder-p.joinClearance);
 // An open perimeter rebate avoids an unnecessary thin outer retaining rim.
 const socket=own(CrossSection.difference(capOutline,socketInner));
 lowerPart=subtract(prism(capOutline,p.cavityFloor,-p.cavityDepth),prism(socket,p.joinDepth+.15,floorZ-p.joinDepth-.1));
 }
 lid=lowerPart?union(upper,lowerPart):upper;cutCount=art.length;
 }else {
 upper=prism(lidOutline,p.lid);
 if(!plan.usesBoxFloor)lowerPart=prism(rr(w-2*(pocketInset+p.ledge+.6),d-2*(pocketInset+p.ledge+.6),.5),p.cavityFloor,-p.cavityDepth);
 lid=lowerPart?union(upper,lowerPart):upper;
 }
 // Collapse micron-scale slivers before conversion to STL's float32 coordinates.
 box=own(own(box.asOriginal()).simplify(.001));upper=own(own(upper.asOriginal()).simplify(.001));if(lowerPart)lowerPart=own(own(lowerPart.asOriginal()).simplify(.001));lid=lowerPart?union(upper,lowerPart):upper;
 for(const m of [box,upper,lowerPart].filter(Boolean))if(m.status()!=='NoError'||m.isEmpty())throw Error('Não foi possível gerar uma malha fechada. Simplifique os contornos.');
 const bb=box.boundingBox();success=true;
 return {box,lid,upper,lowerPart,objectPreview,jointPoint,jointCenter,openings,ledgeChamferHeight,...plan,seat,w,d,cutCount,boxVolume:box.volume(),lidVolume:lid.volume(),bounds:[bb.min,bb.max],dispose(){for(const solid of new Set([box,lid,upper,lowerPart].filter(Boolean)))solid.delete();}};
 }finally{for(const item of owned)if(!success||(item!==box&&item!==lid&&item!==upper&&item!==lowerPart))item.delete();}
}
export function triangles(solid){
 const mesh=solid.getMesh(),v=mesh.vertProperties,out=[];
 for(let i=0;i<mesh.triVerts.length;i+=3){
 const pts=[0,1,2].map(k=>{const j=mesh.triVerts[i+k]*mesh.numProp;return [v[j],v[j+1],v[j+2]];});
 const [a,b,c]=pts,u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]);
 const cross=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];
 // Float32 STL coordinates can collapse infinitesimal boolean slivers.
 if(cross.every(x=>x===0))continue;
 out.push(...a,...b,...c);
 }return new Float32Array(out);
}
