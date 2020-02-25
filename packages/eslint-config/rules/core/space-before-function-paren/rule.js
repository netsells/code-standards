const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'space-before-function-paren': [_THROW.WARNING, {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
    },
};
