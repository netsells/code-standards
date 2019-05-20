[&#x2190; Back](./)
# no-eval

> Disallow the use of the eval() function

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
let obj = { x: 'foo' },
    key = "x",
    value = obj[key];

class A {
    foo() {
        // This is a user-defined method.
        this.eval("var a = 0");
    }

    eval() {

    }
}

```

</div>

 
<div slot="incorrect">

```js
let obj = { x: 'foo' },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

let foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");

window.eval("var a = 0");

global.eval("var a = 0");

```

</div>

 
</code-highlight>

