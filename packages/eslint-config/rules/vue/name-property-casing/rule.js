const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/name-property-casing': [_THROW.ERROR, 'kebab-case'],
    },
};
