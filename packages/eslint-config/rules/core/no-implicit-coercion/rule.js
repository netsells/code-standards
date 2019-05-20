const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'no-implicit-coercion': [_THROW.WARNING, {
            boolean: true,
            number: true,
            string: true,
        }],
    },
};
