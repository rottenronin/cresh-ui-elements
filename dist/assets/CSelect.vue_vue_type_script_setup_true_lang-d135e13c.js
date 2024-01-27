import{d as C,l as L,m as o,o as a,c as l,t as r,s as u,b,v as i,x as y,F as c,I as w,e as D,G as E}from"./index-50829d1b.js";import{p as M}from"./base-control-props-3c9ee147.js";const N=["for"],F=["id","name","disabled","required","autocomplete","value"],I={key:0,value:"",disabled:"",selected:"",hidden:""},P={key:1,disabled:"",value:"",selected:"",style:{display:"none"}},z=["value","selected"],A=["for"],G={key:0,class:"error-message"},H=C({__name:"CSelect",props:{...M,options:{type:Array,required:!1,default:()=>[]},hideLabel:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","blur"],setup(d,{emit:m}){const s=d,v=L(),k=async()=>{m("blur")};function V(e){if(e&&e.target){const h=e.target;m("update:modelValue",h.value)}}const t=o(()=>!!s.errorMessage||!1),p=o(()=>s.errorMessage),g=o(()=>!!s.placeholder),$=o(()=>!!v.default),S=o(()=>!!v.error),q=o(()=>!!s.modelValue),f=o(()=>!!(q.value||g.value));return(e,h)=>(a(),l("div",{class:i(["c-form-control c-select",{invalid:t.value,bordered:e.bordered}])},[!d.hideLabel&&e.bordered?(a(),l("label",{key:0,for:s.id,class:"c-form-control-label"},r(e.label),9,N)):u("",!0),b("div",{class:i(["c-select-wrapper",`select-field ${e.name?e.name:""}
        ${f.value?"not-empty":""}
        ${t.value?"invalid":"valid"}
      `])},[b("select",{id:e.id,class:i(`select-field ${e.name?e.name:""}
          ${f.value?"not-empty":""}
          ${t.value?"invalid":"valid"}
        `),name:e.name,disabled:e.disabled,required:e.required,autocomplete:e.autocomplete,value:e.modelValue,onChange:V,onBlur:k},[$.value?y(e.$slots,"default",{key:0}):(a(),l(c,{key:1},[e.placeholder?(a(),l("option",I,r(e.placeholder),1)):(a(),l("option",P)),(a(!0),l(c,null,w(d.options,(n,B)=>(a(),l("option",{key:`option-index-${B}`,value:n.value,selected:e.modelValue&&e.modelValue===n.value||!e.modelValue&&n.isDefault},r(n.name),9,z))),128))],64))],42,F),D(E,{name:"chevron-down",color:"primary",class:"arrow-icon"})],2),d.hideLabel===!1&&!e.bordered?(a(),l("label",{key:1,for:e.id,class:"c-form-control-label"},r(e.label),9,A)):u("",!0),S.value?y(e.$slots,"error",{key:2,errorMessage:p.value}):(a(),l(c,{key:3},[t.value?(a(),l("div",G,r(p.value),1)):u("",!0)],64))],2))}});export{H as _};