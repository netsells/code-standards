/**
 * isProduction - returns true if node env is set to production
 *
 * @returns {boolean}
 */
module.exports.isProduction = () => process.env.NODE_ENV === 'production';
