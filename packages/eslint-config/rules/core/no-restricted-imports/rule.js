module.exports = {
    rules: {
        'no-restricted-imports': ['error', {
            paths: ['lodash'],
            patterns: ['~/*', '@/*'],
        }],
    },
};
