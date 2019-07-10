import VueSetTimeout from '@netsells/vue-set-timeout';

export default {
    mixins: [VueSetTimeout],

    mounted() {
        this.setTimeout(this.handleTimeout, 1000);
    },

    methods: {
        handleTimeout() {
            // handle
        },
    },
};
