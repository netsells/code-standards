[&#x2190; Back](./)
# vue/match-component-file-name

> Require component name property to match its file name
 

## Examples

<code-highlight>
 
<div slot="correct">

```js
// file name: src/MyComponent.js
new Vue({
    name: 'my-component',
    template: '<div />',
});
```

</div>

 
<div slot="incorrect">

```js
// file name: src/MyComponent.js
new Vue({
    name: 'm-component',
    template: '<div />',
});
```

</div>

 
</code-highlight>

