const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'vue/return-in-computed-property': [_THROW.ERROR, {
            treatUndefinedAsUnspecified: true,
        }],
    },
};
