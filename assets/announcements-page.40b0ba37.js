import{B as l,C as d,c as p,a as u}from"./announcements.c8c2c467.js";import{_}from"./index.a2824f0b.js";import{d as f,h as a,c as n,a as t,F as c,s as b,p as r,o}from"./vendor.9d566173.js";import"./mdi.0b0f327a.js";import"./text.5897ec3b.js";import"./date.1f9226ff.js";const x=f({components:{BackToTopFab:l,ClubAnnouncementListing:d},setup(){return{announcementsArray:p(u)}}}),A={class:"column items-center max-w-6xl mx-auto"},v=t("div",{class:"shadow-title mt-8"},"announcements",-1),B={class:"max-w-6xl px-12 mt-8"};function g(s,h,j,k,C,T){const i=a("ClubAnnouncementListing"),m=a("BackToTopFab");return o(),n(c,null,[t("div",A,[v,t("div",B,[(o(!0),n(c,null,b(s.announcementsArray,e=>(o(),n("div",{key:e.title,class:"pb-8"},[r(i,{title:e.title,date:e.date.toString(),content:e.content},null,8,["title","date","content"])]))),128))])]),r(m)],64)}var V=_(x,[["render",g]]);export{V as default};
