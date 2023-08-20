import{b as m,c as g,S as _,y as x,X as E,U as u,H as S,O as h,x as T,K as b,z as s,_ as r,a as f}from"./q-29eba519.js";import{a as k,b as w}from"./q-ffa2882e.js";const C=()=>{const[t,i]=m();i.isTriggerExpandedSig.value||(t.value=!0)},y=`
    [data-state] {
      overflow: hidden;
      --qwikui-collapsible-content-height: 80px;
    }
  
    [data-state="closed"] {
      animation: 500ms cubic-bezier(0.87, 0, 0.13, 1) 0s 1 normal forwards accordion-close;
    }

    [data-state="open"] {
      animation: 500ms cubic-bezier(0.87, 0, 0.13, 1) 0s 1 normal forwards accordion-open;
    }

    @keyframes accordion-open {
      0% {
        height: 0;
      }
      100% {
        height: var(--qwikui-collapsible-content-height);
      }
    }

    @keyframes accordion-close {
      0% {
        height: var(--qwikui-collapsible-content-height);
      }
      100% {
        height: 0;
      }
    }
  `,q=function({track:i}){const[o,e,n]=m();i(()=>n.isTriggerExpandedSig.value),o.animated&&n.isTriggerExpandedSig.value&&(e.value=!1)},I=({...t})=>{const i=g(k),o=_(),e=g(w),n=`${e.itemId}-content`,a=_(!0),l=s(()=>r(()=>Promise.resolve().then(()=>c),void 0),"s_dGXzdRcdkdY",[a,e]);return x(s(()=>r(()=>Promise.resolve().then(()=>c),void 0),"s_jkiDTw0Rxa4")),E(s(()=>r(()=>Promise.resolve().then(()=>c),void 0),"s_yqEZj1cracY",[i,a,e])),u(b,{children:S("div",{ref:o,id:n,"data-content-id":n,...t,children:u(T,null,3,"0S_0"),onAnimationEnd$:[l,t.onAnimationEnd$],onTransitionEnd$:[l,t.onTransitionEnd$]},{role:"region","data-state":h(d=>d.isTriggerExpandedSig.value?"open":"closed",[e],'p0.isTriggerExpandedSig.value?"open":"closed"'),hidden:h((d,v,p)=>d.animated?v.value:!p.isTriggerExpandedSig.value,[i,a,e],"p0.animated?p1.value:!p2.isTriggerExpandedSig.value"),style:{["--qwikui-accordion-content-height"]:"var(--qwikui-collapsible-content-height)",["--qwikui-accordion-content-width"]:"var(--qwikui-collapsible-content-width)"}},0,null)},1,"0S_1")},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_FpJ0F5de3jc:I,s_dGXzdRcdkdY:C,s_jkiDTw0Rxa4:y,s_yqEZj1cracY:q},Symbol.toStringTag,{value:"Module"}));export{f as _hW,I as s_FpJ0F5de3jc,C as s_dGXzdRcdkdY,y as s_jkiDTw0Rxa4,q as s_yqEZj1cracY};
