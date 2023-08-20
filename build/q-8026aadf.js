import{S as _,N as n,O as s,z as r,U as i,_ as u,P as o,x as d,b as m}from"./q-29eba519.js";const v=e=>{const l=Math.random()*1e3,t=_("closed");return n("div",null,{"data-state":s(a=>a.value,[t],"p0.value"),class:s(a=>a.class,[e],"p0.class")},[n("style",null,{dangerouslySetInnerHTML:`
      @keyframes DummyIn {
        to: { opacity(1); }
      }
      @keyframes DummyOut {
        to: { opacity(0); }
      }
      [data-state='closing'] > div {
        animation: DummyOut 1ms linear forwards;
      }
      [data-state='open'] > div {
        animation: DummyIn 1ms linear forwards;
      }
      [data-state='closed'] > div {
        display: none;
      }
    `},null,3,null),n("button",{"aria-controls":l.toString()},{"aria-expanded":s(a=>a.value==="open",[t],'p0.value==="open"'),onClick$:r(()=>u(()=>Promise.resolve().then(()=>c),void 0),"s_hJuj9dcrkJM",[t])},i(d,{name:"label",[o]:{name:o}},3,"Zt_0"),1,null),n("div",{id:l.toString()},{onAnimationEnd$:r(()=>u(()=>Promise.resolve().then(()=>c),void 0),"s_DSqnJ35ISdw",[t])},i(d,{name:"content",[o]:{name:o}},3,"Zt_1"),1,null)],1,"Zt_2")},p=()=>{const[e]=m();e.value==="closing"?e.value="closed":e.value},y=()=>{const[e]=m();return e.value==="open"?e.value="closing":e.value="open"},c=Object.freeze(Object.defineProperty({__proto__:null,s_DSqnJ35ISdw:p,s_KZIm0G6d8YA:v,s_hJuj9dcrkJM:y},Symbol.toStringTag,{value:"Module"}));export{p as s_DSqnJ35ISdw,v as s_KZIm0G6d8YA,y as s_hJuj9dcrkJM};
