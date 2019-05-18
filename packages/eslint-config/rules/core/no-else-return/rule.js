const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'no-else-return': [_THROW.WARNING, {
            allowElseIf: false,
        }],
    },
};
