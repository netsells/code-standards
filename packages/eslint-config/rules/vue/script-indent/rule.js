const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/script-indent': [_THROW.WARNING, 2, {
            'baseIndent': 1,
            'switchCase': 1,
        }],
    },
};
