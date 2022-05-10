const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/this-in-template': [_THROW.WARNING, 'never'],
    },
};
