export default {
    props: {
        a: {
            type: Number,
            required: true,
        },
        b: {
            type: Number,
            default: 0,
        },
        c: {
            type: Number,
            default: 0,
            required: false,
        },
    },
}
