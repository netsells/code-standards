[&#x2190; Back](./)
# vue/require-prop-types

> In committed code, prop definitions should always be as detailed as possible, specifying at least type(s).

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
export default {
    props: {
        status: String,
    },

    props: {
        status: {
            type: String,
        },
    },
}

```

</div>

 
<div slot="incorrect">

```js
export default {
    props: ['status'],
}

```

</div>

 
</code-highlight>

