import{d as t}from"./mdi.c70c7cbb.js";import{d as e,u as s,l as o,r as i,m as a,o as l,c as n,t as r,i as c,w as d,p as u,n as v,q as k,s as p,a as m,F as x,j as g,v as y,x as f,b as h,k as b}from"./vendor.c5bb0e67.js";import{_ as w}from"./index.4326a483.js";function C(t){document.querySelector(`#${t}`).scrollIntoView({behavior:"smooth"})}const I=e({inheritAttrs:!1,props:{title:{type:String,required:!0},toId:{type:String,default:""},route:{type:String,default:""},noActiveClass:{type:Boolean,default:!1}},setup(){const t=s();return{scrollToId:C,navigationLinkClass:o((()=>t.meta.navigationLinkClass))}}}),M={key:1,class:"text-white"};const L=e({name:"NavigationHeader",components:{NavigationHeaderLink:w(I,[["render",function(t,e,s,o,k,p){const m=i("router-link");return a(t.$slots,"link",{},(()=>[t.toId?(l(),n("div",{key:0,class:"cursor-pointer","w:text":"white lg hover:gray-300",onClick:e[0]||(e[0]=e=>t.scrollToId(t.toId))},r(t.title),1)):(l(),n("div",M,[c(m,{to:t.route,"exact-active-class":t.noActiveClass?"":"text-burgundy",class:v(["text-lg",void 0!==t.navigationLinkClass?t.navigationLinkClass:"hover:text-burgundy"])},{default:d((()=>[u(r(t.title),1)])),_:1},8,["to","exact-active-class","class"])]))]))}]])},props:{tabs:{type:Array,required:!0}},setup(){const e=k(!1);return{mdiMenu:t,isMenuOpen:e,onMenuClick:function(){e.value=!e.value},scrollToId:C}}}),j={"w:md":"flex",class:"hidden flex-1 flex-row gap-x-4 justify-end"},q={class:"md:hidden"},A={key:0,class:"relative z-50"},N={class:"column absolute right-0 border rounded-sm overflow-hidden bg-white p-1"},O=["onClick"],S={"w:text":"lg hover:red"};var T=w(L,[["render",function(t,e,s,o,a,u){const k=i("NavigationHeaderLink"),w=i("vue-icon"),C=i("router-link"),I=p("click-outside");return l(),n(x,null,[c(k,{class:"mx-2 mr-auto",route:"/","no-active-class":"",title:"home"}),m("div",j,[(l(!0),n(x,null,g(t.tabs,(t=>(l(),n("div",{key:t.title,class:"mx-2"},[c(k,{route:t.route,"to-id":t.toId,title:t.title,class:v(t.class)},null,8,["route","to-id","title","class"])])))),128))]),m("div",q,[c(w,{icon:t.mdiMenu,class:"text-white cursor-pointer",size:"30px",onClick:t.onMenuClick,onMousedown:e[0]||(e[0]=y((()=>{}),["prevent"]))},null,8,["icon","onClick"]),t.isMenuOpen?f((l(),n("div",A,[m("div",N,[(l(!0),n(x,null,g(t.tabs,(s=>(l(),n("div",{key:s.title,"w:p":"x-2 y-1"},[c(k,{key:s.title,route:s.route,"to-id":s.toId,title:s.title,class:v(s.class)},{link:d((()=>[m("div",{onClick:e[1]||(e[1]=e=>t.isMenuOpen=!1)},[s.toId?(l(),n("div",{key:0,"w:text":"black lg hover:red",class:"cursor-pointer",onClick:e=>s.toId&&t.scrollToId(s.toId)},r(s.title),9,O)):(l(),h(C,{key:1,to:s.route,"active-class":"text-red"},{default:d((()=>[m("div",S,r(s.title),1)])),_:2},1032,["to"]))])])),_:2},1032,["route","to-id","title","class"])])))),128))])],512)),[[I,()=>t.isMenuOpen=!1]]):b("",!0)])],64)}]]);export{T as N};
