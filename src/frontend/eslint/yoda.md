[&#x2190; Back](./)
# yoda

> Discourage code typed like yoda would speak

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
if (5 & value) {
    // ...
}

if (value === 'red') {
    // ...
}

if (x < -1 || 1 < x) {
    // ...
}

```

</div>

 
<div slot="incorrect">

```js
if ('red' === color) {
    // ...
}

if (true == flag) {
    // ...
}

if (5 > count) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}

```

</div>

 
</code-highlight>

