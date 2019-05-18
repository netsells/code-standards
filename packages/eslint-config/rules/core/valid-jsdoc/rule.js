const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'valid-jsdoc': [_THROW.WARNING, {
            requireParamDescription: false,
            requireReturnDescription: false,
            matchDescription: '.+',
            requireReturn: false,
        }],
    },
};
