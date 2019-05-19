export default {
    methods: {
        updateUser(id, data) {
            return fetch(`/users/${id}`, {
                method: 'POST',
                body: JSON.stringify(opts),
            });
        },
    },
}
