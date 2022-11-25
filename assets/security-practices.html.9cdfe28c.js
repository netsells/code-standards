import{_ as o,r as c,o as i,c as r,a as e,b as n,d as a,e as t}from"./app.9874515a.js";const l={},p=t('<h1 id="security-best-practices" tabindex="-1"><a class="header-anchor" href="#security-best-practices" aria-hidden="true">#</a> Security Best Practices</h1><h2 id="detecting-jailbroken-rooted-devices" tabindex="-1"><a class="header-anchor" href="#detecting-jailbroken-rooted-devices" aria-hidden="true">#</a> Detecting jailbroken/rooted devices</h2><p>Apps should be prevented from running on unsafe devices. A device is deemed to be unsafe if it is:</p><ul><li>Jailbroken</li><li>Rooted</li><li>An emulator</li><li>Using mock location</li><li>Running on external storage (Android only)</li></ul>',4),d={href:"https://pub.dev/packages/safe_device",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"safe_device",-1),h=t(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:safe_device/safe_device.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>kDebugMode <span class="token operator">||</span> <span class="token keyword">await</span> <span class="token class-name">SafeDevice</span><span class="token punctuation">.</span>isSafeDevice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO Run application</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Important</strong>: To enable development on a simulator/emulator, you should first check if your app is running in debug mode. If so, we can ignore the safety check.</p></blockquote><h2 id="store-authentication-tokens-securely" tabindex="-1"><a class="header-anchor" href="#store-authentication-tokens-securely" aria-hidden="true">#</a> Store authentication tokens securely</h2>`,3),k=e("strong",null,"must",-1),v={href:"https://pub.dev/packages/flutter_secure_storage",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"flutter_secure_storage",-1),b={href:"https://pub.dev/packages/hive",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"hive",-1);function f(m,y){const s=c("ExternalLinkIcon");return i(),r("div",null,[p,e("p",null,[n("This can be achieved using the "),e("a",d,[u,a(s)]),n(" package:")]),h,e("p",null,[n("Any data stored on the user's device, particularly secure data such as authentication tokens, "),k,n(" be stored using encryption. This is easily achievable using the "),e("a",v,[_,a(s)]),n(" package.")]),e("p",null,[n("Ideally, all data stored on the user's device should be encrypted. Database/persistence packages such as "),e("a",b,[g,a(s)]),n(" support encrypted storage out-of-the-box.")])])}const w=o(l,[["render",f],["__file","security-practices.html.vue"]]);export{w as default};
