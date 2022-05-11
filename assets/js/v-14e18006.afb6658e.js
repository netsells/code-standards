"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{8274:(A,t,e)=>{e.r(t),e.d(t,{default:()=>_});var r=e(6252),l=e(9602),u=e(3675),s=e(3183),n=e(6164),a=e(5045),o=e(5314);const i=(0,r._)("h1",{id:"automated-workflows",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#automated-workflows","aria-hidden":"true"},"#"),(0,r.Uk)(" Automated Workflows")],-1),k=(0,r.Uk)("We utilise automated workflows to ensure the code we're producing meets the standards defined by our automated linting tooling, and quality guidelines from our coding standards and visual accuracy. These actions are triggered as part of our "),m=(0,r.Uk)("pull request process"),f=(0,r.Uk)(" via GitHub actions."),c=(0,r._)("h2",{id:"linting",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#linting","aria-hidden":"true"},"#"),(0,r.Uk)(" Linting")],-1),p=(0,r.Uk)("To enforce our "),h=(0,r.Uk)("linting rules"),w=(0,r.Uk)(" we have a defined composite action for each linting package:"),d={href:"https://github.com/netsells/github-actions-frontend/tree/main/reviewdog-eslint",target:"_blank",rel:"noopener noreferrer"},g=(0,r.Uk)("Reviewdog Eslint"),S={href:"https://github.com/netsells/github-actions-frontend/tree/main/reviewdog-stylelint",target:"_blank",rel:"noopener noreferrer"},z=(0,r.Uk)("Reviewdog Stylelint"),K=(0,r._)("p",null,"See it in action here:",-1),M=(0,r._)("p",null,[(0,r._)("strong",null,"Eslint")],-1),E=(0,r._)("p",null,[(0,r._)("img",{src:l,alt:"Eslint workflow output"})],-1),U=(0,r._)("p",null,[(0,r._)("strong",null,"Stylelint")],-1),b=(0,r._)("p",null,[(0,r._)("img",{src:u,alt:"Stylelint workflow output"})],-1),j=(0,r._)("h2",{id:"visual-regression-testing",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#visual-regression-testing","aria-hidden":"true"},"#"),(0,r.Uk)(" Visual Regression Testing")],-1),J=(0,r._)("p",null,"As part of our Visual Regression Testing guidelines, we have a workflow for generating and approving the changes to ensure they are accurate to design, and do not introduce any visual regressions in other areas of the app.",-1),O=(0,r._)("p",null,"When a PR is created, the workflow will run and generate a couple of things:",-1),X=(0,r._)("ul",null,[(0,r._)("li",null,"Summary of changes introduced in this PR, broken down by modified, created and deleted"),(0,r._)("li",null,"A link to the Visual Regression Testing results")],-1),v=(0,r.Uk)("The composite action responsible for this workflow "),B={href:"https://github.com/netsells/github-actions-frontend/tree/main/visual-regression-testing",target:"_blank",rel:"noopener noreferrer"},y=(0,r.Uk)("can be seen here"),Q=(0,r.Uk)("."),x=(0,r._)("p",null,"See it in action here:",-1),L=(0,r._)("p",null,[(0,r._)("strong",null,"Change Summary")],-1),Y=(0,r._)("p",null,[(0,r._)("img",{src:s,alt:"VRT Change Summary"})],-1),D=(0,r._)("p",null,[(0,r._)("strong",null,"Results UI")],-1),H=(0,r._)("p",null,[(0,r._)("img",{src:n,alt:"Results UI"})],-1),q=(0,r._)("h2",{id:"tests",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#tests","aria-hidden":"true"},"#"),(0,r.Uk)(" Tests")],-1),I=(0,r._)("p",null,"Tests are an important part of our workflow, and ensure that our code is rigid and free from errors as much as possible. To ensure that new code does not break any existing tests, we have a workflow set up to automatically run the test suite of the codebase.",-1),F=(0,r.Uk)("The composite action for this workflow "),Z={href:"https://github.com/netsells/github-actions-frontend/tree/main/tests",target:"_blank",rel:"noopener noreferrer"},C=(0,r.Uk)("can be seen here"),T=(0,r.Uk)("."),G=(0,r._)("p",null,"See it in action here:",-1),R=(0,r._)("p",null,[(0,r._)("strong",null,"PR Status Check")],-1),W=(0,r._)("p",null,[(0,r._)("img",{src:a,alt:"PR Status check output"})],-1),P=(0,r._)("p",null,[(0,r._)("strong",null,"PR Output")],-1),V=(0,r._)("p",null,[(0,r._)("img",{src:o,alt:"PR output"})],-1),N={},_=(0,e(3744).Z)(N,[["render",function(A,t){const e=(0,r.up)("RouterLink"),l=(0,r.up)("OutboundLink"),u=(0,r.up)("spoiler");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("p",null,[k,(0,r.Wm)(e,{to:"/general/pull-requests.html"},{default:(0,r.w5)((()=>[m])),_:1}),f]),c,(0,r._)("p",null,[p,(0,r.Wm)(e,{to:"/frontend/linting/"},{default:(0,r.w5)((()=>[h])),_:1}),w]),(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",d,[g,(0,r.Wm)(l)])]),(0,r._)("li",null,[(0,r._)("a",S,[z,(0,r.Wm)(l)])])]),K,(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[M,E,U,b])),_:1}),j,J,O,X,(0,r._)("p",null,[v,(0,r._)("a",B,[y,(0,r.Wm)(l)]),Q]),x,(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[L,Y,D,H])),_:1}),q,I,(0,r._)("p",null,[F,(0,r._)("a",Z,[C,(0,r.Wm)(l)]),T]),G,(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[R,W,P,V])),_:1})],64)}]])},3744:(A,t)=>{t.Z=(A,t)=>{for(const[e,r]of t)A[e]=r;return A}},7546:(A,t,e)=>{e.r(t),e.d(t,{data:()=>r});const r={key:"v-14e18006",path:"/frontend/automated-workflows.html",title:"Automated Workflows",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Linting",slug:"linting",children:[]},{level:2,title:"Visual Regression Testing",slug:"visual-regression-testing",children:[]},{level:2,title:"Tests",slug:"tests",children:[]}],filePathRelative:"frontend/automated-workflows.md",git:{updatedTime:1652260188e3,contributors:[{name:"Sam Turrell",email:"sam.turrell@netsells.co.uk",commits:1}]}}},9602:(A,t,e)=>{A.exports=e.p+"assets/img/eslint-workflow.726082d5.jpg"},3675:(A,t,e)=>{A.exports=e.p+"assets/img/stylelint-workflow.da48bcd1.jpg"},5045:A=>{A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/wgARCAA5A08DABEAAREAAhEA/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMEAQUGAgf/2gAIAQAAAAAA+H1QAAAAAAAAAAAAAAAAFvMQAAAAAAAAAAAAAAAACfzECXudx81tV6MsVzNLc0lNudMCaansac1QtVsTwEniXGYQAAAAAABbij826ifzEdjx+H1rXcV0HZTVtJqvpulnl4L6JrvXyH7JBLN51/J8T0/Q6W0hku6OHb6KPHTY8arnAAAAAAAB0O9k8V6fKT+YmZoHvsLfCx5wX6A2GddY6LlWw15sNeGz1gAAAAAAAAAAJ/MQAAAAAAAAAAAAAAAACfHgAAAAAAAAAAAAAAAABNHEAAAAAAAAAAAAAAAAAn//xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQQCAwX/2gAIAQEQAAAA40AAAAAAAAAAAAAAAAAM10AAAAAAAAAAAAAAAAAM10EWcO6AAAAAAAAAAAAAAenMnr5M10HzvoWebvqooikoIoASi8gAAAAAABv1rx4fOzXQc9Hm66AAAAAAAAAAAAAAAGa6CUigAAABKAAAAAAAAAAGa6AAAAAAAAAAAAAAAAAGa6AAAAAAAAAAAAAAAAAGb//EABkBAQEBAQEBAAAAAAAAAAAAAAABAwIEBv/aAAgBAhAAAADrIAAAAAAAAAAAAAAAABqyAAAAAAAAAAAAAAAAAasi8105EoBKBKAEoSgAAAAAABnbeO7qyPqfl47TiKICoC3kBQQtAAAAAAAHi88d6+7VlOtcTpOaAAAAAAAAAAAAAAAasksolAAAAAAAAAAAAAAAGrIAAAAAAAAAAAAAAAABqyAAAAAAAAAAAAAAAAAa/wD/xAAtEAABBQEAAgAEBQMFAAAAAAADAAECBBMFBhEQFDM1BxIVIFAxQWAkJTBCYf/aAAgBAAABCACnGUg9KMcDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6wOsDrA6YZIc21+ej9Lo/5TL7bZVH6XR/fXC9g4QN47x7HkZSV/GvIPEO747VnevXIVGkI9DncHsdYZDc3ocy/yjxr9FTrnGIJyKfPuDog6U7/Ou8wowXlY8f69UVo5wc+5aq3boKfPudB7LVPhY8f7FUNk9j9zVrEgPaa/z7nMtEpX1LkdOFf5qYAFsmGADULch6t8YUrRK/zUJRlCUoTQatixE0w/EQiHKIApReEpRlXAW0aAAFAYDBcpq5gZOX+OqULl+U4Uz1rFUjhswGQjyYaJQtiHMpPhL7bZVH6XR+LP6f2nrCcf6i8neTu7r/qVeY2bvjfg/wCG/wCgfhh5D5F1fNeXV6HbqVqHY7lGn+H5ix8q5Qo+MVaNzmTtk8f5HNtVboaw2lc4XhMV59zg1B8uyLyj/SczxPkLp0YWoPLov49WnAvVHdpc2vU8grruVDVOD5kNcJ3j4l5tMV7jUoiswPb8dr6djqi8j+zeTrmwgTo0BzGHj2fIfIKC/TKH6j3pc7q+PgtB6dGrDicqv0LIlT5fMn2OwIF6BBeMeUc6l5m/5o+Kzmuq1IlqsCROdX1oxOAQi8sGl+FGZu1WJ0arNz+0SfjlKBgDLOdhqkOIKMa0JWOqUt161Xn2PluJYPj1aqg9aEMl2IA35xW/LwFz2A3b5zVp14bhn0+fyGA1WF9gsQVeYvJozjY5zE/juPXPa53eBWrVh/7RQ6omiG/kAHNh+lF+ZcIYVpwj5HWiIdY0VL7bZVH6XR+LO8XaUWtWGsfNp3d39uhvBptpQ8pt1PHrXjt7xDzi14n410OXzpt+WMYumd2/ozu3tvg7u7+36fTt9e5O9d9v69L2/pm+Ht/70Opb5rXI1un1bnXPCxd9u7Mz07Z6FkNytZ808ht1z1Ts7s/tvbs/tr3Ut9H5L5lndnZ2Z3Z/bM/pdTp2+vbndu/sZ/Ts7WevcthmAnw9v/w/+t/I+39+17/t8P6/CX22yqP0uj/lMvttlc93YfRdtJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSS0ktJLSSnJ5c2z7o/S6P+Uy+22V//xABPEAACAQIDBQQFBQoJDQEAAAACAwEABBESkwUTItHSFCExMgYQI0FCFTNRUlQgJENhYnGBkbO0NFBTYGNyc4KiFhclNURVg4SSlLGy1PD/2gAIAQAACT8AEiKbJeEREzM4XtnPdEUlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UlumfKkt0z5UBhje2GGYZHHBV9jhjFfYg/fLT+dP22x/ZXtfYg/fLT7swXLWAveMmRAM0xEmcxEzAj4nMQXCPlr0Rsdp2VqW7ftr0hvtr24kf/IbQsUrzefsy13blBk9rXoR6M3mzlD993OxNp+lJtQH1/vnavB/a9jckPwtGwrO6VDkA8hJ6ZgiWxDyARAjWYHEMAAFqiBuRWclBs+4vFKZu2MUMYCeWCyzOPjhMT/eq1baPNQuFbcMZXJEEHHf4SQHH90vUhwIud52dxrMFu3RZGbtmECeQpyHkkshcJcXqTI2Vw9lsl8mHG1cZmCIZt5gMT3nkyZuHNm4aTuGtQq5WOdR4qbGZZ+zIo4o90zmH4hH1WsCmyRYXN0wbi2ZC1XxZLUpyMKS3hd2AQRB5jER4qTLLbZwoO8bnUO6h7N2uZEigizH3ezgsvmLKPFSZdFpatvbmc4AKkKiJYwzYQjERjHdjmIuERIvXZytNnb2N1cnLrcsir45XangLJkt8WMYBBEGXjEPu0O7NDRRNzuy3MNkc27JuGSDkePJM45fyaTNvcqgJNckB9xjBgQmsiAhIZiYkDIfVZPG33e+3uThyTEFn8fD30GdrSgFhmEcSnwjMUwMfpkaTO7m3bdZs4d6VM3LDiJLHhZGTDzF5hEh4vuEySN8NvB4jibZwwBYY5znijHIBZc3FQyJhMiQlEjMTE4TExPfExPdMT6ksau3XLXGASQrCImZIy8IjCJ8fql9X7gc7XMBSwiYjMZlAgOMzERjMxGMzlqMCGZGY+iYnCY/XQZ2sxgAzCGOESU8RzAx3RPjNBIb9IXCsZicyjkhE4wmcImRnuni4aCQ36QuFYzE5lHMwJxhM4RMjPdPF/F9uy4JcQRwsc0jEzhEz+eaS23bERMrcBLLCfCcCiJwnDunylQGcgBsKACTmACMxmWETgIxGMzPCI8RepMitY2pmWcCiIugJiJmBKZ4xE5+sOXKeUvX9tsf2V7X2IP3y09eHdOPfETHd9MT3TVoudrTb9onZkyMhOM4ds3Hj4e07P9bjy5eGsMZmZmIGBjGe/uEYiIj8URlH1fyFx+yOnXOz0vsT2hcbQsXvtj7Y+1tm8bFEPn7RcfOfydbR2ntm1ZbbSTcKv727vFKQVqwzYQtMw+c3Ye0+uIfUrDslnt/bFtbRE4xClOhaxifflGIjH4suamsFTGXW8XBkIHMWdx5gx4sPdWzvl/aPyyy2vlutbHaTk234NYduvLYbVJ+ftIfhfrZK2JaLD5X2qte0NpWuz9to3C8+7tnMTtDtNmSQ/DrZum8Dwe3f1sjZ207FG0L60vht+yJwNV1u7cFtuGJESvcm/fvDDtzcgt+dq1sLHtB3sRaJ2aGy7wAAxy9pWm4dbPEPwb1grN9Ztf7Nsctpt/tdpt3xr/4eT/FWytmTsUPRRbGbaYCe2ouwV7Na2594OWMkgrdiJkebP8FbMsvkr/N8bFv3Ntk+Utzn3m783asvHvcn9/PSU2dg6x9AO17gFoHIzaHt28H5H/VWxtmbM2eMbLDZVzs9aQO8R2oON5LMt5I+z42AHzp+esd9k2CucPHcneM3n48pR858OXzVsHY1tsKPRntTNrrtrdV2raG7jJkYJZ83k9nu/al5jPPkrZlj8jn6CudYuWq13Xbdytm+UvzC/LnPf5P/AHr/AHB6C/vrqGDA721AwKIISEmjmEse6YmPGK2JsnfbGRPyVZ2uzLQ2XO+3faWMQ19ui7Yjg3CzMN0DTyV6PWR7bTsjZTrbYu0V7OJO9a5g3zl2Sb25Qn2HZ2Ao2i1Wf+nzN2PsxG2mei/o9eJs7RVqG7uO3Xfb+zH/AFcijZvPahuvrVsqzftK29GdiMt7BdnY3e9abLhd/cBaMfa29y4fZe0NvQfo2C2kvZWeLi12LtNWz3nJ7zNsxe0XEu3uB3Z+wMmq4/mqtNj3M7N287tHYrYcirZlvvDugBjGGDkERqA94ZW+6JAZgVUzNyfonsqXY+Mx7bdmWPxFGOOPFwj6kui7ZabJXFwy6ALaM1vbxEsXCM+WBnA5h4l8Q5fLVkjMO3U2n+rE2K2oJT8wgG+eVwjMvga/zUsD3Xo7tVq84eQ/lMuMfyv8VWdpb29gzZxrbbW4KaAMuLdb+MIzHmBh8H1vhqy2YpKW2vyW+0C2lhIK5gM+dZEZQQZMWMylmz1bouVt2iCGx8nqvWAuAGS3jWvALVEwU4MWsmkfxFlEKXailW2toJzMtrc5Fabi2DNvDDGCylMmzHMRCBZuAasIdf8AyvuyQvZlrd/eeHsmbhjrcctx+Eu/PVnbDv8AbG0bYWPVb3D1JBVvIqWzM4eCT+cBh5fgOmn2aNk7TfuYnAJbKlhJzEeM5RiIx8vFly5izWGzz3Poxb7SznaKIyuYBXtDZ5ij66/Ifx/lKWgbvZtlc3I2ywAc5yQsNa4ygMzA45Iy8X9an7Y/7Sy/+qicSPlGx3cvAFsn2q82YQIxjixwwMuHL8XDWz7Kz/09aptMqFL7TbmZ77e/aEZd0e/Zn4j89WKxNm3HriHKApNEWbsscUTimTHEPgIhzVbJvL9Xo5YFZWzli8SxunC8xUfCw1r8gTH5VKWhkbItN4lYwILPO/OAjGMDAljGSOEfL8P8XqY5x29hkWsZM5y3iyLCI75wGJmfyRrK2/t7farVWp7u5McYV2S3aBMAGFwtYq3NwfCr46sYReXWw9oiSH2Fjbb9orZuMlmLbjcyyMQYucguEM2SrS3PNsi/vN6nZighTw3zAE70nbyLlRB/BlK3QBmDJVss1s/yNNluJBbw6WW7yZmZwiMu787DnzcdW6rTPcXSxty2erZ1yIjkmIMUsNNwkccF3EQJebNn9X22x/ZXtfYg/fLT1zIkMxMTE4TEx3xMTHhMU5naYPeb6TmTzR780+P0fVy8PlrGZmcZme+ZmffPqiSXOYWRE4TIFEiURPunCZoLu7tosL+22Te7PCyue5wmara9t7tL/vddyW9Q9c299Z539nMwOtkGe3r++exO07hSVJtrY7e3WHGfG01MW1i1MyW4Z8/9FTJc6ZN1y6SIt45pZjLEu+cIiImfjkSP4vVMxjExOE4YxPjH5qmcJjCYx7pjHHv+nv8AVMzOERjM4zhEYR+qKISewFLndhAAIKWKwEAjuGIEY7o+LMXmKscMYmY92MeH/mpnCJnCMe6Jnxwj8eEerHujCMfdHj3UY7u/tG2N2pgQYMU2O/EZ8DGe9bI4wLylxEJGJMC3RbRuwhcZEDIr4fp+n+tUzhGOEY90Y+OFEIPt2QxRGsGxBfjWwSAv0wVXVsSblJpcMbO2eEyBjIHxhb5hnDwkJEvyqxiYnGJjumJj3xUzj9MT3/rox+8Nn22zLbdhAYW6M0LEvrFxzidTMTEx7/1TE1MxOExjE4ThMYT+uK/VPhP4po4NxAtcQsIWta1hALWtY8IAMR4R8RERcREXr/N6sYmJiYmPGJj312cAaYMuJRbItzeYY5DcaxGTnHGYjy5vhr9Pq/N+jw+7/RX/AOwr9E/xljj44++vz4fj9X5v1er7bY/sr2vsQfvlp/On7bY/sr2sO6yDxiCj+GWnumJioXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrpqF6SumoXpK6ahekrprL3Xtj5REPFV745YjGvsQfvlp/On7bY/sr2v//EAC8RAAECAwUGBAcAAAAAAAAAAAECAwARMxAgYHGxBBIxQWJyEyEiQCMwMlBRweH/2gAIAQEBAT8Acqs9x0OKXajXYvUQ5VZzOhxS7UahyqzmdDcmnlHVysMb1gPtjgJplxwqKBOXEzlCm1I8lDjy/sBHJMSgsqSk9ESMrHajUOVWczobiVqmEE+j8wk+kA/TdTcl7SV0fKlYft+yIWvZ3kJE1HdkZyhtqg09UgJ8NzqhOz/DjdrJ7I25vcQ3Y7UahyqzmdDcCIldGH3ajUOVWczocUu1Gocqs5nQweOKHarXYv8AUOVWczocUu1Go//EAC0RAAAEAQsDBAMAAAAAAAAAAAABAgMRBBASITEyM0FgcYETIiMgQFDhU2HB/9oACAECAQE/AEYbnAzLVDdxzdIRhucDMtT5hu45ukIw3OBmU5EdKjXV+gRndO0piEJj9sWgluttnBZwI7KohC0qOKDqK0/oGokn3KFUO0wTqe1MbwKFapm7jm6QjDc4GZTqk6emqUmyRSmBxbj/AGywKOKjM6jicfSfwMfRH5OUrQlxlSjopKlGqIcWflcaFKkjuUOt5B+ISVynShM3cc3SEYbnAzKYjgClD3VN2PkVaDjEzj3KtPUjdxzdIRhucDMgU1cRV96jzDdxzdIRhucDMtT5hu45ukIw3OBmWp8w3cc3SP/Z"},5314:(A,t,e)=>{A.exports=e.p+"assets/img/tests-pr-output.785d582c.jpg"},3183:(A,t,e)=>{A.exports=e.p+"assets/img/vrt-change-summary.67fc2ecd.jpg"},6164:(A,t,e)=>{A.exports=e.p+"assets/img/vrt-results-ui.e19ec985.jpg"}}]);