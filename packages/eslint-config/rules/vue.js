const _THROW = require('../modules/throwables');

module.exports = {
    extends: [
        'plugin:vue/recommended',
    ],
    rules: {
        // Disallow using "this" in template form
        'vue/this-in-template': [_THROW.ERROR, 'never'],
        // Enforce order in Vue component data
        'vue/order-in-components': [_THROW.ERROR, {
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
        // Enforce 4 space continuous indentation
        'vue/html-indent': [_THROW.WARNING, 4, {
            attribute: 1,
            closeBracket: 0,
        }],
        // Force attributes to be hyphenated rather than camelCase
        'vue/attribute-hyphenation': [_THROW.ERROR, 'always'],
        // Disallow duplicate key names to avoid overwriting
        'vue/no-dupe-keys': [_THROW.ERROR, {
            groups: [],
        }],
        // Enforce the shorthand v-on: syntax (@)
        'vue/v-on-style': [_THROW.ERROR, 'shorthand'],
        // Enforce the shorthand v-bind: syntax (:)
        'vue/v-bind-style': [_THROW.ERROR, 'shorthand'],
        // Remove multiple spaces in a row between attributes which are not used for indentation
        'vue/no-multi-spaces': [_THROW.ERROR],
        // Force kebab-case component names
        'vue/name-property-casing': [_THROW.ERROR, 'kebab-case'],
        // Expect one space between expression and curly brackets.
        'vue/mustache-interpolation-spacing': [_THROW.ERROR, 'always'],
        // Force double quote style in html syntax
        'vue/html-quotes': [_THROW.ERROR, 'double'],
        // Limits the maximum number of attributes/properties per line to improve readability.
        'vue/max-attributes-per-line': [_THROW.ERROR, {
            singleline: 3,
            multiline: 1,
        }],
        // This rule requires default value to be set for each props that are not marked as required.
        'vue/require-default-prop': [_THROW.WARNING],
        // In committed code, prop definitions should always be as detailed as possible, specifying at least type(s).
        'vue/require-prop-types': [_THROW.WARNING],
        // It is considered a very bad practice to introduce side effects inside computed properties. It makes the code unpredictable and hard to understand.
        'vue/no-side-effects-in-computed-properties': [_THROW.WARNING],
        // When duplicate arguments exist, only the last one is valid
        'vue/no-duplicate-attributes': [_THROW.ERROR],
        // Enforce that a return statement is present in computed property
        'vue/return-in-computed-property': [_THROW.ERROR, {
            treatUndefinedAsUnspecified: true,
        }],
        // Disallow unused variable definitions of v-for directives or scope attributes
        'vue/no-unused-vars': [_THROW.ERROR],
        // When using the data property on a component (i.e. anywhere except on new Vue), the value must be a function that returns an object.
        'vue/no-shared-component-data': [_THROW.ERROR],
        // Disallows the use of mustaches within textareas
        'vue/no-textarea-mustache': [_THROW.WARNING],
    },
};
