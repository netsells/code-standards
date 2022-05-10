<template>
    <div :role="role" />
</template>

<script>
    export default {
        computed: {
            /**
             * Get role.
             *
             * @returns {string}
             */
            role() {
                return 'button';
            },
        },
    };
</script>
