import{_ as c,r as e,o as i,c as p,a as n,d as a,w as o,b as s}from"./app.d53b9b29.js";const u={},d={id:"operator-linebreak",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#operator-linebreak","aria-hidden":"true"},"#",-1),k=n("p",null,"Enforce consistent linebreak style for operators",-1),b=n("h2",{id:"examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),s(" Examples")],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

foo `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
    `),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

foo
    `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(`someCondition
    `),n("span",{class:"token operator"},"||"),s(" otherCondition"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

answer `),n("span",{class:"token operator"},"="),s(` everything
    `),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"42"),s(`
    `),n("span",{class:"token operator"},":"),s(" foo"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(`
    `),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

foo `),n("span",{class:"token operator"},"="),s(`
    `),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("someCondition "),n("span",{class:"token operator"},"||"),s(`
    otherCondition`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

answer `),n("span",{class:"token operator"},"="),s(" everything "),n("span",{class:"token operator"},"?"),s(`
    `),n("span",{class:"token number"},"42"),s(),n("span",{class:"token operator"},":"),s(`
    foo`),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function h(f,g){const t=e("RouterLink"),l=e("badge"),r=e("code-highlight");return i(),p("div",null,[n("p",null,[a(t,{to:"/frontend/linting/eslint/"},{default:o(()=>[s("← Back")]),_:1})]),n("h1",d,[m,s(" operator-linebreak "),a(l,{text:"warning",type:"warning",vertical:"middle"})]),k,b,a(r,null,{correct:o(()=>[v]),incorrect:o(()=>[_]),_:1})])}const w=c(u,[["render",h],["__file","operator-linebreak.html.vue"]]);export{w as default};
