const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/max-attributes-per-line': [_THROW.WARNING, {
            singleline: {
                max: 3,
            },
            multiline: {
                max: 1,
            },
        }],
    },
};
