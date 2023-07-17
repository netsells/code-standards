import { globSync } from 'glob';
import { resolve } from 'path';
import fs from 'fs';
import stylelint from 'stylelint';
import { describe, test, expect } from 'vitest';

const directory = resolve(__dirname, '../', 'rules');
const globRules = globSync(`${ directory }/**/rule.js`);

const testRule = async (srcFile, ruleFile) => {
    return await stylelint.lint({
        config: require(ruleFile),
        files: [srcFile],
    });
};

const getFile = (rulePath, type) => {
    const correctFiles = [
        resolve(directory, `${ rulePath }/${ type }.css`),
        resolve(directory, `${ rulePath }/${ type }.scss`),
    ].filter((file) => fs.existsSync(file));

    return {
        testFile: correctFiles[0],
        srcFile: correctFiles[0] ?
            correctFiles[0]
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
            test(`${ correctFiles.srcFile } should pass`, async () => {
                const { results } = await testRule(correctFiles.testFile, file);

                const erroredResults = results.filter((result) => result.errored);
                const warningResults = results.filter((result) => result.warnings.length);

                expect(erroredResults.length).toBe(0);
                expect(warningResults.length).toBe(0);
            });
        }

        let incorrectFiles;

        try {
            incorrectFiles = getFile(rulePath, 'incorrect');
        } catch (err) {}

        if (incorrectFiles.srcFile) {
            test(`${ incorrectFiles.srcFile } should fail`, async () => {
                const { results } = await testRule(incorrectFiles.testFile, file);
                const erroredResults = results.filter((result) => result.errored);
                const warningResults = results.filter((result) => result.warnings.length);

                if (warningResults[0]) {
                    expect(warningResults[0].warnings.map(({ rule }) => rule)).not.toContain('CssSyntaxError');
                }

                expect(Boolean(erroredResults.length + warningResults.length)).toBe(true);
            });
        }
    });
});
