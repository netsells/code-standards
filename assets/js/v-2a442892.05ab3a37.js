"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5616],{3293:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="cheatsheet" tabindex="-1"><a class="header-anchor" href="#cheatsheet" aria-hidden="true">#</a> Cheatsheet</h1><h2 id="dynamic-classes-are-applied-correctly" tabindex="-1"><a class="header-anchor" href="#dynamic-classes-are-applied-correctly" aria-hidden="true">#</a> Dynamic classes are applied correctly</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;the active class is not applied&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">classes</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;when the button is clicked&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">await</span> <span class="token function">button</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;the active class is applied&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">classes</span><span class="token punctuation">(</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">toBeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="test-that-a-component-renders" tabindex="-1"><a class="header-anchor" href="#test-that-a-component-renders" aria-hidden="true">#</a> Test that a component renders</h2><h3 id="a-component-renders-by-default" tabindex="-1"><a class="header-anchor" href="#a-component-renders-by-default" aria-hidden="true">#</a> A component renders by default</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent exists&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="a-component-renders-when-an-action-takes-place" tabindex="-1"><a class="header-anchor" href="#a-component-renders-when-an-action-takes-place" aria-hidden="true">#</a> A component renders when an action takes place</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent is not rendered by default&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">toBeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;when the button is clicked&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">await</span> <span class="token function">button</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent is rendered&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="test-that-a-component-receives-the-correct-props" tabindex="-1"><a class="header-anchor" href="#test-that-a-component-receives-the-correct-props" aria-hidden="true">#</a> Test that a component receives the correct props</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent is passed the type&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">props</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;organisation&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="testing-component-events" tabindex="-1"><a class="header-anchor" href="#testing-component-events" aria-hidden="true">#</a> Testing component events</h2><h3 id="when-a-component-emits-an-event-it-is-handled-appropriately" tabindex="-1"><a class="header-anchor" href="#when-a-component-emits-an-event-it-is-handled-appropriately" aria-hidden="true">#</a> When a component emits an event it is handled appropriately</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;when MyComponent emits the success event&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>vm<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent is passed the type&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">myComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">props</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;organisation&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="testing-store-actions-mutations" tabindex="-1"><a class="header-anchor" href="#testing-store-actions-mutations" aria-hidden="true">#</a> Testing store actions/mutations</h2><h3 id="an-action-mutation-is-called" tabindex="-1"><a class="header-anchor" href="#an-action-mutation-is-called" aria-hidden="true">#</a> An action/mutation is called</h3><h3 id="an-action-mutation-is-called-with-the-right-data" tabindex="-1"><a class="header-anchor" href="#an-action-mutation-is-called-with-the-right-data" aria-hidden="true">#</a> An action/mutation is called with the right data</h3><h3 id="mocking-the-response-of-an-action-mutation" tabindex="-1"><a class="header-anchor" href="#mocking-the-response-of-an-action-mutation" aria-hidden="true">#</a> Mocking the response of an action/mutation</h3><h3 id="delaying-the-response-of-an-action-mutation" tabindex="-1"><a class="header-anchor" href="#delaying-the-response-of-an-action-mutation" aria-hidden="true">#</a> Delaying the response of an action/mutation</h3><h3 id="mocking-an-error-response-of-an-action" tabindex="-1"><a class="header-anchor" href="#mocking-an-error-response-of-an-action" aria-hidden="true">#</a> Mocking an error response of an action</h3>',19),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}},3424:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-2a442892",path:"/frontend/testing/cheat-sheet.html",title:"Cheatsheet",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Dynamic classes are applied correctly",slug:"dynamic-classes-are-applied-correctly",children:[]},{level:2,title:"Test that a component renders",slug:"test-that-a-component-renders",children:[{level:3,title:"A component renders by default",slug:"a-component-renders-by-default",children:[]},{level:3,title:"A component renders when an action takes place",slug:"a-component-renders-when-an-action-takes-place",children:[]},{level:3,title:"Test that a component receives the correct props",slug:"test-that-a-component-receives-the-correct-props",children:[]}]},{level:2,title:"Testing component events",slug:"testing-component-events",children:[{level:3,title:"When a component emits an event it is handled appropriately",slug:"when-a-component-emits-an-event-it-is-handled-appropriately",children:[]}]},{level:2,title:"Testing store actions/mutations",slug:"testing-store-actions-mutations",children:[{level:3,title:"An action/mutation is called",slug:"an-action-mutation-is-called",children:[]},{level:3,title:"An action/mutation is called with the right data",slug:"an-action-mutation-is-called-with-the-right-data",children:[]},{level:3,title:"Mocking the response of an action/mutation",slug:"mocking-the-response-of-an-action-mutation",children:[]},{level:3,title:"Delaying the response of an action/mutation",slug:"delaying-the-response-of-an-action-mutation",children:[]},{level:3,title:"Mocking an error response of an action",slug:"mocking-an-error-response-of-an-action",children:[]}]}],filePathRelative:"frontend/testing/cheat-sheet.md",git:{updatedTime:1664443806e3,contributors:[{name:"Sam Turrell",email:"sam.turrell@netsells.co.uk",commits:1}]}}}}]);