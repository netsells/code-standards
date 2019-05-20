[&#x2190; Back](./)
# no-floating-decimal

> Disallow floating decimals.

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const num = 0.5;
const ber = 2.0;
const wang = -0.7;
```

</div>

 
<div slot="incorrect">

```js
const num = .5;
const ber = 2.;
const wang = -.7;
```

</div>

 
</code-highlight>

