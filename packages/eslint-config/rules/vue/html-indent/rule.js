const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/html-indent': [_THROW.WARNING, 4, {
            baseIndent: 1,
        }],
    },
};
