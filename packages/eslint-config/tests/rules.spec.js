const glob = require('glob');
const { resolve } = require('path');
const directory = resolve(__dirname, '../', 'rules');
const globRules = glob.sync(`${ directory }/**/rule.js`);
const fs = require('fs');
const CLIEngine = require("eslint").CLIEngine;


const testRule = (srcFile, ruleContent) => {
    const cli = new CLIEngine({
        baseConfig: {
            extends: ['plugin:vue/base'],
            plugins: [
                'vue',
                'require-jsdoc-except',
                'jquery',
                '@netsells/eslint-plugin-netsells',
            ],
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: 'module',
                parser: 'babel-eslint',
            },
        },
        extensions: ['.js', '.vue'],
        useEslintrc: false,

        ...ruleContent,
    });

    return cli.executeOnFiles([srcFile]);
};

const getFile = (rulePath, type) => {
    const correctFiles = [
        resolve(directory, `${ rulePath }/${ type }.js`),
        resolve(directory, `${ rulePath }/${ type }.vue`),
    ].filter((file) => fs.existsSync(file));

    return {
        testFile: correctFiles[0],
        srcFile: correctFiles[0] ?
            correctFiles[0]
                .replace(directory, '')
                .replace(rulePath, '')
                .replace('//', '')
            : null,
    }
};

globRules.forEach((file) => {
    const rulePath = file.replace(`${ directory }/`, '').replace('/rule.js', '');

    describe(rulePath, () => {
        try {
            const { testFile, srcFile } = getFile(rulePath, 'correct');

            if (testFile) {
                test(`${ srcFile } should pass`, () => {
                    const { results } = testRule(testFile, file);

                    if (results[0].messages.length) {
                        console.dir(results[0].messages, { depth: null })
                    }

                    expect(results[0].messages.length).toBe(0);
                });
            }
        } catch (err) {
            //console.error(err)
        }

        try {
            const { testFile, srcFile } = getFile(rulePath, 'incorrect');

            if (testFile) {
                test(`${ srcFile } should fail`, () => {
                    const { results } = testRule(testFile, require(file));

                    if (!results[0].messages.length) {
                        console.log(fs.readFileSync(testFile, 'utf-8'));
                        console.log(results);
                    }

                    expect(Boolean(results[0].messages.length)).toBe(true);
                });
            }
        } catch (err) {
            //console.error(err)
        }
    });
});
