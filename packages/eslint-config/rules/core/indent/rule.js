const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        indent: [_THROW.WARNING, 4, {
            SwitchCase: 1,
        }],
    },

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
