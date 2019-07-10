const glob = require('glob');
const globRules = glob.sync(`${ __dirname }/rules/**/rule.js`);

module.exports = {
    parserOptions: {
        ecmaVersion: 6,
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
        '@netsells/eslint-plugin-netsells',
    ],
    extends: [
        'plugin:vue/base',
        // extends the all js files in the `./rules` directory
        ...globRules.map(require.resolve),
    ],

    rules: {
        // TODO: move to own files
        '@netsells/netsells/no-global-timeouts': 1,
        '@netsells/netsells/no-dom-listeners': 1,
    },
};

