module.exports = {
    extends: [
        './rules/javascript',
        './rules/vue',
    ].map(require.resolve),
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
};
