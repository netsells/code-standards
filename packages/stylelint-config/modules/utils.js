const fs = require('fs');

/**
 * isProduction - returns true if node env is set to production
 * @returns {boolean}
 */
module.exports.isProduction = () => {
    return process.env.NODE_ENV === 'production';
};

/**
 * mkdir - recursivley creates folders using a string
 * @returns {string}
 */
module.exports.mkdir = (directory) => {
    directory.split('/').reduce((path, segment) => {
        path = `${path}/${segment}`;

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }

        return path;
    }, '');
};