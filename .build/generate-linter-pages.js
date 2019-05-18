const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const template = require('lodash/template');

const generatePages = ({
    rulesFolderPath,
    pageTemplatePath = `${ __dirname }/templates/linter-rule-page.md`,
    indexTemplatePath,
    outputFolder,
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
                path: glob.sync(`${directory}/${template}.*`)[0],
            }))
            .filter(({ path }) => path)
            .map((template) => ({
                ...template,
                content: fs.readFileSync(template.path, 'utf8'),
                language: new RegExp('\\.([0-9a-z]+)').exec(template.path)[1],
            })).reduce((examples, example) => ({
                ...examples,
                [example.template]: example,
            }), {});

        return {
            rulename,
            group,
            description: fs.readFileSync(`${directory}/README.md`, 'utf8'),
            examples,
        }
    }, []).map((page) => ({
        ...page,
        name: page.group === 'core'
            ? page.rulename
            : `${page.group}/${page.rulename}`,
        filename: page.group === 'core'
            ? page.rulename
            : `${page.group}-${page.rulename}`,
    })).map((page) => ({
        ...page,
        template: template(templateFile)(page),
    }));

    pages.forEach((page) => {
        console.log(page);
        const filePath = path.resolve(`${outputFolder}/${page.filename}.md`);

        fs.writeFileSync(filePath, page.template)
    });

    fs.writeFileSync(`${outputFolder}/README.md`, template(indexTemplateFile)({ pages }));
};

generatePages({
    rulesFolderPath: `${ __dirname }/../packages/stylelint-config/rules`,
    indexTemplatePath: `${ __dirname }/templates/stylelint-index.md`,
    outputFolder: `${__dirname}/../src/frontend/stylelint`,
});

generatePages({
    rulesFolderPath: `${ __dirname }/../packages/eslint-config/rules`,
    indexTemplatePath: `${ __dirname }/templates/eslint-index.md`,
    outputFolder: `${__dirname}/../src/frontend/eslint`,
});
