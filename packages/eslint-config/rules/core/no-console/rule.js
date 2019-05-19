const _THROW = require('../../../modules/throwables');
const Utils = require('../../../modules/Utils');

module.exports = {
    rules: {
        'no-console': Utils.isProduction()
            ? _THROW.ERROR
            : _THROW.WARNING,
    },
};
