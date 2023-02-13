import{_ as o,r as e,o as u,c as r,a as n,d as a,w as c,b as s,e as p}from"./app.d8f20699.js";const m={},d={id:"jsdoc-require-description-complete-sentence",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#jsdoc-require-description-complete-sentence","aria-hidden":"true"},"#",-1),b=p('<p>Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences, i.e.,</p><ul><li>Description must start with an uppercase alphabetical character.</li><li>Paragraphs must start with an uppercase alphabetical character.</li><li>Sentences must end with a period.</li><li>Every line in a paragraph (except the first) which starts with an uppercase character must be preceded by a line ending with a period.</li><li>A colon or semi-colon followed by two line breaks is still part of the containing paragraph (unlike normal dual line breaks).</li><li>Text within inline tags {...} are not checked for sentence divisions.</li><li>Periods after items within the abbreviations option array are not treated as sentence endings.</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>',3),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(` - Foo.
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux1"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux2"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo.
 * Bar.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux3"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo.
 *
 * Bar.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux4"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Тест.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux5"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo
 * bar.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux6"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@returns"),s(` Foo bar.
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux7"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Foo.
 * `),n("span",{class:"token keyword"},"@see"),s(` Math.sin
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux8"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Foo `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"@see"),s(" Math.sin"),n("span",{class:"token punctuation"},"}"),s(` bar.
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux9"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo?
 *
 * Bar!
 *
 * Baz:
 *   1. Foo.
 *   2. Bar.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux10"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Hello:
 * World.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux11"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 * foo.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux1"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * foo?
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux2"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@description"),s(` foo.
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux3"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo)
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux4"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence must end with a period."),s(`

`),n("span",{class:"token doc-comment comment"},"/**\n * `foo` is a variable\n */"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux5"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence must end with a period."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo.
 *
 * foo.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux6"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * тест.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux7"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux8"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence must end with a period."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Foo
 * Bar.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux9"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: A line of text is started with an uppercase character, but preceding line does not end the sentence."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Foo.
 *
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(` foo.
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux10"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Foo.
 *
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(` bar
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux11"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"@see"),s(" Foo.bar"),n("span",{class:"token punctuation"},"}"),s(` buz
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux12"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Foo.
 *
 * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(` foo
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux13"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Foo.
 *
 * `),n("span",{class:"token keyword"},"@returns"),s(` foo.
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux14"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque elit diam,
 * iaculis eu dignissim sed, ultrices sed nisi. nulla at ligula auctor, consectetur neque sed,
 * tincidunt nibh. vivamus sit amet vulputate ligula. vivamus interdum elementum nisl,
 * vitae rutrum tortor semper ut. morbi porta ante vitae dictum fermentum.
 * proin ut nulla at quam convallis gravida in id elit. sed dolor mauris, blandit quis ante at,
 * consequat auctor magna. duis pharetra purus in porttitor mollis.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"longDescription"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Sentence should start with an uppercase character."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(w,g){const t=e("RouterLink"),i=e("badge"),l=e("code-highlight");return u(),r("div",null,[n("p",null,[a(t,{to:"/frontend/linting/eslint/"},{default:c(()=>[s("← Back")]),_:1})]),n("h1",d,[k,s(" jsdoc/require-description-complete-sentence "),a(i,{text:"warning",type:"warning",vertical:"middle"})]),b,a(l,null,{correct:c(()=>[v]),incorrect:c(()=>[h]),_:1})])}const y=o(m,[["render",f],["__file","jsdoc-require-description-complete-sentence.html.vue"]]);export{y as default};
