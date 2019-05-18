const glob = require('glob');
const globRules = glob.sync(`${ __dirname }/rules/**/*.js`);

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
        'require-jsdoc-except',
    ],
    //extends the all js files in the `./rules` directory
    extends: globRules.map(require.resolve),
};

