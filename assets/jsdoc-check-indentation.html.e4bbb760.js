import{_ as o,r as e,o as u,c as r,a as n,d as a,w as c,b as s,e as d}from"./app.2a8d011b.js";const p={},m={id:"jsdoc-check-indentation",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#jsdoc-check-indentation","aria-hidden":"true"},"#",-1),v=d(`<p>Reports invalid padding inside JSDoc blocks.</p><p>Ignores parts enclosed in Markdown &quot;code block&quot;&#39;s. For example, the following description is not reported:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Some description:
 * \`\`\`html
 * &lt;section&gt;
 *   &lt;title&gt;test&lt;/title&gt;
 * &lt;/section&gt;
 * \`\`\`
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>`,4),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * foo
 *
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"bar"),s(`
 * baz
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux1"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},"/*** foo */"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux2"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * foo
 *
 * `),n("span",{class:"token keyword"},"@example"),s(`
 `),n("span",{class:"token example"},[s("* "),n("span",{class:"token code language-javascript"},[s("anArray"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
 *   `),n("span",{class:"token code language-javascript"},[n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"."),s("b"),n("span",{class:"token punctuation"},";")]),s(`
 * `),n("span",{class:"token code language-javascript"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux3"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/**  foo */"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux1"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: There must be no indentation."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * foo
 *
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"bar"),s(`
 *  baz
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux2"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: There must be no indentation."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo
 *   bar
 */`),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Moo"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: There must be no indentation."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * foo
 *
 * `),n("span",{class:"token keyword"},"@example"),s(`
 `),n("span",{class:"token example"},[s("* "),n("span",{class:"token code language-javascript"},[s("anArray"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
 *   `),n("span",{class:"token code language-javascript"},[n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"."),s("b"),n("span",{class:"token punctuation"},";")]),s(`
 * `),n("span",{class:"token code language-javascript"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")])]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux3"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},'// Options: [{"excludeTags":[]}]'),s(`
`),n("span",{class:"token comment"},"// Message: There must be no indentation."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * foo
 *
 * `),n("span",{class:"token keyword"},"@example"),s(`
 `),n("span",{class:"token example"},[s("*   "),n("span",{class:"token code language-javascript"},"aaaa")]),s(`
 * `),n("span",{class:"token keyword"},"@returns"),s(`
 *   eeee
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux4"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: There must be no indentation."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * foo
 * \`\`\`html
 * <section>
 *   <title>test</title>
 * </section>
 * \`\`\`
 * `),n("span",{class:"token keyword"},"@returns"),s(`
 *   eeee
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux5"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: There must be no indentation."),s(`

`),n("span",{class:"token doc-comment comment"},[s("/**\n * foo\n * ```   aaaa```\n * "),n("span",{class:"token keyword"},"@returns"),s(`
 *   eeee
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux6"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: There must be no indentation."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function h(f,x){const t=e("RouterLink"),l=e("badge"),i=e("code-highlight");return u(),r("div",null,[n("p",null,[a(t,{to:"/frontend/linting/eslint/"},{default:c(()=>[s("← Back")]),_:1})]),n("h1",m,[k,s(" jsdoc/check-indentation "),a(l,{text:"warning",type:"warning",vertical:"middle"})]),v,a(i,null,{correct:c(()=>[b]),incorrect:c(()=>[g]),_:1})])}const w=o(p,[["render",h],["__file","jsdoc-check-indentation.html.vue"]]);export{w as default};
