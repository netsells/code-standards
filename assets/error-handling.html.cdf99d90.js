import{_ as o,r as p,o as i,c,a as s,b as n,d as t,e as a}from"./app.2be90a9a.js";const l={},r=a(`<h1 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h1><p>Often, error handling amounts to catching exceptions in the UI and displaying the message. This works, but has some important drawbacks:</p><ul><li>Relies on the developer building the UI understanding which exceptions are possible, and which to handle.</li><li>Couples the implementation of a data source to the implementation of the UI, reducing the maintainability of the project.</li><li>Encourages developers to simply use <code>catch (e: Exception)</code>, which is bad practice</li></ul><h2 id="effective-error-handling" tabindex="-1"><a class="header-anchor" href="#effective-error-handling" aria-hidden="true">#</a> Effective Error Handling</h2><p>An effective error handling solution solves all of these problems by:</p><ul><li>Catching relevant exceptions early and propagating them to the UI in a way that is not specific to the data source implementation</li><li>Not catching unexpected exceptions <ul><li><em>While this seems counter-intuitive, unexpected exceptions indicate something has gone horribly wrong, and often the safest thing to do here is to just kill the process</em></li></ul></li><li>Make it easier for developers to handle failures than to ignore them</li></ul><p>To this end, when handling errors, we use two concepts: <code>Either</code> and <code>Failure</code>.</p><h3 id="failure" tabindex="-1"><a class="header-anchor" href="#failure" aria-hidden="true">#</a> Failure</h3><p>A <code>Failure</code> should represent an <strong>expected</strong> error. An example implementation of a <code>Failure</code> in Kotlin is:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">/**
 * Represents an expected error.
 * @property message A human-readable error message which can be displayed in the UI
 * @property code An optional unique code which can be used to identify this type of error  
 */</span>
<span class="token keyword">data</span> <span class="token keyword">class</span> <span class="token function">Failure</span><span class="token punctuation">(</span><span class="token keyword">val</span> message<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">val</span> code<span class="token operator">:</span> Int<span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="either" tabindex="-1"><a class="header-anchor" href="#either" aria-hidden="true">#</a> Either</h3><p><code>Either</code> is a concept from functional programming. It&#39;s a construct which allows a value or variable to be one of two types.</p>`,12),u=s("code",null,"Either",-1),d={href:"https://arrow-kt.io/docs/0.10/quickstart/setup/",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>An example of <code>Either</code> in practice:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">var</span> either<span class="token operator">:</span> Either<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> int<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">Left</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Hello&quot;</span></span><span class="token punctuation">)</span>
either <span class="token operator">=</span> <span class="token function">Right</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bringing-failure-and-either-together-to-handle-errors" tabindex="-1"><a class="header-anchor" href="#bringing-failure-and-either-together-to-handle-errors" aria-hidden="true">#</a> Bringing Failure and Either together to handle errors</h3><p>Consider the following function:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token annotation builtin">@Throws</span><span class="token punctuation">(</span>ArrayIndexOutOfBoundsException<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">fun</span> List<span class="token operator">&lt;</span>Int<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">getAt</span><span class="token punctuation">(</span>index<span class="token operator">:</span> Int<span class="token punctuation">)</span><span class="token operator">:</span> Int <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When calling this function, we could wrap the call site in a <code>try</code>/<code>catch</code> block and explicitly handle <code>ArrayIndexOutOfBoundsException</code>:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">val</span> list <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> item <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">getAt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// throws</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> ArrayIndexOutOfBoundsException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do some error handling</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are a few issues with this implementation:</p><ul><li>It relies on the developer using the function knowing that it could throw that type of exception</li><li>It relies on the developer using the function remembering to catch the exception</li><li>It relies on the developer writing an appropriate error message every time the exception occurs. If the function is used in multiple places this can introduce inconsistency</li><li>It ties the use of the function to its implementation. If a new implementation for the function is created which could throw a different type of exception, all call sites will have to be updated to handle the new exception type</li></ul><p>As an alternative, consider this implementation of the function:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">fun</span> List<span class="token operator">&lt;</span>Int<span class="token operator">&gt;</span><span class="token punctuation">.</span><span class="token function">getAt</span><span class="token punctuation">(</span>index<span class="token operator">:</span> Int<span class="token punctuation">)</span><span class="token operator">:</span> Either<span class="token operator">&lt;</span>Failure<span class="token punctuation">,</span> Int<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">Right</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> ArrayIndexOutOfBoundsException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">Left</span><span class="token punctuation">(</span><span class="token function">Failure</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;There isn&#39;t anything at index </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">index</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, then call site looks like this:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">val</span> list <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> result <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">getAt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

