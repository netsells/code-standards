[&#x2190; Back](./)
# no-template-curly-in-string

> Throw a warning when a regular string contains a text which looks like a template literal placeholder

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const greeting = `Hello, ${name}`;

```

</div>

 
<div slot="incorrect">

```js
const greeting = "Hello, ${name}";

```

</div>

 
</code-highlight>

