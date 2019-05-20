[&#x2190; Back](./)
# no-var

> Discourage using 'var' for creating variables - require using let/const instead

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
const count = posts.length;

// or, if the value can be changed

let count = posts.length;

if (additionalPosts.length) {
   count += additionalPosts.length;
}
```

</div>

 
<div slot="incorrect">

```js
var count = posts.length;
```

</div>

 
</code-highlight>

