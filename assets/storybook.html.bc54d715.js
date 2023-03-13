import{_ as n,o as e,c as s,e as t}from"./app.dfcc6a67.js";const a={},o=t(`<h1 id="storybook" tabindex="-1"><a class="header-anchor" href="#storybook" aria-hidden="true">#</a> Storybook</h1><p>We follow a Component-Driven Development principle, in which we built all projects bottom-up. This involves breaking down areas of the site into smaller components to make them much more reusable. To do this, we use Storybook.js as a development tool for providing a sandbox environment for developing components in isolation, outside of the context of our main application frame. This allows us to concentrate on building standalone components rather than building styling + functionality for each location it appears in.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This section may change over time as our experience with Storybook evolves</p></div><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h2><p>Your file structure and generated Storybook &quot;stories&quot; should be formatted with the following named top-level categories at a minimum:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ stories
│  ├─ 0. Welcome
│  │  └─ Welcome.stories.js
│  │ 
│  ├─ 1. Typography
│  │  └─ Typography.stories.js
│  │ 
│  ├─ 2. UI
│  │  ├─ Forms
│  │  │  └─ Input.stories.js (for example)
│  │  │ 
│  │  └─ Buttons.stories.js (for example)
│  │ 
│  ├─ ... Other categories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addons" tabindex="-1"><a class="header-anchor" href="#addons" aria-hidden="true">#</a> Addons</h2><p>In order to ensure we are making the most of the storybook platform to build reliable and accessible stories, as well as ensuring they are documented thoroughly, we make use of a few addons by default.</p><h3 id="knobs" tabindex="-1"><a class="header-anchor" href="#knobs" aria-hidden="true">#</a> Knobs</h3><p>The knobs addon allows you to give the user some controls to manipulate the state and content of your components. This should be used to document various variable states of your components.</p><h3 id="a11y" tabindex="-1"><a class="header-anchor" href="#a11y" aria-hidden="true">#</a> A11y</h3><p>The a11y addon provides some integrated checks on your stories to ensure that our components meet a minimum level of accessibility criteria. This is usually a minimum of AA level. See our <a href="./frontend/accessibility">accessibility</a> page for the more comprehensive guidelines we require.</p><h3 id="viewport" tabindex="-1"><a class="header-anchor" href="#viewport" aria-hidden="true">#</a> Viewport</h3><p>The viewport addon provides you with a UI element to modify the active viewport of the component you&#39;re working on to ensure it looks acceptable at the main grid breakpoints in the application.</p><h2 id="stories" tabindex="-1"><a class="header-anchor" href="#stories" aria-hidden="true">#</a> Stories</h2><p>Each story should be based on a single component. As such you should name the story after the component.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ resources
│  ├─ components
│  │  ├─ HeaderBanner.vue
│  │  │  
│  
├─ stories
│  ├─ 1. Layout
│  │  └─ HeaderBanner.stories.js
│  │ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-structure" tabindex="-1"><a class="header-anchor" href="#file-structure" aria-hidden="true">#</a> File structure</h3><p>Stories should all follow the same file structure</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> ExampleComponent <span class="token keyword">from</span> <span class="token string">&#39;../../resources/components/ExampleComponent&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">exampleComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ExampleComponent<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;example-component :title=&quot;title&quot;/&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;Lorem Ipsum&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

exampleComponent<span class="token punctuation">.</span>story <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setting-up-a-story-live-template-on-jetbrains-ides" tabindex="-1"><a class="header-anchor" href="#setting-up-a-story-live-template-on-jetbrains-ides" aria-hidden="true">#</a> Setting up a story live template on JetBrains IDEs</h3><ol><li>Open up your Preferences panel ( <code>cmd,</code> ) and navigate to the &quot;Live Templates&quot; section <code>Editor &gt; Live Templates</code>.</li><li>Click on the <code>JavaScript</code> section and then the <code>+</code> on the far right hand side and select <code>1. Live Template</code></li><li>Set the abbreviation as <code>story</code> and the description and <code>Storybook story template</code></li><li>Paste the following in to the section called <code>Template text</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> $component$ <span class="token keyword">from</span> <span class="token string">&#39;../../resources/components/$componentDirectory$$component$&#39;</span><span class="token punctuation">;</span>
$ContainerDecorator$

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">$componentName$</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        $component$<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;$template$ :$prop$=&quot;$prop$&quot;/&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">$prop$</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">default</span><span class="token operator">:</span> $propDefault$<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$componentName$<span class="token punctuation">.</span>story <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;$StoryName$&#39;</span><span class="token punctuation">,</span>

    <span class="token literal-property property">decorators</span><span class="token operator">:</span> <span class="token punctuation">[</span>$decorator$<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Next click on &quot;Edit Variables&quot; on the right hand side of the template block and fill in the table as follows:</li></ol><table><thead><tr><th>Name</th><th>Expression</th><th>Default value</th><th>Skip if defined</th></tr></thead><tbody><tr><td>component</td><td>capitalize(camelCase(substringBefore(fileNameWithoutExtension(),&quot;.&quot;)))</td><td></td><td>☑</td></tr><tr><td>componentDirectory</td><td>&quot;Component Directory&quot;</td><td>&quot;directory/&quot;</td><td>☐</td></tr><tr><td>containerDecorator</td><td>&quot;Container Decorator&quot;</td><td>&quot;import ContainerDecorator from &#39;../decorators/ContainerDecorator&#39;;&quot;</td><td>☐</td></tr><tr><td>componentName</td><td>camelCase(substringBefore(fileNameWithoutExtension(),&quot;.&quot;))</td><td></td><td>☑</td></tr><tr><td>template</td><td>lowercaseAndDash(substringBefore(fileNameWithoutExtension(),&quot;.&quot;))</td><td></td><td>☑</td></tr><tr><td>prop</td><td>&quot;Prop&quot;</td><td>&quot;prop&quot;</td><td>☐</td></tr><tr><td>propDefault</td><td>&quot;Prop Default&quot;</td><td>&quot;&#39;Lorem ipsum&#39;&quot;</td><td>☐</td></tr><tr><td>storyName</td><td>&quot;Story Name&quot;</td><td>&quot;default&quot;</td><td>☐</td></tr><tr><td>decorator</td><td>&quot;Decorator&quot;</td><td>&quot;ContainerDecorator&quot;</td><td>☐</td></tr></tbody></table><ol start="6"><li>Finally click on &quot;Define&quot; at the bottom of the modal and select ☐ Javascript and Typescript.</li></ol><p>You are now able to use this template while creating stories. simply create a file e.g. <code>ExampleComponent.stories.js</code> and type <code>story</code> then press <code>tab</code>. You can now fill in each of the variables we just set in the table above by typing then pressing <code>tab</code> to progress to the next one.</p>`,27),i=[o];function r(p,l){return e(),s("div",null,i)}const d=n(a,[["render",r],["__file","storybook.html.vue"]]);export{d as default};
