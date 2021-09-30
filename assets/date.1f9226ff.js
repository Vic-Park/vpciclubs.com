var W={exports:{}};(function(c,H){function l(w){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(e){return typeof e}:l=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(w)}(function(w){var b=arguments,e=function(){var M=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,n=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,o=/[^-+\dA-Z]/g;return function(r,i,u,g){if(b.length===1&&Y(r)==="string"&&!/\d/.test(r)&&(i=r,r=void 0),r=r||r===0?r:new Date,r instanceof Date||(r=new Date(r)),isNaN(r))throw TypeError("Invalid date");i=String(e.masks[i]||i||e.masks.default);var T=i.slice(0,4);(T==="UTC:"||T==="GMT:")&&(i=i.slice(4),u=!0,T==="GMT:"&&(g=!0));var a=function(){return u?"getUTC":"get"},m=function(){return r[a()+"Date"]()},s=function(){return r[a()+"Day"]()},f=function(){return r[a()+"Month"]()},h=function(){return r[a()+"FullYear"]()},d=function(){return r[a()+"Hours"]()},v=function(){return r[a()+"Minutes"]()},p=function(){return r[a()+"Seconds"]()},_=function(){return r[a()+"Milliseconds"]()},D=function(){return u?0:r.getTimezoneOffset()},N=function(){return C(r)},F=function(){return O(r)},S={d:function(){return m()},dd:function(){return y(m())},ddd:function(){return e.i18n.dayNames[s()]},DDD:function(){return A({y:h(),m:f(),d:m(),_:a(),dayName:e.i18n.dayNames[s()],short:!0})},dddd:function(){return e.i18n.dayNames[s()+7]},DDDD:function(){return A({y:h(),m:f(),d:m(),_:a(),dayName:e.i18n.dayNames[s()+7]})},m:function(){return f()+1},mm:function(){return y(f()+1)},mmm:function(){return e.i18n.monthNames[f()]},mmmm:function(){return e.i18n.monthNames[f()+12]},yy:function(){return String(h()).slice(2)},yyyy:function(){return y(h(),4)},h:function(){return d()%12||12},hh:function(){return y(d()%12||12)},H:function(){return d()},HH:function(){return y(d())},M:function(){return v()},MM:function(){return y(v())},s:function(){return p()},ss:function(){return y(p())},l:function(){return y(_(),3)},L:function(){return y(Math.floor(_()/10))},t:function(){return d()<12?e.i18n.timeNames[0]:e.i18n.timeNames[1]},tt:function(){return d()<12?e.i18n.timeNames[2]:e.i18n.timeNames[3]},T:function(){return d()<12?e.i18n.timeNames[4]:e.i18n.timeNames[5]},TT:function(){return d()<12?e.i18n.timeNames[6]:e.i18n.timeNames[7]},Z:function(){return g?"GMT":u?"UTC":(String(r).match(n)||[""]).pop().replace(o,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(D()>0?"-":"+")+y(Math.floor(Math.abs(D())/60)*100+Math.abs(D())%60,4)},p:function(){return(D()>0?"-":"+")+y(Math.floor(Math.abs(D())/60),2)+":"+y(Math.floor(Math.abs(D())%60),2)},S:function(){return["th","st","nd","rd"][m()%10>3?0:(m()%100-m()%10!=10)*m()%10]},W:function(){return N()},WW:function(){return y(N())},N:function(){return F()}};return i.replace(M,function(t){return t in S?S[t]():t.slice(1,t.length-1)})}}();e.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},e.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var y=function(n,o){for(n=String(n),o=o||2;n.length<o;)n="0"+n;return n},A=function(n){var o=n.y,r=n.m,i=n.d,u=n._,g=n.dayName,T=n.short,a=T===void 0?!1:T,m=new Date,s=new Date;s.setDate(s[u+"Date"]()-1);var f=new Date;f.setDate(f[u+"Date"]()+1);var h=function(){return m[u+"Date"]()},d=function(){return m[u+"Month"]()},v=function(){return m[u+"FullYear"]()},p=function(){return s[u+"Date"]()},_=function(){return s[u+"Month"]()},D=function(){return s[u+"FullYear"]()},N=function(){return f[u+"Date"]()},F=function(){return f[u+"Month"]()},S=function(){return f[u+"FullYear"]()};return v()===o&&d()===r&&h()===i?a?"Tdy":"Today":D()===o&&_()===r&&p()===i?a?"Ysd":"Yesterday":S()===o&&F()===r&&N()===i?a?"Tmw":"Tomorrow":g},C=function(n){var o=new Date(n.getFullYear(),n.getMonth(),n.getDate());o.setDate(o.getDate()-(o.getDay()+6)%7+3);var r=new Date(o.getFullYear(),0,4);r.setDate(r.getDate()-(r.getDay()+6)%7+3);var i=o.getTimezoneOffset()-r.getTimezoneOffset();o.setHours(o.getHours()-i);var u=(o-r)/(864e5*7);return 1+Math.floor(u)},O=function(n){var o=n.getDay();return o===0&&(o=7),o},Y=function(n){return n===null?"null":n===void 0?"undefined":l(n)!=="object"?l(n):Array.isArray(n)?"array":{}.toString.call(n).slice(8,-1).toLowerCase()};l(H)==="object"?c.exports=e:w.dateFormat=e})(void 0)})(W,W.exports);var U=W.exports;function Z(c){if(c==="TBA"||c==="TBD")return c;const H=typeof c=="string"?new Date(c):c;return U(H,"dddd, mmmm d, h:MM TT")}export{U as d,Z as f};
