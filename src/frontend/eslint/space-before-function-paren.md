[&#x2190; Back](./)
# space-before-function-paren

> Require a space before function parenthesis 

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
function foo() {
    // ...
}

let bar = function() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

let foo = {
    bar() {
        // ...
    }
};

var foo = async() => 1
```

</div>

 
<div slot="incorrect">

```js
function foo () {
    // ...
}

let bar = function () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

let foo = {
    bar () {
        // ...
    }
};

var foo = async() => 1
```

</div>

 
</code-highlight>

