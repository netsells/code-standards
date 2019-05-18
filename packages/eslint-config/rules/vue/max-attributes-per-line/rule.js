const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'vue/max-attributes-per-line': [_THROW.ERROR, {
            singleline: 3,
            multiline: 1,
        }],
    },
};
