[&#x2190; Back](./)
# <%= name %> <badge text="<%- warningType %>" type="<%- warningType %>" vertical="middle"/>

<%= description %>
<% if (Object.keys(examples).length) { %>
## Examples

<code-highlight>
<% Object.keys(examples).forEach((example) => { %> 
<template v-slot:<%= example %>>

@[code](<%= examples[example].importPath %>)

</template>

<% }); %> 
</code-highlight>
<% } %>
