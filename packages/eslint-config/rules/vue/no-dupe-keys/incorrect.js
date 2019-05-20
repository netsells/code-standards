export default {
    props: {
        foo: String,
    },

    computed: {
        foo: {
            get () {}
        },
    },

    data() {
        return {
            foo: null,
        };
    },

    methods: {
        foo () {},
    },
}
