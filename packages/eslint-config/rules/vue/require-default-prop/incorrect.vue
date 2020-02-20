<script>
    export default {
        props: {
            a: Number,
            b: [Number, String],
            c: {
                type: Number,
            },
            d: {
                type: Number,
                required: false,
            },
        },
    }
</script>
