import {stackingHeight,lidPocketInset} from './stacking-profile.js';
export const defaults={gridX:3,gridY:2,half:true,height:35,wall:1.6,floor:1.6,lid:2,ledge:1.6,lidVerticalClearance:.2,clearance:0.15,cutClearance:0.2,svgWidth:85,svgHeight:0,offsetX:0,offsetY:0,cavityDepth:18,cavityWall:1.2,cavityFloor:1.2,entryChamfer:0.4,floorRadius:0.8,joinDepth:0.8,joinClearance:0.15,bottomMode:'auto'};
// Keep the underside at 45 degrees or steeper, including the rounded corners.
export function supportChamferHeight(p){const innerRadius=Math.max(.1,3.75-p.wall),growth=lidPocketInset(p)+p.ledge-p.wall;return Math.max(growth,Math.SQRT2*growth+(Math.SQRT2-1)*(.5-innerRadius));}
export function bottomPlan(p){
 const usefulDepth=p.cavityDepth+p.lid-p.cavityFloor,floorTop=4.75+p.floor;
 const usesBoxFloor=p.bottomMode==='auto',recess=p.lidVerticalClearance;
 const bodyHeight=usesBoxFloor?floorTop+usefulDepth+recess:p.height;
 const seat=bodyHeight-recess-p.lid,totalHeight=bodyHeight+stackingHeight(p);
 return {usesBoxFloor,usefulDepth,floorTop,recess,seat,bodyHeight,totalHeight,stackingLipHeight:stackingHeight(p),lidPocketGap:p.lid+recess,floorZ:usesBoxFloor?floorTop-seat:-p.cavityDepth+p.cavityFloor};
}
export function dimensions(p){return {w:p.gridX*42-.5,d:p.gridY*42-.5,seat:bottomPlan(p).seat};}
export function validate(p){
 for(const key of Object.keys(defaults))if(key!=='half'&&key!=='bottomMode'&&!Number.isFinite(p[key]))throw Error('Preencha todos os parâmetros com números válidos.');
 if(!['auto','separate'].includes(p.bottomMode))throw Error('Escolha piso da caixa automático ou fundo separado.');
 const {usesBoxFloor,usefulDepth,bodyHeight}=bottomPlan(p);
 const {w,d,seat}=dimensions(p),step=p.half?.5:1;
 if(p.cutClearance<.05||p.cutClearance>2)throw Error('A folga do objeto deve ser positiva, entre 0,05 e 2 mm por lado.');
 if(p.gridX<step||p.gridY<step||p.gridX>8||p.gridY>8||Math.abs(p.gridX/step-Math.round(p.gridX/step))>1e-6||Math.abs(p.gridY/step-Math.round(p.gridY/step))>1e-6)throw Error(`Use dimensões de ${step} a 8 grids, em passos de ${step}.`);
 if(bodyHeight<14||bodyHeight>140||p.wall<.8||p.wall>4||p.floor<.8||p.floor>4||p.lid<.8||p.lid>5||p.ledge<.8||p.ledge>4||p.clearance<.05||p.clearance>1||p.cutClearance<.05||p.cutClearance>2||p.lidVerticalClearance<.05||p.lidVerticalClearance>1||p.svgWidth<1||p.svgWidth>336||p.svgHeight<0||p.svgHeight>336||Math.abs(p.offsetX)>336||Math.abs(p.offsetY)>336)throw Error('Um dos parâmetros está fora dos limites indicados.');
 if(p.cavityDepth<1||p.cavityDepth>100||p.cavityWall<.8||p.cavityWall>4||p.cavityFloor<.8||p.cavityFloor>4||p.cavityFloor>=p.cavityDepth)throw Error('A profundidade deve superar a espessura do fundo da cavidade. Use paredes e fundos de 0,8 a 4 mm.');
 if(p.entryChamfer<0||p.entryChamfer>2||p.floorRadius<0||p.floorRadius>4)throw Error('Use um chanfro de 0 a 2 mm e um raio de fundo de 0 a 4 mm.');
 if(p.entryChamfer>Math.min(p.lid-.2,p.cavityWall-.3)+1e-8)throw Error('O chanfro precisa preservar pelo menos 0,2 mm de tampa e 0,3 mm de parede. Reduza o chanfro ou aumente as espessuras.');
 if(p.floorRadius+p.entryChamfer>=p.cavityDepth+p.lid-p.cavityFloor-.1)throw Error('O raio e o chanfro ocupam toda a profundidade útil. Reduza os acabamentos ou aumente a profundidade.');
 if(p.joinDepth<.3||p.joinDepth>3||p.joinClearance<0||p.joinClearance>.5)throw Error('Use um encaixe de 0,3 a 3 mm e folga por lado de 0 a 0,5 mm.');
 if(!usesBoxFloor&&p.joinDepth+.1>p.cavityFloor-.25+1e-8)throw Error('O fundo é fino demais para a canaleta. Aumente a espessura do fundo ou reduza a profundidade do encaixe.');
 if(!usesBoxFloor&&p.joinClearance>p.cavityWall/2-.25+1e-8)throw Error('A folga do encaixe é grande para esta parede. Reduza a folga ou aumente a espessura da parede.');
 if(seat<4.75+p.floor+Math.max(2,supportChamferHeight(p)+.2))throw Error('A tampa precisa ficar acima do fundo. Reduza o rebaixo ou aumente a altura.');
 if(!usesBoxFloor&&seat-p.cavityDepth<4.75+p.floor+.5)throw Error('A cavidade toca o fundo da caixa. Reduza sua profundidade ou aumente a altura da caixa.');
 if(Math.min(w,d)-2*(lidPocketInset(p)+p.ledge)<5)throw Error('A borda interna ocupa todo o espaço. Reduza a parede ou o apoio.');
 if(p.ledge-p.clearance<.2-1e-8)throw Error('O apoio precisa alcançar a tampa após a folga lateral. Aumente o apoio ou reduza a folga, preservando 0,2 mm de contato.');
 return true;
}
