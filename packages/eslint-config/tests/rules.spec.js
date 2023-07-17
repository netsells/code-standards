import { globSync } from 'glob';
import { resolve } from 'path';
import fs from 'fs';
import config from '../index';
import { ESLint } from 'eslint';
import { describe, test, expect } from 'vitest';

const directory = resolve(__dirname, '../', 'rules');
const globRules = globSync(`${ directory }/**/rule.js`);

const testRule = (srcFile, ruleFile) => {
    const cli = new ESLint({
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
        overrideConfigFile: ruleFile,
    });

    return cli.lintText(fs.readFileSync(srcFile, 'utf8'), {
        filePath: srcFile,
    });
};

const getFiles = (rulePath, type) => {
    const dir = resolve(directory, rulePath);
    const files = resolve(dir, 'files.js');

    const correctFiles = globSync(resolve(dir, `${ type }.{js,vue}`));

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
            test(`${ correctFile.srcFile } should pass`, async () => {
                const results = await testRule(correctFile.testFile, file);

                expect(results[0].messages)
                    .toEqual([]);
            });
        });

        incorrect.forEach((incorrectFile) => {
            test(`${ incorrectFile.srcFile } should fail`, async () => {
                const results = await testRule(incorrectFile.testFile, file);

                const failed = results.filter(({ messages }) => messages.length);

                expect(Boolean(failed.length)).toBe(true);
            });
        });
    });
});
