const glob = require('glob');
const { resolve } = require('path');
const directory = resolve(__dirname, '../', 'rules');
const globRules = glob.sync(`${ directory }/**/rule.js`);
const fs = require('fs');
const CLIEngine = require('eslint').CLIEngine;
const config = require('../index');

const testRule = (srcFile, ruleFile) => {
    const cli = new CLIEngine({
        baseConfig: {
            parserOptions: {
                ...config.parserOptions,
                parser: 'babel-eslint',
            },
            env: config.env,
            plugins: config.plugins,
            extends: ['plugin:vue/base'],
        },

        extensions: ['.js', '.vue'],
        useEslintrc: false,
        configFile: ruleFile,
    });

    return cli.executeOnFiles([srcFile]);
};

const getFile = (rulePath, type) => {
    const dir = resolve(directory, rulePath);
    const files = resolve(dir, 'files.js');

    let correctFile = glob.sync(resolve(dir, `${ type }.{js,vue}`))[0];

    if (fs.existsSync(files)) {
        const fileConfig = require(files);

        if (fileConfig[type]) {
            correctFile = resolve(dir, fileConfig[type]);
        }
    }

    return {
        testFile: correctFile,
        srcFile: correctFile ?
            correctFile
                .replace(directory, '')
                .replace(rulePath, '')
                .replace('//', '')
            : null,
    };
};

globRules.forEach((file) => {
    const rulePath = file.replace(`${ directory }/`, '').replace('/rule.js', '');

    describe(rulePath, () => {
        let correctFiles;
        try {
            correctFiles = getFile(rulePath, 'correct');
        } catch (err) {}

        if (correctFiles.testFile) {
            test(`${ correctFiles.srcFile } should pass`, () => {
                const { results } = testRule(correctFiles.testFile, file);

                if (!results[0]) {
                    console.log(correctFiles.testFile);
                    console.dir(results, { depth: null });

                    if (results[0].messages.length) {
                        console.dir(results[0].messages, { depth: null });
                    }
                }

                expect(
                    results[0].messages.length,
                    `Expected no errors but these were thrown: ${ JSON.stringify(results[0].messages, null, 4) }`
                ).toBe(0);
            });
        }

        let incorrectFiles;

        try {
            incorrectFiles = getFile(rulePath, 'incorrect');
        } catch (err) {}

        if (incorrectFiles.srcFile) {
            test(`${ incorrectFiles.srcFile } should fail`, () => {
                const { results } = testRule(incorrectFiles.testFile, file);

                const failed = results.filter(({ messages }) => messages.length);

                expect(Boolean(failed.length)).toBe(true);
            });
        }
    });
});
