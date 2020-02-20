export default {
    methods: {
        /**
         * Increase the amount selected
         *
         * @param {Number} amount
         *
         * @returns {Number}
         */
        increase(amount) {
            this.amount = this.amount + amount;

            return this.amount;
        },
    },
};
