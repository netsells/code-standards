[&#x2190; Back](./)
# no-mixed-spaces-and-tabs

> Disallow mixed spaces and tabs for indentation

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
function add(x, y) {
    // --->return x + y;
    return x + y;
}

```

</div>

 
<div slot="incorrect">

```js
function add(x, y) {
    // --->..return x + y;

    return x + y;
}

function main() {
    // --->var x = 5,
    // --->....y = 7;

    var x = 5,
        y = 7;
}

```

</div>

 
</code-highlight>

