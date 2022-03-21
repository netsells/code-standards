<template>
    <div :accesskey="s">Stress reliever</div>
</template>

<script>
    export default {
        computed: {
            /**
             * Return s.
             *
             * @returns {string}
             */
            s() {
                return 's';
            },
        },
    };
</script>
