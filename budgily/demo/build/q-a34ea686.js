import{a8 as c,a9 as l,aa as u}from"./q-ffa2882e.js";import{b as r}from"./q-29eba519.js";import{a as w}from"./q-29eba519.js";const m=t=>{const[e,o,n]=r(),s=c(o),a=l(o,t);if(!o?.value||!s){console.warn(`Can't jump to ${t} because the carousel elements is empty.`);return}if(!a){console.warn(`Can't jump to ${t} because the element index ${t} doesn't exist.`);return}setTimeout(()=>a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),n),e.current.value=t},f=()=>{const[t,e,o,n]=r();if(!e&&t.isFirst.value)return;const s=t.isFirst.value?c(o)-1:t.current.value-1;n(s)},p=()=>{const[t,e,o,n]=r(),s=c(o)-1;if(!e&&t.current.value===s)return;const a=t.current.value===s?0:t.current.value+1;n(a)},_=()=>{const[t,e]=r();u(e).forEach((o,n)=>{o.contains(document.activeElement)&&(t.current.value=n)})},b=({track:t})=>{const[e,o]=r(),n=t(()=>e.current.value);e.isFirst.value=n===0,e.isLast.value=n+1===c(o)},h=()=>{const[t,e,o,n]=r();n.value=c(e),o(t.current.value)};export{w as _hW,f as s_4tOoNm3D6To,p as s_Aw4EtPIWJ2M,h as s_FPaY6NnxHbA,b as s_koFKDjM01VA,_ as s_o3Qy4RtDcX4,m as s_w0rF5B4LQ7s};
