module.exports = function (request, options) {
    if (request.includes('use-at-your-own-risk')) {
        request = 'eslint/lib/unsupported-api';
    }

    return options.defaultResolver(request, options);
};
