[&#x2190; Back](./)
# prefer-template

> Encourage using template literals instead of '+' operator on strings

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const greeting = `Hello, ${this.name}`;
```

</div>

 
<div slot="incorrect">

```js
const greeting = 'Hello, ' + this.name;
```

</div>

 
</code-highlight>

