<template>
    <span
        :role="role"
        aria-checked="false"
        aria-labelledby="test"
        tabindex="0"
    />
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
