import{f as b}from"./mdi.0b0f327a.js";import{_ as i}from"./index.42e85d0c.js";import{d as l,r as h,b as _,D as v,h as w,o as c,c as u,p as g,q as y,v as d,a as r,x as p,F as T}from"./vendor.9d566173.js";import{p as C,A,f as k}from"./text.5897ec3b.js";import{f as $}from"./date.1f9226ff.js";const x=l({name:"BackToTopFab",setup(){const e=h(!1);function t(){window.scrollY>100?e.value=!0:e.value=!1}_(()=>{window.addEventListener("scroll",t)}),v(()=>{window.removeEventListener("scroll",t)});function n(){window.scrollTo({top:0,behavior:"smooth"})}return{scrollToTop:n,isFabVisible:e,mdiArrowUp:b}}});function F(e,t,n,o,s,a){const m=w("vue-icon");return c(),u("div",{"w:m":"b-8 r-8",class:y(["fab bottom-0 right-0 text-white fixed bg-yellow-deep w-10 h-10 rounded-full column center cursor-pointer",{"fab--hidden":!e.isFabVisible}]),onClick:t[0]||(t[0]=(...f)=>e.scrollToTop&&e.scrollToTop(...f))},[g(m,{icon:e.mdiArrowUp,size:"30px"},null,8,["icon"])],2)}var z=i(x,[["render",F]]);const L=l({name:"ClubAnnouncementListing",props:{title:{type:String,required:!0},date:{type:String,required:!0},content:{type:String,required:!0}},setup(e){const t=d(()=>$(e.date)),n=d(()=>{var o;return C.sanitize(A.link(k((o=e.content)!=null?o:""),{mention:"instagram"}))});return{dateString:t,htmlContent:n}}}),V={class:"text-2xl font-bold pb-1"},j={class:"text-sm pb-2"},D=["innerHTML"];function B(e,t,n,o,s,a){return c(),u(T,null,[r("h1",V,p(e.title),1),r("div",j,p(e.dateString),1),r("div",{class:"announcement-content",innerHTML:e.htmlContent},null,8,D)],64)}var E=i(L,[["render",B]]);function H(e){return Object.values(e).sort((n,o)=>{const s=new Date(n.date),a=new Date(o.date);return s>a?-1:s<a?1:0})}var M={"New VPCI Clubs Website":{date:"2021-09-29T20:00:00.000Z",content:`This is our school's very own, brand-new VPCI Clubs website! Here you can find information about all of the various clubs that VPCI offers. Navigate to the Club List by clicking the "clubs" link on the top right. The Club List lists all the clubs, and if you click on one, you will be brought to that club's homepage. A Club's homepage contains information which will help you decide whether you want to join that club. If you find any bugs, or if you have suggestions for this website, please contact the coding club leaders.`,title:"New VPCI Clubs Website"}};export{z as B,E as C,M as a,H as c};
