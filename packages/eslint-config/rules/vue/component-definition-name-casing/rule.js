const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/component-definition-name-casing': [_THROW.WARNING, 'kebab-case'],
    },
};
