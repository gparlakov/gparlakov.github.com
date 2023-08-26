import{O as Pn,c as Rn,_ as $n,f as Mn}from"./q-0f391e12.js";import{S as nn,r as Fn,c as Cn,i as G,a as tn,b as rn,d as In}from"./q-38c94a1c.js";function T(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function On(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function wn(n){let t,e,r;n.length!==2?(t=T,e=(f,s)=>T(n(f),s),r=(f,s)=>n(f)-s):(t=n===T||n===On?n:En,e=n,r=n);function i(f,s,a=0,h=f.length){if(a<h){if(t(s,s)!==0)return h;do{const l=a+h>>>1;e(f[l],s)<0?a=l+1:h=l}while(a<h)}return a}function u(f,s,a=0,h=f.length){if(a<h){if(t(s,s)!==0)return h;do{const l=a+h>>>1;e(f[l],s)<=0?a=l+1:h=l}while(a<h)}return a}function o(f,s,a=0,h=f.length){const l=i(f,s,a,h-1);return l>a&&r(f[l-1],s)>-r(f[l],s)?l-1:l}return{left:i,center:o,right:u}}function En(){return 0}function Vn(n){return n===null?NaN:+n}const Dn=wn(T),jn=Dn.right;wn(Vn).center;const Ln=jn;class Y extends Map{constructor(t,e=qn){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[r,i]of t)this.set(r,i)}get(t){return super.get(en(this,t))}has(t){return super.has(en(this,t))}set(t,e){return super.set(Tn(this,t),e)}delete(t){return super.delete(_n(this,t))}}function en({_intern:n,_key:t},e){const r=t(e);return n.has(r)?n.get(r):e}function Tn({_intern:n,_key:t},e){const r=t(e);return n.has(r)?n.get(r):(n.set(r,e),e)}function _n({_intern:n,_key:t},e){const r=t(e);return n.has(r)&&(e=n.get(r),n.delete(r)),e}function qn(n){return n!==null&&typeof n=="object"?n.valueOf():n}function un(n){return n}function Hn(n,...t){return Xn(n,un,un,t)}function Xn(n,t,e,r){return function i(u,o){if(o>=r.length)return e(u);const f=new Y,s=r[o++];let a=-1;for(const h of u){const l=s(h,++a,u),c=f.get(l);c?c.push(h):f.set(l,[h])}for(const[h,l]of f)f.set(h,i(l,o));return t(f)}(n,0)}const Bn=Math.sqrt(50),Gn=Math.sqrt(10),Yn=Math.sqrt(2);function q(n,t,e){const r=(t-n)/Math.max(0,e),i=Math.floor(Math.log10(r)),u=r/Math.pow(10,i),o=u>=Bn?10:u>=Gn?5:u>=Yn?2:1;let f,s,a;return i<0?(a=Math.pow(10,-i)/o,f=Math.round(n*a),s=Math.round(t*a),f/a<n&&++f,s/a>t&&--s,a=-a):(a=Math.pow(10,i)*o,f=Math.round(n/a),s=Math.round(t/a),f*a<n&&++f,s*a>t&&--s),s<f&&.5<=e&&e<2?q(n,t,e*2):[f,s,a]}function Kn(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];const r=t<n,[i,u,o]=r?q(t,n,e):q(n,t,e);if(!(u>=i))return[];const f=u-i+1,s=new Array(f);if(r)if(o<0)for(let a=0;a<f;++a)s[a]=(u-a)/-o;else for(let a=0;a<f;++a)s[a]=(u-a)*o;else if(o<0)for(let a=0;a<f;++a)s[a]=(i+a)/-o;else for(let a=0;a<f;++a)s[a]=(i+a)*o;return s}function K(n,t,e){return t=+t,n=+n,e=+e,q(n,t,e)[2]}function Un(n,t,e){t=+t,n=+n,e=+e;const r=t<n,i=r?K(t,n,e):K(n,t,e);return(r?-1:1)*(i<0?1/-i:i)}function Zn(n,t,e){n=+n,t=+t,e=(i=arguments.length)<2?(t=n,n=0,1):i<3?1:+e;for(var r=-1,i=Math.max(0,Math.ceil((t-n)/e))|0,u=new Array(i);++r<i;)u[r]=n+r*e;return u}function Jn(n){return n}var _=1,B=2,on=3,O=4,an=1e-6;function Qn(n){return"translate("+n+",0)"}function Wn(n){return"translate(0,"+n+")"}function nt(n){return t=>+n(t)}function tt(n,t){return t=Math.max(0,n.bandwidth()-t*2)/2,n.round()&&(t=Math.round(t)),e=>+n(e)+t}function rt(){return!this.__axis}function vn(n,t){var e=[],r=null,i=null,u=6,o=6,f=3,s=typeof window<"u"&&window.devicePixelRatio>1?0:.5,a=n===_||n===O?-1:1,h=n===O||n===B?"x":"y",l=n===_||n===on?Qn:Wn;function c(m){var y=r??(t.ticks?t.ticks.apply(t,e):t.domain()),b=i??(t.tickFormat?t.tickFormat.apply(t,e):Jn),g=Math.max(u,0)+f,M=t.range(),x=+M[0]+s,w=+M[M.length-1]+s,S=(t.bandwidth?tt:nt)(t.copy(),s),p=m.selection?m.selection():m,z=p.selectAll(".domain").data([null]),k=p.selectAll(".tick").data(y,t).order(),N=k.exit(),$=k.enter().append("g").attr("class","tick"),R=k.select("line"),d=k.select("text");z=z.merge(z.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge($),R=R.merge($.append("line").attr("stroke","currentColor").attr(h+"2",a*u)),d=d.merge($.append("text").attr("fill","currentColor").attr(h,a*g).attr("dy",n===_?"0em":n===on?"0.71em":"0.32em")),m!==p&&(z=z.transition(m),k=k.transition(m),R=R.transition(m),d=d.transition(m),N=N.transition(m).attr("opacity",an).attr("transform",function(A){return isFinite(A=S(A))?l(A+s):this.getAttribute("transform")}),$.attr("opacity",an).attr("transform",function(A){var v=this.parentNode.__axis;return l((v&&isFinite(v=v(A))?v:S(A))+s)})),N.remove(),z.attr("d",n===O||n===B?o?"M"+a*o+","+x+"H"+s+"V"+w+"H"+a*o:"M"+s+","+x+"V"+w:o?"M"+x+","+a*o+"V"+s+"H"+w+"V"+a*o:"M"+x+","+s+"H"+w),k.attr("opacity",1).attr("transform",function(A){return l(S(A)+s)}),R.attr(h+"2",a*u),d.attr(h,a*g).text(b),p.filter(rt).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===B?"start":n===O?"end":"middle"),p.each(function(){this.__axis=S})}return c.scale=function(m){return arguments.length?(t=m,c):t},c.ticks=function(){return e=Array.from(arguments),c},c.tickArguments=function(m){return arguments.length?(e=m==null?[]:Array.from(m),c):e.slice()},c.tickValues=function(m){return arguments.length?(r=m==null?null:Array.from(m),c):r&&r.slice()},c.tickFormat=function(m){return arguments.length?(i=m,c):i},c.tickSize=function(m){return arguments.length?(u=o=+m,c):u},c.tickSizeInner=function(m){return arguments.length?(u=+m,c):u},c.tickSizeOuter=function(m){return arguments.length?(o=+m,c):o},c.tickPadding=function(m){return arguments.length?(f=+m,c):f},c.offset=function(m){return arguments.length?(s=+m,c):s},c}function et(n){return vn(_,n)}function it(n){return vn(O,n)}function fn(n){return typeof n=="string"?new nn([[document.querySelector(n)]],[document.documentElement]):new nn([[n]],Fn)}function ut(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,r=t.slice(),i;return function(u){for(i=0;i<e;++i)r[i]=n[i]*(1-u)+t[i]*u;return r}}function ot(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function at(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(r),u=new Array(e),o;for(o=0;o<r;++o)i[o]=Z(n[o],t[o]);for(;o<e;++o)u[o]=t[o];return function(f){for(o=0;o<r;++o)u[o]=i[o](f);return u}}function ft(n,t){var e=new Date;return n=+n,t=+t,function(r){return e.setTime(n*(1-r)+t*r),e}}function ct(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=Z(n[i],t[i]):r[i]=t[i];return function(u){for(i in e)r[i]=e[i](u);return r}}function Z(n,t){var e=typeof t,r;return t==null||e==="boolean"?Cn(t):(e==="number"?G:e==="string"?(r=tn(t))?(t=r,rn):In:t instanceof tn?rn:t instanceof Date?ft:ot(t)?ut:Array.isArray(t)?at:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?ct:G)(n,t)}function st(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}function lt(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function H(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function I(n){return n=H(Math.abs(n)),n?n[1]:NaN}function ht(n,t){return function(e,r){for(var i=e.length,u=[],o=0,f=n[0],s=0;i>0&&f>0&&(s+f+1>r&&(f=Math.max(1,r-s)),u.push(e.substring(i-=f,i+f)),!((s+=f+1)>r));)f=n[o=(o+1)%n.length];return u.reverse().join(t)}}function mt(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var dt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function X(n){if(!(t=dt.exec(n)))throw new Error("invalid format: "+n);var t;return new J({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}X.prototype=J.prototype;function J(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}J.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function gt(n){n:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var An;function pt(n,t){var e=H(n,t);if(!e)return n+"";var r=e[0],i=e[1],u=i-(An=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return u===o?r:u>o?r+new Array(u-o+1).join("0"):u>0?r.slice(0,u)+"."+r.slice(u):"0."+new Array(1-u).join("0")+H(n,Math.max(0,t+u-1))[0]}function cn(n,t){var e=H(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}const sn={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:lt,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>cn(n*100,t),r:cn,s:pt,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function ln(n){return n}var hn=Array.prototype.map,mn=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function yt(n){var t=n.grouping===void 0||n.thousands===void 0?ln:ht(hn.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",u=n.numerals===void 0?ln:mt(hn.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",f=n.minus===void 0?"−":n.minus+"",s=n.nan===void 0?"NaN":n.nan+"";function a(l){l=X(l);var c=l.fill,m=l.align,y=l.sign,b=l.symbol,g=l.zero,M=l.width,x=l.comma,w=l.precision,S=l.trim,p=l.type;p==="n"?(x=!0,p="g"):sn[p]||(w===void 0&&(w=12),S=!0,p="g"),(g||c==="0"&&m==="=")&&(g=!0,c="0",m="=");var z=b==="$"?e:b==="#"&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",k=b==="$"?r:/[%p]/.test(p)?o:"",N=sn[p],$=/[defgprs%]/.test(p);w=w===void 0?6:/[gprs]/.test(p)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function R(d){var A=z,v=k,F,W,E;if(p==="c")v=N(d)+v,d="";else{d=+d;var V=d<0||1/d<0;if(d=isNaN(d)?s:N(Math.abs(d),w),S&&(d=gt(d)),V&&+d==0&&y!=="+"&&(V=!1),A=(V?y==="("?y:f:y==="-"||y==="("?"":y)+A,v=(p==="s"?mn[8+An/3]:"")+v+(V&&y==="("?")":""),$){for(F=-1,W=d.length;++F<W;)if(E=d.charCodeAt(F),48>E||E>57){v=(E===46?i+d.slice(F+1):d.slice(F))+v,d=d.slice(0,F);break}}}x&&!g&&(d=t(d,1/0));var D=A.length+d.length+v.length,P=D<M?new Array(M-D+1).join(c):"";switch(x&&g&&(d=t(P+d,P.length?M-v.length:1/0),P=""),m){case"<":d=A+d+v+P;break;case"=":d=A+P+d+v;break;case"^":d=P.slice(0,D=P.length>>1)+A+d+v+P.slice(D);break;default:d=P+A+d+v;break}return u(d)}return R.toString=function(){return l+""},R}function h(l,c){var m=a((l=X(l),l.type="f",l)),y=Math.max(-8,Math.min(8,Math.floor(I(c)/3)))*3,b=Math.pow(10,-y),g=mn[8+y/3];return function(M){return m(b*M)+g}}return{format:a,formatPrefix:h}}var j,xn,bn;kt({thousands:",",grouping:[3],currency:["$",""]});function kt(n){return j=yt(n),xn=j.format,bn=j.formatPrefix,j}function Mt(n){return Math.max(0,-I(Math.abs(n)))}function wt(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(I(t)/3)))*3-I(Math.abs(n)))}function vt(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,I(t)-I(n))+1}function Q(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}const dn=Symbol("implicit");function Nn(){var n=new Y,t=[],e=[],r=dn;function i(u){let o=n.get(u);if(o===void 0){if(r!==dn)return r;n.set(u,o=t.push(u)-1)}return e[o%e.length]}return i.domain=function(u){if(!arguments.length)return t.slice();t=[],n=new Y;for(const o of u)n.has(o)||n.set(o,t.push(o)-1);return i},i.range=function(u){return arguments.length?(e=Array.from(u),i):e.slice()},i.unknown=function(u){return arguments.length?(r=u,i):r},i.copy=function(){return Nn(t,e).unknown(r)},Q.apply(i,arguments),i}function Sn(){var n=Nn().unknown(void 0),t=n.domain,e=n.range,r=0,i=1,u,o,f=!1,s=0,a=0,h=.5;delete n.unknown;function l(){var c=t().length,m=i<r,y=m?i:r,b=m?r:i;u=(b-y)/Math.max(1,c-s+a*2),f&&(u=Math.floor(u)),y+=(b-y-u*(c-s))*h,o=u*(1-s),f&&(y=Math.round(y),o=Math.round(o));var g=Zn(c).map(function(M){return y+u*M});return e(m?g.reverse():g)}return n.domain=function(c){return arguments.length?(t(c),l()):t()},n.range=function(c){return arguments.length?([r,i]=c,r=+r,i=+i,l()):[r,i]},n.rangeRound=function(c){return[r,i]=c,r=+r,i=+i,f=!0,l()},n.bandwidth=function(){return o},n.step=function(){return u},n.round=function(c){return arguments.length?(f=!!c,l()):f},n.padding=function(c){return arguments.length?(s=Math.min(1,a=+c),l()):s},n.paddingInner=function(c){return arguments.length?(s=Math.min(1,c),l()):s},n.paddingOuter=function(c){return arguments.length?(a=+c,l()):a},n.align=function(c){return arguments.length?(h=Math.max(0,Math.min(1,c)),l()):h},n.copy=function(){return Sn(t(),[r,i]).round(f).paddingInner(s).paddingOuter(a).align(h)},Q.apply(l(),arguments)}function At(n){return function(){return n}}function xt(n){return+n}var gn=[0,1];function C(n){return n}function U(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:At(isNaN(t)?NaN:.5)}function bt(n,t){var e;return n>t&&(e=n,n=t,t=e),function(r){return Math.max(n,Math.min(t,r))}}function Nt(n,t,e){var r=n[0],i=n[1],u=t[0],o=t[1];return i<r?(r=U(i,r),u=e(o,u)):(r=U(r,i),u=e(u,o)),function(f){return u(r(f))}}function St(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),u=new Array(r),o=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=U(n[o],n[o+1]),u[o]=e(t[o],t[o+1]);return function(f){var s=Ln(n,f,1,r)-1;return u[s](i[s](f))}}function zt(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function Pt(){var n=gn,t=gn,e=Z,r,i,u,o=C,f,s,a;function h(){var c=Math.min(n.length,t.length);return o!==C&&(o=bt(n[0],n[c-1])),f=c>2?St:Nt,s=a=null,l}function l(c){return c==null||isNaN(c=+c)?u:(s||(s=f(n.map(r),t,e)))(r(o(c)))}return l.invert=function(c){return o(i((a||(a=f(t,n.map(r),G)))(c)))},l.domain=function(c){return arguments.length?(n=Array.from(c,xt),h()):n.slice()},l.range=function(c){return arguments.length?(t=Array.from(c),h()):t.slice()},l.rangeRound=function(c){return t=Array.from(c),e=st,h()},l.clamp=function(c){return arguments.length?(o=c?!0:C,h()):o!==C},l.interpolate=function(c){return arguments.length?(e=c,h()):e},l.unknown=function(c){return arguments.length?(u=c,l):u},function(c,m){return r=c,i=m,h()}}function Rt(){return Pt()(C,C)}function $t(n,t,e,r){var i=Un(n,t,e),u;switch(r=X(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(u=wt(i,o))&&(r.precision=u),bn(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(u=vt(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=u-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(u=Mt(i))&&(r.precision=u-(r.type==="%")*2);break}}return xn(r)}function Ft(n){var t=n.domain;return n.ticks=function(e){var r=t();return Kn(r[0],r[r.length-1],e??10)},n.tickFormat=function(e,r){var i=t();return $t(i[0],i[i.length-1],e??10,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,u=r.length-1,o=r[i],f=r[u],s,a,h=10;for(f<o&&(a=o,o=f,f=a,a=i,i=u,u=a);h-- >0;){if(a=K(o,f,e),a===s)return r[i]=o,r[u]=f,t(r);if(a>0)o=Math.floor(o/a)*a,f=Math.ceil(f/a)*a;else if(a<0)o=Math.ceil(o*a)/a,f=Math.floor(f*a)/a;else break;s=a}return n},n}function zn(){var n=Rt();return n.copy=function(){return zt(n,zn())},Q.apply(n,arguments),Ft(n)}function L(n){return function(){return n}}function Ct(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function pn(n,t){if((o=n.length)>1)for(var e=1,r,i,u=n[t[0]],o,f=u.length;e<o;++e)for(i=u,u=n[t[e]],r=0;r<f;++r)u[r][1]+=u[r][0]=isNaN(i[r][1])?i[r][0]:i[r][1]}function yn(n){for(var t=n.length,e=new Array(t);--t>=0;)e[t]=t;return e}function It(n,t){return n[t]}function Ot(n){const t=[];return t.key=n,t}function kn(){var n=L([]),t=yn,e=pn,r=It;function i(u){var o=Array.from(n.apply(this,arguments),Ot),f,s=o.length,a=-1,h;for(const l of u)for(f=0,++a;f<s;++f)(o[f][a]=[0,+r(l,o[f].key,a,u)]).data=l;for(f=0,h=Ct(t(o));f<s;++f)o[h[f]].index=f;return e(o,h),o}return i.keys=function(u){return arguments.length?(n=typeof u=="function"?u:L(Array.from(u)),i):n},i.value=function(u){return arguments.length?(r=typeof u=="function"?u:L(+u),i):r},i.order=function(u){return arguments.length?(t=u==null?yn:typeof u=="function"?u:L(Array.from(u)),i):t},i.offset=function(u){return arguments.length?(e=u??pn,i):e},i}const Dt=50,jt=Pn(Rn(()=>$n(()=>import("./q-d1200cb8.js"),["build/q-d1200cb8.js","build/q-0f391e12.js","build/q-38c94a1c.js"]),"s_KPMlPruNj0k"));function Lt({store:n,movementDetailsStore:{months:t,movements:e,maxSum:r},monthsWidth:i,xAxis:u,yAxis:o}){const{width:f,height:s,padding:a}=n,h=f??0,l=Array.isArray(e)?e:[],c=Sn([a,s-a]).domain(t).padding(.2).round(!0),m=zn([a+i,Number(h)-i-2*a]).domain([0,r]),b=[...Hn([...l].sort((g,M)=>M.amount-g.amount),g=>g.month,g=>g.type).entries()].reduce((g,[M,x])=>{const w=x?.get("Credit")??[],S=kn().keys(w.map(k=>k.id))([w.reduce((k,N)=>({...k,[N.id]:N.amount}),{})]),p=x?.get("Debit")??[],z=kn().keys(p.map(k=>k.id))([p.reduce((k,N)=>({...k,[N.id]:N.amount}),{})]);return g[M]={Credit:S,Debit:z},g},{});n.movementsCoords=Mn(l.map(g=>{const[[M,x]]=b[g.month][g.type].find(S=>S.key===g.id)??[[0,0]],w=g;return w.coord={y:(c(g.month)??0)+(g.type==="Debit"?c.bandwidth()/2:0),x:m(M),width:`${m(x)-m(M)}`,height:`${c.bandwidth()/2}`,fill:g.type==="Credit"?"green":"red",stroke:"blue"},w})),u.value&&et(m).tickSizeInner(-n.height)(fn(u.value)),o.value&&it(c)(fn(o.value))}function Tt(){return{height:600,padding:10,movementsCoords:Mn([])}}export{jt as R,Lt as c,Hn as g,Tt as i,Dt as m};
