/**
 * isProduction - returns true if node env is set to production
 * @returns {boolean}
 */
module.exports.isProduction = () => {
    return process.env.NODE_ENV === 'production';
};