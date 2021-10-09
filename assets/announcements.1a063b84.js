import{g as f}from"./mdi.5147d403.js";import{_ as r}from"./index.9ebaf996.js";import{d as l,q as h,C as w,D as g,r as _,o as u,c,i as v,n as y,l as d,a as i,t as m,F as C}from"./vendor.25d481dc.js";import{p as T,A as k,f as F}from"./text.5897ec3b.js";import{f as A}from"./date.1f9226ff.js";const I=l({name:"BackToTopFab",setup(){const e=h(!1);function t(){window.scrollY>100?e.value=!0:e.value=!1}w(()=>{window.addEventListener("scroll",t)}),g(()=>{window.removeEventListener("scroll",t)});function n(){window.scrollTo({top:0,behavior:"smooth"})}return{scrollToTop:n,isFabVisible:e,mdiArrowUp:f}}});function V(e,t,n,o,s,a){const p=_("vue-icon");return u(),c("div",{"w:m":"b-8 r-8",class:y(["fab bottom-0 right-0 text-white fixed bg-yellow-deep w-10 h-10 rounded-full column center cursor-pointer",{"fab--hidden":!e.isFabVisible}]),onClick:t[0]||(t[0]=(...b)=>e.scrollToTop&&e.scrollToTop(...b))},[v(p,{icon:e.mdiArrowUp,size:"30px"},null,8,["icon"])],2)}var U=r(I,[["render",V]]);const D=l({name:"ClubAnnouncementListing",props:{title:{type:String,required:!0},date:{type:String,required:!0},content:{type:String,required:!0}},setup(e){const t=d(()=>A(e.date)),n=d(()=>{var o;return T.sanitize(k.link(F((o=e.content)!=null?o:""),{mention:"instagram"}))});return{dateString:t,htmlContent:n}}}),L={class:"text-2xl font-bold pb-1"},$={class:"text-sm pb-2"},j=["innerHTML"];function x(e,t,n,o,s,a){return u(),c(C,null,[i("h1",L,m(e.title),1),i("div",$,m(e.dateString),1),i("div",{class:"announcement-content",innerHTML:e.htmlContent},null,8,j)],64)}var q=r(D,[["render",x],["__scopeId","data-v-86bd778e"]]);function O(e){return Object.values(e).sort((n,o)=>{const s=new Date(n.date),a=new Date(o.date);return s>a?-1:s<a?1:0})}var R={"New VPCI Clubs Website":{date:"2021-09-29T20:00:00.000Z",content:"This is our school's very own, brand-new VPCI Clubs website! Here you can find information about all of the various clubs that VPCI offers. Navigate to the Club List by clicking the link on the top right. The Club List lists all the clubs, and if you click on one, you will be brought to that club's homepage. A Club's homepage contains information which will help you decide whether you want to join that club. (Soon, there will even be a link to a signup form!). If you find any bugs, or if you have suggestions for this website, please contact the programming club leaders.",title:"New VPCI Clubs Website"},"[ACTION REQUIRED] Filling out the new VPCI Clubs Form":{date:"2021-10-09T02:45:00.000Z",content:"In order to make sure that all club information is up-to-date, we're asking all club leaders to resubmit their club information through this new Google Form: https://forms.gle/qeFtjLJmUcvW7Vwo8 (note that you must be signed into your TDSB email to access the form). Once you've filled out the form, please let a Coding Club leader know and they will update the website with your club information. Thank you!",title:"[ACTION REQUIRED] Filling out the new VPCI Clubs Form"}};export{U as B,q as C,R as a,O as c};
