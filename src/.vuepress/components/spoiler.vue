<template>
    <div class="spoiler">
        <a href="#" @click.prevent="shown = !shown"><small>{{ shown ? `[-] Hide ${ toggleSuffix }` : `[+] Show ${ toggleSuffix }` }}</small></a>
        <div v-if="shown">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'spoiler',

        props: {
            toggleSuffix: {
                type: String,
                default: '',
            },
        },

        data() {
            return {
                shown: false,
            };
        },
    };
</script>
