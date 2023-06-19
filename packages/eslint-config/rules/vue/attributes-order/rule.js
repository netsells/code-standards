const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/attributes-order': [_THROW.WARNING, {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'SLOT',
                'OTHER_ATTR',
                'CONTENT',
                'TWO_WAY_BINDING',
                'EVENTS',
                'OTHER_DIRECTIVES',
            ],
            alphabetical: false,
        }],
    },
};
