"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5944],{8022:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var p=a(6252);const t=(0,p._)("h1",{id:"crash-reporting",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#crash-reporting","aria-hidden":"true"},"#"),(0,p.Uk)(" Crash Reporting")],-1),e=(0,p.Uk)("All Flutter apps should be set up to report crashes to our crash logging infrastructure. We currently use "),o={href:"https://sentry.io/",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("Sentry"),l=(0,p.Uk)("."),u=(0,p.Uk)("Our "),r={href:"https://github.com/netsells/mobile-templates",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("project template"),k=(0,p.Uk)(" is set up to automatically add Sentry logging. Below is a setup snippet for reference."),b=(0,p.uE)('<div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">runZonedGuarded</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>\n    <span class="token class-name">WidgetsFlutterBinding</span><span class="token punctuation">.</span><span class="token function">ensureInitialized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>kReleaseMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">final</span> pInfo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">PackageInfo</span><span class="token punctuation">.</span><span class="token function">fromPlatform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">await</span> <span class="token class-name">SentryFlutter</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> options\n        <span class="token punctuation">.</span><span class="token punctuation">.</span>dsn <span class="token operator">=</span> sentryDsn\n        <span class="token punctuation">.</span><span class="token punctuation">.</span>environment <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;staging&#39;</span></span> <span class="token comment">// or production</span>\n        <span class="token punctuation">.</span><span class="token punctuation">.</span>release <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">pInfo<span class="token punctuation">.</span>version</span><span class="token punctuation">}</span></span><span class="token string"> (</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">pInfo<span class="token punctuation">.</span>buildNumber</span><span class="token punctuation">}</span></span><span class="token string">)&#39;</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token comment">// Initialize and run the app</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>error<span class="token punctuation">,</span> stack<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>kReleaseMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">await</span> <span class="token class-name">Sentry</span><span class="token punctuation">.</span><span class="token function">captureException</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> stackTrace<span class="token punctuation">:</span> stack<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',1),m={},d=(0,a(3744).Z)(m,[["render",function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[e,(0,p._)("a",o,[c,(0,p.Wm)(a)]),l]),(0,p._)("p",null,[u,(0,p._)("a",r,[i,(0,p.Wm)(a)]),k]),b],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}},2950:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-37a57446",path:"/flutter/crash-reporting.html",title:"Crash Reporting",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"flutter/crash-reporting.md",git:{updatedTime:1660040715e3,contributors:[{name:"Peter Bryant",email:"peter@ptrbrynt.com",commits:1}]}}}}]);