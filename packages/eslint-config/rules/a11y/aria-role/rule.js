const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue-a11y/aria-role': [_THROW.WARNING, {
            ignoreNonDOM: true,
        }],
    },
};
