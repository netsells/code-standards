<template>
    <div @mouseover="foo" @focus="bar" />
</template>

<script>
    export default {
        methods: {
            /**
             * Handle mouseover.
             */
            foo() {
                // Do something
            },

            /**
             * Handle focus.
             */
            bar() {
                // Do something
            },
        },
    };
</script>
