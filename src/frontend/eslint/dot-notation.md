[&#x2190; Back](./)
# dot-notation

> Forces using dot notation exclusively for getting object properties.

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const a = foo.bar;

const b = 'Hello';
const c = foo[b];

```

</div>

 
<div slot="incorrect">

```js
const a = foo['bar'];

```

</div>

 
</code-highlight>

