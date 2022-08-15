"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2239],{915:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(6252);const t=(0,e.uE)('<h1 id="hatchly" tabindex="-1"><a class="header-anchor" href="#hatchly" aria-hidden="true">#</a> Hatchly</h1><p>This section of documentation relates to the use of features within the Hatchly CMS platform developed by Netsells.</p><h2 id="section-and-attribute-key-casing" tabindex="-1"><a class="header-anchor" href="#section-and-attribute-key-casing" aria-hidden="true">#</a> Section and Attribute key casing</h2><p>Section and attribute keys should always be lowercase and should follow the snake_case pattern. This makes it consistent with other object values, and allows consistent behaviour with when accessed from the page model (<code>$page-&gt;attribute</code>), via the <code>hatchly-pages-api</code> endpoint and when passing directly into javascript.</p><h2 id="keeping-sections-dry" tabindex="-1"><a class="header-anchor" href="#keeping-sections-dry" aria-hidden="true">#</a> Keeping Sections DRY</h2><p>If your templates share common template sections, it&#39;s important to remember to keep the code DRY and extract this code to a commonly accessible location. To do so you can simply create a class which extends the <code>Hatchly\\Pages\\Attributes\\Section</code> class. For example:</p>',6),c=(0,e._)("div",{class:"language-php ext-php line-numbers-mode"},[(0,e._)("pre",{class:"language-php"},[(0,e._)("code",null,[(0,e._)("span",{class:"token php language-php"},[(0,e._)("span",{class:"token delimiter important"},"<?php"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"namespace"),(0,e.Uk)(),(0,e._)("span",{class:"token package"},[(0,e.Uk)("App"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Http"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Templates"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Sections")]),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"use"),(0,e.Uk)(),(0,e._)("span",{class:"token package"},[(0,e.Uk)("Hatchly"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Pages"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Attributes"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Section")]),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"use"),(0,e.Uk)(),(0,e._)("span",{class:"token package"},[(0,e.Uk)("Hatchly"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Pages"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Attributes"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Attribute")]),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"class"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name-definition class-name"},"BannerSection"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"extends"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"Section"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"public"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token function-definition function"},"__construct"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token keyword static-context"},"parent"),(0,e._)("span",{class:"token operator"},"::"),(0,e._)("span",{class:"token function"},"__construct"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string single-quoted-string"},"'banner'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n            "),(0,e._)("span",{class:"token string single-quoted-string"},"'title'"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token string single-quoted-string"},"'Banner'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n            "),(0,e._)("span",{class:"token string single-quoted-string"},"'attributes'"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n                "),(0,e._)("span",{class:"token string single-quoted-string"},"'background'"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"Attribute"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n                    "),(0,e._)("span",{class:"token string single-quoted-string"},"'title'"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token string single-quoted-string"},"'Background'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n                "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string single-quoted-string"},"'image'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n                "),(0,e._)("span",{class:"token string single-quoted-string"},"'content'"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"Attribute"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n                    "),(0,e._)("span",{class:"token string single-quoted-string"},"'title'"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token string single-quoted-string"},"'Content'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n                "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token string single-quoted-string"},"'wysiwyg'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n            "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"16"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"17"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"18"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"19"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"20"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"21"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"22"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"23"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"24"),(0,e._)("br")])],-1),o=(0,e._)("p",null,"This should then be used within the template file as you would a normal section class.",-1),l=(0,e._)("div",{class:"language-php ext-php line-numbers-mode"},[(0,e._)("pre",{class:"language-php"},[(0,e._)("code",null,[(0,e._)("span",{class:"token php language-php"},[(0,e._)("span",{class:"token delimiter important"},"<?php"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"namespace"),(0,e.Uk)(),(0,e._)("span",{class:"token package"},[(0,e.Uk)("App"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Http"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Templates"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Frontend"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("System")]),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"use"),(0,e.Uk)(),(0,e._)("span",{class:"token package"},[(0,e.Uk)("App"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Http"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Templates"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Sections"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("BannerSection")]),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token keyword"},"use"),(0,e.Uk)(),(0,e._)("span",{class:"token package"},[(0,e.Uk)("Hatchly"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Pages"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("Templates"),(0,e._)("span",{class:"token punctuation"},"\\"),(0,e.Uk)("PageTemplate")]),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"class"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name-definition class-name"},"Homepage"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"extends"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"PageTemplate"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token keyword"},"public"),(0,e.Uk)(),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token function-definition function"},"getSections"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token keyword"},"return"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n            "),(0,e._)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"BannerSection"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n            "),(0,e._)("span",{class:"token keyword"},"new"),(0,e.Uk)(),(0,e._)("span",{class:"token class-name"},"Section"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string single-quoted-string"},"'content'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n                "),(0,e._)("span",{class:"token string single-quoted-string"},"'title'"),(0,e.Uk)("      "),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token string single-quoted-string"},"'Content'"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n                "),(0,e._)("span",{class:"token string single-quoted-string"},"'attributes'"),(0,e.Uk)(),(0,e._)("span",{class:"token operator"},"=>"),(0,e.Uk)(),(0,e._)("span",{class:"token punctuation"},"["),(0,e.Uk)("\n                    "),(0,e._)("span",{class:"token operator"},"..."),(0,e.Uk)("\n                "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n            "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},","),(0,e.Uk)("\n        "),(0,e._)("span",{class:"token punctuation"},"]"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("\n    "),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"16"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"17"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"18"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"19"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"20"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"21"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"22"),(0,e._)("br")])],-1),p={},i=(0,a(3744).Z)(p,[["render",function(n,s){const a=(0,e.up)("spoiler");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e.Wm)(a,null,{default:(0,e.w5)((()=>[c])),_:1}),o,(0,e.Wm)(a,null,{default:(0,e.w5)((()=>[l])),_:1})],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}},4482:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-35d72f40",path:"/backend/hatchly.html",title:"Hatchly",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Section and Attribute key casing",slug:"section-and-attribute-key-casing",children:[]},{level:2,title:"Keeping Sections DRY",slug:"keeping-sections-dry",children:[]}],filePathRelative:"backend/hatchly.md",git:{updatedTime:166055613e4,contributors:[{name:"Sam Turrell",email:"sam.turrell@netsells.co.uk",commits:1}]}}}}]);