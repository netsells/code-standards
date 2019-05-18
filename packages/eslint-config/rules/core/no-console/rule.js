const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'no-console': Utils.isProduction() ? _THROW.ERROR : _THROW.WARNING,
    },
};
