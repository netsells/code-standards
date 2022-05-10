<template>
    <iframe :title="uniqueTitle" />
</template>

<script>
    export default {
        computed: {
            /**
             * Return unique title.
             *
             * @returns {string}
             */
            uniqueTitle() {
                return 'foo';
            },
        },
    };
</script>
