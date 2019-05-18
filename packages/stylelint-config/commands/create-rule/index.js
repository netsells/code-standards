const fs = require('fs');
const { mkdir } = require('../../modules/utils.js');
const glob = require('glob');
const globRules = glob.sync(`${__dirname}/stubs/*`);
const path = require('path');
const StylelintRepository = require('../../repositories/StylelintRepository');
const chalk = require('chalk');

/**
 * copyStub - Copies the contents of a stub to a location.
 */
const copyStub = (stubLocation, destination, ruleData) => {
    let stubData = fs.readFileSync(stubLocation, 'utf8');
    const fileName = stubLocation.split('/').slice(-1)[0];

    stubData = stubData.replace(/\<rule-name\>/g, path.basename(destination));

    // fill the stubs with scraped data
    if (fileName === 'README.md') {
        stubData = stubData.replace(/\<description\>/g, ruleData.description || '_Please give a short description of the rule_');
    }

    else if (fileName === 'correct.css' && ruleData.correct) {
        stubData = ruleData.correct;
    }

    else if (fileName === 'incorrect.css' && ruleData.incorrect) {
        stubData = ruleData.incorrect;
    }

    fs.writeFileSync(`${destination}/${path.basename(stubLocation)}`, stubData);
};

const userArg = process.argv[2];
if (!userArg) {
    console.log(chalk.red('Please provide a rule parameter'));
    console.log(chalk.yellow('e.g. npm run create-rule core/string-no-newline'));
    return;
}

const rulePath = `${process.cwd()}/rules/${userArg}`;
const ruleName = userArg.split('/').slice(-1)[0];

if (fs.existsSync(rulePath)) {
    console.log(chalk.red('Failed. Rule already exists!'));
    process.exit(1);
}

console.log(chalk.yellow('Fetching rule data from stylelint.io...'));

StylelintRepository.getRuleData(ruleName)
    .catch(() => {
        console.log(chalk.red('Error! Please check your rule name and internet connection 😢'));
        process.exit(1);
    })
    .then((ruleData) => {
        if (
            ruleData.description === ''
            && ruleData.incorrect === ''
            && ruleData.correct === ''
        ) {
            console.log(chalk.red('Rule not found 😢  Please check your rule name.'));
            process.exit(1);
        }

        mkdir(rulePath);

        globRules.forEach((file) => copyStub(file, rulePath, ruleData));

        console.log(chalk.green(`🔥 Success! Created template ${userArg}.`));
    });

