# Eslint

We make use of an automated approach of enforcing JavaScript code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

[Documentation](https://github.com/netsells/code-standards/tree/master/packages/eslint-config)

## Rules

The following rules are currently configured.

| Rule | Description | Link |
|---|---|---|
<% pages.forEach(({ name, rulename, filename, description, warningText, warningType, ruleLink }, index) => { %>| [<%= name %>](./<%= filename %>.md)<br> <badge text="<%- warningText %>" type="<%- warningType %>" vertical="middle"/> | <%= description.replace(/(?:\r\n|\r|\n)/g, ' ') %> | [Link](<%= ruleLink %>) |
<% }); %>
