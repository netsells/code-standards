[&#x2190; Back](./)
# netsells/no-dom-listeners

> Prevent DOM listeners being manually added/removed using addEventListener/removeEventListener

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<template>
    <div>
        <global-events
            @click="onDocumentClick"
        />
    </div>
</template>

<script>
    import GlobalEvents from 'vue-global-events';

    export default {
        components: {
            GlobalEvents,
        },

        methods: {
            onDocumentClick() {
                // handle
            },
        },
    };
</script>
```

</div>

 
<div slot="incorrect">

```vue
<template>
    <div>
    </div>
</template>

<script>
    export default {
        mounted() {
            document.addEventListener('click', this.onDocumentClick);
        },

        methods: {
            onDocumentClick() {
                // handle
            },
        },
    };
</script>
```

</div>

 
</code-highlight>

