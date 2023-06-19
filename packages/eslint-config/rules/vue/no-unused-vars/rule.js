const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/no-unused-vars': [_THROW.WARNING],
        'vue/script-setup-uses-vars': _THROW.WARNING,
    },
};
