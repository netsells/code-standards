[&#x2190; Back](./)
# vue/no-shared-component-data

> When using the data property on a component (i.e. anywhere except on new Vue), the value must be a function that returns an object.

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
export default {
    data () {
        return {
            foo: 'bar',
        };
    },
}
```

</div>

 
<div slot="incorrect">

```js
export default {
    data: {
        foo: 'bar',
    },
}
```

</div>

 
</code-highlight>

