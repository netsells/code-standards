[&#x2190; Back](./)
# no-empty-function

> Disallow empty functions

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
function foo () {
    // do nothing.
}

let foo = function () {
    // any clear comments.
};

let foo = () => {
    bar();
};

let obj = {
    foo: function () {
        // do nothing.
    },

    foo () {
        // do nothing.
    },
};

class A {
    constructor () {
        // do nothing.
    }

    foo () {
        // do nothing.
    }
}

```

</div>

 
<div slot="incorrect">

```js
function foo () {}

let foo = function () {};

let foo = () => {};

let obj = {
    foo: function () {},

    foo () {},
};

class A {
    constructor() {}

    foo() {}
}

```

</div>

 
</code-highlight>

