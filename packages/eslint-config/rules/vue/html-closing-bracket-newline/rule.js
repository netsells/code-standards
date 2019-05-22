const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/html-closing-bracket-newline': [_THROW.WARNING, {
            'singleline': 'never',
            'multiline': 'always',
          }],
    },
};
