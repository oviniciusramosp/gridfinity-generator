import {SVGLoader} from 'three/addons/loaders/SVGLoader.js';
export const demoSVG='<svg xmlns="http://www.w3.org/2000/svg" width="85mm" height="44mm" viewBox="0 0 85 44"><rect x="1" y="1" width="14" height="42" rx="7"/><rect x="23" y="1" width="14" height="42" rx="7"/><circle cx="58" cy="12" r="10"/><circle cx="58" cy="35" r="7"/><rect x="76" y="2" width="8" height="40" rx="3"/></svg>';
export function parseSVG(source){
 if(source.length>500000)throw Error('O SVG excede o limite de 500 KB. Simplifique os caminhos.');
 const doc=new DOMParser().parseFromString(source,'image/svg+xml');
 if(doc.querySelector('parsererror')||doc.documentElement.localName!=='svg')throw Error('O arquivo não é um SVG válido.');
 if(doc.querySelector('script,foreignObject,image,use,text,style,animate,animateTransform,set'))throw Error('Use apenas formas vetoriais. Converta texto e referências em caminhos e remova imagens, estilos e scripts.');
 for(const el of doc.querySelectorAll('*'))for(const a of el.attributes)if(/^on/i.test(a.name)||/url\(|https?:|javascript:/i.test(a.value)&&a.name!=='xmlns')throw Error('O SVG contém conteúdo externo ou ativo. Exporte somente os caminhos.');
 const loader=new SVGLoader(),data=loader.parse(new XMLSerializer().serializeToString(doc));
 if(data.paths.length>100)throw Error('Máximo de 100 caminhos. Simplifique o SVG.');
 const art=[];
 for(const path of data.paths){
 if(path.userData?.style?.visibility==='hidden'||path.userData?.style?.display==='none')continue;
 // Filled contours are cuts; stroke-only paths must be converted to outlines.
 if(path.userData?.style?.fill==='none')throw Error('Converta os traços sem preenchimento em contornos fechados antes de importar.');
 for(const s of SVGLoader.createShapes(path)){
 const sample=c=>{const points=c.getPoints(32).map(p=>[p.x,p.y]);return points.filter((p,i)=>!i||Math.hypot(p[0]-points[i-1][0],p[1]-points[i-1][1])>1e-6).filter((p,i,a)=>i!==a.length-1||Math.hypot(p[0]-a[0][0],p[1]-a[0][1])>1e-6);};
 const outer=sample(s);if(outer.length<3)continue;
 art.push({outer,holes:s.holes.map(sample)});
 }
 }
 if(!art.length)throw Error('Nenhum contorno preenchido encontrado no SVG.');
 const pts=art.flatMap(a=>a.outer);if(pts.length>16000)throw Error('SVG muito complexo. Simplifique as curvas.');
 if(pts.some(p=>p.some(v=>!Number.isFinite(v))))throw Error('Coordenadas inválidas no SVG.');
 const width=Math.max(...pts.map(p=>p[0]))-Math.min(...pts.map(p=>p[0]));if(width<.001)throw Error('O SVG precisa ter largura maior que zero.');
 return art;
}

export const instaxSVG='<svg xmlns="http://www.w3.org/2000/svg" width="94mm" height="42mm" viewBox="0 0 94 42"><path d="M4 2 Q0 21 4 40 L90 40 Q94 21 90 2 Z" fill="#000"/></svg>';
