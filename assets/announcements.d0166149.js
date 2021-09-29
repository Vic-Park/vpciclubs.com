import{f as m}from"./mdi.313bf820.js";import{_ as l}from"./index.3c559dc2.js";import{d as u,q as f,B as h,C as w,r as g,o as c,c as d,i as v,n as y,l as C,a as r,t as i,F as _}from"./vendor.21e99880.js";import{f as T}from"./date.bbd04814.js";const k=u({name:"BackToTopFab",setup(){const e=f(!1);function t(){window.scrollY>100?e.value=!0:e.value=!1}h(()=>{window.addEventListener("scroll",t)}),w(()=>{window.removeEventListener("scroll",t)});function n(){window.scrollTo({top:0,behavior:"smooth"})}return{scrollToTop:n,isFabVisible:e,mdiArrowUp:m}}});function $(e,t,n,o,s,a){const p=g("vue-icon");return c(),d("div",{"w:m":"b-8 r-8",class:y(["fab bottom-0 right-0 text-white fixed bg-yellow-deep w-10 h-10 rounded-full column center cursor-pointer",{"fab--hidden":!e.isFabVisible}]),onClick:t[0]||(t[0]=(...b)=>e.scrollToTop&&e.scrollToTop(...b))},[v(p,{icon:e.mdiArrowUp,size:"30px"},null,8,["icon"])],2)}var I=l(k,[["render",$]]);const A=u({name:"ClubAnnouncementListing",props:{title:{type:String,required:!0},date:{type:String,default:void 0},content:{type:String,required:!0}},setup(e){return{dateString:C(()=>T(e.date))}}}),F={class:"text-2xl font-bold pb-1"},V={class:"text-sm pb-2"};function S(e,t,n,o,s,a){return c(),d(_,null,[r("h1",F,i(e.title),1),r("div",V,i(e.dateString),1),r("div",null,i(e.content),1)],64)}var L=l(A,[["render",S]]);function N(e){return Object.values(e).map(({data:n,content:o})=>({title:n.title,date:n.date,content:o})).sort((n,o)=>{const s=new Date(n.date),a=new Date(o.date);return s>a?-1:s<a?1:0})}var P={"New-VPCI-Clubs-Website":{content:`This is our school's very own, brand-new VPCI Clubs website! Here you can find information about all of the various clubs that VPCI offers. Navigate to the Club List by clicking the link on the top right. The Club List lists all the clubs, and if you click on one, you will be brought to that club's homepage. A Club's homepage contains information which will help you decide whether you want to join that club. (Soon, there will even be a link to a signup form!).

If you find any bugs, or if you have suggestions for this website, please contact the programming club leaders.
`,data:{title:"New VPCI Clubs Website",date:"2021-05-02T12:30:00.000Z",slug:"New-VPCI-Clubs-Website"},isEmpty:!1,excerpt:""}};export{I as B,L as C,P as a,N as c};
