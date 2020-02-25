const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/name-property-casing': [_THROW.WARNING, 'kebab-case'],
    },
};
