import{b as u,k as g,S as c,C as x,g as A,r as I,z as a,f as y,N as m,U as O,O as E,P as f,_ as l,x as D,a as T}from"./q-29eba519.js";import{K as v,B as b,e as C,C as R,y as k}from"./q-ffa2882e.js";const M=({track:e})=>{const[t,n,s]=u();e(()=>s.value),s.value||(t.value=-1,n.value="")},V=()=>{const[e,t]=u(),n=t.value?.querySelectorAll("button");n?.length&&n.forEach(s=>e.push(s))},W=e=>{const[t,n]=u(),s=e.target;t.value&&s!==n.value&&(t.value=!1)},L=()=>{const[e]=u();return e.value=!0},N=()=>{const[e]=u();return e.value=!1},U=e=>{const[t,n,s,_,d]=u();if(e.key===v.ESCAPE&&_.value){_.value=!1,d.value?.focus();return}if(e.key===v.ARROW_DOWN||e.key===v.ARROW_UP){let r=n.value;e.key===v.ARROW_DOWN?(r=n.value+1,r>=t.length&&(r=0)):e.key===v.ARROW_UP&&(r=n.value-1,r<0&&(r=t.length-1)),t[r].focus(),s.value=t[r].id,n.value=r}},B=()=>{const[e]=u();return e.value=!e.value},q=e=>{const t=g(),n=g(),s=c(e?.isExpanded||!1),_=c(!1),d=c(),r=x([]),P=c(-1),h=c(),p=c("");return A(k,{currentId:p}),I(a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_z5TUX3lfqYo",[P,p,s])),I(a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_nW9Eu00kceY",[r,d])),y("click",a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_ZOEh0cr01Zo",[s,h])),m("div",{class:C(e.class,{[R.IS_EXPANDED]:s.value,[R.IS_HOVERED]:_.value})},{id:t,onMouseEnter$:a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_Un3HTfrqbP4",[_]),onMouseLeave$:a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_ehS07sC621w",[_]),onKeyDown$:a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_ImVFKNhBMvE",[r,P,p,s,h])},[O(b,{ref:h,"aria-haspopup":!0,get"aria-expanded"(){return s.value},get"aria-controls"(){return s.value?n:""},onClick$:a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_gSpFvZoiX0s",[s]),children:E(o=>o.triggerElement||"Menu",[e],'p0.triggerElement||"Menu"'),[f]:{ref:f,"aria-haspopup":f,"aria-expanded":E(o=>o.value,[s],"p0.value"),"aria-controls":E((o,S)=>S.value?o:"",[n,s],'p1.value?p0:""'),onClick$:f}},3,"nG_0"),m("nav",{ref:d},{id:n,role:"menu","aria-labelledby":t,style:E(o=>({visibility:o.value?"visible":"hidden"}),[s],'{visibility:p0.value?"visible":"hidden"}')},O(D,null,3,"nG_1"),1,null)],1,"nG_2")},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:T,s_GMwdTIoT1z4:q,s_ImVFKNhBMvE:U,s_Un3HTfrqbP4:L,s_ZOEh0cr01Zo:W,s_ehS07sC621w:N,s_gSpFvZoiX0s:B,s_nW9Eu00kceY:V,s_z5TUX3lfqYo:M},Symbol.toStringTag,{value:"Module"}));export{T as _hW,q as s_GMwdTIoT1z4,U as s_ImVFKNhBMvE,L as s_Un3HTfrqbP4,W as s_ZOEh0cr01Zo,N as s_ehS07sC621w,B as s_gSpFvZoiX0s,V as s_nW9Eu00kceY,M as s_z5TUX3lfqYo};
