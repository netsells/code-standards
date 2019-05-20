const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/match-component-file-name': [_THROW.WARNING, {
            'extensions': ['.jsx', '.js', '.vue'],
            'shouldMatchCase': false,
        }],
    },
};
