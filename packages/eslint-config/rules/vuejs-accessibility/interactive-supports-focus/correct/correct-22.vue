<template>
    <a @click="foo()" @keypress="foo()" tabindex="bad">Next page</a>
</template>

<script>
    export default {
        methods: {
            /**
             * Handle click.
             */
            foo() {
                // Do something
            },
        },
    };
</script>
