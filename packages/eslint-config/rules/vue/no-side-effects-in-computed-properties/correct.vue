<script>
    export default {
        computed: {
            fullName () {
                return `${ this.firstName } ${ this.lastName }`;
            },

            reversedArray () {
                return this.array.slice(0).reverse();
            },
        },
    }
</script>
