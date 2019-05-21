[&#x2190; Back](./)
# no-empty

> Disallow empty block statements

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
if (foo) {
    // empty
}

while (foo) {
    /* empty */
}

try {
    doSomething();
} catch (ex) {
    // continue regardless of error
}

try {
    doSomething();
} finally {
    /* continue regardless of error */
}
```

</div>

 
<div slot="incorrect">

```js
if (foo) {
}

while (foo) {
}

switch(foo) {
}

try {
    doSomething();
} catch(ex) {

} finally {

}
```

</div>

 
</code-highlight>

