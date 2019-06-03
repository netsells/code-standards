const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/key-spacing': [
_THROW.WARNING,
{
            'beforeColon': false,
            'afterColon': true,
            'mode': 'strict',
        },
],
    },
};
