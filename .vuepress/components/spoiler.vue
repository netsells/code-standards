<template>
    <div class="spoiler">
        <a href="#" @click.prevent="shown = !shown"><small>{{ shown ? '[-] Hide' : '[+] Show' }}</small></a>
        <div v-if="shown">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'spoiler',

        data() {
            return {
                shown: false,
            }
        },
    }
</script>
