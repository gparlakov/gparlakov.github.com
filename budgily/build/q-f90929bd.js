import{p as _}from"./q-6e2edd4b.js";import{z as v,h as o,$ as s,j as r,v as a,l as d,I as p,w as c,c as i,_ as u}from"./q-0f391e12.js";const h=e=>{const t=v(e,["showArrow","showPlus"]);return o(_,{class:`collapse border border-base-300 rounded-box 
                        ${(e.showArrow??!1)&&!(e.showPlus??!1)&&"collapse-arrow"} 
                        ${(e.showPlus??!1)&&!(e.showArrow??!1)&&"collapse-plus"}`,...t,children:[s("span",{"q:slot":"label"},{class:"collapse-title text-xl font-medium"},o(r,{name:"label",[a]:{name:a}},3,"9y_0"),1,null),s("span",{"q:slot":"content"},{class:"collapse-content max-h-fit"},o(r,{name:"content",[a]:{name:a}},3,"9y_1"),1,null)]},0,"9y_2")},y=()=>{const[e]=d();return e.value==="open"?e.value="closing":e.value="open"},f=()=>{const[e]=d();e.value==="closing"?e.value="closed":e.value},w=e=>{const t=Math.random()*1e3,n=p("closed");return s("div",null,{"data-state":c(l=>l.value,[n],"p0.value"),class:c(l=>l.class,[e],"p0.class")},[s("style",null,{dangerouslySetInnerHTML:`
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
    `},null,3,null),s("button",{"aria-controls":t.toString()},{"aria-expanded":c(l=>l.value==="open",[n],'p0.value==="open"'),onClick$:i(()=>u(()=>Promise.resolve().then(()=>m),void 0),"s_E5blXWvrWRA",[n])},o(r,{name:"label",[a]:{name:a}},3,"Ji_0"),1,null),s("div",{id:t.toString()},{onAnimationEnd$:i(()=>u(()=>Promise.resolve().then(()=>m),void 0),"s_hh05FvQ4qm8",[n])},o(r,{name:"content",[a]:{name:a}},3,"Ji_1"),1,null)],1,"Ji_2")},m=Object.freeze(Object.defineProperty({__proto__:null,s_E5blXWvrWRA:y,s_KP0Gqe3fG9s:h,s_YdCJfq0QZV8:w,s_hh05FvQ4qm8:f},Symbol.toStringTag,{value:"Module"}));export{y as s_E5blXWvrWRA,h as s_KP0Gqe3fG9s,w as s_YdCJfq0QZV8,f as s_hh05FvQ4qm8};
