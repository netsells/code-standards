import{_ as e,o as l,c as o,e as i}from"./app.2be90a9a.js";const a={},t=i('<h1 id="pull-request-labelling" tabindex="-1"><a class="header-anchor" href="#pull-request-labelling" aria-hidden="true">#</a> Pull Request Labelling</h1><p>When you open a Pull Request, two labels will be automatically applied for you:</p><ul><li>A label indicating the size of the PR, based on lines changed</li><li>A label indicating the type of PR, based on the branch you&#39;re asking to merge from</li></ul><p>In addition, you <strong>must</strong> add the following labels if appropriate:</p><ul><li><code>critical</code> if the PR must be addressed urgently</li><li><code>sanity-check</code> if the code included in this PR has already been reviewed <ul><li>e.g. An <code>epic/* -&gt; develop</code> PR</li></ul></li><li><code>deployment</code> if this PR will upload a new production build <ul><li>Should only be used on <code>release/* -&gt; master</code> PRs</li></ul></li></ul><p>Additionally, if you have started to review a large PR, you can add an <code>in-progress</code> label to ensure someone else doesn&#39;t also start a review.</p>',6),d=[t];function n(s,c){return l(),o("div",null,d)}const u=e(a,[["render",n],["__file","pull-request-labels.html.vue"]]);export{u as default};