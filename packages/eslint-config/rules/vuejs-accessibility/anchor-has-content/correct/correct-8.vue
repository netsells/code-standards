<template>
    <a><span v-html="msg" /></a>
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
