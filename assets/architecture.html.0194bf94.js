import{_ as e,o as n,c as a,e as t}from"./app.9874515a.js";const s="/code-standards/assets/Flutter-Architecture.c17bb3d8.png",i={},o=t('<h1 id="architecture-layers" tabindex="-1"><a class="header-anchor" href="#architecture-layers" aria-hidden="true">#</a> Architecture Layers</h1><p><img src="'+s+`" alt="Architecture"></p><p>Flutter projects should contain 4 distinct layers: <strong>presentation</strong>, <strong>application</strong>, <strong>domain</strong>, and <strong>infrastructure</strong>.</p><h2 id="🥞-layer-definitions" tabindex="-1"><a class="header-anchor" href="#🥞-layer-definitions" aria-hidden="true">#</a> 🥞 Layer Definitions</h2><h3 id="✨-presentation-layer" tabindex="-1"><a class="header-anchor" href="#✨-presentation-layer" aria-hidden="true">#</a> ✨ Presentation Layer</h3><p>The presentation layer should <em>only</em> contain Widgets. Use this layer to implement your user interface.</p><p>As much as possible, Widget classes should be free of business logic. Form validation is a reasonable exception to this rule.</p><p>Classes in the presentation layer should depend on classes from the application and domain layers.</p><h3 id="🤖-application-layer" tabindex="-1"><a class="header-anchor" href="#🤖-application-layer" aria-hidden="true">#</a> 🤖 Application Layer</h3><p>This is the main business logic layer of the application, and should contain BLoCs, Cubits, and use-cases.</p><p>These classes should depend on entity/value-object classes and repository interfaces from the domain layer.</p><h3 id="💭-domain-layer" tabindex="-1"><a class="header-anchor" href="#💭-domain-layer" aria-hidden="true">#</a> 💭 Domain Layer</h3><p>Defines the core business domain, including entities, value-objects, and repository interfaces.</p><p>These classes should be pure Dart (no Flutter imports) and should not depend on any other layers.</p><h3 id="🗄-infrastructure-layer" tabindex="-1"><a class="header-anchor" href="#🗄-infrastructure-layer" aria-hidden="true">#</a> 🗄 Infrastructure Layer</h3><p>This layer contains implementations of the repository interfaces from the domain layer. Repository implementations may depend on other classes like data sources or REST API services.</p><p>It&#39;s a good idea to use Data Transfer Objects (DTOs) which represent the structure of the data returned from external services. These can then be converted to and from your entity classes. This ensures the entities are not dependent on the data structure of objects returned from external services.</p><h2 id="💉-dependency-injection" tabindex="-1"><a class="header-anchor" href="#💉-dependency-injection" aria-hidden="true">#</a> 💉 Dependency Injection</h2><p><code>get_it</code> + <code>injectable</code> is a fantastic way of implementing dependency injection.</p><p>BLoCs and Cubits should be injected into the widget tree using <code>BlocProvider</code>. This allows the BLoC/Cubit to be accessible to all children via <code>BlocProvider.of(context)</code>. It also allows <code>BlocListener</code>, <code>BlocBuilder</code>, and <code>BlocConsumer</code> to find instances automatically, and ensures the closure of underlying <code>Stream</code>s are handled automatically.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">BlocProvider</span><span class="token punctuation">(</span>
	create<span class="token punctuation">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">GetIt.I</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyBloc</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	child<span class="token punctuation">:</span> <span class="token class-name">BlocBuilder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MyBloc</span><span class="token punctuation">,</span> <span class="token class-name">MyState</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>
		builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// TODO Implement builder</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📂-directory-structure" tabindex="-1"><a class="header-anchor" href="#📂-directory-structure" aria-hidden="true">#</a> 📂 Directory Structure</h2><p>Most of our projects have the following top-level structure within the <code>lib/</code> directory:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|- app/
|- core/
|- di/
|- features/
|- l10n/
|- main_production.dart
|- main_staging.dart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>app/</code> contains anything to do with the top-level <code>App</code> widget, which may include theming, routing/navigation, and other app-wide functionality.</li><li><code>core/</code> can contain anything which can be used throughout the application, like common widgets, models/entities, or services. <ul><li>The <code>core</code> directory should be split into sub-directories based on the architecture layers e.g. <code>domain</code>, <code>presentation</code> etc.</li></ul></li><li><code>di/</code> contains dependency injection code, such as environment definitions and modules</li><li><code>features/</code> is where we put our feature-specific code. Each feature should have its own sub-directory, within which we have further sub-directories for architecture layers.</li><li><code>l10n/</code> contains internationalization code, as per the Flutter Internationalization guide.</li><li>Any entry-points for the application (e.g. <code>main_staging.dart</code>) should sit at the top-level rather than within any directories.</li></ul><h2 id="🏛-architecture-best-practices" tabindex="-1"><a class="header-anchor" href="#🏛-architecture-best-practices" aria-hidden="true">#</a> 🏛 Architecture Best Practices</h2><ul><li>Stateful Widgets should only be used when absolutely necessary (e.g. when building a form). Most of the time, it&#39;s better to use a BLoC with a Stateless Widget.</li><li>As much as possible, classes should depend on interfaces (implemented as abstract classes in Dart), not implementations.</li></ul>`,27),c=[o];function r(l,d){return n(),a("div",null,c)}const u=e(i,[["render",r],["__file","architecture.html.vue"]]);export{u as default};
