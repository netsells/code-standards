const _THROW = require('../../../../shared/throwables');

module.exports = {
    rules: {
        'vue/this-in-template': [_THROW.ERROR, 'never'],
    },
};
