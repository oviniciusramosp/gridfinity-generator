import {zipSync,strToU8} from 'fflate';
import bambuA1Profile from './profiles/bambu-a1-04-pla.json' with {type:'json'};
import {assertWatertight,printOrientation,lowerPrintOrientation} from './mesh.js';
const escapeXML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
// Export independent build items in millimeters, with their print faces on Z=0.
export function export3MF(model,params,project,{profile='generic'}={}){
 if(!['generic','bambu-a1-04'].includes(profile))throw Error('Perfil 3MF desconhecido.');
 const native=profile==='bambu-a1-04',bedSize=native?256:180;
 const parts=[{name:'1 - Caixa',vertices:model.box},{name:'2 - Tampa e paredes',vertices:printOrientation(model.upper,params.lid)}];
 if(model.lower?.length)parts.push({name:'3 - Fundo da tampa',vertices:lowerPrintOrientation(model.lower,params.cavityDepth)});
 const meshes=parts.map(part=>{
 assertWatertight(part.vertices);
 const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
 for(let i=0;i<part.vertices.length;i++) {const a=i%3;min[a]=Math.min(min[a],part.vertices[i]);max[a]=Math.max(max[a],part.vertices[i]);}
 return {...part,min,max,width:max[0]-min[0]};
 });
 const gap=10,totalWidth=meshes.reduce((sum,p)=>sum+p.width,0)+gap*(meshes.length-1),totalDepth=Math.max(...meshes.map(p=>p.max[1]-p.min[1]));
 let cursor=Math.max(10,(bedSize-totalWidth)/2);const y=Math.max(10,(bedSize-totalDepth)/2);
 const resourceID=i=>native?i*2+2:i+1;
 const resources=meshes.map((part,index)=>{
 const lookup=new Map(),vertices=[],faces=[];
 for(let i=0;i<part.vertices.length;i+=3){
 const p=Array.from(part.vertices.subarray(i,i+3)),key=p.join(',');
 if(!lookup.has(key)){lookup.set(key,vertices.length);vertices.push([p[0]-part.min[0]+cursor,p[1]-part.min[1]+y,p[2]-part.min[2]]);}
 faces.push(lookup.get(key));
 }
 cursor+=part.width+gap;
 const v=vertices.map(p=>`<vertex x="${p[0]}" y="${p[1]}" z="${p[2]}"/>`).join('');
 const t=[];for(let i=0;i<faces.length;i+=3)t.push(`<triangle v1="${faces[i]}" v2="${faces[i+1]}" v3="${faces[i+2]}"/>`);
 const mesh=`<mesh><vertices>${v}</vertices><triangles>${t.join('')}</triangles></mesh>`;
 if(native)return `<object id="${index*2+1}" type="model" name="${escapeXML(part.name)}">${mesh}</object><object id="${resourceID(index)}" type="model" name="${escapeXML(part.name)}"><components><component objectid="${index*2+1}"/></components></object>`;
 return `<object id="${resourceID(index)}" type="model" name="${escapeXML(part.name)}">${mesh}</object>`;
 }).join('');
 const xml=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="pt-BR" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"${native?' xmlns:BambuStudio="http://schemas.bambulab.com/package/2021"':''}><metadata name="Title">Forma Gridfinity ${escapeXML(params.gridX)} x ${escapeXML(params.gridY)}</metadata><metadata name="Application">${native?'BambuStudio-02.08.02.60':'Forma Gridfinity Studio'}</metadata><metadata name="Generator">Forma Gridfinity Studio</metadata>${native?'<metadata name="BambuStudio:3mfVersion">1</metadata>':''}<resources>${resources}</resources><build>${meshes.map((_,i)=>`<item objectid="${resourceID(i)}"/>`).join('')}</build></model>`;
 const files={
 '[Content_Types].xml':strToU8('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/><Default Extension="json" ContentType="application/json"/></Types>'),
 '_rels/.rels':strToU8('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="model" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),
 '3D/3dmodel.model':strToU8(xml)
 };
 if(native){
 files['Metadata/project_settings.config']=strToU8(JSON.stringify(bambuA1Profile,null,2));
 const objects=meshes.map((part,i)=>`<object id="${resourceID(i)}"><metadata key="name" value="${escapeXML(part.name)}"/><metadata key="extruder" value="1"/><part id="${i*2+1}" subtype="normal_part"><metadata key="name" value="${escapeXML(part.name)}"/><metadata key="extruder" value="1"/></part></object>`).join('');
 const instances=meshes.map((_,i)=>`<model_instance><metadata key="object_id" value="${resourceID(i)}"/><metadata key="instance_id" value="0"/><metadata key="identify_id" value="${i+1}"/></model_instance>`).join('');
 files['Metadata/model_settings.config']=strToU8(`<?xml version="1.0" encoding="UTF-8"?><config>${objects}<plate><metadata key="plater_id" value="1"/><metadata key="plater_name" value="Gridfinity"/><metadata key="locked" value="false"/>${instances}</plate></config>`);
 }
 if(project)files['Metadata/forma-project.json']=strToU8(JSON.stringify(project,null,2));
 return zipSync(files,{level:6});
}
