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

const getFiles = (rulePath, type) => {
    const dir = resolve(directory, rulePath);
    const files = resolve(dir, 'files.js');

    const correctFiles = glob.sync(resolve(dir, `${ type }.{js,vue}`));

    if (fs.existsSync(files)) {
        const fileConfig = require(files);

        if (fileConfig[type]) {
            const filePaths = Array.isArray(fileConfig[type])
                ? fileConfig[type]
                : [fileConfig[type]];

            correctFiles.push(...filePaths.map(fp => resolve(dir, fp)));
        }
    }

    return correctFiles.map(correctFile => ({
        testFile: correctFile,
        srcFile: correctFile
            .replace(directory, '')
            .replace(rulePath, '')
            .replace('//', ''),
    }));
};

globRules.forEach((file) => {
    const rulePath = file.replace(`${ directory }/`, '').replace('/rule.js', '');

    describe(rulePath, () => {
        let correctFiles;
        try {
            correctFiles = getFiles(rulePath, 'correct');
        } catch (err) {}

        correctFiles.forEach(correctFile => {
            test(`${ correctFile.srcFile } should pass`, () => {
                const { results } = testRule(correctFile.testFile, file);

                if (!results[0]) {
                    console.log(correctFile.testFile);
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
        });

        let incorrectFiles;

        try {
            incorrectFiles = getFiles(rulePath, 'incorrect');
        } catch (err) {}

        incorrectFiles.forEach(incorrectFile => {
            test(`${ incorrectFile.srcFile } should fail`, () => {
                const { results } = testRule(incorrectFile.testFile, file);

                const failed = results.filter(({ messages }) => messages.length);

                expect(Boolean(failed.length)).toBe(true);
            });
        });
    });
});
