const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'arrow-spacing': [_THROW.WARNING, {
            before: true,
            after: true,
        }],
    },
};
