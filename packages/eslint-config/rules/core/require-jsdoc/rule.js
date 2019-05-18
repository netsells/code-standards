const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'require-jsdoc': [_THROW.ERROR, 'never', {
            exceptRange: true,
        }],
    },
};
