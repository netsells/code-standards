[&#x2190; Back](./)
# template-curly-spacing

> Throw a warning when a regular string contains a text which looks like a template literal placeholder

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
`hello, ${ people.name }`;
`hello, ${
    people.name
}`;

```

</div>

 
<div slot="incorrect">

```js
`hello, ${people.name}`;
`hello, ${ people.name}`;
`hello, ${people.name }`;

```

</div>

 
</code-highlight>

