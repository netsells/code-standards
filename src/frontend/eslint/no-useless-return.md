[&#x2190; Back](./)
# no-useless-return

> Reports the use of redundant return statements

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
function foo() { return 5; }

function foo() {
    return doSomething();
}
```

</div>

 
<div slot="incorrect">

```js
function foo() { return; }

function foo() {
    doSomething();
    return;
}
```

</div>

 
</code-highlight>

