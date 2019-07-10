[&#x2190; Back](./)
# netsells/no-global-timeouts

> Prevent setTimeout and related functions being used in Vue components

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
import VueSetTimeout from '@netsells/vue-set-timeout';

export default {
    mixins: [VueSetTimeout],

    mounted() {
        this.setTimeout(this.handleTimeout, 1000);
    },

    methods: {
        handleTimeout() {
            // handle
        },
    },
};
```

</div>

 
<div slot="incorrect">

```js
export default {
    mounted() {
        setTimeout(this.handleTimeout, 1000);
    },

    methods: {
        handleTimeout() {
            // handle
        },
    },
};
```

</div>

 
</code-highlight>

