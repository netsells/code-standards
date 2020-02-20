const _THROW = require('../../../modules/throwables');

module.exports = {
    plugins: [
        '@netsells/eslint-plugin-netsells',
    ],
    rules: {
        '@netsells/netsells/no-global-timeouts': _THROW.WARNING,
    },
};
