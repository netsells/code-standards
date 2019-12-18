[&#x2190; Back](./)
# <%= name %> <badge text="<%- warningType %>" type="<%- warningType %>" vertical="middle"/>

> <%= description %>
<% if (Object.keys(examples).length) { %>
## Examples

<code-highlight>
<% Object.keys(examples).forEach((example) => { %> 
<div slot="<%= example %>">

<<< <%= examples[example].importPath %>

</div>

<% }); %> 
</code-highlight>
<% } %>
