<template>
    <img src="foo" :alt="altText" />
</template>

<script>
    export default {
        computed: {
            /**
             * Get altText.
             *
             * @returns {string}
             */
            altText() {
                return 'altText';
            },
        },
    };
</script>
