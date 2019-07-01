const _THROW = require('../../../modules/throwables');
const Utils = require('../../../modules/utils');

module.exports = {
    rules: {
        'no-console': Utils.isProduction()
            ? _THROW.ERROR
            : _THROW.WARNING,
    },
};
