[&#x2190; Back](./)
# no-unneeded-ternary

> Disallows ternary operators when simpler alternatives exist

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const a = x === 2 ? 'yes' : 'No';
const a = x !== false;
const a = x ? 'Yes' : 'No';

```

</div>

 
<div slot="incorrect">

```js
const a = x === 2 ? true : false;
const b = x ? true : false;

```

</div>

 
</code-highlight>

