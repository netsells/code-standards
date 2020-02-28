const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/html-closing-bracket-spacing': [_THROW.WARNING, {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "always"
        }],
    },
};
