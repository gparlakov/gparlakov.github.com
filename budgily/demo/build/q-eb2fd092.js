import{_ as p,b as H,q as M,s as j,h as N,u as W,A as q,i as J,C as R,Y as Q,S as k,g as u,X,U as Y,z as I,x as F,a as K}from"./q-29eba519.js";import{t as E,l as V,h as x,r as $,i as B,j as G,k as Z,c as ee,C as te,d as ne,D as ae,R as oe,e as se,f as re,m as ie}from"./q-8b3e2ada.js";const le=":root{view-transition-name:none}";const ce=()=>p(()=>import("./q-63452923.js"),["build/q-63452923.js","build/q-29eba519.js"]),S=[[/^\/$/,[ce,()=>p(()=>import("./q-0c488c37.js"),["build/q-0c488c37.js","build/q-29eba519.js"])]]],T=[];const b=!0;const ue=async(a,e)=>{const[l,o,n,v]=H();a===void 0?(a=o.value,o.value=""):e&&(o.value="");const i=new URL(a,v.url);if(a=E(i),!(!e&&o.value===a))return o.value=a,V(i,M()),x(S,T,b,i.pathname),l.value=void 0,v.isNavigating=!0,new Promise(s=>{n.r=s})},ve=({track:a})=>{const[e,l,o,n,v,i,s,_,h,r]=H();async function d(){const[g,m]=a(()=>[s.value,e.value]),C=j("");let t,L,D=null,A;{t=new URL(g,location),t.pathname.endsWith("/")||(t.pathname+="/");let w=x(S,T,b,t.pathname);A=M();const P=L=await V(t,A,!0,m);if(!P){s.untrackedValue=E(t);return}const y=P.href,c=new URL(y,t.href);c.pathname!==t.pathname&&(t=c,w=x(S,T,b,t.pathname)),D=await w}if(D){const[w,P,y]=D,c=P,z=c[c.length-1];r.prevUrl=r.url,r.url=t,r.params={...w},s.untrackedValue=E(t);const f=$(L,r,c,C);l.headings=z.headings,l.menu=y,o.value=N(c),n.links=f.links,n.meta=f.meta,n.styles=f.styles,n.title=f.title,n.frontmatter=f.frontmatter;{h.viewTransition!==!1&&(document.__q_view_transition__=!0);const O=L?.loaders;O&&Object.assign(i,O),B.clear(),G(window,t,s),r.isNavigating=!1,_.r&&W(A).then(_.r)}}}d()},_e=a=>{q(I(()=>p(()=>Promise.resolve().then(()=>U),void 0),"s_RPDJAz33WLA"));const e=Z();if(!e?.params)throw new Error("Missing Qwik City Env Data");const l=J("url");if(!l)throw new Error("Missing Qwik URL Env Data");const o=new URL(l),n=R({url:o,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),v={},i=Q(R(e.response.loaders,{deep:!1})),s=k(E(o)),_=R(ee),h=R({headings:void 0,menu:void 0}),r=k(),d=e.response.action,g=d?e.response.loaders[d]:void 0,m=k(g?{id:d,data:e.response.formData,output:{result:g,status:e.response.status}}:void 0),C=I(()=>p(()=>Promise.resolve().then(()=>U),void 0),"s_fX0bDjeJa0E",[m,s,v,n]);return u(te,h),u(ne,r),u(ae,_),u(oe,n),u(se,C),u(re,i),u(ie,m),X(I(()=>p(()=>Promise.resolve().then(()=>U),void 0),"s_02wMImzEAbk",[m,h,r,_,e,i,s,v,a,n])),Y(F,null,3,"qY_0")},U=Object.freeze(Object.defineProperty({__proto__:null,_hW:K,s_02wMImzEAbk:ve,s_RPDJAz33WLA:le,s_TxCFOy819ag:_e,s_fX0bDjeJa0E:ue},Symbol.toStringTag,{value:"Module"}));export{K as _hW,ve as s_02wMImzEAbk,le as s_RPDJAz33WLA,_e as s_TxCFOy819ag,ue as s_fX0bDjeJa0E};
