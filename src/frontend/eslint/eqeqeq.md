[&#x2190; Back](./)
# eqeqeq

> Forces equality operators to be type-safe

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
if (x === y) {
    // code
}

if ("" === text) {
    // code
}

if (obj.stuff !== undefined) {
    // code
}
```

</div>

 
<div slot="incorrect">

```js
if (x == y) {
    // code
}

if ("" == text) {
    //code
}

if (obj.stuff != undefined) {
    // code
}
```

</div>

 
</code-highlight>

