[&#x2190; Back](./)
# no-debugger

> Disallows debugger statements

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
function isTruthy(x) {
    return Boolean(x); // set a breakpoint at this line
}

```

</div>

 
<div slot="incorrect">

```js
function isTruthy(x) {
    debugger;
    return Boolean(x);
}

```

</div>

 
</code-highlight>

