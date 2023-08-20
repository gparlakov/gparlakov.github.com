import{S as l,c as i,N as a,d as c,U as f,x as _,z as u,_ as x,b as d}from"./q-29eba519.js";import{U as b}from"./q-ffa2882e.js";const p=({...t})=>{const o=l(),e=i(b);return e.listBoxRef=o,a("ul",{ref:o,style:`
      display: ${e.isExpanded.value?"block":"none"};
      position: absolute;
      z-index: 1;
      ${t.style}
    `,class:c(t,"class")},{role:"listbox",tabIndex:0,onKeyDown$:u(()=>x(()=>Promise.resolve().then(()=>y),void 0),"s_HkJlVqFVBrc",[e])},f(_,null,3,"xi_7"),1,"xi_8")},v=t=>{const[o]=d(),e=o.options.map(n=>n.value).filter(n=>n?.getAttribute("aria-disabled")!=="true"),r=t.target,s=e.indexOf(r);t.key==="ArrowDown"&&(s===e.length-1?e[0]?.focus():e[s+1]?.focus()),t.key==="ArrowUp"&&(s<=0?e[e.length-1]?.focus():e[s-1]?.focus())},y=Object.freeze(Object.defineProperty({__proto__:null,s_HkJlVqFVBrc:v,s_nflAf44tYv8:p},Symbol.toStringTag,{value:"Module"}));export{v as s_HkJlVqFVBrc,p as s_nflAf44tYv8};
