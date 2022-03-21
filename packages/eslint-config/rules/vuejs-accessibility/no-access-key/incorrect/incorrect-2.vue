<template>
    <div :accesskey="s">Stress reliever</div>
</template>

<script>
    export default {
        computed: {
            s() {
                return 's';
            },
        },
    };
</script>
