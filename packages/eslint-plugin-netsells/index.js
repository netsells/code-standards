const { globSync } = require('glob');
const path = require('path');

const globRules = globSync(`${ __dirname }/rules/*.js`);


const rules = globRules.reduce((acc, pathToRule) => {
    const ruleName = path.basename(pathToRule, '.js');

    return {
        ...acc,
        [ruleName]: require(pathToRule),
    };
}, {});

module.exports = {
    rules,
    configs: {
        'eslint-plugin': {
            rules,
        },
    },
};
