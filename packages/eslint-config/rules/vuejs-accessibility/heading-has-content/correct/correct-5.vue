<template>
    <h1>{{ test }}</h1>
</template>

<script>
    export default {
        computed: {
            /**
             * Return test.
             *
             * @returns {string}
             */
            test() {
                return 'test';
            },
        },
    };
</script>
