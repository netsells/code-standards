import{_ as i,M as a,p as l,q as c,R as e,t,N as o,V as n}from"./framework-9cabc8c6.js";const h={},d=e("h1",{id:"pull-request-workflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pull-request-workflow","aria-hidden":"true"},"#"),t(" Pull Request Workflow")],-1),u=e("h2",{id:"screen-recordings-for-visual-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#screen-recordings-for-visual-changes","aria-hidden":"true"},"#"),t(" Screen recordings for visual changes")],-1),g=e("p",null,[t("You should "),e("strong",null,"always"),t(" aim to include images and/or videos showing any visual changes you have made in your PR. This gives additional context for your reviewer, and lets them see the UI without having to checkout the branch and run the app on their own machine.")],-1),_={href:"https://recordit.co",target:"_blank",rel:"noopener noreferrer"},f={href:"https://cleanshot.com",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"test-coverage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#test-coverage","aria-hidden":"true"},"#"),t(" Test Coverage")],-1),w=e("p",null,"Projects with tests should have their coverage measured by Coveralls, which will add a comment to your Pull Request with details of how the changes affect the overall coverage of the project. As a general rule, always aim not to decrease coverage with your changes.",-1),m=e("p",null,"In practical terms, this usually means ensuring any new code you write is covered with tests.",-1),v=e("p",null,"Code coverage is not necessarily a measure of the quality of your tests though; reviewers should always review tests to ensure edge cases are being considered, and should reject any tests which are clearly written just to satisfy coverage requirements.",-1),y=e("h2",{id:"deprecating-codeowners",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deprecating-codeowners","aria-hidden":"true"},"#"),t(" Deprecating Codeowners")],-1),k=e("p",null,[t("Our previous workflow involved the use of "),e("code",null,"CODEOWNERS"),t(' files, which automatically requested reviews from all members of the relevant team(s). We should no longer be using this workflow, as inviting multiple people to review PRs can often lead to them going stale, thanks to "someone else will deal with it" syndrome.')],-1),q=e("code",null,"CODEOWNERS",-1);function R(b,x){const s=a("RouterLink"),r=a("ExternalLinkIcon");return l(),c("div",null,[d,e("p",null,[t("In addition to the "),o(s,{to:"/general/pull-requests.html"},{default:n(()=>[t("general PR guidance")]),_:1}),t(", there are some specific guidelines for the mobile team.")]),u,g,e("p",null,[t("You can record videos on MacOS using "),e("a",_,[t("RecordIt"),o(r)]),t(", or "),e("a",f,[t("CleanShot X"),o(r)]),t(". In addition, use ⌘+R in Simulator to take a screen recording.")]),p,w,m,v,y,k,e("p",null,[t("If you're working on a project which is still using a "),q,t(" file, please delete it as quickly as possible and move to manually requesting reviews according to the guidelines in the main "),o(s,{to:"/general/pull-requests.html"},{default:n(()=>[t("Pull Request Workflow")]),_:1}),t(" page.")])])}const I=i(h,[["render",R],["__file","pull-requests.html.vue"]]);export{I as default};
