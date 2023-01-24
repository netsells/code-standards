import{_ as n,o as s,c as a,e}from"./app.a60f8fde.js";const t={},p=e(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h1><h2 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions" aria-hidden="true">#</a> Naming Conventions</h2><table><thead><tr><th>Object Name</th><th>Notation</th></tr></thead><tbody><tr><td>Class name</td><td>PascalCase</td></tr><tr><td>Constructor name</td><td>PascaCase</td></tr><tr><td>Method Name</td><td>PascalCase</td></tr><tr><td>Method arguments</td><td>camelCase</td></tr><tr><td>Local varables</td><td>camelCase</td></tr><tr><td>Constants name</td><td>PascalCase</td></tr><tr><td>Private field name</td><td>_camelCasePrefixedWithUnderscore</td></tr><tr><td>Property name</td><td>PascalCase</td></tr><tr><td>Enum type name</td><td>PascalCase</td></tr></tbody></table><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h2><p>Write only one statement per line.</p><p>Write only one declaration per line.</p><p>Continuation lines should be indented at least one tab stop, in a way that expresses the structure of the statement.</p><p>Add at least one blank line between method definitions and property definitions.</p><p>Use blank lines to separate code into logical groups</p><p>Use parentheses to make clauses in an expression apparent:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>val1 <span class="token operator">&gt;</span> val2<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>val1 <span class="token operator">&gt;</span> val3<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Take appropriate action.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="naming" tabindex="-1"><a class="header-anchor" href="#naming" aria-hidden="true">#</a> Naming</h2><p>Use PascalCasing for class names and method names:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClientActivity</span>
<span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ClearStatistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//...</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">CalculateStatistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use camelCasing for method arguments and local variables:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserLog</span>
<span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token class-name">LogEvent</span> logEvent<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">int</span></span> itemCount <span class="token operator">=</span> logEvent<span class="token punctuation">.</span>Items<span class="token punctuation">.</span>Count<span class="token punctuation">;</span>
		<span class="token comment">// ...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do not use Hungarian notation or any other type identification in identifiers</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token class-name"><span class="token keyword">int</span></span> counter<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">;</span>
 
<span class="token comment">// Avoid</span>
<span class="token class-name"><span class="token keyword">int</span></span> iCounter<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">string</span></span> strName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do not use Screaming Caps for constants or readonly variables:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> ShippingType <span class="token operator">=</span> <span class="token string">&quot;DropShip&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Avoid</span>
<span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> SHIPPINGTYPE <span class="token operator">=</span> <span class="token string">&quot;DropShip&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use meaningful names for variables. The following example uses seattleCustomers for customers who are located in Seattle:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> seattleCustomers <span class="token operator">=</span> <span class="token keyword">from</span> customer <span class="token keyword">in</span> customers
<span class="token keyword">where</span> <span class="token class-name">customer</span><span class="token punctuation">.</span>City <span class="token operator">==</span> <span class="token string">&quot;Seattle&quot;</span> 
<span class="token keyword">select</span> customer<span class="token punctuation">.</span>Name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Avoid using Abbreviations. Exceptions: abbreviations commonly used as names, such as Id, Xml, Ftp, Uri.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token class-name">UserGroup</span> userGroup<span class="token punctuation">;</span>
<span class="token class-name">Assignment</span> employeeAssignment<span class="token punctuation">;</span> 

<span class="token comment">// Avoid</span>
<span class="token class-name">UserGroup</span> usrGrp<span class="token punctuation">;</span>
<span class="token class-name">Assignment</span> empAssignment<span class="token punctuation">;</span> 

<span class="token comment">// Exceptions</span>
<span class="token class-name">CustomerId</span> customerId<span class="token punctuation">;</span>
<span class="token class-name">XmlDocument</span> xmlDocument<span class="token punctuation">;</span>
<span class="token class-name">FtpHelper</span> ftpHelper<span class="token punctuation">;</span>
<span class="token class-name">UriPart</span> uriPart<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do not use Underscores in identifiers. Exception: private or protected fields should be prefixed with an underscore</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token keyword">public</span> <span class="token class-name">DateTime</span> clientAppointment<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">TimeSpan</span> timeLeft<span class="token punctuation">;</span> 

<span class="token comment">// Avoid</span>
<span class="token keyword">public</span> <span class="token class-name">DateTime</span> client_Appointment<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">TimeSpan</span> time_Left<span class="token punctuation">;</span> 

<span class="token comment">// Exception (Class field)</span>
<span class="token keyword">private</span> <span class="token class-name">DateTime</span> _registrationDate<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do use predefined type names (C# aliases) like int, float, string for local, parameter and member declarations.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token class-name"><span class="token keyword">string</span></span> firstName<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">int</span></span> lastIndex<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">bool</span></span> isSaved<span class="token punctuation">;</span>

<span class="token comment">// Avoid</span>
<span class="token class-name">String</span> firstName<span class="token punctuation">;</span>
<span class="token class-name">Int32</span> lastIndex<span class="token punctuation">;</span>
<span class="token class-name">Boolean</span> isSaved<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do use implicit type var for local variable declarations</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> stream <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> customers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Use noun or noun phrases to name a class.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BusinessLocation</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DocumentCollection</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Prefix interfaces with the letter I. Interface names are noun (phrases) or adjectives.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IShape</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IShapeCollection</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IGroupable</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do name source files according to their main classes. Exception: file names with partial classes reflect their source or purpose, e.g. designer, generated, etc.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Located in Task.cs</span>
<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Task</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// Located in Task.generated.cs</span>
<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Task</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Organise namespaces and code folders with a clearly defined structure:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Examples</span>
<span class="token keyword">namespace</span> <span class="token namespace">Company<span class="token punctuation">.</span>Product<span class="token punctuation">.</span>Module<span class="token punctuation">.</span>SubModule</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> <span class="token namespace">Product<span class="token punctuation">.</span>Module<span class="token punctuation">.</span>Component</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> <span class="token namespace">Product<span class="token punctuation">.</span>Layer<span class="token punctuation">.</span>Module<span class="token punctuation">.</span>Group</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vertically align curly brackets:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Declare all member variables at the top of a class, with static variables at the very top.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span>
<span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">string</span></span> BankName<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token keyword">decimal</span></span> Reserves<span class="token punctuation">;</span> 
	<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> _number <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token keyword">private</span> DateTime_dateOpened <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token keyword">private</span> <span class="token return-type class-name">DateTime</span> _dateClosed <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
	<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">decimal</span></span> _balance <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> 
	
	<span class="token keyword">public</span> <span class="token function">Account</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// ...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use singular names for enums.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Color</span>
<span class="token punctuation">{</span>
	Red<span class="token punctuation">,</span>
	Green<span class="token punctuation">,</span>
	Blue<span class="token punctuation">,</span>
	Yellow<span class="token punctuation">,</span>
	Magenta<span class="token punctuation">,</span>
	Cyan
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do not explicitly specify a type of an enum or values of enums (except enums stored in db fields):</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Avoid</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Direction</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token keyword">long</span></span>
<span class="token punctuation">{</span>
	North <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
	East <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
	South <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span>
	West <span class="token operator">=</span> <span class="token number">4</span>
<span class="token punctuation">}</span> 

<span class="token comment">// Correct</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Direction</span>
<span class="token punctuation">{</span>
	North<span class="token punctuation">,</span>
	East<span class="token punctuation">,</span>
	South<span class="token punctuation">,</span>
	West
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do not use an &quot;Enum&quot; suffix in enum type names:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Avoid</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">CoinEnum</span>
<span class="token punctuation">{</span>
	Penny<span class="token punctuation">,</span>
	Nickel<span class="token punctuation">,</span>
	Dime<span class="token punctuation">,</span>
	Quarter<span class="token punctuation">,</span>
	Dollar
<span class="token punctuation">}</span> 

<span class="token comment">// Correct</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Coin</span>
<span class="token punctuation">{</span>
	Penny<span class="token punctuation">,</span>
	Nickel<span class="token punctuation">,</span>
	Dime<span class="token punctuation">,</span>
	Quarter<span class="token punctuation">,</span>
	Dollar
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Do not create names of parameters in methods (or constructors) which differ only by the register:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Avoid</span>
<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> Name<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use suffix Exception at creation of the new classes comprising the information on exception:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BarcodeReadException</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">System<span class="token punctuation">.</span>Exception</span></span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use suffix Any, Is, Have or similar keywords for boolean identifier :</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">// Correct</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> <span class="token keyword">value</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">value</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">value</span><span class="token punctuation">.</span>Length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commenting" tabindex="-1"><a class="header-anchor" href="#commenting" aria-hidden="true">#</a> Commenting</h2><p>Place the comment on a separate line, not at the end of a line of code.</p><p>Begin comment text with an uppercase letter.</p><p>End comment text with a period.</p><h2 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data Types</h2><p>In general, use int rather than unsigned types. The use of int is common throughout C#, and it is easier to interact with other libraries when you use int.</p>`,60),c=[p];function i(l,o){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","c-sharp.html.vue"]]);export{r as default};
