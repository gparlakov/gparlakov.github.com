import{l as m}from"./q-0f391e12.js";import{p as C}from"./q-0f391e12.js";import{c as i}from"./q-e6909596.js";import"./q-38c94a1c.js";const g=async()=>{const[n,l,t,e,s]=m();if(s.selectedId==null)return;const o=typeof e.value=="string"&&e.value.trim()!="",r=Array.isArray(s.selectedId)?[...s.selectedId]:[s.selectedId],d=o?{category:{name:e.value,movementIds:r},movementIds:r}:l.value?{categoryId:parseInt(l.value),movementIds:r}:void 0;d&&(t.value=!0,await i(d).then(a=>{t.value=!1,e.value!=null&&a?.id!=null&&(s.allCategories?.push({...a,id:a.id}),e.value=""),l.value=a?.id?.toString(),n&&a&&n({categorize:{...a,id:a.id.toString()}})}).catch(a=>{console.log(a),t.value=!1}))},I=async()=>{const[n,l,t,e]=m();if(l.value){const o=await i({category:{name:l.value},movementIds:[e.selectedId]});o!=null&&(e.allCategories?.push(o),n.value=o.id.toString()),l.value=void 0,t.movement&&(t.movement.categoriesStr=`${o?.name}${t.movement?.categoriesStr.includes("---")?"":`,${t.movement?.categoriesStr}`}`)}else if(n.value&&e.selectedId!=null){await i({categoryId:parseInt(n.value),movementIds:Array.isArray(e.selectedId)?e.selectedId:[e.selectedId]});const s=e.allCategories&&e.allCategories.find(o=>o.id.toString()===n.value)?.name;t.movement&&(t.movement.categoriesStr=`${s}${t.movement?.categoriesStr.includes("---")?"":`,${t.movement?.categoriesStr}`}`)}};export{C as _hW,g as s_33SUjg3pU1s,I as s_sCMcfIQ6b8g};
