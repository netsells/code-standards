const glob = require('glob');
const globRules = glob.sync(`${ __dirname }/rules/**/rule.js`);

module.exports = {
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
    },
    env: {
        es6: true,
        node: true,
        jquery: true,
    },
    plugins: [
        'vue',
        'require-jsdoc-except',
        'jsdoc',
        'jquery',
        '@netsells/eslint-plugin-netsells',
        'vuejs-accessibility',
    ],
    extends: [
        'plugin:vue/base',
        'plugin:nuxt/recommended',

        // Help move us away from jQuery
        'plugin:jquery/deprecated',

        // extends the all js files in the `./rules` directory
        ...globRules.map(require.resolve),
    ],
    rules: {
        'vuejs-accessibility/alt-text': 'error',
        'vuejs-accessibility/anchor-has-content': 'error',
        'vuejs-accessibility/aria-props': 'error',
        'vuejs-accessibility/aria-role': 'error',
        'vuejs-accessibility/aria-unsupported-elements': 'error',
        'vuejs-accessibility/click-events-have-key-events': 'error',
        'vuejs-accessibility/form-control-has-label': 'warn',
        'vuejs-accessibility/heading-has-content': 'error',
        'vuejs-accessibility/iframe-has-title': 'error',
        'vuejs-accessibility/interactive-supports-focus': 'error',
        'vuejs-accessibility/mouse-events-have-key-events': 'error',
        'vuejs-accessibility/no-access-key': 'error',
        'vuejs-accessibility/no-autofocus': 'error',
        'vuejs-accessibility/no-distracting-elements': 'error',
        'vuejs-accessibility/no-onchange': 'error',
        'vuejs-accessibility/no-redundant-roles': 'error',
        'vuejs-accessibility/role-has-required-aria-props': 'error',
        'vuejs-accessibility/tabindex-no-positive': 'error',
    },
};
