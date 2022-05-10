<template>
    <a v-text="msg" />
</template>

<script>
    export default {
        computed: {
            /**
             * Get msg.
             *
             * @returns {string}
             */
            msg() {
                return 'msg';
            },
        },
    };
</script>
