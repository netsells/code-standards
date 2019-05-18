const glob = require('glob');
const globRules = glob.sync(`${ __dirname }/rules/**/*.js`);

module.exports = {
    //extends the all js files in the `./rules` directory
    extends: globRules.map(require.resolve),
};
