import{l as v,a as w,G as P,N as h,f,h as g,$ as l,v as d,w as a,c as r,M as c,k as x,x as b,_ as i}from"./q-0f391e12.js";import{C as y}from"./q-ad6d2aa3.js";import{C as k}from"./q-a6acdc9f.js";import{P as D}from"./q-6e2edd4b.js";import{r as E}from"./q-cf4c94b4.js";const I=()=>{const[t,u]=v();t.selected.allSelected?(t.selected.allSelected=!1,t.selected.selected={},u.appStore.selectedId=void 0):(t.selected.allSelected=!0,t.selected.selected=t.allIds.reduce((e,o)=>({...e,[o]:!0}),{}),u.appStore.selectedId=t.allIds)},S=`.credit{background-color:#90ee904d}.debit{background-color:#ff00664d}
`,C=S,z=t=>{const[u]=v();t!=u.page&&(u.page=t)},V=()=>{const[t]=v();return navigator?.clipboard.writeText(Object.keys(t.selected.selected).join(","))},J=t=>{w(r(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_9DPlHmE9HVc"));const u=P(k),e=h({page:1,size:20,selected:h({allSelected:!1,selected:{}}),allIds:[],refresh:1}),o=E(u,e,t.appStore),m=f(()=>{e.refresh+=1});return g(b,{children:[l("div",null,{class:"overflow-x-auto"},[l("details",null,{class:"collapse bg-base-300 collapse collapse-arrow collapse-sm"},[l("summary",null,{class:"collapse-title text-xl/16 p-2.5 min-h-fit"},"Categorize",3,null),l("div",null,{class:"collapse-content"},g(y,{get store(){return t.appStore},onCategorize:m,wide:!0,[d]:{store:a(n=>n.appStore,[t]),wide:d}},3,"dJ_0"),1,null)],1,null),l("table",null,{class:"table table-xs table-pin-rows"},[l("thead",null,null,l("tr",null,null,[l("th",null,null,[l("label",null,null,l("input",null,{checked:a(n=>n.selected.allSelected,[e]),class:"checkbox checkbox-xs",onClick$:r(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_v4sVVl7oFk4",[e,t]),type:"checkbox"},null,3,null),3,null),l("button",null,{onClick$:r(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_JqUMW81M3YE",[e]),title:"Copy selected ids"},l("img",null,{height:"12",src:"copy.svg",width:"12"},null,3,null),3,null),l("span",null,{class:"w-9 inline-block"},c(Object.entries(e.selected.selected).filter(([,n])=>n),"length"),1,null)],1,null),l("th",null,null,"Amount",3,null),l("th",null,null,"Description",3,null),l("th",null,null,"Type",3,null),l("th",null,null,"Date",3,null),l("th",null,null,"Categories",3,null),l("th",null,null,"Details",3,null)],1,null),1,null),g(x,{onResolved:n=>g(b,{children:[l("tbody",null,null,n.map(s=>l("tr",{class:c(s,"type")},null,[l("th",null,null,l("input",{checked:e.selected.selected[s.id],onClick$:r(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_guJs0HFUDPE",[e,s,t]),value:c(s,"id")},{class:"checkbox checkbox-xs",type:"checkbox"},null,2,null),1,null),l("td",null,null,[s.type==="credit"?"+":"-"," ",c(s,"amount")],1,null),l("td",null,null,c(s,"description"),1,null),l("td",null,null,c(s,"type"),1,null),l("td",null,null,new Date(Number(s.date)).toLocaleDateString(),1,null),l("td",null,null,s.categories?.map(_=>_.name).join(","),1,null),l("td",null,null,l("div",null,{class:"dropdown dropdown-bottom dropdown-left"},[l("label",null,{class:"",tabIndex:0},l("img",null,{height:"12",src:"copy.svg",width:"12"},null,3,null),3,null),l("div",null,{class:"dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content",tabIndex:0},l("div",null,{class:"card-body"},[l("p",null,null,["Type - ",c(s,"type")],1,null),l("p",null,null,["Date - ",new Date(Number(s.date)).toLocaleDateString()],1,null),l("p",null,null,["Raw - ",c(s,"raw")],1,null)],1,null),1,null)],1,null),1,null)],1,s.id)),1,null),l("tfoot",null,null,[l("th",null,null,null,3,null),l("td",null,{colSpan:5},["Total: ",n.reduce((s,_)=>_.type==="debit"?s-_.amount:s+_.amount,0).toFixed(2)],1,null)],1,null)]},1,"dJ_1"),value:o,[d]:{onResolved:d}},3,"dJ_2")],1,null)],1,null),l("div",null,{class:"w-2/12 inline-block"},[l("select",null,{onChange$:r(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_9AuQJzaipeQ",[e])},[l("option",null,{selected:a(n=>n.size===10,[e]),value:"10"},"10",3,null),l("option",null,{selected:a(n=>n.size===20,[e]),value:"20"},"20",3,null),l("option",null,{selected:a(n=>n.size===50,[e]),value:"50"},"50",3,null),l("option",null,{selected:a(n=>n.size===100,[e]),value:"100"},"100",3,null)],3,null),"/ ",a(n=>n.totalCount,[e])],3,null),l("div",null,{class:"w-10/12 inline-block"},[" ",g(D,{get pages(){return e.totalPages},get page(){return e.page},onPaging$:r(()=>i(()=>Promise.resolve().then(()=>p),void 0),"s_ZR4Fw6u45Fg",[e]),[d]:{onPaging$:d,page:a(n=>n.page,[e]),pages:a(n=>n.totalPages,[e])}},3,"dJ_3")],1,null)]},1,"dJ_4")},O=(t,u)=>{const[e]=v(),o=Number(u.value)>0?Number(u.value):20;e.size=o},R=()=>{const[t,u,e]=v();t.selected.selected[u.id]=!t.selected.selected[u.id],e.appStore.selectedId=Object.entries(t.selected.selected).filter(([,o])=>o).map(([o])=>o)},p=Object.freeze(Object.defineProperty({__proto__:null,s_9AuQJzaipeQ:O,s_9DPlHmE9HVc:C,s_JqUMW81M3YE:V,s_ZR4Fw6u45Fg:z,s_epVqIIDHH5g:J,s_guJs0HFUDPE:R,s_v4sVVl7oFk4:I},Symbol.toStringTag,{value:"Module"}));export{O as s_9AuQJzaipeQ,C as s_9DPlHmE9HVc,V as s_JqUMW81M3YE,z as s_ZR4Fw6u45Fg,J as s_epVqIIDHH5g,R as s_guJs0HFUDPE,I as s_v4sVVl7oFk4};
