[&#x2190; Back](./)
# prefer-arrow-callback

> Forces use of ES6 arrow function expressions

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
foo((a) => {
    return a;
});

foo(() => {
    return this.a;
});

```

</div>

 
<div slot="incorrect">

```js
foo(function(a) {
    return a;
});

foo(function() {
    return this.a;
}.bind(this));

```

</div>

 
</code-highlight>

