[&#x2190; Back](./)
# vue/no-shared-component-data <badge text="error" type="error" vertical="middle"/>

> When using the data property on a component (i.e. anywhere except on new Vue), the value must be a function that returns an object.


## Examples

<code-highlight>
 
<div slot="correct">

<<< @/packages/eslint-config/rules/vue/no-shared-component-data/correct.js

</div>

 
<div slot="incorrect">

<<< @/packages/eslint-config/rules/vue/no-shared-component-data/incorrect.js

</div>

 
</code-highlight>

