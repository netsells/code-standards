[&#x2190; Back](./)
# vue/no-dupe-keys

> Disallow duplicate key names to avoid overwriting

 

## Examples

<code-highlight>
 
<div slot="incorrect">

```js
export default {
    props: {
        foo: String,
    },

    computed: {
        foo: {
            get () {}
        },
    },

    data() {
        return {
            foo: null,
        };
    },

    methods: {
        foo () {},
    },
}

```

</div>

 
</code-highlight>

