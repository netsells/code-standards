[&#x2190; Back](./)
# no-cond-assign

> Discourage conditional assignment of variables

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const x;
if (x === 0) {
    const b = 1;
}

// Practical example that wraps the assignment in parentheses
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode));
}

// Practical example that wraps the assignment and tests for 'null'
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode) !== null);
}
```

</div>

 
<div slot="incorrect">

```js
const x;
if (x = 0) {
    const b = 1;
}

// Practical example that is similar to an error
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while (someNode = someNode.parentNode);
}
```

</div>

 
</code-highlight>

