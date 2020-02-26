const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'yoda': [_THROW.WARNING, 'never', {
            exceptRange: true,
        }],
    },
};
