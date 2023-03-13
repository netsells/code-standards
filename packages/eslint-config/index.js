const { globSync } = require('glob');
const globRules = globSync(`${ __dirname }/rules/**/rule.js`);

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
        '@netsells/require-jsdoc-except',
        'jsdoc',
        'jquery',
        '@netsells/eslint-plugin-netsells',
        'vuejs-accessibility',
        'import',
    ],
    extends: [
        'plugin:vue/base',
        'plugin:nuxt/recommended',
        // Help move us away from jQuery
        'plugin:jquery/deprecated',

        // extends the all js files in the `./rules` directory
        ...globRules.map(require.resolve),
    ],
};
