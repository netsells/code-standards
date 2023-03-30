import{_ as i,M as a,p as l,q as r,R as n,t as s,N as e,V as t,a1 as o}from"./framework-9cabc8c6.js";const u={},d=n("h1",{id:"state-management-and-di",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#state-management-and-di","aria-hidden":"true"},"#"),s(" State Management and DI")],-1),k={href:"https://riverpod.dev",target:"_blank",rel:"noopener noreferrer"},m=o('<h2 id="prefer-using-watch-over-read" tabindex="-1"><a class="header-anchor" href="#prefer-using-watch-over-read" aria-hidden="true">#</a> Prefer using <code>watch</code> over <code>read</code></h2><p>In general, use <code>ref.watch</code> rather than <code>ref.read</code>. This ensures that provider values stay up-to-date.</p><p>An important exception is when writing callbacks (e.g. <code>onTap</code> listeners); in these cases you should <strong>always</strong> use <code>ref.read</code>.</p><h2 id="avoid-injecting-widgetrefs-into-classes" tabindex="-1"><a class="header-anchor" href="#avoid-injecting-widgetrefs-into-classes" aria-hidden="true">#</a> Avoid injecting <code>WidgetRef</code>s into classes</h2><p>This ensures that classes are decoupled from Riverpod.</p>',5),v=n("div",{class:"language-dart line-numbers-mode","data-ext":"dart"},[n("pre",{class:"language-dart"},[n("code",null,[n("span",{class:"token comment"},"// Riverpod-coupled Repository"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BlogPostRepository"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token class-name"},"BlogPostRepository"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("required "),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("ref"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"WidgetRef"),s(" ref"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token class-name"},"Future"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"BlogPost"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getBlogPost"),n("span",{class:"token punctuation"},"("),s("int id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},">"),s(" ref"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("blogPostApi"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPost"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"final"),s(" blogPostRepositoryProvider "),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},">"),s(),n("span",{class:"token class-name"},"Provider"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("ref"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},">"),s(),n("span",{class:"token class-name"},"BlogPostRepository"),n("span",{class:"token punctuation"},"("),s("ref"),n("span",{class:"token punctuation"},":"),s(" ref"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-dart line-numbers-mode","data-ext":"dart"},[n("pre",{class:"language-dart"},[n("code",null,[n("span",{class:"token comment"},"// Riverpod-free Repository"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"BlogPostRepository"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token class-name"},"BlogPostRepository"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("required "),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"final"),s(),n("span",{class:"token class-name"},"BlogPostApi"),s(" api"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token class-name"},"Future"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"BlogPost"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getBlogPost"),n("span",{class:"token punctuation"},"("),s("int id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},">"),s(" api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPost"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"final"),s(" blogPostRepositoryProvider "),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},">"),s(),n("span",{class:"token class-name"},"Provider"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("ref"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},">"),s(),n("span",{class:"token class-name"},"BlogPostRepository"),n("span",{class:"token punctuation"},"("),s("ref"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("blogPostApiProvider"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=o(`<h2 id="providers-requiring-asynchronous-initialisation" tabindex="-1"><a class="header-anchor" href="#providers-requiring-asynchronous-initialisation" aria-hidden="true">#</a> Providers requiring asynchronous initialisation</h2><p>Some packages, such as <code>SharedPreferences</code>, require asynchronous initialisation. You can provide the initialised values to Riverpod like this:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// shared_preferences_provider.dart</span>
<span class="token keyword">final</span> sharedPreferencesProvider <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">Provider</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SharedPreferences</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token keyword">throw</span> <span class="token class-name">UnimplementedError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// main.dart</span>
<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token class-name">WidgetsFlutterBinding</span><span class="token punctuation">.</span><span class="token function">ensureInitialized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Initialize SharedPreferences</span>
    <span class="token keyword">final</span> sharedPreferences <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">SharedPreferences</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">runApp</span><span class="token punctuation">(</span>
        <span class="token class-name">ProviderScope</span><span class="token punctuation">(</span>
            overrides<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token comment">// Provide the initialized value to Riverpod</span>
                sharedPreferencesProvider<span class="token punctuation">.</span><span class="token function">overrideWithValue</span><span class="token punctuation">(</span>sharedPreferences<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function f(b,y){const c=a("ExternalLinkIcon"),p=a("code-highlight");return l(),r("div",null,[d,n("p",null,[s("Our preferred package for state management and dependency injection is "),n("a",k,[s("Riverpod"),e(c)]),s(".")]),m,e(p,null,{incorrect:t(()=>[v]),correct:t(()=>[h]),_:1}),g])}const _=i(u,[["render",f],["__file","state-management.html.vue"]]);export{_ as default};
