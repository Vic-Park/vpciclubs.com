import{_ as t}from"./vic-park-logo.2e1e9acb.js";import{_ as n}from"./index.1383dd4e.js";import{d as l,q as i,o as d,c as m,D as o,m as p,a as f}from"./vendor.375efd1f.js";const u=l({inheritAttrs:!1,props:{src:{type:String,required:!0},alt:{type:String,required:!0}},setup(){const e=i(!1);function r(a){a.preventDefault(),e.value=!0}return{onImageLoadError:r,imageLoadFailed:e}}}),c=["src","alt"],g=["alt"];function k(e,r,a,$,v,E){return e.imageLoadFailed?p(e.$slots,"fallback",{key:1},()=>[f("img",o({src:t,alt:e.alt},e.$attrs),null,16,g)]):(d(),m("img",o({key:0,src:e.src,alt:e.alt},e.$attrs,{onError:r[0]||(r[0]=(...s)=>e.onImageLoadError&&e.onImageLoadError(...s))}),null,16,c))}var y=n(u,[["render",k]]);export{y as I};
