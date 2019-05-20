# Eslint

We make use of an automated approach of enforcing JavaScript code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

## Rules

The following rules are currently configured.

| Rule | Description | Link |
|---|---|---|
<% pages.forEach(({ name, rulename, filename, description }, index) => { %>| [<%= name %>](./<%= filename %>.md) | <%= description.replace(/(?:\r\n|\r|\n)/g, ' ') %> | [Link](https://eslint.org/docs/rules/<%= rulename %>) |
<% }); %>
