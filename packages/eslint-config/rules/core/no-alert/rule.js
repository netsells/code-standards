const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'no-alert': Utils.isProduction() ? _THROW.ERROR : _THROW.WARNING,
    },
};
