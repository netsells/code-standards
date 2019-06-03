const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'yoda': [
_THROW.ERROR,
'never',
{
            exceptRange: true,
        },
],
    },
};
