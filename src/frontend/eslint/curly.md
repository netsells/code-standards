[&#x2190; Back](./)
# curly

> Forces formatting of curly brace conventions

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
if (foo) {
    return;
}

while (bar) {
    baz();
}

if (foo) {
    baz();
} else {
    qux();
}

```

</div>

 
<div slot="incorrect">

```js
if (foo) return;

while (bar)
    baz();

if (foo) {
    baz();
} else qux();

```

</div>

 
</code-highlight>

