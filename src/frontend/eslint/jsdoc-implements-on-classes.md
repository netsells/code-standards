[&#x2190; Back](./)
# jsdoc/implements-on-classes <badge text="warn" type="warn" vertical="middle"/>

> Reports an issue with any non-constructor function using `@implements`.

Constructor functions, whether marked with `@class`, `@constructs`, or being an ES6 class constructor, will not be flagged.

To indicate that a function follows another function's signature, one might instead use `@type` to indicate the `@function` or `@callback` to which the function is adhering.


## Examples

<code-highlight>
 
<div slot="correct">

<<< @/packages/eslint-config/rules/jsdoc/implements-on-classes/correct.js

</div>

 
<div slot="incorrect">

<<< @/packages/eslint-config/rules/jsdoc/implements-on-classes/incorrect.js

</div>

 
</code-highlight>

