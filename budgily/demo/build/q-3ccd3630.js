import{b as _,e as p,C as f,g as h,X as P,U as l,N as r,x as o,P as b,K as m,O as v,z as c,_ as u,a as D}from"./q-29eba519.js";import{s as d,W as $}from"./q-7bba7138.js";const z=()=>{const[e,s]=_();e.referenceWizardContext&&(e.referenceWizardContext.next$=s.next$,e.referenceWizardContext.prev$=s.prev$,e.referenceWizardContext.onPage$=s.onPage$,e.referenceWizardContext.state=s.state)},E=()=>{const[e,s]=_();s.current+1<=e.steps&&(s.prevDisabled=!1,s.current=s.current+1)},g=e=>{const[s,n]=_();n.current!==e&&(n.current=e,n.nextDisabled=e+1>=s.steps,n.prevDisabled=e-1<0)},w=e=>{p();const s=Array.from({length:e.steps}).map((t,x)=>x),n=f({current:0,nextDisabled:!1,prevDisabled:!0}),a={state:n,next$:c(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_rNQbFDxUEyA",[e,n]),prev$:c(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_jS8fzam850E",[n]),onPage$:c(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_2hK116x8EkY",[e,n])};return h($,a),P(c(()=>u(()=>Promise.resolve().then(()=>i),void 0),"s_QpcqBKna0Bc",[e,a])),l(m,{children:r("div",null,{class:"hero min-h-screen w-full bg-base-200"},r("div",null,{class:"hero-content w-full"},r("div",null,{class:"w-full"},[r("div",null,{class:"text-sm breadcrumbs"},r("ul",null,null,s.map(t=>l(o,{name:d.crumb(t)},3,t)),1,null),1,null),r("div",null,{class:"text-center"},[s.map(t=>l(o,{name:d.title(t)},3,`title-${t}`)),r("div",null,{class:"card w-full shadow-2xl bg-base-100 items-center"},[r("div",null,{class:"card-body"},s.map(t=>l(o,{name:d.step(t)},3,`step-${t}`)),1,null),r("div",null,{class:"card-actions"},[l(o,{name:"custom-actions",[b]:{name:b}},3,"XV_0"),!e.useCustomActions&&l(m,{children:[r("button",{onClick$:a.prev$},{class:"btn-secondary",disabled:v(t=>t.prevDisabled,[n])},"Prev",2,null),r("button",{onClick$:a.next$},{class:"btn-primary",disabled:v(t=>t.nextDisabled,[n])},"Next",2,null)]},1,"XV_1")],1,null)],1,null)],1,null)],1,null),1,null),1,null)},1,"XV_2")},C=()=>{const[e]=_();e.current-1>=0&&(e.current=e.current-1,e.nextDisabled=!1)},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:D,s_2hK116x8EkY:g,s_QpcqBKna0Bc:z,s_RkKjN7DX2tg:w,s_jS8fzam850E:C,s_rNQbFDxUEyA:E},Symbol.toStringTag,{value:"Module"}));export{D as _hW,g as s_2hK116x8EkY,z as s_QpcqBKna0Bc,w as s_RkKjN7DX2tg,C as s_jS8fzam850E,E as s_rNQbFDxUEyA};
