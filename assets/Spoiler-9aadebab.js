import{_ as l,p as t,q as n,R as r,v as a,aa as f,s as p,Q as c}from"./framework-9cabc8c6.js";const u={name:"spoiler",props:{toggleSuffix:{type:String,default:""}},data(){return{shown:!1}}},d={class:"spoiler"},_={key:0};function h(i,o,s,S,e,g){return t(),n("div",d,[r("a",{href:"#",onClick:o[0]||(o[0]=f(m=>e.shown=!e.shown,["prevent"]))},[r("small",null,a(e.shown?`[-] Hide ${s.toggleSuffix}`:`[+] Show ${s.toggleSuffix}`),1)]),e.shown?(t(),n("div",_,[p(i.$slots,"default")])):c("v-if",!0)])}const w=l(u,[["render",h],["__file","Spoiler.vue"]]);export{w as default};
