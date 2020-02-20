Reports invalid padding inside JSDoc blocks.

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
