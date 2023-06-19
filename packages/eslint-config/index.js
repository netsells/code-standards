const { globSync } = require('glob');
const globRules = globSync(`${ __dirname }/rules/**/rule.js`);

module.exports = {
    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        es6: true,
        node: true,
        jquery: true,
    },
    plugins: [
        '@netsells/require-jsdoc-except',
        'jsdoc',
        'jquery',
        '@netsells/eslint-plugin-netsells',
        'vuejs-accessibility',
        'import',
    ],
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:nuxt/recommended',
        // Help move us away from jQuery
        'plugin:jquery/deprecated',

        // extends the all js files in the `./rules` directory
        ...globRules.map(require.resolve),
    ],
    overrides: [
        {
            files: [
                './**/*.vue',
            ],
            rules: {
                'indent': 'off',
            },
        },
        {
            files: [
                './**/*.spec.js',
            ],
            rules: {
                '@netsells/require-jsdoc-except/require-jsdoc': 'off',
                'jsdoc/check-tag-names': 'off',
                'no-empty-function': 'off',
            },
        },
        {
            files: [
                './tests/utils.js',
            ],
            rules: {
                'jsdoc/no-undefined-types': 'off',
            },
        },
        {
            files: [
                './**/*.stories.js',
            ],
            rules: {
                'valid-jsdoc': 'off',
                'jsdoc/require-returns': 'off',
                'jsdoc/require-param': 'off',
                '@netsells/require-jsdoc-except/require-jsdoc': 'off',
            },
        },
        {
            files: [
                './pages/**/*.vue"',
                './layouts/**/*.vue"',
                './tests/mocks/components/**/*.vue"',
                './error.vue"',
                './app.vue',
            ],
            rules: {
                '@netsells/netsells/component-file-names': 'off',
            },
        },
        {
            files: [
                './plugins/components.js"',
                './error.vue"',
                './pages/**/*.vue"',
                './layouts/**/*.vue"',
                './app.vue',
            ],
            rules: {
                'vue/match-component-file-name': 'off',
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
};
