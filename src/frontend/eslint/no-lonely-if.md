[&#x2190; Back](./)
# no-lonely-if

> Discourage if statements as the only statement in else blocks

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
if (condition) {
    // ...
} else if (anotherCondition) {
    // ...
} else {
    // ...
}

```

</div>

 
<div slot="incorrect">

```js
if (foo) {
    // ...
} else {
    if (bar) {
        // ...
    }
}

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    }
}

```

</div>

 
</code-highlight>

