import{b as o}from"./q-29eba519.js";import{a as M}from"./q-29eba519.js";import{ab as m,a8 as p,a9 as h}from"./q-ffa2882e.js";const C=()=>{const[t]=o();return t.value.length},w=()=>{const[t,s]=o();return m(t.items.active.current.value,s.value)},_=()=>{const[t,s]=o();let e=0;const n=s.value?.querySelector('[attr-data-qui="carousel"]'),a=s.value?.getClientRects()[0].width||1,r=[[]];Array.from(n?.children||[]).forEach((c,l)=>{const u=c.getClientRects()[0].width,i=n?.children[l+1]?.getClientRects()[0].x,v=i?u+c.getClientRects()[0].x-i:0;e+=u+Math.abs(v),r[Math.ceil(e/a)-1]||r.push([]),r[Math.ceil(e/a)-1].push(l)}),t.value=r},b=t=>{const[s,e,n]=o(),a=p(e),r=h(e,t);if(!e?.value||!a){console.warn(`Can't jump to ${t} because the carousel elements is empty.`);return}if(!r){console.warn(`Can't jump to ${t} because the element index ${t} doesn't exist.`);return}setTimeout(()=>r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),n),s.current.value=t},x=()=>{const[t,s,e,n,a]=o();if(!(!s&&e.items.active.current.value===0)){if(e.items.active.current.value===0){a(n.value.at(t.value-1)?.[0]||0);return}if(t.value===0){a(0);return}a(n.value.at(t.value-1)?.[0]||0)}},y=()=>{const[t,s,e,n,a]=o();!s&&t.value+1===a.value||n(e.value.at(t.value+1)?.[0]||0)},A=()=>{const[t]=o();return t()};export{M as _hW,y as s_04wvMUX0XqE,b as s_0UAHSrJNsa0,A as s_1yNtW2XyCAI,C as s_Tk6xK4k2yQo,x as s_c8kpC9y5s5o,_ as s_l5SxS96OnmE,w as s_x0idL0BpEos};
