const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'yoda': [_THROW.ERROR, 'never', {
            exceptRange: true,
        }],
    },
};
