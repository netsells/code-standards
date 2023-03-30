import{_ as p,M as a,p as r,q as l,R as n,t as s,N as e,V as t,a1 as o}from"./framework-9cabc8c6.js";const d={},u=n("h1",{id:"state-management-and-di",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#state-management-and-di","aria-hidden":"true"},"#"),s(" State Management and DI")],-1),k={href:"https://riverpod.dev",target:"_blank",rel:"noopener noreferrer"},v=o('<h2 id="prefer-using-watch-over-read" tabindex="-1"><a class="header-anchor" href="#prefer-using-watch-over-read" aria-hidden="true">#</a> Prefer using <code>watch</code> over <code>read</code></h2><p>In general, use <code>ref.watch</code> rather than <code>ref.read</code>. This ensures that provider values stay up-to-date.</p><p>An important exception is when writing callbacks (e.g. <code>onTap</code> listeners); in these cases you should <strong>always</strong> use <code>ref.read</code>.</p><h2 id="avoid-injecting-widgetrefs-into-classes" tabindex="-1"><a class="header-anchor" href="#avoid-injecting-widgetrefs-into-classes" aria-hidden="true">#</a> Avoid injecting <code>WidgetRef</code>s into classes</h2><p>This ensures that classes are decoupled from Riverpod.</p>',5),h=n("template",{v:"","-slot:incorrect":""},[n("pre",null,[n("code",null,`\`\`\`dart
// Riverpod-coupled Repository
class BlogPostRepository {
    const BlogPostRepository({required this.ref});

    final WidgetRef ref;

    Future<BlogPost> getBlogPost(int id) => ref.watch(blogPostApi).getPost(id);
}

final blogPostRepositoryProvider => Provider((ref) => BlogPostRepository(ref: ref));
\`\`\`
`)])],-1),m=n("pre",null,[n("code",null,`\`\`\`dart
// Riverpod-free Repository
class BlogPostRepository {
    const BlogPostRepository({required this.api});

    final BlogPostApi api;

    Future<BlogPost> getBlogPost(int id) => api.getPost(id);
}

final blogPostRepositoryProvider => Provider((ref) => BlogPostRepository(ref.watch(blogPostApiProvider)));
\`\`\`
`)],-1),g=o(`<h2 id="providers-requiring-asynchronous-initialisation" tabindex="-1"><a class="header-anchor" href="#providers-requiring-asynchronous-initialisation" aria-hidden="true">#</a> Providers requiring asynchronous initialisation</h2><p>Some packages, such as <code>SharedPreferences</code>, require asynchronous initialisation. You can provide the initialised values to Riverpod like this:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// shared_preferences_provider.dart</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function f(P,_){const i=a("ExternalLinkIcon"),c=a("code-highlight");return r(),l("div",null,[u,n("p",null,[s("Our preferred package for state management and dependency injection is "),n("a",k,[s("Riverpod"),e(i)]),s(".")]),v,e(c,null,{correct:t(()=>[m]),default:t(()=>[h]),_:1}),g])}const y=p(d,[["render",f],["__file","state-management.html.vue"]]);export{y as default};
