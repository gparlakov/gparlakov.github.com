import{j as y,m as d,z as u,_,H as V,N as at}from"./q-29eba519.js";const ht=y("accordion"),yt=d(u(()=>_(()=>import("./q-9c402ee1.js"),["build/q-9c402ee1.js","build/q-29eba519.js"]),"s_B9GD1F4tSMk")),vt=d(u(()=>_(()=>import("./q-9a635100.js"),["build/q-9a635100.js","build/q-29eba519.js"]),"s_Is44UihbmZ4")),xt=d(u(()=>_(()=>import("./q-98849bc9.js"),["build/q-98849bc9.js","build/q-29eba519.js"]),"s_jWAEOTb0wGM")),wt=d(u(()=>_(()=>import("./q-fc3ce0c5.js"),["build/q-fc3ce0c5.js","build/q-29eba519.js"]),"s_ejDFtlt7e20")),Et=d(u(()=>_(()=>import("./q-c398febf.js"),["build/q-c398febf.js","build/q-29eba519.js"]),"s_QKA0s5Sp4WU")),bt=d(u(()=>_(()=>import("./q-3f2fa232.js"),["build/q-3f2fa232.js","build/q-29eba519.js"]),"s_JzPFxtSt558")),Tt=d(u(()=>_(()=>import("./q-88ac3f69.js"),["build/q-88ac3f69.js","build/q-29eba519.js"]),"s_T0rx0VNCRQI")),Rt=d(u(()=>_(()=>import("./q-f9a367f5.js"),["build/q-f9a367f5.js","build/q-29eba519.js"]),"s_2V2qrd0zwCs"));y("carousel-root");y("carousel-control-root");const At=({children:t,...n})=>V("div",{...n,children:t},null,0,"5n_0"),Dt=({children:t,...n})=>V("button",{...n,children:t},null,0,"5n_1"),Lt=t=>V("progress",{...t},null,0,"5n_2"),Pt=t=>V("input",{...t},{type:"radio"},0,"5n_3"),It=({label:t="New Message",...n})=>V("div",{...n,children:at("span",null,null,t,1,null)},null,0,"5n_4"),Ot=d(u(()=>_(()=>import("./q-d041567d.js"),["build/q-d041567d.js","build/q-29eba519.js"]),"s_C0LEjIW3eF4")),M=(t,n)=>{const e=n-t+1;return Array.from({length:e},(o,r)=>t+r)},Vt=(t,n,{boundaryCount:e=1,siblingCount:o=1,hidePrevButton:r,hideNextButton:s,showFirstButton:f,showLastButton:i})=>{const c=M(1,Math.min(e,n)),a=M(Math.max(n-e+1,e+1),n),p=Math.max(Math.min(t-o,n-e-o*2-1),e+2),l=Math.min(Math.max(t+o,e+o*2+2),a.length>0?a[0]-2:n-1);return[...f?["first"]:[],...r?[]:["prev"],...c,...p>e+2?["divider"]:e+1<n-e?[e+1]:[],...M(p,l),...l<n-e-1?["divider"]:n-e>e?[n-e]:[],...a,...s?[]:["next"],...i?["last"]:[]]},$t=d(u(()=>_(()=>import("./q-79059763.js"),["build/q-79059763.js","build/q-29eba519.js"]),"s_AQpxWOGv5Hk")),kt=d(u(()=>_(()=>import("./q-e9d47dc1.js"),["build/q-e9d47dc1.js","build/q-29eba519.js"]),"s_F7fltfYVPJ8")),Ct=d(u(()=>_(()=>import("./q-0036fcca.js"),["build/q-0036fcca.js","build/q-29eba519.js"]),"s_nOVeNgzUlAI")),Wt=d(u(()=>_(()=>import("./q-8026aadf.js"),["build/q-8026aadf.js","build/q-29eba519.js"]),"s_KZIm0G6d8YA")),Ht=y("DrawerContext"),Mt=d(u(()=>_(()=>import("./q-ee843794.js"),["build/q-ee843794.js","build/q-29eba519.js"]),"s_vgRzM4Dg0Qs")),St=d(u(()=>_(()=>import("./q-93de3858.js"),["build/q-93de3858.js","build/q-29eba519.js"]),"s_xW6zjHXyY0g")),Ft=d(u(()=>_(()=>import("./q-7d7c7736.js"),["build/q-7d7c7736.js","build/q-29eba519.js"]),"s_uFKuFL0wqKE"));y("input-context-service");function J(t){let n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){for(let e=0;e<t.length;e++)if(t[e]){const o=J(t[e]);o&&(n&&(n+=" "),n+=o)}}else for(const e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function Bt(...t){let n=0,e,o="";for(;n<t.length;)if(e=t[n++],e){const r=J(e);r&&(o&&(o+=" "),o+=r)}return o}const Nt=`.spinner-container {
  display: inline-flex;
  width: 1em;
  height: 1em;
}

.spinner {
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
}

.track,
.indicator {
  fill: none;
  cx: 0.5em;
  cy: 0.5em;
  transform-origin: 50% 50%;
}

.track {
  transform-origin: 0 0;
  mix-blend-mode: multiply;
}

.indicator {
  stroke-linecap: round;
  stroke-dasharray: 150% 75%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    stroke-dasharray: 0.01em, 2.75em;
  }
  50% {
    transform: rotate(450deg);
    stroke-dasharray: 1.375em, 1.375em;
  }
  100% {
    transform: rotate(1080deg);
    stroke-dasharray: 0.01em, 2.75em;
  }
}
`,zt=d(u(()=>_(()=>import("./q-9987c99b.js"),["build/q-9987c99b.js","build/q-29eba519.js"]),"s_8S9JdQSRcr4"));y("qui-menu");let N;(function(t){t.ARROW_UP="ArrowUp",t.ARROW_DOWN="ArrowDown",t.ESCAPE="Escape"})(N||(N={}));let z;(function(t){t.IS_EXPANDED="quiIsExpanded",t.IS_FOCUSED="quiIsFocused",t.IS_HOVERED="quiIsHovered"})(z||(z={}));function ct(t){return t.split("-")[1]}function lt(t){return t==="y"?"height":"width"}function K(t){return t.split("-")[0]}function dt(t){return["top","bottom"].includes(K(t))?"x":"y"}function j(t,n,e){let{reference:o,floating:r}=t;const s=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,i=dt(n),c=lt(i),a=o[c]/2-r[c]/2,p=i==="x";let l;switch(K(n)){case"top":l={x:s,y:o.y-r.height};break;case"bottom":l={x:s,y:o.y+o.height};break;case"right":l={x:o.x+o.width,y:f};break;case"left":l={x:o.x-r.width,y:f};break;default:l={x:o.x,y:o.y}}switch(ct(n)){case"start":l[i]-=a*(e&&p?-1:1);break;case"end":l[i]+=a*(e&&p?-1:1)}return l}const ut=async(t,n,e)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:f}=e,i=s.filter(Boolean),c=await(f.isRTL==null?void 0:f.isRTL(n));let a=await f.getElementRects({reference:t,floating:n,strategy:r}),{x:p,y:l}=j(a,o,c),m=o,h={},b=0;for(let g=0;g<i.length;g++){const{name:T,fn:$}=i[g],{x:k,y:B,data:st,reset:D}=await $({x:p,y:l,initialPlacement:o,placement:m,strategy:r,middlewareData:h,rects:a,platform:f,elements:{reference:t,floating:n}});p=k??p,l=B??l,h={...h,[T]:{...h[T],...st}},D&&b<=50&&(b++,typeof D=="object"&&(D.placement&&(m=D.placement),D.rects&&(a=D.rects===!0?await f.getElementRects({reference:t,floating:n,strategy:r}):D.rects),{x:p,y:l}=j(a,m,c)),g=-1)}return{x:p,y:l,placement:m,strategy:r,middlewareData:h}};function q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}const _t=["top","right","bottom","left"];_t.reduce((t,n)=>t.concat(n,n+"-start",n+"-end"),[]);function E(t){var n;return((n=t.ownerDocument)==null?void 0:n.defaultView)||window}function v(t){return E(t).getComputedStyle(t)}function A(t){return tt(t)?(t.nodeName||"").toLowerCase():""}let C;function Z(){if(C)return C;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(C=t.brands.map(n=>n.brand+"/"+n.version).join(" "),C):navigator.userAgent}function x(t){return t instanceof E(t).HTMLElement}function w(t){return t instanceof E(t).Element}function tt(t){return t instanceof E(t).Node}function U(t){return typeof ShadowRoot>"u"?!1:t instanceof E(t).ShadowRoot||t instanceof ShadowRoot}function W(t){const{overflow:n,overflowX:e,overflowY:o,display:r}=v(t);return/auto|scroll|overlay|hidden/.test(n+o+e)&&!["inline","contents"].includes(r)}function ft(t){return["table","td","th"].includes(A(t))}function S(t){const n=/firefox/i.test(Z()),e=v(t),o=e.backdropFilter||e.WebkitBackdropFilter;return e.transform!=="none"||e.perspective!=="none"||!!o&&o!=="none"||n&&e.willChange==="filter"||n&&!!e.filter&&e.filter!=="none"||["transform","perspective"].some(r=>e.willChange.includes(r))||["paint","layout","strict","content"].some(r=>{const s=e.contain;return s!=null&&s.includes(r)})}function nt(){return!/^((?!chrome|android).)*safari/i.test(Z())}function F(t){return["html","body","#document"].includes(A(t))}const et={x:1,y:1};function I(t){const n=!w(t)&&t.contextElement?t.contextElement:w(t)?t:null;if(!n)return et;const e=n.getBoundingClientRect(),o=v(n);let r=e.width/parseFloat(o.width),s=e.height/parseFloat(o.height);return r&&Number.isFinite(r)||(r=1),s&&Number.isFinite(s)||(s=1),{x:r,y:s}}function L(t,n,e,o){var r,s,f,i;n===void 0&&(n=!1),e===void 0&&(e=!1);const c=t.getBoundingClientRect();let a=et;n&&(o?w(o)&&(a=I(o)):a=I(t));const p=w(t)?E(t):window,l=!nt()&&e,m=(c.left+(l&&(r=(s=p.visualViewport)==null?void 0:s.offsetLeft)!=null?r:0))/a.x,h=(c.top+(l&&(f=(i=p.visualViewport)==null?void 0:i.offsetTop)!=null?f:0))/a.y,b=c.width/a.x,g=c.height/a.y;return{width:b,height:g,top:h,right:m+b,bottom:h+g,left:m,x:m,y:h}}function R(t){return((tt(t)?t.ownerDocument:t.document)||window.document).documentElement}function H(t){return w(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ot(t){return L(R(t)).left+H(t).scrollLeft}function pt(t,n,e){const o=x(n),r=R(n),s=L(t,!0,e==="fixed",n);let f={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(o||!o&&e!=="fixed")if((A(n)!=="body"||W(r))&&(f=H(n)),x(n)){const c=L(n,!0);i.x=c.x+n.clientLeft,i.y=c.y+n.clientTop}else r&&(i.x=ot(r));return{x:s.left+f.scrollLeft-i.x,y:s.top+f.scrollTop-i.y,width:s.width,height:s.height}}function O(t){if(A(t)==="html")return t;const n=t.assignedSlot||t.parentNode||(U(t)?t.host:null)||R(t);return U(n)?n.host:n}function G(t){return x(t)&&v(t).position!=="fixed"?t.offsetParent:null}function Y(t){const n=E(t);let e=G(t);for(;e&&ft(e)&&v(e).position==="static";)e=G(e);return e&&(A(e)==="html"||A(e)==="body"&&v(e).position==="static"&&!S(e))?n:e||function(o){let r=O(o);for(;x(r)&&!F(r);){if(S(r))return r;r=O(r)}return null}(t)||n}const Q=Math.min,P=Math.max;function rt(t){const n=O(t);return F(n)?t.ownerDocument.body:x(n)&&W(n)?n:rt(n)}function it(t,n){var e;n===void 0&&(n=[]);const o=rt(t),r=o===((e=t.ownerDocument)==null?void 0:e.body),s=E(o);return r?n.concat(s,s.visualViewport||[],W(o)?o:[]):n.concat(o,it(o))}function X(t,n,e){return n==="viewport"?q(function(o,r){const s=E(o),f=R(o),i=s.visualViewport;let c=f.clientWidth,a=f.clientHeight,p=0,l=0;if(i){c=i.width,a=i.height;const m=nt();(m||!m&&r==="fixed")&&(p=i.offsetLeft,l=i.offsetTop)}return{width:c,height:a,x:p,y:l}}(t,e)):w(n)?function(o,r){const s=L(o,!0,r==="fixed"),f=s.top+o.clientTop,i=s.left+o.clientLeft,c=x(o)?I(o):{x:1,y:1},a=o.clientWidth*c.x,p=o.clientHeight*c.y,l=i*c.x,m=f*c.y;return{top:m,left:l,right:l+a,bottom:m+p,x:l,y:m,width:a,height:p}}(n,e):q(function(o){var r;const s=R(o),f=H(o),i=(r=o.ownerDocument)==null?void 0:r.body,c=P(s.scrollWidth,s.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=P(s.scrollHeight,s.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let p=-f.scrollLeft+ot(o);const l=-f.scrollTop;return v(i||s).direction==="rtl"&&(p+=P(s.clientWidth,i?i.clientWidth:0)-c),{width:c,height:a,x:p,y:l}}(R(t)))}const mt={getClippingRect:function(t){let{element:n,boundary:e,rootBoundary:o,strategy:r}=t;const s=e==="clippingAncestors"?function(a,p){const l=p.get(a);if(l)return l;let m=it(a).filter(T=>w(T)&&A(T)!=="body"),h=null;const b=v(a).position==="fixed";let g=b?O(a):a;for(;w(g)&&!F(g);){const T=v(g),$=S(g);(b?$||h:$||T.position!=="static"||!h||!["absolute","fixed"].includes(h.position))?h=T:m=m.filter(k=>k!==g),g=O(g)}return p.set(a,m),m}(n,this._c):[].concat(e),f=[...s,o],i=f[0],c=f.reduce((a,p)=>{const l=X(n,p,r);return a.top=P(l.top,a.top),a.right=Q(l.right,a.right),a.bottom=Q(l.bottom,a.bottom),a.left=P(l.left,a.left),a},X(n,i,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:n,offsetParent:e,strategy:o}=t;const r=x(e),s=R(e);if(e===s)return n;let f={scrollLeft:0,scrollTop:0},i={x:1,y:1};const c={x:0,y:0};if((r||!r&&o!=="fixed")&&((A(e)!=="body"||W(s))&&(f=H(e)),x(e))){const a=L(e);i=I(e),c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}return{width:n.width*i.x,height:n.height*i.y,x:n.x*i.x-f.scrollLeft*i.x+c.x,y:n.y*i.y-f.scrollTop*i.y+c.y}},isElement:w,getDimensions:function(t){if(x(t))return{width:t.offsetWidth,height:t.offsetHeight};const n=L(t);return{width:n.width,height:n.height}},getOffsetParent:Y,getDocumentElement:R,getScale:I,async getElementRects(t){let{reference:n,floating:e,strategy:o}=t;const r=this.getOffsetParent||Y,s=this.getDimensions;return{reference:pt(n,await r(e),o),floating:{x:0,y:0,...await s(e)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>v(t).direction==="rtl"},jt=(t,n,e)=>{const o=new Map,r={platform:mt,...e},s={...r.platform,_c:o};return ut(t,n,{...r,platform:s})};y("popover-context");const qt=`.wrapper {
  display: flex;
}
label:has(+ input) {
  opacity: 0.4;
  transition: opacity 0.3s;
}
label:has(~ input:checked) {
  opacity: 1;
}
`,Ut=d(u(()=>_(()=>import("./q-440c3423.js"),["build/q-440c3423.js","build/q-29eba519.js"]),"s_gZA6pKx7zxA")),Gt=d(u(()=>_(()=>import("./q-4d9a5a4e.js"),["build/q-4d9a5a4e.js","build/q-29eba519.js"]),"s_kiA8Dj6XgaE")),Yt=d(u(()=>_(()=>import("./q-dc1cc2a1.js"),["build/q-dc1cc2a1.js","build/q-29eba519.js"]),"s_HJjhvomrjy0")),Qt=y("tabList"),Xt=d(u(()=>_(()=>import("./q-2ee2f3df.js"),["build/q-2ee2f3df.js","build/q-29eba519.js"]),"s_U44eoLP6DEc")),Jt=d(u(()=>_(()=>import("./q-bb95ad24.js"),["build/q-bb95ad24.js","build/q-29eba519.js"]),"s_IMiLo5GwsOI")),Kt=d(u(()=>_(()=>import("./q-d077ed04.js"),["build/q-d077ed04.js","build/q-29eba519.js"]),"s_G70VEy9bNxg")),Zt=`*[data-state] {
  z-index: 99;
  position: absolute;
  opacity: 0;
}

*[data-state='positioned'] {
  display: block;
  top: var(--y, 0px);
  left: var(--x, 0px);
  transition: opacity var(--duration) linear;
  opacity: 1;
}

*[data-state='unpositioned'] {
  display: block;
  visibility: 'hidden';
  opacity: 0;
}

*[data-state='closing'] {
  top: var(--y, 0px);
  left: var(--x, 0px);
  transition: opacity var(--duration) linear;
  transition-delay: var(--duration) ms;
  opacity: 0;
}

*[data-state='hidden'] {
  display: none;
}
`,tn=d(u(()=>_(()=>import("./q-0779b41d.js"),["build/q-0779b41d.js","build/q-29eba519.js"]),"s_cNhZa003MGg")),nn=d(u(()=>_(()=>import("./q-34706268.js"),["build/q-34706268.js","build/q-29eba519.js"]),"s_kI7yHr58XAw")),en=d(u(()=>_(()=>import("./q-3e88b24f.js"),["build/q-3e88b24f.js","build/q-29eba519.js"]),"s_UhoucKpm22g"));y("select-root");const on=(t,n=0,e=100)=>(t-n)*100/(e-n),rn=y("slider"),sn=d(u(()=>_(()=>import("./q-e57d2bb3.js"),["build/q-e57d2bb3.js","build/q-29eba519.js"]),"s_9bmkpYOoHwo")),an=d(u(()=>_(()=>import("./q-a0772985.js"),["build/q-a0772985.js","build/q-29eba519.js","build/q-ffa2882e.js"]),"s_o3m0tnQlE4w")),cn=(t,n,e)=>Math.min(e,Math.max(t,n)),ln=d(u(()=>_(()=>import("./q-8e809f9f.js"),["build/q-8e809f9f.js","build/q-29eba519.js","build/q-ffa2882e.js"]),"s_7o0gCVpuMxg")),dn=`div {
  display: flex;
  align-items: center;
  white-space: nowrap;
  min-height: min-content;
}
`,un=d(u(()=>_(()=>import("./q-e9ce14ad.js"),["build/q-e9ce14ad.js","build/q-29eba519.js"]),"s_TCUu3Cg60kA")),_n=`div {
  display: flex;
  align-items: center;
}

div + *:before {
  content: var(--breadcrumb-divider, '/');
  padding-left: 0.3rem;
  padding-right: 0.4rem;
  display: block;
  opacity: 0.5;
}
`,fn=d(u(()=>_(()=>import("./q-94efa60c.js"),["build/q-94efa60c.js","build/q-29eba519.js"]),"s_ziAqxYsZEBw")),pn=d(u(()=>_(()=>import("./q-3d813324.js"),["build/q-3d813324.js","build/q-29eba519.js"]),"s_dr0TOgvCYLA")),mn={variants:{accent:"btn-accent",error:"btn-error",ghost:"btn-ghost",info:"btn-info",link:"btn-link",primary:"btn-primary",secondary:"btn-secondary",success:"btn-success",warning:"btn-warning",disabled:"btn-disabled"},sizes:{xs:"btn-xs",sm:"btn-sm",md:"btn-md",lg:"btn-lg",block:"btn-block",wide:"btn-wide"},options:{active:"btn-active",outline:"btn-outline",disabled:"btn-disabled",glass:"glass",loading:"loading",noAnimation:"no-animation",circle:"btn-circle",square:"btn-square"}},gn=d(u(()=>_(()=>import("./q-2db684b6.js"),["build/q-2db684b6.js","build/q-29eba519.js"]),"s_Sh1B042dr04")),hn={variants:{primary:"bg-purple-200 text-purple-900",error:"bg-red-200 text-red-900",info:"bg-blue-200 text-blue-900",success:"bg-green-200 text-green-900",warning:"bg-yellow-200 text-yellow-900"},sizes:{sm:"px-2 py-1 text-xs",md:"px-4 py-2 font-medium",lg:"px-6 py-3 font-medium"},radius:{sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg"}},yn={variants:{accent:"progress-accent",error:"progress-error",info:"progress-info",primary:"progress-primary",secondary:"progress-secondary",success:"progress-success",warning:"progress-warning"}},vn=`input[name='rating-value']:checked ~ label,
input[name='rating-value'][aria-checked='true'] ~ label {
  opacity: 0.2;
}
`,xn=y("my-context"),wn=d(u(()=>_(()=>import("./q-eb8e214a.js"),["build/q-eb8e214a.js","build/q-29eba519.js"]),"s_OJO69wotT1E")),En={variants:{info:"alert-info",success:"alert-success",warning:"alert-warning",error:"alert-error"},positions:{top:"toast-top",end:"toast-end",start:"toast-start",middle:"toast-middle",bottom:"toast-bottom",center:"toast-center"}},bn=d(u(()=>_(()=>import("./q-b0fe2900.js"),["build/q-b0fe2900.js","build/q-29eba519.js"]),"s_pMkePUgrkB8")),Tn=d(u(()=>_(()=>import("./q-acd4214d.js"),["build/q-acd4214d.js","build/q-29eba519.js","build/q-ffa2882e.js"]),"s_lYylKylzlCc")),Rn={variants:{accent:"radio-accent",error:"radio-error",info:"radio-info",primary:"radio-primary",secondary:"radio-secondary",success:"radio-success",warning:"radio-warning"}},An={variants:{primary:"--p",secondary:"--s",accent:"--a",success:"--su",warning:"--wa",error:"--er"}};export{Jt as $,yt as A,gn as B,Et as C,Ft as D,Lt as E,Rn as F,Pt as G,Ut as H,xn as I,vn as J,Yt as K,nn as L,Gt as M,pn as N,qt as O,Tn as P,An as Q,en as R,an as S,wn as T,ln as U,sn as V,on as W,rn as X,cn as Y,zt as Z,Nt as _,ht as a,Qt as a0,Kt as a1,Xt as a2,En as a3,It as a4,Ot as a5,tn as a6,jt as a7,Zt as a8,vt as b,Bt as c,hn as d,At as e,xt as f,un as g,fn as h,_n as i,mn as j,Dt as k,wt as l,Tt as m,Rt as n,bt as o,Wt as p,St as q,Mt as r,dn as s,Ht as t,bn as u,Ct as v,Vt as w,kt as x,$t as y,yn as z};
