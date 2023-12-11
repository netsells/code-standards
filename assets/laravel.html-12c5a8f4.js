import{_ as i,M as o,p as c,q as r,R as n,t as s,N as e,V as a,a1 as p}from"./framework-9cabc8c6.js";const u={},d=p('<h1 id="laravel" tabindex="-1"><a class="header-anchor" href="#laravel" aria-hidden="true">#</a> Laravel</h1><h2 id="models" tabindex="-1"><a class="header-anchor" href="#models" aria-hidden="true">#</a> Models</h2><h3 id="ordering" tabindex="-1"><a class="header-anchor" href="#ordering" aria-hidden="true">#</a> Ordering</h3><p>Our preferred ordering of items within a Laravel Model class is as follows:</p><ul><li>Traits</li><li>Constants</li><li>Laravel specific fields ($table, $guarded, $fillable etc)</li><li>Public fields</li><li>Private fields</li><li>Relations</li><li>Scopes</li><li>Other Methods</li></ul><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h2>',6),k={href:"http://laravel.com/docs/routing",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"method-definitions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#method-definitions","aria-hidden":"true"},"#"),s(" Method definitions")],-1),g=n("p",null,[s("Laravel provides a few differing ways to define routing within your application. When defining routes, explicit is the way to go - using Laravel magic 🧙‍♂️ like "),n("code",null,"resources"),s(" can make code difficult to understand.")],-1),m=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token class-name static-context"},"Route"),n("span",{class:"token operator"},"::"),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name static-context"},"Route"),n("span",{class:"token operator"},"::"),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name static-context"},"Route"),n("span",{class:"token operator"},"::"),n("span",{class:"token function"},"delete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name static-context"},"Route"),n("span",{class:"token operator"},"::"),n("span",{class:"token function"},"resource"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$router"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"resource"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token package"},[s("Illuminate"),n("span",{class:"token punctuation"},"\\"),s("Routing"),n("span",{class:"token punctuation"},"\\"),s("Router")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token variable"},"$router"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Router"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token variable"},"$router"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"patch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$router"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$router"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$router"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"delete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"parameter-definitions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#parameter-definitions","aria-hidden":"true"},"#"),s(" Parameter definitions")],-1),b=n("p",null,"Routes require some parameters to be defined, such as the controller method, they also allow additioanl parameters such as a name to be defined. In true Laravel fashion, there are multiple ways to do this.",-1),_=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token variable"},"$router"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'profile'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'ProfileController@index'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'profile'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token variable"},"$router"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'profile'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token string single-quoted-string"},"'uses'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'ProfileController@index'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string single-quoted-string"},"'as'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'profile'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h2",{id:"validation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#validation","aria-hidden":"true"},"#"),s(" Validation")],-1),w=n("p",null,[s("Validation for request should be implemented by adding the validation rules to the "),n("code",null,"rules()"),s(" method on Request classes where possible - these help encapsulate validation and authorisation for the request. We discourage using "),n("code",null,"Validator::make()"),s(" unless it is absolutely necessary and Request classes can not be utilised.")],-1);function R($,y){const l=o("ExternalLinkIcon"),t=o("code-highlight");return c(),r("div",null,[d,n("p",null,[s("The following guidelines are applicable to Laravel's "),n("a",k,[s("Routing"),e(l)]),s(".")]),h,g,e(t,null,{incorrect:a(()=>[m]),correct:a(()=>[f]),_:1}),v,b,e(t,null,{incorrect:a(()=>[_]),correct:a(()=>[x]),_:1}),q,w])}const V=i(u,[["render",R],["__file","laravel.html.vue"]]);export{V as default};