<template>
    <a :tabindex="dynamicTabIndex" @click="void 0" @keypress="void 0">foo</a>
</template>

<script>
    export default {
        computed: {
            /**
             * Return dynamicTabIndex.
             *
             * @returns {number}
             */
            dynamicTabIndex() {
                return 0;
            },
        },
    };
</script>
