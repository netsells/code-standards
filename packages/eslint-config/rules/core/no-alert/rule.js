const _THROW = require('../../../modules/throwables');
const Utils = require('../../../modules/Utils');

module.exports = {
    rules: {
        'no-alert': Utils.isProduction()
            ? _THROW.ERROR
            : _THROW.WARNING,
    },
};
