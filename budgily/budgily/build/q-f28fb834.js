import{l as a,G as c,I as _,C as u,E as v,c as s,d as T,w as I,M as E,h as S,_ as n,j as f,p as x}from"./q-0f391e12.js";import{a as m,b as p}from"./q-1d1c70df.js";const h=function({track:e}){const[t,i,o]=a();e(()=>t.selectedTriggerIdSig.value),t.behavior==="single"&&o!==t.selectedTriggerIdSig.value&&(i.isTriggerExpandedSig.value=!1)},C=function(){const[e,t]=a();t.value&&(e.triggerStore.push(t.value),console.log(e.triggerStore))},b=()=>{const[r,e,t]=a();r.getSelectedTriggerId$(t),r.collapsible?e.isTriggerExpandedSig.value=!e.isTriggerExpandedSig.value:e.isTriggerExpandedSig.value=!0},y=r=>{const[e]=a();r.key==="ArrowUp"&&e.focusPreviousTrigger$(),r.key==="ArrowDown"&&e.focusNextTrigger$(),r.key==="Home"&&e.focusFirstTrigger$(),r.key==="End"&&e.focusLastTrigger$()},P=({...r})=>{const e=c(m),t=c(p),i=_(),o=`${t.itemId}-trigger`,d=`${t.itemId}-content`;return u(s(()=>n(()=>Promise.resolve().then(()=>g),void 0),"s_moIlZJ0XpGY",[e,t,o])),v(s(()=>n(()=>Promise.resolve().then(()=>g),void 0),"s_py4L6HieTpw",[e,i])),T("button",{ref:i,id:o,"data-trigger-id":o,disabled:E(r,"disabled"),"aria-controls":d,...r,children:S(f,null,3,"RH_0"),onClick$:[s(()=>n(()=>Promise.resolve().then(()=>g),void 0),"s_vCRJEICs24o",[e,t,o]),r.onClick$],onKeydown$:[s(()=>n(()=>Promise.resolve().then(()=>g),void 0),"s_03hM5ESzhbk",[e]),r.onKeyDown$]},{"aria-expanded":I(l=>l.isTriggerExpandedSig.value,[t],"p0.isTriggerExpandedSig.value")},0,"RH_1")},g=Object.freeze(Object.defineProperty({__proto__:null,_hW:x,s_03hM5ESzhbk:y,s_HLYQug4XlU4:P,s_moIlZJ0XpGY:h,s_py4L6HieTpw:C,s_vCRJEICs24o:b},Symbol.toStringTag,{value:"Module"}));export{x as _hW,y as s_03hM5ESzhbk,P as s_HLYQug4XlU4,h as s_moIlZJ0XpGY,C as s_py4L6HieTpw,b as s_vCRJEICs24o};
