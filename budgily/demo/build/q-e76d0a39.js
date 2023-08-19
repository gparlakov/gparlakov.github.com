import{b as m,e as d,A as c,y as b,U as l,N as t,z as n,P as o,h as p,K as u,_ as r}from"./q-29eba519.js";import{B as h}from"./q-4142b90a.js";import{T as v}from"./q-d3bbe6c7.js";import{V as _}from"./q-2304097b.js";const f=()=>{const[e,s]=m();return s.onSelected$(e)},g=e=>{if(d(),c(n(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_S3Ubw0Etuv4")),b(n(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_dLCsGhfdlOw")),e.signature==null)return l(u,null,3,"j8_0");const s=e.signature.probableMovementTag??"";return l(v,{children:[t("span",{"q:slot":"left-title"},null,"Is this it?",3,null),t("div",{"q:slot":"left-description"},{class:"mb-4"},"We've outlined what we detected to be the most probable one movement part.",3,null),t("div",{"q:slot":"left-description"},{class:"mb-4"},"Did we get it right?",3,null),t("div",{"q:slot":"left-description"},{class:"mb-4"}," Confirm or select one movement →",3,null),l(h,{class:"pop-up",onClick$:n(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_qMFgyM1sDBw",[s,e]),"q:slot":"left-action",children:"Yes",[o]:{class:o,"q:slot":o}},3,"j8_1"),l(_,{"q:slot":"right",class:"xml-content",first:3,...e,textWrapper:{class:"hovering",tagClasses:{[s??""]:"probable-movement"}},onClick:p(i=>{e.onSelected$(i)}),children:Object.entries(e.signature?.tagsMap??{}).map(([i])=>t("div",{"q:slot":i},null,[t("div",null,{class:"visible-when-hover"},t("img",null,{src:"/checkmark.svg",class:"yes-this-is-it"},null,3,null),3,null),i===s&&t("div",null,{class:"detected-probable-movement"},null,3,"j8_2")],1,`select-${i}`)),[o]:{"q:slot":o,class:o,first:o}},0,"j8_3")]},1,"j8_4")},w=`.visible-when-hover{display:none}.hovering{position:relative}.yes-this-is-it{width:25%;position:absolute;right:-25%;top:0}.detected-probable-movement{display:block;position:absolute;inset:0;animation:movement_probable 2s ease-in-out 1s forwards;animation-fill-mode:forwards;-webkit-animation:movement_probable 2s ease-in-out 1s forwards;-webkit-animation-fill-mode:forwards;-moz-animation:movement_probable 2s ease-in-out 1s forwards;-o-animation:movement_probable 2s ease-in-out 1s forwards}@keyframes movement_probable{0%{border:0px solid rgba(250,10,100,.8);width:0%;height:0%}50%{border:2px solid rgba(250,10,100,.8)}to{border:2px solid rgba(250,10,100,.8);width:100%;height:100%}}.pop-up{animation:pop-up 3s ease-in-out .5s forwards}@keyframes pop-up{50%{transform:scale(1.2)}to{transform:scale(1)}}.wrap{display:flex}.action{flex:1 1 0;margin-right:10px;text-align:center}.xml-content{flex:2 1 0}
`,y=w,x=`
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
`,a=Object.freeze(Object.defineProperty({__proto__:null,s_Pu3pzD6jFjo:g,s_S3Ubw0Etuv4:x,s_dLCsGhfdlOw:y,s_qMFgyM1sDBw:f},Symbol.toStringTag,{value:"Module"}));export{g as s_Pu3pzD6jFjo,x as s_S3Ubw0Etuv4,y as s_dLCsGhfdlOw,f as s_qMFgyM1sDBw};
