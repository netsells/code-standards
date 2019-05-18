export default {
    methods: {
        /**
         * Update the user with the given id via the API
         *
         * @param {Number} id - id of user
         * @param {Object} data - userdata object
         *
         * @returns {Promise}
         */
        updateUser(id, data) {
            return fetch(`/users/${id}`, {
                method: 'POST',
                body: JSON.stringify(opts),
            });
        },
    },
}
