[&#x2190; Back](./)
# vue/require-default-prop

> This rule requires default value to be set for each props that are not marked as required.

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
export default {
    props: {
        a: {
            type: Number,
            required: true,
        },
        b: {
            type: Number,
            default: 0,
        },
        c: {
            type: Number,
            default: 0,
            required: false,
        },
    },
}

```

</div>

 
<div slot="incorrect">

```js
export default {
    props: {
        a: Number,
        b: [Number, String],
        c: {
            type: Number,
        },
        d: {
            type: Number,
            required: false,
        },
    },
}

```

</div>

 
</code-highlight>

