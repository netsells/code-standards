[&#x2190; Back](./)
# jsdoc/check-types <badge text="warn" type="warn" vertical="middle"/>

> Reports invalid types.

By default, ensures that the casing of native types is the same as in this list:


| Types |
| ----- |
| `undefined` |
| `null` |
| `boolean` |
| `number` |
| `bigint` |
| `string` |
| `symbol` |
| `object` |
| `Array` |
| `Function` |
| `Date` |
| `RegExp` |


## Examples

<code-highlight>
 
<div slot="correct">

<<< @/packages/eslint-config/rules/jsdoc/check-types/correct.js

</div>

 
<div slot="incorrect">

<<< @/packages/eslint-config/rules/jsdoc/check-types/incorrect.js

</div>

 
</code-highlight>

