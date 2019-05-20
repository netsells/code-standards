[&#x2190; Back](./)
# vue/return-in-computed-property

> Enforce that a return statement is present in computed property

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
export default {
    computed: {
        foo () {
            return 'bar';
        },
    },
}

```

</div>

 
<div slot="incorrect">

```js
export default {
    computed: {
        foo () {

        },
    },
}

```

</div>

 
</code-highlight>

