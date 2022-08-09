"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2239],{915:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(6252);const e=(0,t.uE)('<h1 id="hatchly" tabindex="-1"><a class="header-anchor" href="#hatchly" aria-hidden="true">#</a> Hatchly</h1><p>This section of documentation relates to the use of features within the Hatchly CMS platform developed by Netsells.</p><h2 id="section-and-attribute-key-casing" tabindex="-1"><a class="header-anchor" href="#section-and-attribute-key-casing" aria-hidden="true">#</a> Section and Attribute key casing</h2><p>Section and attribute keys should always be lowercase and should follow the snake_case pattern. This makes it consistent with other object values, and allows consistent behaviour with when accessed from the page model (<code>$page-&gt;attribute</code>), via the <code>hatchly-pages-api</code> endpoint and when passing directly into javascript.</p><h2 id="keeping-sections-dry" tabindex="-1"><a class="header-anchor" href="#keeping-sections-dry" aria-hidden="true">#</a> Keeping Sections DRY</h2><p>If your templates share common template sections, it&#39;s important to remember to keep the code DRY and extract this code to a commonly accessible location. To do so you can simply create a class which extends the <code>Hatchly\\Pages\\Attributes\\Section</code> class. For example:</p>',6),c=(0,t._)("div",{class:"language-php ext-php line-numbers-mode"},[(0,t._)("pre",{class:"language-php"},[(0,t._)("code",null,[(0,t._)("span",{class:"token php language-php"},[(0,t._)("span",{class:"token delimiter important"},"<?php"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"namespace"),(0,t.Uk)(),(0,t._)("span",{class:"token package"},[(0,t.Uk)("App"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Http"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Templates"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Sections")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"use"),(0,t.Uk)(),(0,t._)("span",{class:"token package"},[(0,t.Uk)("Hatchly"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Pages"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Attributes"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Section")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"use"),(0,t.Uk)(),(0,t._)("span",{class:"token package"},[(0,t.Uk)("Hatchly"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Pages"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Attributes"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Attribute")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"class"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name-definition class-name"},"BannerSection"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"extends"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Section"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"public"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function-definition function"},"__construct"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword static-context"},"parent"),(0,t._)("span",{class:"token operator"},"::"),(0,t._)("span",{class:"token function"},"__construct"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string single-quoted-string"},"'banner'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token string single-quoted-string"},"'title'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token string single-quoted-string"},"'Banner'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token string single-quoted-string"},"'attributes'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token string single-quoted-string"},"'background'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Attribute"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n                    "),(0,t._)("span",{class:"token string single-quoted-string"},"'title'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token string single-quoted-string"},"'Background'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string single-quoted-string"},"'image'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token string single-quoted-string"},"'content'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Attribute"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n                    "),(0,t._)("span",{class:"token string single-quoted-string"},"'title'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token string single-quoted-string"},"'Content'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string single-quoted-string"},"'wysiwyg'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"20"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"21"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"22"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"23"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"24"),(0,t._)("br")])],-1),o=(0,t._)("p",null,"This should then be used within the template file as you would a normal section class.",-1),l=(0,t._)("div",{class:"language-php ext-php line-numbers-mode"},[(0,t._)("pre",{class:"language-php"},[(0,t._)("code",null,[(0,t._)("span",{class:"token php language-php"},[(0,t._)("span",{class:"token delimiter important"},"<?php"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"namespace"),(0,t.Uk)(),(0,t._)("span",{class:"token package"},[(0,t.Uk)("App"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Http"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Templates"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Frontend"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("System")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"use"),(0,t.Uk)(),(0,t._)("span",{class:"token package"},[(0,t.Uk)("App"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Http"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Templates"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Sections"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("BannerSection")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"use"),(0,t.Uk)(),(0,t._)("span",{class:"token package"},[(0,t.Uk)("Hatchly"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Pages"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("Templates"),(0,t._)("span",{class:"token punctuation"},"\\"),(0,t.Uk)("PageTemplate")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"class"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name-definition class-name"},"Homepage"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"extends"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"PageTemplate"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"public"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function-definition function"},"getSections"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"BannerSection"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Section"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string single-quoted-string"},"'content'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token string single-quoted-string"},"'title'"),(0,t.Uk)("      "),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token string single-quoted-string"},"'Content'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token string single-quoted-string"},"'attributes'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n                    "),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)("\n                "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"20"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"21"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"22"),(0,t._)("br")])],-1),p={},i=(0,a(3744).Z)(p,[["render",function(n,s){const a=(0,t.up)("spoiler");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t.Wm)(a,null,{default:(0,t.w5)((()=>[c])),_:1}),o,(0,t.Wm)(a,null,{default:(0,t.w5)((()=>[l])),_:1})],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}},4482:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-35d72f40",path:"/backend/hatchly.html",title:"Hatchly",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Section and Attribute key casing",slug:"section-and-attribute-key-casing",children:[]},{level:2,title:"Keeping Sections DRY",slug:"keeping-sections-dry",children:[]}],filePathRelative:"backend/hatchly.md",git:{updatedTime:1660040715e3,contributors:[{name:"Peter Bryant",email:"peter@ptrbrynt.com",commits:1}]}}}}]);