[&#x2190; Back](./)
# no-sparse-arrays

> Disallows array literals with empty slots

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
var items = [];
var items = new Array(23);

// trailing comma (after the last element) is not a problem
var colors = [ "red", "blue", ];
```

</div>

 
<div slot="incorrect">

```js
var items = [,];
var colors = [ "red",, "blue" ];
```

</div>

 
</code-highlight>

