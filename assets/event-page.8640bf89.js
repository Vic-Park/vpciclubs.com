import{d as v,u as h,c as l,a as t,x as o,o as f}from"./vendor.611fa159.js";import{f as m}from"./date.c8411140.js";import{e as u}from"./events.6116b2cd.js";import{_ as x}from"./index.25f4af65.js";const g=v({name:"ClubPage",setup(){const s=h().params.eventSlug.toString();if(u[s]===void 0)return{found:!1};const{name:i,description:c,start:n,end:a,information:p}=u[s],r=n===void 0?"TBA":m(n),d=a===void 0?"TBA":m(a),_=r===d?r:`${r} - ${d}`;return{found:!0,name:i,description:c,entireDateString:_,information:p}}}),S={key:0,class:"p-8 column items-center"},b={class:"max-w-4xl w-full"},D={"w:text":"center 5xl",class:"font-bold mb-2"},w={"w:text":"center xl",class:"pb-4"},y=t("h2",{class:"font-bold text-2xl"},"Description",-1),$={class:"pt-1 text-md"},B=t("h2",{class:"font-bold text-2xl pt-4"},"Information",-1),j={class:"pt-1 text-md"},k={key:1};function T(e,s,i,c,n,a){return e.found?(f(),l("div",S,[t("div",b,[t("h1",D,o(e.name),1),t("div",w,o(e.entireDateString),1),y,t("div",$,o(e.description),1),B,t("div",j,o(e.information),1)])])):(f(),l("div",k," Sorry, no club exists at this URL. However, you can start your own! "))}var E=x(g,[["render",T]]);export{E as default};