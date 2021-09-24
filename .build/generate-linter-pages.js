const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const template = require('lodash/template');

function getWarningType(directory) {
    const file = JSON.parse(JSON.stringify(require(`${ directory }/rule.js`)));

    let ruleLevel = Object.values(file.rules)[0];

    if (Array.isArray(ruleLevel)) {
        if (directory.includes('stylelint')) {
            ruleLevel = ruleLevel.reverse();

            return ruleLevel[0].severity.replace('ing', '');
        }

        ruleLevel = ruleLevel[0];
    }

    return {
        0: 'tip',
        1: 'warning',
        2: 'danger',
        'error': 'danger',
    }[ruleLevel];
}

function getWarningText(directory) {
    const type = getWarningType(directory);

    return {
        tip: 'ignore',
        danger: 'error',
        warning: 'warn',
    }[type] || type;
}

const generatePages = ({
    rulesFolderPath,
    pageTemplatePath = `${ __dirname }/templates/linter-rule-page.md`,
    indexTemplatePath,
    outputFolder,
    ruleLink,
}) => {
    const rulesFolder = path.resolve(rulesFolderPath);
    const ruleReadmes = glob.sync(`${ rulesFolder }/**/README.md`);
    const templateFile = fs.readFileSync(pageTemplatePath, 'utf8');
    const indexTemplateFile = fs.readFileSync(indexTemplatePath, 'utf8');

    if (fs.existsSync(outputFolder)) {
        fs.removeSync(outputFolder);
    }

    fs.mkdirSync(outputFolder);

    const pages = ruleReadmes.map((readmeDirectory) => {
        const [, directory, group, rulename] = (new RegExp('(.+\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9-_]+))\/README.md'))
            .exec(readmeDirectory);

        const examples = ['correct', 'incorrect']
            .map((template) => ({
                template,
                path: glob.sync(`${ directory }/${template}.*`)[0],
            }))
            .filter(({ path }) => path)
            .map((template) => ({
                ...template,
                content: fs.readFileSync(template.path, 'utf8').replace(/\n$/, ''),
                language: new RegExp('\\.([0-9a-z]+)').exec(template.path)[1],
                importPath: template.path.replace(process.cwd(), '@'),
            })).reduce((examples, example) => ({
                ...examples,
                [example.template]: example,
            }), {});

        return {
            rulename,
            group,
            description: fs.readFileSync(`${ directory }/README.md`, 'utf8'),
            warningType: getWarningType(directory),
            warningText: getWarningText(directory),
            examples,
        };
    }, []).map((page) => ({
        ...page,
        name: page.group === 'core'
            ? page.rulename
            : `${ page.group }/${ page.rulename }`,
        filename: page.group === 'core'
            ? page.rulename
            : `${ page.group }-${ page.rulename }`,
    })).map((page) => ({
        ...page,
        template: template(templateFile)(page),
        ruleLink: ruleLink(page.name),
    }));

    pages.forEach((page) => {
        const filePath = path.resolve(`${ outputFolder }/${ page.filename }.md`);

        fs.writeFileSync(filePath, page.template)
        console.log(`Generated rule file for: ${ page.name }.`);
    });

    fs.writeFileSync(`${ outputFolder }/README.md`, template(indexTemplateFile)({ pages }));
    console.log(`Generated rule index.`);
};

generatePages({
    rulesFolderPath: `${ __dirname }/../packages/stylelint-config/rules`,
    indexTemplatePath: `${ __dirname }/templates/stylelint-index.md`,
    outputFolder: `${ __dirname }/../src/frontend/linting/stylelint`,
    ruleLink: (rule) => {
        return `https://stylelint.io/user-guide/rules/${ rule }`;
    },
});

generatePages({
    rulesFolderPath: `${ __dirname }/../packages/eslint-config/rules`,
    indexTemplatePath: `${ __dirname }/templates/eslint-index.md`,
    outputFolder: `${ __dirname }/../src/frontend/linting/eslint`,
    ruleLink(rule) {
        if (rule.startsWith('vue/')) {
            rule = rule.replace('vue/', '');
            return `https://eslint.vuejs.org/rules/${ rule }.html`;
        }

        if (rule.startsWith('jsdoc/')) {
            rule = rule.replace('jsdoc/', '');
            return `https://github.com/gajus/eslint-plugin-jsdoc/#eslint-plugin-jsdoc-rules-${ rule }`;
        }

        return `https://eslint.org/docs/rules/${ rule }`;
    },
});
