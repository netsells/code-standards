<template>
    <div>
    </div>
</template>

<script>
    export default {
        mounted() {
            document.addEventListener('click', this.onDocumentClick);
        },

        methods: {
            onDocumentClick() {
                // handle
            },
        },
    };
</script>
