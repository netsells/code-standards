[&#x2190; Back](./)
# no-else-return

> Disallow else blocks after return statements in if statements

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
function foo() {
    if (x) {
        return a;
    }

    if (y) {
        return b;
    }

    return c;
}
```

</div>

 
<div slot="incorrect">

```js
function foo() {
    if (x) {
        return a;
    } else if (y) {
        return b;
    } else {
        return c;
    }
}
```

</div>

 
</code-highlight>

