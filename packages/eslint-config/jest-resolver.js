const { resolve } = require('path');

module.exports = function (request, options) {
    if (request.includes('use-at-your-own-risk')) {
        request = resolve(__dirname, 'node_modules/eslint/lib/unsupported-api.js');
    }

    if (request.includes('eslint/lib/cli-engine')) {
        request = resolve(__dirname, 'node_modules/eslint/lib/cli-engine/index.js');
    }

    return options.defaultResolver(request, options);
};
