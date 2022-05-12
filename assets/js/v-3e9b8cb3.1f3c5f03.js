"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1922],{2243:(e,o,t)=>{t.r(o),t.d(o,{default:()=>f});var l=t(6252);const i=(0,l._)("h1",{id:"continuous-delivery",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#continuous-delivery","aria-hidden":"true"},"#"),(0,l.Uk)(" Continuous Delivery")],-1),r=(0,l._)("p",null,"We use GitHub Actions to run our CD pipelines. These workflows enable us to automatically publish versions of the app to Firebase App Distribution for internal testing, and to the App Store/Play Store for public release.",-1),n=(0,l._)("p",null,"Most projects are setup with 2 workflows:",-1),s=(0,l._)("code",null,"qa",-1),u=(0,l.Uk)(", which compiles staging versions of the app and deploys them to "),a={href:"https://firebase.google.com/products/app-distribution",target:"_blank",rel:"noopener noreferrer"},c=(0,l.Uk)("Firebase App Distribution"),d=(0,l._)("li",null,[(0,l._)("code",null,"production"),(0,l.Uk)(", which compiles production versions of the app and delivers them to App Store Connect and Google Play "),(0,l._)("ul",null,[(0,l._)("li",null,"Note that this workflow does not automatically publish the new version; this should be done manually")])],-1),p=(0,l.uE)("<p>Our repositories are all set up to run these workflows automatically using the following trigger scheme:</p><ul><li>When code is pushed to a <code>release/*</code> or <code>hotfix/*</code> branch, the <code>qa</code> workflow is triggered</li><li>When code is pushed to <code>main</code>, the <code>production</code> workflow is triggered</li></ul><p>Workflows can also be triggered manually at any time using the GitHub Actions UI.</p>",3),h={},f=(0,t(3744).Z)(h,[["render",function(e,o){const t=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,r,n,(0,l._)("ul",null,[(0,l._)("li",null,[s,u,(0,l._)("a",a,[c,(0,l.Wm)(t)])]),d]),p],64)}]])},3744:(e,o)=>{o.Z=(e,o)=>{for(const[t,l]of o)e[t]=l;return e}},9044:(e,o,t)=>{t.r(o),t.d(o,{data:()=>l});const l={key:"v-3e9b8cb3",path:"/flutter/continuous-delivery.html",title:"Continuous Delivery",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"flutter/continuous-delivery.md",git:{updatedTime:1652345415e3,contributors:[{name:"Sam Turrell",email:"sam.turrell@netsells.co.uk",commits:1}]}}}}]);