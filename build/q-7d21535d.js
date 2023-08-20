import{p as _}from"./q-4142b90a.js";import{Q as v,U as o,N as s,x as r,P as a,b as d,S as p,O as i,z as u,_ as c}from"./q-29eba519.js";const y=e=>{const t=v(e,["showArrow","showPlus"]);return o(_,{class:`collapse border border-base-300 rounded-box
                        ${(e.showArrow??!1)&&!(e.showPlus??!1)&&"collapse-arrow"}
                        ${(e.showPlus??!1)&&!(e.showArrow??!1)&&"collapse-plus"}`,...t,children:[s("span",{"q:slot":"label"},{class:"collapse-title text-xl font-medium"},o(r,{name:"label",[a]:{name:a}},3,"9y_0"),1,null),s("span",{"q:slot":"content"},{class:"collapse-content max-h-fit"},o(r,{name:"content",[a]:{name:a}},3,"9y_1"),1,null)]},0,"9y_2")},f=()=>{const[e]=d();return e.value==="open"?e.value="closing":e.value="open"},h=()=>{const[e]=d();e.value==="closing"?e.value="closed":e.value},b=e=>{const t=Math.random()*1e3,n=p("closed");return s("div",null,{"data-state":i(l=>l.value,[n],"p0.value"),class:i(l=>l.class,[e],"p0.class")},[s("style",null,{dangerouslySetInnerHTML:`
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
    `},null,3,null),s("button",{"aria-controls":t.toString()},{"aria-expanded":i(l=>l.value==="open",[n],'p0.value==="open"'),onClick$:u(()=>c(()=>Promise.resolve().then(()=>m),void 0),"s_E5blXWvrWRA",[n])},o(r,{name:"label",[a]:{name:a}},3,"Ji_0"),1,null),s("div",{id:t.toString()},{onAnimationEnd$:u(()=>c(()=>Promise.resolve().then(()=>m),void 0),"s_hh05FvQ4qm8",[n])},o(r,{name:"content",[a]:{name:a}},3,"Ji_1"),1,null)],1,"Ji_2")},m=Object.freeze(Object.defineProperty({__proto__:null,s_E5blXWvrWRA:f,s_KP0Gqe3fG9s:y,s_YdCJfq0QZV8:b,s_hh05FvQ4qm8:h},Symbol.toStringTag,{value:"Module"}));export{f as s_E5blXWvrWRA,y as s_KP0Gqe3fG9s,b as s_YdCJfq0QZV8,h as s_hh05FvQ4qm8};
