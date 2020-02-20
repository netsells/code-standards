export default {
    methods: {
        increase(amount) {
            this.amount = this.amount + amount;

            return this.amount;
        },
    },
};
