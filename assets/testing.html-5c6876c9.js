import{_ as a,M as r,p as l,q as c,R as t,t as e,N as n,V as i,a1 as d}from"./framework-9cabc8c6.js";const h={},u=t("h1",{id:"testing",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#testing","aria-hidden":"true"},"#"),e(" Testing")],-1),m={href:"https://developer.android.com/topic/libraries/testing-support-library",target:"_blank",rel:"noopener noreferrer"},g={href:"http://robolectric.org/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://site.mockito.org/",target:"_blank",rel:"noopener noreferrer"},f=d('<h2 id="types-of-test" tabindex="-1"><a class="header-anchor" href="#types-of-test" aria-hidden="true">#</a> Types of Test</h2><ul><li><p><em>Local tests</em> can be run on any machine with a JVM, including your computer and a continuous integration server</p></li><li><p><em>Instrumentation tests</em> must be run on a real or emulated Android device</p></li><li><p><em>Unit tests</em> test individual classes in isolation, using mocked versions of dependencies</p></li><li><p><em>Integration tests</em> test the entire system as a whole using real dependencies</p></li></ul><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p>When reviewing pull requests, please follow these requirements.</p><p><strong>Pull Requests must not be merged with failing tests.</strong></p><h3 id="new-projects" tabindex="-1"><a class="header-anchor" href="#new-projects" aria-hidden="true">#</a> New Projects</h3><ul><li><strong>MUST</strong> include <em>local unit tests</em> for everything in the <code>data</code> and <code>domain</code> layers, as well as state management components such as <code>ViewModel</code>s.</li><li><strong>SHOULD</strong> include <em>local unit tests</em> for Fragments and Activities, provided the tests aren&#39;t too time-consuming to write. <ul><li>You <strong>MUST</strong> use Robolectric when writing these tests, so that emulators/devices are not required.</li></ul></li><li><strong>CONSIDER</strong> including <em>local integration tests</em> which test the entire feature against mocked external dependencies (e.g. a mocked web server). <ul><li>Use your judgement to decide whether this is worth the time you might spend.</li></ul></li><li><strong>SHOULD NOT</strong> include <em>instrumented tests</em>. These have limited usefulness and take a very long time to write. <strong>PREFER</strong> manual integration testing.</li></ul><h3 id="legacy-projects" tabindex="-1"><a class="header-anchor" href="#legacy-projects" aria-hidden="true">#</a> Legacy Projects</h3><ul><li><strong>CONSIDER</strong> include unit tests for new functionality as above, wherever possible <ul><li>Make a judgement call here. If the codebase is super untestable, it may not be worth the hassle.</li></ul></li></ul><h2 id="how-do-i-know-what-to-test" tabindex="-1"><a class="header-anchor" href="#how-do-i-know-what-to-test" aria-hidden="true">#</a> How do I know what to test?</h2>',10),w=t("p",null,[e("If you're unsure, think about the concept of "),t("strong",null,"mutation testing"),e(". If you deliberately introduce a random bug, like removing a line of code or replacing a "),t("code",null,"<"),e(" with a "),t("code",null,">"),e(", will your test fail? If not, it's not doing the job it's designed for, so you should update the test to catch that bug. Remember, "),t("strong",null,"tests exist to catch mistakes made by developers"),e(", so make sure you account for every possible mistake.")],-1);function b(_,y){const s=r("RouterLink"),o=r("ExternalLinkIcon");return l(),c("div",null,[u,t("p",null,[e("The "),n(s,{to:"/android/clean-architecture.html"},{default:i(()=>[e("Clean Architecture")]),_:1}),e(" makes the project highly testable. Consider using a test-driven development workflow when implementing features.")]),t("p",null,[e("You'll probably want to make use of "),t("a",m,[e("AndroidX Test"),n(o)]),e(", "),t("a",g,[e("Robolectric"),n(o)]),e(", and "),t("a",p,[e("Mockito"),n(o)]),e(".")]),f,t("p",null,[e("As mentioned above, the "),n(s,{to:"/android/clean-architecture.html"},{default:i(()=>[e("Clean Architecture")]),_:1}),e(" makes the project highly testable. It's pretty clear that you can test each component of the Clean Architecture, and what you should be testing.")]),w])}const v=a(h,[["render",b],["__file","testing.html.vue"]]);export{v as default};
