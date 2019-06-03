const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'valid-jsdoc': [
_THROW.WARNING,
{
            requireParamDescription: false,
            requireReturnDescription: false,
            matchDescription: '.+',
            requireReturn: false,
        },
],
    },
};
