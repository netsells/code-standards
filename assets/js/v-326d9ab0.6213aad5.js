"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9570],{3231:(n,s,a)=>{a.r(s),a.d(s,{default:()=>_});var t=a(6252);const e=(0,t.Uk)("← Back"),o={id:"vue-no-side-effects-in-computed-properties",tabindex:"-1"},p=(0,t._)("a",{class:"header-anchor",href:"#vue-no-side-effects-in-computed-properties","aria-hidden":"true"},"#",-1),c=(0,t.Uk)(" vue/no-side-effects-in-computed-properties "),l=(0,t._)("p",null,"It is considered a very bad practice to introduce side effects inside computed properties. It makes the code unpredictable and hard to understand.",-1),u=(0,t._)("h2",{id:"examples",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),(0,t.Uk)(" Examples")],-1),i=(0,t._)("div",{class:"language-vue ext-vue line-numbers-mode"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        computed"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token function"},"fullName"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token template-string"},[(0,t._)("span",{class:"token template-punctuation string"},"`"),(0,t._)("span",{class:"token interpolation"},[(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("firstName "),(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,t._)("span",{class:"token string"}," "),(0,t._)("span",{class:"token interpolation"},[(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("lastName "),(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,t._)("span",{class:"token template-punctuation string"},"`")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n            "),(0,t._)("span",{class:"token function"},"reversedArray"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("array"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"slice"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"reverse"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br")])],-1),k=(0,t._)("div",{class:"language-vue ext-vue line-numbers-mode"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        computed"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token function"},"fullName"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("firstName "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'lorem'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// <- side effect"),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token template-string"},[(0,t._)("span",{class:"token template-punctuation string"},"`"),(0,t._)("span",{class:"token interpolation"},[(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("firstName "),(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,t._)("span",{class:"token string"}," "),(0,t._)("span",{class:"token interpolation"},[(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("lastName "),(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,t._)("span",{class:"token template-punctuation string"},"`")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n            "),(0,t._)("span",{class:"token function"},"reversedArray"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("array"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"reverse"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// <- side effect"),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br")])],-1),r={},_=(0,a(3744).Z)(r,[["render",function(n,s){const a=(0,t.up)("RouterLink"),r=(0,t.up)("badge"),_=(0,t.up)("code-highlight");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("p",null,[(0,t.Wm)(a,{to:"/frontend/linting/eslint/"},{default:(0,t.w5)((()=>[e])),_:1})]),(0,t._)("h1",o,[p,c,(0,t.Wm)(r,{text:"warning",type:"warning",vertical:"middle"})]),l,u,(0,t.Wm)(_,null,{correct:(0,t.w5)((()=>[i])),incorrect:(0,t.w5)((()=>[k])),_:1})],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}},9721:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-326d9ab0",path:"/frontend/linting/eslint/vue-no-side-effects-in-computed-properties.html",title:"vue/no-side-effects-in-computed-properties",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Examples",slug:"examples",children:[]}],filePathRelative:"frontend/linting/eslint/vue-no-side-effects-in-computed-properties.md",git:{updatedTime:null,contributors:[]}}}}]);