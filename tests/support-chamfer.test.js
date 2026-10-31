import test from 'node:test';
import assert from 'node:assert/strict';
import {initKernel,buildModel,triangles,defaults} from '../src/geometry.js';
import {assertWatertight} from '../src/mesh.js';
await initKernel();
for(const [wall,ledge] of [[1.2,1.6],[1.6,4],[4,4]])test(`apoio cresce sem teto suspenso: parede ${wall}, apoio ${ledge}`,()=>{
 const p={...defaults,wall,ledge,height:56},m=buildModel(p),start=m.seat-m.ledgeChamferHeight,innerHalf=m.w/2-wall,growth=ledge;
 // Probe the straight side at several layer heights; width grows continuously.
 for(const t of [.05,.25,.5,.75,.95]){
 const z=start+t*m.ledgeChamferHeight,hit=m.box.rayCast([0,0,z],[m.w,0,z])[0];
 assert.ok(hit);assert.ok(Math.abs(hit.position[0]-(innerHalf-t*growth))<.003);
 }
 const v=triangles(m.box);let slopeFaces=0;
 for(let i=0;i<v.length;i+=9){
 const a=Array.from(v.slice(i,i+3)),b=Array.from(v.slice(i+3,i+6)),c=Array.from(v.slice(i+6,i+9)),z=(a[2]+b[2]+c[2])/3;
 if(z<=start+.002||z>=m.seat-.002)continue;
 const u=b.map((n,k)=>n-a[k]),w=c.map((n,k)=>n-a[k]),normal=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];
 if(normal[2]<-1e-6){slopeFaces++;assert.ok(-normal[2]<=Math.hypot(normal[0],normal[1])*1.015,'face inferior deve ter inclinação de pelo menos 45°');}
 }
 assert.ok(slopeFaces>0);assertWatertight(v);
 // Full-width ledge still ends in a flat seat at the original height.
 const seatHit=m.box.rayCast([m.w/2-wall-ledge/2,0,p.height+1],[m.w/2-wall-ledge/2,0,start-.1])[0];assert.ok(Math.abs(seatHit.position[2]-m.seat)<.002);
 m.dispose();
});
