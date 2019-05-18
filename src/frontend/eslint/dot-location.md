[&#x2190; Back](./)
# dot-location

> Discourage placing the dot on the property rather than the property

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const item = object
    .property;
const item = object.property;

```

</div>

 
<div slot="incorrect">

```js
const item = object.
    property;

```

</div>

 
</code-highlight>

