import{_ as j}from"../../chunks/preload-helper-60cab3ee.js";import{S as T,i as V,s as z,e as d,t as w,k as E,c as v,a as g,h as P,d as _,m as k,b as m,g as b,G as u,j as y,l as B,n as D,K as L}from"../../chunks/index-154dbecc.js";import{p as R}from"../../chunks/utils-f967e714.js";function I(n,e,a){const l=n.slice();return l[1]=e[a],l}function O(n){let e,a,l=n[1].metadata.title+"",i,c,o,t,r=n[1].metadata.description+"",s,f;return{c(){e=d("div"),a=d("a"),i=w(l),o=E(),t=d("p"),s=w(r),f=E(),this.h()},l(h){e=v(h,"DIV",{class:!0});var p=g(e);a=v(p,"A",{href:!0});var x=g(a);i=P(x,l),x.forEach(_),o=k(p),t=v(p,"P",{class:!0});var A=g(t);s=P(A,r),A.forEach(_),f=k(p),p.forEach(_),this.h()},h(){m(a,"href",c=n[1].path),m(t,"class","small"),m(e,"class","row")},m(h,p){b(h,e,p),u(e,a),u(a,i),u(e,o),u(e,t),u(t,s),u(e,f)},p(h,p){p&1&&l!==(l=h[1].metadata.title+"")&&y(i,l),p&1&&c!==(c=h[1].path)&&m(a,"href",c),p&1&&r!==(r=h[1].metadata.description+"")&&y(s,r)},d(h){h&&_(e)}}}function q(n){let e,a,l,i,c=n[0],o=[];for(let t=0;t<c.length;t+=1)o[t]=O(I(n,c,t));return{c(){e=d("h1"),a=w("Blog"),l=E();for(let t=0;t<o.length;t+=1)o[t].c();i=B()},l(t){e=v(t,"H1",{});var r=g(e);a=P(r,"Blog"),r.forEach(_),l=k(t);for(let s=0;s<o.length;s+=1)o[s].l(t);i=B()},m(t,r){b(t,e,r),u(e,a),b(t,l,r);for(let s=0;s<o.length;s+=1)o[s].m(t,r);b(t,i,r)},p(t,[r]){if(r&1){c=t[0];let s;for(s=0;s<c.length;s+=1){const f=I(t,c,s);o[s]?o[s].p(f,r):(o[s]=O(f),o[s].c(),o[s].m(i.parentNode,i))}for(;s<o.length;s+=1)o[s].d(1);o.length=c.length}},i:D,o:D,d(t){t&&_(e),t&&_(l),L(o,t),t&&_(i)}}}const C={"./die-chatkontrolle-und-warum-sie-gestoppt-wreden-muss.svx":()=>j(()=>import("./die-chatkontrolle-und-warum-sie-gestoppt-wreden-muss.svx-dffb3629.js"),["pages/blog/die-chatkontrolle-und-warum-sie-gestoppt-wreden-muss.svx-dffb3629.js","assets/pages/blog/die-chatkontrolle-und-warum-sie-gestoppt-wreden-muss.svx-8e6309d8.css","chunks/index-154dbecc.js"]),"./was-genau-ist-\xFCberhaupt-datenschutz.svx":()=>j(()=>import("./was-genau-ist-\xFCberhaupt-datenschutz.svx-9d17cdbb.js"),["pages/blog/was-genau-ist-überhaupt-datenschutz.svx-9d17cdbb.js","chunks/index-154dbecc.js"])};let S=[];for(let[n,e]of Object.entries(C)){const a=e().then(l=>[R(n),l.metadata]);S.push(a)}async function N(){const e=(await Promise.all(S)).map(a=>({path:`blog/${a[0]}`,metadata:a[1]}));return console.log(e),{props:{posts:e}}}function G(n,e,a){let{posts:l}=e;return n.$$set=i=>{"posts"in i&&a(0,l=i.posts)},[l]}class $ extends T{constructor(e){super(),V(this,e,G,q,z,{posts:0})}}export{$ as default,N as load};