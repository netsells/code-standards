"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9222],{6595:(n,s,e)=>{e.r(s),e.d(s,{default:()=>u});var a=e(6252);const t=(0,a._)("h1",{id:"codesigning",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#codesigning","aria-hidden":"true"},"#"),(0,a.Uk)(" Codesigning")],-1),p=(0,a.Uk)("For the iOS part of Flutter apps, we use "),o={href:"https://docs.fastlane.tools/actions/match/",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("Fastlane Match"),r=(0,a.Uk)(" to manage signing certificates and provisioning profiles."),c=(0,a.uE)('<p>For each project we should create a new certificates repo that matches the main code repo naming conventions. e.g <code>my-project-certificates</code></p><p>This means that should the project ever need to be transferred or outsource engineers added to the repo, we don&#39;t have to expose all other projects certificates and profiles.</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>git_url<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;{ URL of the certificates repo }&quot;</span></span><span class="token punctuation">)</span>\n\nstorage_mode<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;git&quot;</span></span><span class="token punctuation">)</span>\n\ntype<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;development&quot;</span></span><span class="token punctuation">)</span>\n\napp_identifier<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;com.netsells.appId&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># TODO: Add actual app identifier</span>\nteam_id<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span> <span class="token comment"># TODO: Add Apple Developer Team ID</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>To sync and update certificates and provisioning profiles, run these commands in your project&#39;s <code>ios</code> directory:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ bundle <span class="token builtin class-name">exec</span> fastlane match development -u example.user@netsells.co.uk\n$ bundle <span class="token builtin class-name">exec</span> fastlane match adhoc -u example.user@netsells.co.uk\n$ bundle <span class="token builtin class-name">exec</span> fastlane match appstore -u example.user@netsells.co.uk\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),i={},u=(0,e(3744).Z)(i,[["render",function(n,s){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("p",null,[p,(0,a._)("a",o,[l,(0,a.Wm)(e)]),r]),c],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[e,a]of s)n[e]=a;return n}},7153:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-02d166ed",path:"/flutter/codesigning.html",title:"Codesigning",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"flutter/codesigning.md",git:{updatedTime:1651046545e3,contributors:[{name:"Sam Turrell",email:"sam.turrell@netsells.co.uk",commits:1}]}}}}]);