[&#x2190; Back](./)
# prefer-const

> Flags variables that are defined using 'let' but then never reassigned

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const a = 3;
console.log(a);

for (const i in [1, 2, 3]) {
    console.log(i);
}

let a;
a = 1;
a = 2;
return a;

let a;
if (true) {
    a = 1;
}

```

</div>

 
<div slot="incorrect">

```js
let a = 3;
console.log(a);

let a;
a = 1;
return a;

for (let i in [1, 2, 3]) {
    console.log(i);
}

```

</div>

 
</code-highlight>

