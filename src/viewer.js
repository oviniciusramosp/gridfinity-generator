import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
export function createViewer(el){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#e8ece8');
 const camera=new THREE.PerspectiveCamera(36,1,.1,3000);camera.up.set(0,0,1);camera.position.set(180,-210,190);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.localClippingEnabled=true;renderer.outputColorSpace=THREE.SRGBColorSpace;el.appendChild(renderer.domElement);
 const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.target.set(0,0,18);controls.maxDistance=1000;controls.minDistance=20;
 scene.add(new THREE.HemisphereLight(0xffffff,0x87968b,2.6));
 for(const [pos,power] of [[[100,-140,200],3], [[-120,60,130],1.8]]){const l=new THREE.DirectionalLight(0xffffff,power);l.position.set(...pos);scene.add(l);}
 const grid=new THREE.GridHelper(504,24,0xb0bbb1,0xcbd3ca);grid.rotation.x=Math.PI/2;grid.position.z=-.5;scene.add(grid);
 const ns='http://www.w3.org/2000/svg',overlay=document.createElementNS(ns,'svg');overlay.classList.add('measurement-overlay');overlay.setAttribute('aria-label','Cotas das aberturas em milímetros');overlay.setAttribute('role','img');overlay.style.display='none';el.appendChild(overlay);
 let showMeasurements=false,dimensionLines=[];
 function svgElement(tag,attrs){const node=document.createElementNS(ns,tag);for(const [key,value] of Object.entries(attrs))node.setAttribute(key,value);return node;}
 function clearMeasurements(){dimensionLines=[];overlay.replaceChildren();}
 function buildMeasurements(){
 clearMeasurements();if(!model)return;
 for(const [index,o] of (model.openings||[]).entries()){
 const [x0,y0]=o.min,[x1,y1]=o.max,z=model.lidThickness+.15,pad=4,prefix=model.openings.length>1?`${index+1} · `:'';
 const dimensions=[{a:[x0,y0-pad,z],b:[x1,y0-pad,z],ends:[[x0,y0,z],[x1,y0,z]],label:`${prefix}X ${(x1-x0).toFixed(2)} mm`},{a:[x1+pad,y0,z],b:[x1+pad,y1,z],ends:[[x1,y0,z],[x1,y1,z]],label:`${prefix}Y ${(y1-y0).toFixed(2)} mm`},{a:[x0-pad,y0-pad,model.lidThickness],b:[x0-pad,y0-pad,o.floorZ],ends:[[x0,y0,model.lidThickness],[x0,y0,o.floorZ]],label:`${prefix}Prof. ${o.depth.toFixed(2)} mm`}];
 for(const d of dimensions){
 const node=svgElement('g',{}),line=svgElement('path',{}),text=svgElement('text',{'text-anchor':'middle'});text.textContent=d.label;node.append(line,text);overlay.appendChild(node);dimensionLines.push({...d,line,text});
 }
 }
 }
 function renderMeasurements(){
 overlay.style.display=showMeasurements&&upper?.visible&&dimensionLines.length?'block':'none';if(overlay.style.display==='none')return;
 const width=el.clientWidth,height=el.clientHeight;overlay.setAttribute('viewBox',`0 0 ${width} ${height}`);upper.updateWorldMatrix(true,false);camera.updateMatrixWorld();
 const project=p=>{const v=upper.localToWorld(new THREE.Vector3(...p)).project(camera);return [(v.x+1)*width/2,(1-v.y)*height/2,v.z];};
 const labels=[];
 for(const d of dimensionLines){const a=project(d.a),b=project(d.b),ends=d.ends.map(project),dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy)||1,nx=-dy/len*4,ny=dx/len*4;
 d.line.parentNode.style.display=[a,b].some(p=>p[2]<-1||p[2]>1)?'none':'';
 d.line.setAttribute('d',`M${ends[0][0]},${ends[0][1]}L${a[0]},${a[1]}L${b[0]},${b[1]}L${ends[1][0]},${ends[1][1]}M${a[0]-nx},${a[1]-ny}L${a[0]+nx},${a[1]+ny}M${b[0]-nx},${b[1]-ny}L${b[0]+nx},${b[1]+ny}`);
 const halfWidth=d.text.getComputedTextLength()/2+5,labelHeight=17;
 const tx=Math.max(halfWidth+5,Math.min(width-halfWidth-5,(a[0]+b[0])/2+nx*3));let ty=Math.max(labelHeight,Math.min(height-10,(a[1]+b[1])/2+ny*3-3));
 for(let attempts=0;attempts<dimensionLines.length*2;attempts++){
 if(!labels.some(r=>Math.abs(tx-r.x)<halfWidth+r.halfWidth&&Math.abs(ty-r.y)<labelHeight))break;
 ty+=labelHeight+2;if(ty>height-10)ty=labelHeight;
 }
 labels.push({x:tx,y:ty,halfWidth});d.text.setAttribute('x',tx);d.text.setAttribute('y',ty);
 }
 }
 const group=new THREE.Group();scene.add(group);let box,upper,lower,objectPreview,model,mode='exploded',section=false,showObject=true;
 const clip=new THREE.Plane(new THREE.Vector3(0,-1,0),0);
 function mesh(vertices,color){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(vertices,3));g.computeVertexNormals();return new THREE.Mesh(g,new THREE.MeshStandardMaterial({color,roughness:.48,metalness:.03,side:THREE.DoubleSide,clippingPlanes:section?[clip]:[]}));}
 function apply(){
 if(!model)return;
 box.visible=['exploded','assembled','box'].includes(mode);upper.visible=!['box','lower'].includes(mode);if(lower)lower.visible=!['box','upper'].includes(mode);
 upper.rotation.x=mode==='print'?Math.PI:0;
 upper.position.set(mode==='print'&&lower?-(model.w+12)/2:0,0,mode==='print'?model.lidThickness:mode==='exploded'?model.height+(lower?24+model.cavityFloor:12)-model.upperMinZ:mode==='upper'||mode==='lid'?model.depth:mode==='joint'?model.depth+6:model.seat);
 if(objectPreview){objectPreview.visible=showObject&&upper.visible&&mode!=='print';objectPreview.position.copy(upper.position);objectPreview.rotation.copy(upper.rotation);}
 if(lower)lower.position.set(mode==='print'?(model.w+12)/2:0,0,mode==='print'||mode==='lower'||mode==='lid'||mode==='joint'?model.depth:mode==='exploded'?model.height+12+model.depth:model.seat);
 for(const obj of [box,upper,lower,objectPreview].filter(Boolean))obj.material.clippingPlanes=section?[clip]:[];
 }
 function fit(){if(mode==='joint'&&model){const [x,y]=model.jointPoint,[cx,cy]=model.jointCenter,dx=cx-x,dy=cy-y,len=Math.hypot(dx,dy)||1;controls.target.set(x,y,4);camera.position.set(x+dx/len*17,y+dy/len*17,17);controls.update();return;}const size=model?Math.max(mode==='print'&&lower?model.w*2+24:model.w,model.d,90):130;controls.target.set(0,0,model?(mode==='print'?model.depth/2:model.seat/2):18);camera.position.set(size*1.45,-size*1.65,size*1.6);controls.update();}
 new ResizeObserver(()=>{const {width,height}=el.getBoundingClientRect();renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();}).observe(el);
 renderer.setAnimationLoop(()=>{controls.update();renderer.render(scene,camera);renderMeasurements();});
 return {setModel(m){const first=!model;for(const obj of [...group.children]){group.remove(obj);obj.geometry.dispose();obj.material.dispose();}model=m;box=mesh(m.box,'#6c8e6b');upper=mesh(m.upper,'#c5d88d');lower=m.lower.length?mesh(m.lower,'#86b7ad'):null;objectPreview=m.objectPreview?.length?mesh(m.objectPreview,'#9555dc'):null;if(objectPreview){objectPreview.material.dispose();objectPreview.material=new THREE.MeshBasicMaterial({color:'#9545db',transparent:true,opacity:.25,depthWrite:false,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});objectPreview.renderOrder=2;}group.add(...[box,upper,lower,objectPreview].filter(Boolean));apply();buildMeasurements();if(first)fit();},clearMeasurements,object(v){showObject=v;apply();},measurements(v){showMeasurements=v;renderMeasurements();},mode(v){const wasSpecial=mode==='print'||mode==='joint';mode=v;apply();if(v==='print'||v==='joint'||wasSpecial)fit();},section(v){section=v;apply();},fit,top(){camera.position.set(.01,-.01,Math.max(model?.w||130,model?.d||100)*2.9);controls.target.set(0,0,0);controls.update();},capture(){renderer.render(scene,camera);return renderer.domElement.toDataURL('image/png');}};
}
