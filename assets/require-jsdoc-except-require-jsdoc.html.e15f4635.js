import{_ as l,r as a,o as i,c as u,a as n,d as t,w as e,b as s}from"./app.9874515a.js";const r={},d={id:"require-jsdoc-except-require-jsdoc",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#require-jsdoc-except-require-jsdoc","aria-hidden":"true"},"#",-1),m=n("p",null,"Exclude certain methods from requiring JSDoc definitions.",-1),b=n("h2",{id:"examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),s(" Examples")],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token doc-comment comment"},[s(`/**
         * Update the user with the given id via the API
         *
         * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"id"),s(` - id of user
         * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Object"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"data"),s(` - userdata object
         *
         * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Promise"),n("span",{class:"token punctuation"},"}")]),s(`
         */`)]),s(`
        `),n("span",{class:"token function"},"updateUser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("id"),n("span",{class:"token punctuation"},","),s(" data")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/users/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("id"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"body"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"updateUser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("id"),n("span",{class:"token punctuation"},","),s(" data")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/users/"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("id"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"method"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token literal-property property"},"body"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("opts"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(g,f){const o=a("RouterLink"),c=a("badge"),p=a("code-highlight");return i(),u("div",null,[n("p",null,[t(o,{to:"/frontend/linting/eslint/"},{default:e(()=>[s("← Back")]),_:1})]),n("h1",d,[k,s(" require-jsdoc-except/require-jsdoc "),t(c,{text:"warning",type:"warning",vertical:"middle"})]),m,b,t(p,null,{correct:e(()=>[v]),incorrect:e(()=>[h]),_:1})])}const x=l(r,[["render",_],["__file","require-jsdoc-except-require-jsdoc.html.vue"]]);export{x as default};
