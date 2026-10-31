import test from 'node:test';
import assert from 'node:assert/strict';
import {traceA4,artBounds,scaleArt,artSVG} from '../src/png-contour.js';
function image(w=420,h=594){const data=new Uint8ClampedArray(w*h*4).fill(255);return {data,width:w,height:h};}
function rect(im,x,y,w,h,filled=false){for(let j=y;j<y+h;j++)for(let i=x;i<x+w;i++)if(filled||j===y||j===y+h-1||i===x||i===x+w-1){const at=(j*im.width+i)*4;im.data[at]=im.data[at+1]=im.data[at+2]=0;}}
test('contorno preto fechado vira forma sólida e escala X/Y pela folha A4',()=>{
 const im=image();rect(im,100,100,120,80);const r=traceA4(im);assert.equal(r.art.length,1);assert.equal(r.width,60);assert.equal(r.height,40);assert.equal(r.art[0].outer.length,4);assert.equal(r.pageWidth,210);assert.equal(r.pageHeight,297);
 assert.match(r.svg,/width="60mm"/);assert.doesNotMatch(r.svg,/<image/);
});
test('a imagem é esticada nos eixos independentemente, sem impor sua proporção original',()=>{
 const im=image(420,420);rect(im,100,100,120,80);const p=traceA4(im),l=traceA4(im,{landscape:true});assert.equal(p.width,60);assert.ok(Math.abs(p.height-80/420*297)<1e-8);assert.ok(Math.abs(l.width-120/420*297)<1e-8);assert.equal(l.height,40);
});
test('aceita formas pretas preenchidas, múltiplos contornos e ignora poeira isolada',()=>{
 const im=image();rect(im,20,20,60,40,true);rect(im,150,150,60,60);rect(im,300,300,1,1,true);assert.equal(traceA4(im).art.length,2);
});
test('SVG e ajuste fino preservam dimensões independentes',()=>{
 const im=image();rect(im,100,100,120,80);const r=traceA4(im),scaled=scaleArt(r.art,57.4,36.2),b=artBounds(scaled);assert.ok(Math.abs(b.w-57.4)<1e-8);assert.ok(Math.abs(b.h-36.2)<1e-8);assert.match(artSVG(scaled),/57.4mm/);assert.throws(()=>scaleArt(scaled,0,10),/medidas/);
});
test('rejeita folha vazia, fundo preto e respeita transparência branca',()=>{
 assert.throws(()=>traceA4(image()),/Nenhum contorno/);const black=image();rect(black,0,0,420,594,true);assert.throws(()=>traceA4(black),/toda a folha/);const transparent=image();transparent.data.fill(0);assert.throws(()=>traceA4(transparent),/Nenhum contorno/);
});
