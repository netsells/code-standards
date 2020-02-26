const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/order-in-components': [_THROW.WARNING, {
            order: [
                // Options / Misc
                ['name', 'delimiters', 'functional', 'model'],
                // Options / Assets
                ['components', 'directives', 'filters'],
                // Options / Composition
                ['parent', 'mixins', 'extends', 'provide', 'inject'],
                'el',
                'template',
                'props',
                'propsData',
                'data',
                'computed',
                'watch',
                'LIFECYCLE_HOOKS',
                'methods',
                'render',
                'renderError',
            ],
        }],
    },
};
