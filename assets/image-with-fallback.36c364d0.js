import{_ as r}from"./vic-park-logo.2e1e9acb.js";import{_ as a}from"./index.4326a483.js";import{d as t,q as e,o,c as s,D as n,m as i,a as l}from"./vendor.c5bb0e67.js";const c=t({inheritAttrs:!1,props:{src:{type:String,required:!0},alt:{type:String,required:!0}},setup(){const r=e(!1);return{onImageLoadError:function(a){a.preventDefault(),r.value=!0},imageLoadFailed:r}}}),m=["src","alt"],d=["alt"];var p=a(c,[["render",function(a,t,e,c,p,u){return a.imageLoadFailed?i(a.$slots,"fallback",{key:1},(()=>[l("img",n({src:r,alt:a.alt},a.$attrs),null,16,d)])):(o(),s("img",n({key:0,src:a.src,alt:a.alt},a.$attrs,{onError:t[0]||(t[0]=(...r)=>a.onImageLoadError&&a.onImageLoadError(...r))}),null,16,m))}]]);export{p as I};
