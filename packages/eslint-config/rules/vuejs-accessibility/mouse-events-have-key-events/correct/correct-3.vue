<template>
    <div @mouseout="foo" @blur="bar" />
</template>

<script>
    export default {
        methods: {
            /**
             * Handle mouseout.
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
