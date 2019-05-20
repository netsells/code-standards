[&#x2190; Back](./)
# vue/no-side-effects-in-computed-properties

> It is considered a very bad practice to introduce side effects inside computed properties. It makes the code unpredictable and hard to understand.

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
export default {
    computed: {
        fullName () {
            return `${this.firstName} ${this.lastName}`;
        },

        reversedArray () {
            return this.array.slice(0).reverse();
        },
    },
}
```

</div>

 
<div slot="incorrect">

```js
export default {
    computed: {
        fullName () {
            this.firstName = 'lorem'; // <- side effect
            return `${this.firstName} ${this.lastName}`;
        },

        reversedArray () {
            return this.array.reverse(); // <- side effect
        },
    },
}
```

</div>

 
</code-highlight>