result<span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span>
    ifLeft <span class="token operator">=</span> <span class="token punctuation">{</span> f<span class="token operator">:</span> Failure
        <span class="token comment">// Handle failure</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ifRight <span class="token operator">=</span> <span class="token punctuation">{</span> item<span class="token operator">:</span> Int
        <span class="token comment">// Handle success</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),h=s("code",null,"Either",-1),v={href:"https://arrow-kt.io/docs/0.10/apidocs/arrow-core-data/arrow.core/-either/index.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>The advantages of this approach are:</p><ul><li>Developers calling the function are alerted to the fact that it could return a <code>Failure</code>, and are therefore more likely to handle it</li><li>The same error message is provided every time the <code>ArrayIndexOutOfBoundsException</code> occurs, increasing consistency</li><li>Removes the coupling between the function&#39;s implementation and its call sites, allowing the implementation to change (and possibly handle different exceptions) without the call sites being modified.</li></ul><h2 id="in-a-clean-architecture-project" tabindex="-1"><a class="header-anchor" href="#in-a-clean-architecture-project" aria-hidden="true">#</a> In a Clean Architecture Project</h2><p>A datasource using Retrofit has the potential to return either a <code>Response</code>, which may be a successful or unsuccessful response, or throw an <code>IOException</code>.</p><p>When calling a Retrofit data source in a <code>Repository</code> implementation, the methods should return <code>Either&lt;Failure, T&gt;</code>, where <code>T</code> is the type of a successful response.</p><p>In the event of an <code>IOException</code> or an unsuccessful response, the repository method should return <code>Left&lt;Failure&gt;</code>. Otherwise, return <code>Right&lt;T&gt;</code>.</p><p>For example, here&#39;s a data source:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">interface</span> NumberTriviaDataSource <span class="token punctuation">{</span>
    <span class="token annotation builtin">@GET</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;random&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">suspend</span> <span class="token keyword">fun</span> <span class="token function">getRandomNumberTrivia</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> NumberTrivia
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And here&#39;s a repository implementation that uses the data source:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">DefaultNumberTriviaRepository</span><span class="token punctuation">(</span>
    <span class="token keyword">private</span> <span class="token keyword">val</span> dataSource<span class="token operator">:</span> NumberTriviaDataSource
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">suspend</span> <span class="token keyword">fun</span> <span class="token function">getRandomNumberTrivia</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> Either<span class="token operator">&lt;</span>Failure<span class="token punctuation">,</span> NumberTrivia<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">Right</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">.</span><span class="token function">getRandomNumberTrivia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> HttpException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Unsuccessful response</span>
            <span class="token function">Left</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> IOException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Other network-related exception</span>
            <span class="token function">Left</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>localizedMessage<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It may be useful to add a utility function to your project so you can avoid having to write this out every time.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">/**
 * Attempts to run the [block] and return [Right] with the result.
 *
 * Returns [Left] if [block] throws an [HttpException] or a [IOException].
 */</span>
<span class="token keyword">suspend</span> <span class="token keyword">fun</span> <span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> <span class="token function">ioSafe</span><span class="token punctuation">(</span>block<span class="token operator">:</span> <span class="token keyword">suspend</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> T<span class="token punctuation">)</span><span class="token operator">:</span> Either<span class="token operator">&lt;</span>Failure<span class="token punctuation">,</span> T<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">Right</span><span class="token punctuation">(</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> HttpException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Left</span><span class="token punctuation">(</span><span class="token function">Failure</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> IOException<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Left</span><span class="token punctuation">(</span><span class="token function">Failure</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>localizedMessage<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the repository becomes:</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">DefaultNumberTriviaRepository</span><span class="token punctuation">(</span>
    <span class="token keyword">private</span> <span class="token keyword">val</span> dataSource<span class="token operator">:</span> NumberTriviaDataSource
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">suspend</span> <span class="token keyword">fun</span> <span class="token function">getRandomNumberTrivia</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> Either<span class="token operator">&lt;</span>Failure<span class="token punctuation">,</span> NumberTrivia<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ioSafe <span class="token punctuation">{</span>
            dataSource<span class="token punctuation">.</span><span class="token function">getRandomNumberTrivia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function b(f,g){const e=p("ExternalLinkIcon");return i(),c("div",null,[r,s("p",null,[n("A great implementation of "),u,n(" can be found in the Arrow library for Kotlin. Instructions for adding this library to your project are "),s("a",d,[n("here"),t(e)]),n(".")]),k,s("p",null,[s("em",null,[n("For more documentation on the "),h,n(" class, see the "),s("a",v,[n("Arrow Documentation"),t(e)]),n(".")])]),m])}const w=o(l,[["render",b],["__file","error-handling.html.vue"]]);export{w as default};