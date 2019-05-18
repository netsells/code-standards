const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'no-multiple-empty-lines': [_THROW.WARNING, {
            max: 1,
            maxEOF: 1,
            maxBOF: 1,
        }],
    },
};
