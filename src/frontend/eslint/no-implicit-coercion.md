[&#x2190; Back](./)
# no-implicit-coercion

> Discourage using confusing and sometimes unreadable JS tricks to do simple functions.

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
// Boolean
const b = Boolean(foo);
const b = foo.includes('.');

// Number
const n = Number(foo);
const n = parseFloat(foo);
const n = parseInt(foo, 10);

// Strings
const s = String(foo);
foo = String(foo);
```

</div>

 
<div slot="incorrect">

```js
// Boolean
const b = !!foo;
const b = ~foo.indexOf('.');

// Number
const n = +foo;
const n = 1 * foo;

// Strings
const s = '' + foo;
const s = `` + foo;
foo += '';
foo += ``;
```

</div>

 
</code-highlight>

