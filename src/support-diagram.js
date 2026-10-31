import {stackingLevels,lidPocketInset} from './stacking-profile.js';
import {supportChamferHeight} from './parameters.js';
// One-wall section, in the same millimetres and profile as the CAD model.
export function supportDiagram(p){
 const scale=17,x=22,top=15,levels=stackingLevels(p),h=levels.at(-1)[0],y=z=>top+(h-z)*scale,X=n=>x+n*scale;
 const seat=-p.lid-p.lidVerticalClearance,bottom=seat-supportChamferHeight(p)-1.2;
 const points=[[0,bottom],[0,h],...levels.toReversed().map(([z,inset])=>[inset,z]),[p.wall,seat],[p.wall+p.ledge,seat],[p.wall,seat-supportChamferHeight(p)],[p.wall,bottom]];
 const path=points.map(([a,b],i)=>`${i?'L':'M'}${X(a)},${y(b)}`).join('')+'Z';
 const rail=[[0,0],[0,h],...levels.toReversed().map(([z,inset])=>[inset,z])];
 const railPath=rail.map(([a,b],i)=>`${i?'L':'M'}${X(a)},${y(b)}`).join('')+'Z';
 const lidX=X(lidPocketInset(p)+p.clearance),seatY=y(seat),lidY=y(-p.lidVerticalClearance);
 return `<svg viewBox="0 0 280 ${Math.ceil(y(bottom)+10)}" role="img" aria-label="Corte lateral: encaixe superior, tampa e apoio chanfrado na parede reta"><path d="${path}" fill="#dce4d8" stroke="#50684e" stroke-width="1.2"/><path d="${railPath}" fill="#8bcbb0"/><path d="M${X(p.wall)},${seatY}H${X(p.wall+p.ledge)}L${X(p.wall)},${y(seat-supportChamferHeight(p))}Z" fill="#d99a72" stroke="#946a4e" stroke-width=".8"/><rect x="${lidX}" y="${lidY}" width="${270-lidX}" height="${p.lid*scale}" fill="#c5d88d" stroke="#7c9458" stroke-width=".8"/><text x="80" y="${y(h/2)}" fill="#46775f" font-size="11">Encaixe superior Gridfinity</text><text x="${lidX+20}" y="${(lidY+seatY)/2+3.5}" fill="#526b48" font-size="10">Tampa</text><text x="92" y="${seatY+24}" fill="#946a4e" font-size="11">Apoio com chanfro</text><text x="92" y="${seatY+40}" fill="#74816e" font-size="9">Folga vertical: ${p.lidVerticalClearance.toFixed(2)} mm</text></svg><span>Corte ampliado de uma parede · mesmas medidas do modelo 3D</span>`;
}
