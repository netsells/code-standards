import{_ as p,r as a,o as i,c as u,a as n,d as e,w as t,b as s}from"./app.7ec440ba.js";const r={},m={id:"jsdoc-check-param-names",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#jsdoc-check-param-names","aria-hidden":"true"},"#",-1),d=n("p",null,"Ensures that parameter names in JSDoc match those in the function declaration.",-1),b=n("h2",{id:"examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),s(" Examples")],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},`/**
 *
 */`),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux1"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux2"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"bar"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux3"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},","),s(" bar")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"bar"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux4"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},","),s(" bar"),n("span",{class:"token punctuation"},","),s(" baz")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},"."),s("foo")]),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"bar"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux5"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},","),s(" bar")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"args"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux6"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token operator"},"..."),s("args")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},"."),s("a")]),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},"."),s("b")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux7"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},"."),s("bar")]),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},"."),s("baz")]),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"bar"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux8"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},","),s(" bar")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"args"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("args"),n("span",{class:"token punctuation"},"."),s("a")]),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("args"),n("span",{class:"token punctuation"},"."),s("b")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux9"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"foo"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},"."),s("0")]),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},[s("foo"),n("span",{class:"token punctuation"},"."),s("1")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux10"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"["),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * Assign the project to a list of employees.
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("object"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"employees"),s(` - The employees who are responsible for the project.
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(` employees[].name - The name of an employee.
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(` employees[].department - The employee's department.
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"assign"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"employees"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SomeClass"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"property"),s(`
     */`)]),s(`
    `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"property"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Error"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"error"),s(` Exit code
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(` [code = 1] Exit code
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux11"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("error"),n("span",{class:"token punctuation"},","),s(" code "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"Foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux1"),s(),n("span",{class:"token punctuation"},"("),s("foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'FOO'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},'// Message: Expected @param names to be "foo". Got "Foo".'),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"Foo"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"quux2"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},'// Message: Expected @param names to be "foo". Got "Foo".'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function y(w,h){const c=a("RouterLink"),o=a("badge"),l=a("code-highlight");return i(),u("div",null,[n("p",null,[e(c,{to:"/frontend/linting/eslint/"},{default:t(()=>[s("← Back")]),_:1})]),n("h1",m,[k,s(" jsdoc/check-param-names "),e(o,{text:"warning",type:"warning",vertical:"middle"})]),d,b,e(l,null,{correct:t(()=>[v]),incorrect:t(()=>[f]),_:1})])}const x=p(r,[["render",y],["__file","jsdoc-check-param-names.html.vue"]]);export{x as default};
