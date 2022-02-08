"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2001],{7510:(n,e,s)=>{s.r(e),s.d(e,{default:()=>c});var a=s(6252);const t=(0,a.uE)('<h1 id="linting-rules-enforcement" tabindex="-1"><a class="header-anchor" href="#linting-rules-enforcement" aria-hidden="true">#</a> Linting Rules &amp; Enforcement</h1><h2 id="intro" tabindex="-1"><a class="header-anchor" href="#intro" aria-hidden="true">#</a> Intro</h2><p>We use SwiftLint to analyse our code and enforce the standards below. We discuss all standard changes or additions in the #team-mobile slack channel. Once a rule has been decided, it will be added here and added to the standard .swiftlint.yml file on confluence. You will need to add this to any projects you want to update</p><h2 id="rules" tabindex="-1"><a class="header-anchor" href="#rules" aria-hidden="true">#</a> Rules</h2><h3 id="control-statements" tabindex="-1"><a class="header-anchor" href="#control-statements" aria-hidden="true">#</a> Control Statements</h3>',5),i={href:"https://realm.github.io/SwiftLint/control_statement.html",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("Link to Swiftlint doc"),r=(0,a.uE)('<p>Control statements shouldn’t unnecessarily wrap their conditionals or arguments in parentheses.</p><p><strong>Non-Triggering Example</strong></p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">if</span> condition <span class="token punctuation">{</span>\n    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>Triggering Example</strong></p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token keyword">if</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),o={},c=(0,s(3744).Z)(o,[["render",function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("p",null,[(0,a._)("a",i,[l,(0,a.Wm)(s)])]),r],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[s,a]of e)n[s]=a;return n}},6893:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-69fbfaf5",path:"/ios/linting.html",title:"Linting Rules & Enforcement",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Intro",slug:"intro",children:[]},{level:2,title:"Rules",slug:"rules",children:[{level:3,title:"Control Statements",slug:"control-statements",children:[]}]}],filePathRelative:"ios/linting.md",git:{updatedTime:1644320335e3,contributors:[{name:"Sam Turrell",email:"sam.turrell@netsells.co.uk",commits:1}]}}}}]);