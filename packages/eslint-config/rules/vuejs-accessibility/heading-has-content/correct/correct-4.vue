<template>
    <h1 v-html="msg"></h1>
</template>

<script>
    export default {
        computed: {
            /**
             * Return msg.
             *
             * @returns {string}
             */
            msg() {
                return 'msg';
            },
        },
    };
</script>
