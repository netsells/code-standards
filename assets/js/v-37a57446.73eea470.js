"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5944],{6685:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(6252);const p=(0,t._)("h1",{id:"crash-reporting-and-logging",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#crash-reporting-and-logging","aria-hidden":"true"},"#"),(0,t.Uk)(" Crash Reporting and Logging")],-1),e=(0,t.Uk)("All Flutter apps should be set up to report crashes to our crash logging infrastructure. We currently use "),o={href:"https://sentry.io/",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Sentry"),l=(0,t.Uk)("."),u=(0,t.Uk)("Our "),r={href:"https://github.com/netsells/mobile-templates",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("project template"),k=(0,t.Uk)(" is set up to automatically add Sentry logging. Below is a setup snippet for reference."),d=(0,t.uE)('<div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    \n    <span class="token keyword">await</span> <span class="token class-name">SentryFlutter</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            options<span class="token punctuation">.</span>dsn <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;https://example@sentry.io/add-your-dsn-here&#39;</span></span><span class="token punctuation">;</span>\n            options<span class="token punctuation">.</span>environment <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;staging&#39;</span></span><span class="token punctuation">;</span> <span class="token comment">// Or dev/production.</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        appRunner<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Additionally, we have infrastructure for general logging. This can be easily enabled using the <code>flogged</code> and <code>lumberdash</code> packages, and calling the following before running the app:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">final</span> pInfo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">PackageInfo</span><span class="token punctuation">.</span><span class="token function">fromPlatform</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">putLumberdashToWork</span><span class="token punctuation">(</span>\n    withClients<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token class-name">FloggedLumberdash</span><span class="token punctuation">(</span>\n            appName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;[[APP NAME]]&#39;</span></span><span class="token punctuation">,</span>\n            appVersionName<span class="token punctuation">:</span> pInfo<span class="token punctuation">.</span>version<span class="token punctuation">,</span>\n            appVersionCode<span class="token punctuation">:</span> int<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>pInfo<span class="token punctuation">.</span>buildNumber<span class="token punctuation">)</span><span class="token punctuation">,</span>\n            environment<span class="token punctuation">:</span> environment<span class="token punctuation">.</span>name<span class="token punctuation">,</span>\n            logstashUrl<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;http://logstash.netsells.tools&#39;</span></span><span class="token punctuation">,</span>\n            logstashPort<span class="token punctuation">:</span> <span class="token number">5001</span><span class="token punctuation">,</span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Then, you can use the <code>logMessage</code>, <code>logWarning</code>, <code>logError</code>, and <code>logFatal</code>. <strong>Sensitive data such as passwords should always be excluded from these logs.</strong></p>',4),g={},b=(0,a(3744).Z)(g,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,(0,t._)("a",o,[c,(0,t.Wm)(a)]),l]),(0,t._)("p",null,[u,(0,t._)("a",r,[i,(0,t.Wm)(a)]),k]),d],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}},2950:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-37a57446",path:"/flutter/crash-reporting.html",title:"Crash Reporting and Logging",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"flutter/crash-reporting.md",git:{updatedTime:1649078103e3,contributors:[{name:"Peter Bryant",email:"peter.bryant@netsells.co.uk",commits:1}]}}}}]);