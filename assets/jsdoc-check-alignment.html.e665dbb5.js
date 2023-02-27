import{_ as i,r as a,o as u,c as p,a as n,d as e,w as c,b as s}from"./app.9288440f.js";const m={},r={id:"jsdoc-check-alignment",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#jsdoc-check-alignment","aria-hidden":"true"},"#",-1),d=n("p",null,"Reports invalid alignment of JSDoc block asterisks.",-1),b=n("h2",{id:"examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),s(" Examples")],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * Desc
 *
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux1"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Desc
 *
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(`
  foo`),n("span",{class:"token operator"},":"),s(" Bar"),n("span",{class:"token punctuation"},","),s(`
  bar`),n("span",{class:"token operator"},":"),s(` Baz
 `),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
 *
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux2"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},`/*  <- JSDoc must start with 2 stars.
 *    So this is unchecked.
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux3"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
  * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// with spaces"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
  * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// with tabs"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
  * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// with spaces"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
* `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
*/`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// with spaces"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
  */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

 `),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

 `),n("span",{class:"token doc-comment comment"},[s(`/**
  * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
  * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"foo"),s(`
  */`)]),s(`
 `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

 `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

`),n("span",{class:"token doc-comment comment"},`/**
   * A jsdoc not attached to any node.
 */`),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Foo"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token doc-comment comment"},[s(`/**
   *  Some method
    * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"a"),s(`
   */`)]),s(`
  `),n("span",{class:"token function"},"quux"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// Message: Expected JSDoc block to be aligned."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function g(h,x){const t=a("RouterLink"),o=a("badge"),l=a("code-highlight");return u(),p("div",null,[n("p",null,[e(t,{to:"/frontend/linting/eslint/"},{default:c(()=>[s("← Back")]),_:1})]),n("h1",r,[k,s(" jsdoc/check-alignment "),e(o,{text:"warning",type:"warning",vertical:"middle"})]),d,b,e(l,null,{correct:c(()=>[v]),incorrect:c(()=>[f]),_:1})])}const w=i(m,[["render",g],["__file","jsdoc-check-alignment.html.vue"]]);export{w as default};
