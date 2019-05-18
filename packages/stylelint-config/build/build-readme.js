const fs = require('fs');
const path = require('path');
const glob = require('glob');
const rulesFolder = path.resolve(`${ __dirname }/../rules`);
const ruleReadmes = glob.sync(`${ rulesFolder }/**/README.md`);
const templateFile = fs.readFileSync(`${ __dirname }/README.md`, 'utf8');
const outputFile = `${ __dirname }/../README.md`;
const codeTemplates = {
    incorrect: '🧟 Example of incorrect code for this rule:',
    correct: '🦄 Example of correct code for this rule:',
};

// Group the files by their containing folder, which
// will act as a title for that section
const readmeGroups = ruleReadmes.reduce((groups, file) => {
    const pathSegments = file.replace(`${ rulesFolder }/`, '').split('/');
    // Convert the first segment of the rule path to a title
    let group = pathSegments[0];
    group = group.charAt(0).toUpperCase() + group.slice(1);
    // Create the group if it doesn't exist
    if (!groups[group]) {
        groups[group] = [];
    }
    // We need to remove the filename from the path so 
    // that we can get the other files we need later
    const fileSegments = file.split('/');
    fileSegments.splice(-1, 1);
    // Add to the group
    groups[group].push(fileSegments.join('/'));

    return groups;
}, {});

// Generate the readme from rule readmes
const readme = Object.keys(readmeGroups).reduce((readme, group) => {
    // Add section titles
    readme += `### ${ group }\n\n`;
    // Fetch the readme of each rule
    readme += readmeGroups[group].reduce((readme, directory) => {
        // Add the main readme content
        readme += `${ fs.readFileSync(`${ directory }/README.md`, 'utf8') }\n\n`;
        // Load each code template segment
        Object.keys(codeTemplates).forEach((template) => {
            // Find the file for each template segment
            // We don't define an extension so that we can dynamically format
            // the code snippets based on a variety of extensions
            glob.sync(`${ directory }/**/${ template }.*`).forEach((file) => {
                // Get the code snippet
                const snippet = fs.readFileSync(file, 'utf8');
                // If it's empty we won't render the segment
                if (!snippet.length) {
                    return;
                }
                // Get the title of the segment
                readme += `##### ${ codeTemplates[template] }\n\n`;
                // Set the snippet language
                readme += `\`\`\`${ file.split('.').slice(-1) }\n`;
                // Set the code snippet
                readme += `${ snippet }\n`;
                // Close the snippet
                readme += '```\n\n';
            });
        });

        // Add the divider
        readme += '---\n\n';

        return readme;
    }, '');

    return readme;
}, '');

// Replace the placeholder rules section in the readme
// with our generated content
const output = templateFile.replace('{{RULES}}', readme);

// Write the file
fs.writeFileSync(outputFile, output);
