[&#x2190; Back](./)
# no-use-before-define

> Prevents use of an identifier that has not yet been declared

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const a = 10;
alert(a);

function f() {};
f();

const b = 1;
function g() {
    return b;
}

```

</div>

 
<div slot="incorrect">

```js
alert(a);
const a = 10;

f();
function f() {};

function g() {
    return b;
}
const b = 1;

```

</div>

 
</code-highlight>

