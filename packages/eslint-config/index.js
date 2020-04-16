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
        'vue-a11y',
    ],
    extends: [
        'plugin:vue/base',
        'plugin:nuxt/recommended',
        'plugin:vue-a11y/base',
        // Help move us away from jQuery
        'plugin:jquery/deprecated',

        // extends the all js files in the `./rules` directory
        ...globRules.map(require.resolve),
    ],
};
