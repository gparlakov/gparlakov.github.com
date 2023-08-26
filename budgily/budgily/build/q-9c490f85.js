import{I as r,G as i,$ as a,M as c,h as f,j as _,c as u,_ as x,l as d}from"./q-0f391e12.js";import{U as b}from"./q-1d1c70df.js";const p=({...t})=>{const o=r(),e=i(b);return e.listBoxRef=o,a("ul",{ref:o,style:`
      display: ${e.isExpanded.value?"block":"none"};
      position: absolute;
      z-index: 1;
      ${t.style}
    `,class:c(t,"class")},{role:"listbox",tabIndex:0,onKeyDown$:u(()=>x(()=>Promise.resolve().then(()=>y),void 0),"s_HkJlVqFVBrc",[e])},f(_,null,3,"xi_7"),1,"xi_8")},v=t=>{const[o]=d(),e=o.options.map(l=>l.value).filter(l=>l?.getAttribute("aria-disabled")!=="true"),n=t.target,s=e.indexOf(n);t.key==="ArrowDown"&&(s===e.length-1?e[0]?.focus():e[s+1]?.focus()),t.key==="ArrowUp"&&(s<=0?e[e.length-1]?.focus():e[s-1]?.focus())},y=Object.freeze(Object.defineProperty({__proto__:null,s_HkJlVqFVBrc:v,s_nflAf44tYv8:p},Symbol.toStringTag,{value:"Module"}));export{v as s_HkJlVqFVBrc,p as s_nflAf44tYv8};
