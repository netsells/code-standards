[&#x2190; Back](./)
# <%= name %>

> <%= description %>
 
<% if (Object.keys(examples).length) { %>
## Examples

<code-highlight>
<% Object.keys(examples).forEach((example) => { %> 
<div slot="<%= example %>">

```<%= examples[example].language %>
<%= examples[example].content %>
```

</div>

<% }); %> 
</code-highlight>
<% } %>
