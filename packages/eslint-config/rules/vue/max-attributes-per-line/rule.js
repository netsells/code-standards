const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/max-attributes-per-line': [_THROW.WARNING, {
            singleline: 3,
            multiline: 1,
        }],
    },
};
