import{l as m,b as d,o as c,a as b,h as l,$ as t,c as n,v as o,f as p,x as h,_ as r}from"./q-0f391e12.js";import{B as u}from"./q-6e2edd4b.js";import{T as v}from"./q-b77da3a1.js";import{V as _}from"./q-043f3462.js";const f=()=>{const[e,s]=m();return s.onSelected$(e)},g=e=>{if(d(),c(n(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_S3Ubw0Etuv4")),b(n(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_dLCsGhfdlOw")),e.signature==null)return l(h,null,3,"j8_0");const s=e.signature.probableMovementTag??"";return l(v,{children:[t("span",{"q:slot":"left-title"},null,"Is this it?",3,null),t("div",{"q:slot":"left-description"},{class:"mb-4"},"We've outlined what we detected to be the most probable one movement part.",3,null),t("div",{"q:slot":"left-description"},{class:"mb-4"},"Did we get it right?",3,null),t("div",{"q:slot":"left-description"},{class:"mb-4"}," Confirm or select one movement →",3,null),l(u,{children:"Yes",class:"pop-up",onClick$:n(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_qMFgyM1sDBw",[s,e]),"q:slot":"left-action",[o]:{class:o,"q:slot":o}},3,"j8_1"),l(_,{class:"xml-content",first:3,"q:slot":"right",...e,children:Object.entries(e.signature?.tagsMap??{}).map(([i])=>t("div",{"q:slot":i},null,[t("div",null,{class:"visible-when-hover"},t("img",null,{class:"yes-this-is-it",src:"/checkmark.svg"},null,3,null),3,null),i===s&&t("div",null,{class:"detected-probable-movement"},null,3,"j8_2")],1,`select-${i}`)),onClick:p(i=>{e.onSelected$(i)}),textWrapper:{class:"hovering",tagClasses:{[s??""]:"probable-movement"}},[o]:{class:o,first:o,"q:slot":o}},0,"j8_3")]},1,"j8_4")},w=`.visible-when-hover{display:none}.hovering{position:relative}.yes-this-is-it{width:25%;position:absolute;right:-25%;top:0}.detected-probable-movement{display:block;position:absolute;inset:0;animation:movement_probable 2s ease-in-out 1s forwards;animation-fill-mode:forwards;-webkit-animation:movement_probable 2s ease-in-out 1s forwards;-webkit-animation-fill-mode:forwards;-moz-animation:movement_probable 2s ease-in-out 1s forwards;-o-animation:movement_probable 2s ease-in-out 1s forwards}@keyframes movement_probable{0%{border:0px solid rgba(250,10,100,.8);width:0%;height:0%}50%{border:2px solid rgba(250,10,100,.8)}to{border:2px solid rgba(250,10,100,.8);width:100%;height:100%}}.pop-up{animation:pop-up 3s ease-in-out .5s forwards}@keyframes pop-up{50%{transform:scale(1.2)}to{transform:scale(1)}}.wrap{display:flex}.action{flex:1 1 0;margin-right:10px;text-align:center}.xml-content{flex:2 1 0}
`,x=w,y=`
        .highlight {
            position: relative;
        }
        .highlight.hovering>.visible-when-hover{
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left:0;
            right: 0;
            top: 0;
            bottom: 0;
        }

        .probable-movement {
            position: relative;
        }
`,a=Object.freeze(Object.defineProperty({__proto__:null,s_Pu3pzD6jFjo:g,s_S3Ubw0Etuv4:y,s_dLCsGhfdlOw:x,s_qMFgyM1sDBw:f},Symbol.toStringTag,{value:"Module"}));export{g as s_Pu3pzD6jFjo,y as s_S3Ubw0Etuv4,x as s_dLCsGhfdlOw,f as s_qMFgyM1sDBw};
