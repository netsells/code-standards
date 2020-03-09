const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        '@netsells/netsells/component-file-names': _THROW.WARNING,
    },

    overrides: [
        {
            files: ['resources/{pages,layouts}/**/*.vue'],
            rules: {
                '@netsells/netsells/component-file-names': 'off',
            },
        },
    ],
};
