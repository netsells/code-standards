<template>
    <span :role="role" />
</template>

<script>
    export default {
        computed: {
            //eslint-disable-next-line require-jsdoc-except/require-jsdoc
            role() {
                return 'button';
            },
        },
    };
</script>
