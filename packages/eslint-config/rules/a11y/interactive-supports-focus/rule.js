const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue-a11y/interactive-supports-focus': [_THROW.WARNING, {
            tabbable: [
                'button',
                'checkbox',
                'link',
                'searchbox',
                'textbox',
                'spinbutton',
                'switch',
            ],
        }],
    },
};
