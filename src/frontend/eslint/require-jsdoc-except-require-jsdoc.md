[&#x2190; Back](./)
# require-jsdoc-except/require-jsdoc

> Exclude certain methods from requiring JSDoc definitions.

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
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
                body: JSON.stringify(data),
            });
        },
    },
}

```

</div>

 
<div slot="incorrect">

```js
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

```

</div>

 
</code-highlight>

