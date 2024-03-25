const { globSync } = require('glob');
const globRules = globSync(`${ __dirname.replace(/\\/g, '/') }/rules/**/rule.js`);

module.exports = {
    //extends the all js files in the `./rules` directory
    extends: globRules.map(require.resolve),
};
