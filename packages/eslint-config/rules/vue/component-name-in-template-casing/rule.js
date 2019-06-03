const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/component-name-in-template-casing': [
 _THROW.WARNING,
'kebab-case',
{
            'registeredComponentsOnly': true,
        },
],
    },
};
