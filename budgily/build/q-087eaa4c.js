import{l as m,G as g,I as _,a as x,C as E,h,d as w,w as u,j as S,x as T,c as s,_ as c,p as f}from"./q-0f391e12.js";import{a as k,b}from"./q-1d1c70df.js";const C=()=>{const[t,i]=m();i.isTriggerExpandedSig.value||(t.value=!0)},I=`
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
  `,j=function({track:i}){const[o,e,n]=m();i(()=>n.isTriggerExpandedSig.value),o.animated&&n.isTriggerExpandedSig.value&&(e.value=!1)},q=({...t})=>{const i=g(k),o=_(),e=g(b),n=`${e.itemId}-content`,a=_(!0),l=s(()=>c(()=>Promise.resolve().then(()=>r),void 0),"s_dGXzdRcdkdY",[a,e]);return x(s(()=>c(()=>Promise.resolve().then(()=>r),void 0),"s_jkiDTw0Rxa4")),E(s(()=>c(()=>Promise.resolve().then(()=>r),void 0),"s_yqEZj1cracY",[i,a,e])),h(T,{children:w("div",{ref:o,id:n,"data-content-id":n,...t,children:h(S,null,3,"0S_0"),onAnimationEnd$:[l,t.onAnimationEnd$],onTransitionEnd$:[l,t.onTransitionEnd$]},{role:"region","data-state":u(d=>d.isTriggerExpandedSig.value?"open":"closed",[e],'p0.isTriggerExpandedSig.value?"open":"closed"'),hidden:u((d,v,p)=>d.animated?v.value:!p.isTriggerExpandedSig.value,[i,a,e],"p0.animated?p1.value:!p2.isTriggerExpandedSig.value"),style:{["--qwikui-accordion-content-height"]:"var(--qwikui-collapsible-content-height)",["--qwikui-accordion-content-width"]:"var(--qwikui-collapsible-content-width)"}},0,null)},1,"0S_1")},r=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_FpJ0F5de3jc:q,s_dGXzdRcdkdY:C,s_jkiDTw0Rxa4:I,s_yqEZj1cracY:j},Symbol.toStringTag,{value:"Module"}));export{f as _hW,q as s_FpJ0F5de3jc,C as s_dGXzdRcdkdY,I as s_jkiDTw0Rxa4,j as s_yqEZj1cracY};
