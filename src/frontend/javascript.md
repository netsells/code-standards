# JavaScript

We use the latest specification of ECMAScript on greenfield projects with a build pipeline (gulp/webpack), making for concise code that compiles for compatibility in older browsers.

## Linting

We make use of an automated approach of enforcing JavaScript code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

See [Eslint](./linting/eslint/).

## UI Framework

Our JavaScript framework of choice is [Vue.js](https://vuejs.org/v2/guide/). Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

For Vue standards, check the [Vue Section](./vue.html).

## Documentation

We use several methods of maintaining documentation during the development process.

### Method and function names

Class methods and static functions have meaningful names that describe the action or output of the logic therein.

### JSDoc

All methods and functions must have a JSDoc block associated with it. This provides additional intellisense and autocompletion to IDEs and code editors by defining what the function does and the input and output values. This also gives us the ability to automatically generate code API documentation via the JSDoc CLI tool.

