const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/v-on-function-call': [_THROW.WARNING, 'never'],
    },
};
