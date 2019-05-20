export default {
    computed: {
        fullName () {
            this.firstName = 'lorem'; // <- side effect
            return `${this.firstName} ${this.lastName}`;
        },

        reversedArray () {
            return this.array.reverse(); // <- side effect
        },
    },
}
