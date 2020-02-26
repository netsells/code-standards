# Stylelint

We make use of an automated approach of enforcing CSS code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

## Rules

The following rules are currently configured.

| Rule | Description | Link |
|---|---|---|
<% pages.forEach(({ name, rulename, filename, description, warningType, ruleLink }, index) => { %>| [<%= name %>](./<%= filename %>.md)<br> <badge text="<%- warningType %>" type="<%- warningType %>" vertical="middle"/> | <%= description.replace(/(?:\r\n|\r|\n)/g, ' ') %> | [Link](<%= ruleLink %>) |
<% }); %>
