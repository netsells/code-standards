[&#x2190; Back](./)
# comma-dangle

> Requires trailing commas when the last element or property is in a different line than the closing ] or } and disallows trailing commas when the last element or property is on the same line as the closing ] or }

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
let object = { a: 'b', c: 'd' };

let object = {
    a: 'b',
    c: 'd',
};

let array = ['a', 'b', 'c'];

let array = [
    'a',
    'b',
    'c',
];

```

</div>

 
<div slot="incorrect">

```js
let object = { a: 'b', c: 'd', };

let object = {
    a: 'b',
    c: 'd'
};

let array = ['a', 'b', 'c',];

let array = [
    'a',
    'b',
    'c'
];

```

</div>

 
</code-highlight>

