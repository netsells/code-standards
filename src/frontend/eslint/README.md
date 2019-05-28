# Eslint

We make use of an automated approach of enforcing JavaScript code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

## Rules

The following rules are currently configured.

| Rule | Description | Link |
|---|---|---|
| [arrow-spacing](./arrow-spacing.md) | Requires spacing before and after arrow functions arrow  | [Link](https://eslint.org/docs/rules/arrow-spacing) |
| [comma-dangle](./comma-dangle.md) | Requires trailing commas when the last element or property is in a different line than the closing ] or } and disallows trailing commas when the last element or property is on the same line as the closing ] or }  | [Link](https://eslint.org/docs/rules/comma-dangle) |
| [curly](./curly.md) | Forces formatting of curly brace conventions  | [Link](https://eslint.org/docs/rules/curly) |
| [dot-location](./dot-location.md) | Discourage placing the dot on the property rather than the property  | [Link](https://eslint.org/docs/rules/dot-location) |
| [dot-notation](./dot-notation.md) | Forces using dot notation exclusively for getting object properties.  | [Link](https://eslint.org/docs/rules/dot-notation) |
| [eol-last](./eol-last.md) | Force new lines at end of files  | [Link](https://eslint.org/docs/rules/eol-last) |
| [eqeqeq](./eqeqeq.md) | Forces equality operators to be type-safe  | [Link](https://eslint.org/docs/rules/eqeqeq) |
| [key-spacing](./key-spacing.md) | Enforces spacing around the colon in object literal properties  | [Link](https://eslint.org/docs/rules/key-spacing) |
| [no-alert](./no-alert.md) | Disallow alert() function  | [Link](https://eslint.org/docs/rules/no-alert) |
| [no-cond-assign](./no-cond-assign.md) | Discourage conditional assignment of variables  | [Link](https://eslint.org/docs/rules/no-cond-assign) |
| [no-console](./no-console.md) | Disallow using the console  | [Link](https://eslint.org/docs/rules/no-console) |
| [no-debugger](./no-debugger.md) | Disallows debugger statements  | [Link](https://eslint.org/docs/rules/no-debugger) |
| [no-duplicate-imports](./no-duplicate-imports.md) | Disallow duplicate imports  | [Link](https://eslint.org/docs/rules/no-duplicate-imports) |
| [no-else-return](./no-else-return.md) | Disallow else blocks after return statements in if statements  | [Link](https://eslint.org/docs/rules/no-else-return) |
| [no-empty-function](./no-empty-function.md) | Disallow empty functions  | [Link](https://eslint.org/docs/rules/no-empty-function) |
| [no-empty](./no-empty.md) | Disallow empty block statements  | [Link](https://eslint.org/docs/rules/no-empty) |
| [no-eval](./no-eval.md) | Disallow the use of the eval() function  | [Link](https://eslint.org/docs/rules/no-eval) |
| [no-floating-decimal](./no-floating-decimal.md) | Disallow floating decimals.  | [Link](https://eslint.org/docs/rules/no-floating-decimal) |
| [no-implicit-coercion](./no-implicit-coercion.md) | Discourage using confusing and sometimes unreadable JS tricks to do simple functions.  | [Link](https://eslint.org/docs/rules/no-implicit-coercion) |
| [no-lonely-if](./no-lonely-if.md) | Discourage if statements as the only statement in else blocks  | [Link](https://eslint.org/docs/rules/no-lonely-if) |
| [no-mixed-spaces-and-tabs](./no-mixed-spaces-and-tabs.md) | Disallow mixed spaces and tabs for indentation  | [Link](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs) |
| [no-multiple-empty-lines](./no-multiple-empty-lines.md) | Restricts the number of allowed empty lines  | [Link](https://eslint.org/docs/rules/no-multiple-empty-lines) |
| [no-restricted-imports](./no-restricted-imports.md) | Disallows importing specific libraries. We disallow lodash as a whole in favour of specific imports  | [Link](https://eslint.org/docs/rules/no-restricted-imports) |
| [no-sparse-arrays](./no-sparse-arrays.md) | Disallows array literals with empty slots  | [Link](https://eslint.org/docs/rules/no-sparse-arrays) |
| [no-template-curly-in-string](./no-template-curly-in-string.md) | Throw a warning when a regular string contains a text which looks like a template literal placeholder  | [Link](https://eslint.org/docs/rules/no-template-curly-in-string) |
| [no-unneeded-ternary](./no-unneeded-ternary.md) | Disallows ternary operators when simpler alternatives exist  | [Link](https://eslint.org/docs/rules/no-unneeded-ternary) |
| [no-unused-vars](./no-unused-vars.md) | Prevents leaving unused imports & vars in code  | [Link](https://eslint.org/docs/rules/no-unused-vars) |
| [no-use-before-define](./no-use-before-define.md) | Prevents use of an identifier that has not yet been declared  | [Link](https://eslint.org/docs/rules/no-use-before-define) |
| [no-useless-return](./no-useless-return.md) | Reports the use of redundant return statements  | [Link](https://eslint.org/docs/rules/no-useless-return) |
| [no-var](./no-var.md) | Discourage using 'var' for creating variables - require using let/const instead  | [Link](https://eslint.org/docs/rules/no-var) |
| [prefer-arrow-callback](./prefer-arrow-callback.md) | Forces use of ES6 arrow function expressions  | [Link](https://eslint.org/docs/rules/prefer-arrow-callback) |
| [prefer-const](./prefer-const.md) | Flags variables that are defined using 'let' but then never reassigned  | [Link](https://eslint.org/docs/rules/prefer-const) |
| [prefer-template](./prefer-template.md) | Encourage using template literals instead of '+' operator on strings  | [Link](https://eslint.org/docs/rules/prefer-template) |
| [quotes](./quotes.md) | Enforce the use of single quotes when using JavaScript  | [Link](https://eslint.org/docs/rules/quotes) |
| [semi](./semi.md) | Require a semi-colon at the end of every line  | [Link](https://eslint.org/docs/rules/semi) |
| [space-before-function-paren](./space-before-function-paren.md) | Require a space before function parenthesis   | [Link](https://eslint.org/docs/rules/space-before-function-paren) |
| [template-curly-spacing](./template-curly-spacing.md) | Throw a warning when a regular string contains a text which looks like a template literal placeholder  | [Link](https://eslint.org/docs/rules/template-curly-spacing) |
| [valid-jsdoc](./valid-jsdoc.md) | Require jsdoc data to be consistently valid  | [Link](https://eslint.org/docs/rules/valid-jsdoc) |
| [yoda](./yoda.md) | Discourage code typed like yoda would speak  | [Link](https://eslint.org/docs/rules/yoda) |
| [require-jsdoc-except/require-jsdoc](./require-jsdoc-except-require-jsdoc.md) | Exclude certain methods from requiring JSDoc definitions.  | [Link](https://eslint.org/docs/rules/require-jsdoc) |
| [vue/attribute-hyphenation](./vue-attribute-hyphenation.md) | Force attributes to be hyphenated rather than camelCase  | [Link](https://eslint.org/docs/rules/attribute-hyphenation) |
| [vue/component-name-in-template-casing](./vue-component-name-in-template-casing.md) | Enforce specific casing for the component naming style in template | [Link](https://eslint.org/docs/rules/component-name-in-template-casing) |
| [vue/eqeqeq](./vue-eqeqeq.md) | Require the use of ```===``` and ```!==``` | [Link](https://eslint.org/docs/rules/eqeqeq) |
| [vue/html-closing-bracket-newline](./vue-html-closing-bracket-newline.md) | Require or disallow a line break before tag's closing brackets | [Link](https://eslint.org/docs/rules/html-closing-bracket-newline) |
| [vue/html-indent](./vue-html-indent.md) | Enforce 4 space continuous indentation  | [Link](https://eslint.org/docs/rules/html-indent) |
| [vue/html-quotes](./vue-html-quotes.md) | Force double quote style in html syntax  | [Link](https://eslint.org/docs/rules/html-quotes) |
| [vue/key-spacing](./vue-key-spacing.md) | Enforce consistent spacing between keys and values in object literal properties | [Link](https://eslint.org/docs/rules/key-spacing) |
| [vue/match-component-file-name](./vue-match-component-file-name.md) | Require component name property to match its file name | [Link](https://eslint.org/docs/rules/match-component-file-name) |
| [vue/max-attributes-per-line](./vue-max-attributes-per-line.md) | Limits the maximum number of attributes/properties per line to improve readability.  | [Link](https://eslint.org/docs/rules/max-attributes-per-line) |
| [vue/mustache-interpolation-spacing](./vue-mustache-interpolation-spacing.md) | Expect one space between expression and curly brackets.  | [Link](https://eslint.org/docs/rules/mustache-interpolation-spacing) |
| [vue/name-property-casing](./vue-name-property-casing.md) | Force kebab-case component names  | [Link](https://eslint.org/docs/rules/name-property-casing) |
| [vue/no-dupe-keys](./vue-no-dupe-keys.md) | Disallow duplicate key names to avoid overwriting  | [Link](https://eslint.org/docs/rules/no-dupe-keys) |
| [vue/no-duplicate-attributes](./vue-no-duplicate-attributes.md) | When duplicate arguments exist, only the last one is valid  | [Link](https://eslint.org/docs/rules/no-duplicate-attributes) |
| [vue/no-multi-spaces](./vue-no-multi-spaces.md) | Remove multiple spaces in a row between attributes which are not used for indentation  | [Link](https://eslint.org/docs/rules/no-multi-spaces) |
| [vue/no-shared-component-data](./vue-no-shared-component-data.md) | When using the data property on a component (i.e. anywhere except on new Vue), the value must be a function that returns an object.  | [Link](https://eslint.org/docs/rules/no-shared-component-data) |
| [vue/no-side-effects-in-computed-properties](./vue-no-side-effects-in-computed-properties.md) | It is considered a very bad practice to introduce side effects inside computed properties. It makes the code unpredictable and hard to understand.  | [Link](https://eslint.org/docs/rules/no-side-effects-in-computed-properties) |
| [vue/no-textarea-mustache](./vue-no-textarea-mustache.md) | Disallows the use of mustaches within textareas  | [Link](https://eslint.org/docs/rules/no-textarea-mustache) |
| [vue/no-unused-vars](./vue-no-unused-vars.md) | Disallow unused variable definitions of v-for directives or scope attributes  | [Link](https://eslint.org/docs/rules/no-unused-vars) |
| [vue/object-curly-spacing](./vue-object-curly-spacing.md) | Enforce consistent spacing inside braces | [Link](https://eslint.org/docs/rules/object-curly-spacing) |
| [vue/order-in-components](./vue-order-in-components.md) | Enforce order in Vue component data  | [Link](https://eslint.org/docs/rules/order-in-components) |
| [vue/require-default-prop](./vue-require-default-prop.md) | This rule requires default value to be set for each props that are not marked as required.  | [Link](https://eslint.org/docs/rules/require-default-prop) |
| [vue/require-prop-types](./vue-require-prop-types.md) | In committed code, prop definitions should always be as detailed as possible, specifying at least type(s).  | [Link](https://eslint.org/docs/rules/require-prop-types) |
| [vue/return-in-computed-property](./vue-return-in-computed-property.md) | Enforce that a return statement is present in computed property  | [Link](https://eslint.org/docs/rules/return-in-computed-property) |
| [vue/script-indent](./vue-script-indent.md) | Enforce consistent indentation in ```<script>``` | [Link](https://eslint.org/docs/rules/script-indent) |
| [vue/this-in-template](./vue-this-in-template.md) | Disallow using "this" in template form  | [Link](https://eslint.org/docs/rules/this-in-template) |
| [vue/v-bind-style](./vue-v-bind-style.md) | Enforce the shorthand v-bind: syntax (:)  | [Link](https://eslint.org/docs/rules/v-bind-style) |
| [vue/v-on-function-call](./vue-v-on-function-call.md) | Enforce or forbid parentheses after method calls without arguments in ```v-on``` directives | [Link](https://eslint.org/docs/rules/v-on-function-call) |
| [vue/v-on-style](./vue-v-on-style.md) | Enforce the shorthand v-on: syntax (@)  | [Link](https://eslint.org/docs/rules/v-on-style) |

