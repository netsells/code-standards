<template>
    <div>
        <global-events
            @click="onDocumentClick"
        />
    </div>
</template>

<script>
    import GlobalEvents from 'vue-global-events';

    export default {
        components: {
            GlobalEvents,
        },

        methods: {
            onDocumentClick() {
                // handle
            },
        },
    };
</script>
