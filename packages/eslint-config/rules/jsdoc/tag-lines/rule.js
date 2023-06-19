const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'jsdoc/tag-lines': [
            _THROW.WARNING,
            'any',
            {
                startLines: 1,
            },
        ],
    },
};
