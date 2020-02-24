const _THROW = require('../../../modules/throwables');

module.exports = {
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        parser: 'babel-eslint',
    },
    env: {
        es6: true,
        node: true,
        jquery: true,
    },
    rules: {
        'space-before-function-paren': [_THROW.WARNING, {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
    },
};
