const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'no-else-return': [_THROW.WARNING, {
            allowElseIf: false,
        }],
    },
};
