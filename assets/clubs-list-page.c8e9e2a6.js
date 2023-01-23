import{g as w,h as C,i as k}from"./mdi.2c8aa0b2.js";import{d as f,G as $,h as b,o as m,c as p,a as t,x as h,p as _,r as v,v as x,w as L,H as I,F as j,s as D,B as S,C as U}from"./vendor.611fa159.js";import{a as P,g as F,b as N,c as q}from"./clubs.a2a72958.js";import{I as B}from"./image-with-fallback.085cb8f9.js";import{_ as y}from"./index.25f4af65.js";import"./vic-park-logo.8d02fb3b.js";const V=f({name:"ClubListing",components:{ImageWithFallback:B},props:{name:{type:String,required:!0},slug:{type:String,required:!0},shortDescription:{type:String,required:!0}},setup(e){const o=P(e.slug),l=F(e.slug),r=$();async function a(){await r.push(o)}return{clubIconUrl:l,animateNavigate:a,mdiChevronRight:w}}}),z={class:"club-listing"},A={class:"text-white mb-4 flex items-center relative p-8"},M=t("div",{class:"club-listing-background absolute inset-0 -z-1 bg-red-dark"},null,-1),Q={class:"column flex-grow"},R={class:"font-kollektif text-2xl font-bold"},W={class:"text-md"},H=["to"],T={class:"club-listing-arrow opacity-0 absolute inset-0 rounded-full",style:{"background-color":"rgba(255, 255, 255, 0.5)"}};function E(e,o,l,r,a,g){const n=b("ImageWithFallback"),i=b("vue-icon");return m(),p("div",z,[t("div",A,[M,t("div",Q,[t("div",R,h(e.name),1),t("div",W,h(e.shortDescription),1)]),t("div",{class:"ml-4 relative cursor-pointer",to:`/club/${e.slug}`,onClick:o[0]||(o[0]=(...s)=>e.animateNavigate&&e.animateNavigate(...s))},[_(n,{src:e.clubIconUrl,alt:e.name,class:"club-listing-image min-w-50 w-50 h-50 rounded-full object-cover"},null,8,["src","alt"]),t("div",T,[_(i,{icon:e.mdiChevronRight,size:"200px",class:"text-black font-bold club-listing-arrow-icon"},null,8,["icon"])])],8,H)])])}var G=y(V,[["render",E]]);const J=f({name:"ClubsListPage",components:{ClubListing:G},setup(){var g,n,i;const e=v(""),o=N(q),l=v(!1),r=x(()=>{const s=e.value.toLowerCase();return o.filter(({name:c,shortDescription:u})=>c.toLowerCase().includes(s)||u.toLowerCase().includes(s)).map(({slug:c,name:u,shortDescription:d})=>({name:u,slug:c,shortDescription:d}))}),a={};for(const s of o){const c=(n=(g=s.categories)==null?void 0:g.split(","))!=null?n:[];for(const u of c){const d=u.trim();a[d]=(i=a[d])!=null?i:[],a[d].push({name:s.name,slug:s.slug,shortDescription:s.shortDescription})}}return{searchQuery:e,filteredClubs:r,mdiMagnify:C,mdiPlus:k,isAddClubTooltipVisible:l}}}),K=e=>(S("data-v-50b54da8"),e=e(),U(),e),O={class:"column items-stretch px-8 max-w-6xl mx-auto"},X=K(()=>t("div",{class:"shadow-title my-8"},"clubs",-1)),Y={class:"row justify-end h-10 w-full items-start mb-8 relative"},Z={class:"relative w-60 self-end"},ee={class:"column"},se={key:1,class:"text-center"};function te(e,o,l,r,a,g){const n=b("vue-icon"),i=b("ClubListing");return m(),p("div",O,[X,t("div",Y,[t("div",Z,[_(n,{class:"search-icon text-gray-300 absolute",icon:e.mdiMagnify,height:"100%"},null,8,["icon"]),L(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.searchQuery=s),"w:border":"2 gray-300","w:focus":"outline-none ring-2 ring-yellow-deep border-transparent",class:"pl-3 self-center w-full h-full max-w-md p-1 font-kollektif text-xl",placeholder:"search club"},null,512),[[I,e.searchQuery]])])]),t("div",ee,[e.filteredClubs.length>0?(m(!0),p(j,{key:0},D(e.filteredClubs,s=>(m(),p("div",{key:s.slug,class:"pb-2"},[_(i,{name:s.name,"short-description":s.shortDescription,slug:s.slug},null,8,["name","short-description","slug"])]))),128)):(m(),p("div",se," Unfortunately, we couldn't find a club that meets this criteria. However, you can always start your own club! "))])])}var ce=y(J,[["render",te],["__scopeId","data-v-50b54da8"]]);export{ce as default};