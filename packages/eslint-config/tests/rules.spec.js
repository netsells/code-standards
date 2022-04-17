const glob = require('glob');
const { resolve } = require('path');
const directory = resolve(__dirname, '../', 'rules');
const globRules = glob.sync(`${ directory }/**/rule.js`);
const fs = require('fs');
const { CLIEngine } = require('eslint/lib/cli-engine');
const config = require('../index');

const testRule = (srcFile, ruleFile) => {
    const cli = new CLIEngine({
        baseConfig: {
            parserOptions: {
                ...config.parserOptions,
                parser: '@babel/eslint-parser',
                requireConfigFile: false,
            },
            env: config.env,
            plugins: config.plugins,
            extends: ['plugin:vue/base'],
        },

        extensions: ['.js', '.vue'],
        useEslintrc: false,
        configFile: ruleFile,
    });

    return cli.executeOnText(fs.readFileSync(srcFile, 'utf8'), srcFile);
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

const testsConfig = globRules.map((file) => {
    const rulePath = file.replace(`${ directory }/`, '').replace('/rule.js', '');

    let correct;
    let incorrect;

    try {
        correct = getFiles(rulePath, 'correct');
    } catch (err) {}

    try {
        incorrect = getFiles(rulePath, 'incorrect');
    } catch (err) {}

    return {
        file,
        rulePath,
        correct,
        incorrect,
    };
});

testsConfig.forEach(({ file, rulePath, correct, incorrect }) => {
    describe(rulePath, () => {
        correct.forEach((correctFile) => {
            test(`${ correctFile.srcFile } should pass`, () => {
                const { results } = testRule(correctFile.testFile, file);

                expect(results[0].messages)
                    .toEqual([]);
            });
        });

        incorrect.forEach((incorrectFile) => {
            test(`${ incorrectFile.srcFile } should fail`, () => {
                const { results } = testRule(incorrectFile.testFile, file);

                const failed = results.filter(({ messages }) => messages.length);

                expect(Boolean(failed.length)).toBe(true);
            });
        });
    });
});
