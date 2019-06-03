const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'array-bracket-newline': [
            _THROW.WARNING,
            {
                'multiline': true,
            },
        ],
    },
};
