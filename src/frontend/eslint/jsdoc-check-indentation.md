[&#x2190; Back](./)
# jsdoc/check-indentation <badge text="warn" type="warn" vertical="middle"/>

> Reports invalid padding inside JSDoc blocks.

Ignores parts enclosed in Markdown "code block"'s. For example, the following description is not reported:

```js
/**
 * Some description:
 * ```html
 * <section>
 *   <title>test</title>
 * </section>
 * ```
 */
```


## Examples

<code-highlight>
 
<div slot="correct">

<<< @/packages/eslint-config/rules/jsdoc/check-indentation/correct.js

</div>

 
<div slot="incorrect">

<<< @/packages/eslint-config/rules/jsdoc/check-indentation/incorrect.js

</div>

 
</code-highlight>

