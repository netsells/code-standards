[&#x2190; Back](./)
# array-bracket-newline

> This rule enforces line breaks after opening and before closing array brackets.

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const a = [];
const b = [1];
const c = [1, 2];
const d = [
    1,
    2
];
const e = [
    function foo() {
        dosomething();
    }
];
const f = [
    {
        foo: 'bar',
    },
    {
        foo: 'bar',
    },
];
```

</div>

 
<div slot="incorrect">

```js
const a = [
];
const b = [
    1
];
const c = [
    1, 2
];
const d = [1,
    2];
const e = [function foo() {
    dosomething();
}];
const f = [{
    foo: 'bar',
}, {
    foo: 'bar',
}];
```

</div>

 
</code-highlight>

