const fs = require('fs');
const path = require('path');
const glob = require('glob');
const template = require('lodash/template');
const rulesFolder = path.resolve(`${ __dirname }/../packages/stylelint-config/rules`);
const ruleReadmes = glob.sync(`${ rulesFolder }/**/README.md`);
const templateFile = fs.readFileSync(`${ __dirname }/templates/linter-rule-page.md`, 'utf8');
const indexTemplateFile = fs.readFileSync(`${ __dirname }/templates/stylelint-index.md`, 'utf8');

const pages = ruleReadmes.map((readmeDirectory) => {
    const [, directory, group, name] = (new RegExp('(.+\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9-_]+))\/README.md')).exec(readmeDirectory);

    const examples = ['correct', 'incorrect']
        .map((template) => ({
            template,
            path: glob.sync(`${ directory }/${ template }.*`)[0],
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
        name,
        group,
        description: fs.readFileSync(`${ directory }/README.md`, 'utf8'),
        examples,
    }
}, []).map((page) => ({
    ...page,
    template: template(templateFile)(page),
}));

pages.forEach((page) => {
    const filePath = path.resolve(`${ __dirname }/../src/frontend/stylelint/${ page.name }.md`);

    fs.writeFileSync(filePath, page.template)
});

fs.writeFileSync(`${ __dirname }/../src/frontend/stylelint/README.md`, template(indexTemplateFile)({ pages }));
