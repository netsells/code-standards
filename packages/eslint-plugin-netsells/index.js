const path = require('path');

const rules = [
    'no-global-timeouts',
    'no-dom-listeners',
].reduce((acc, name) => ({
    ...acc,
    [name]: require(path.join(__dirname, 'rules', name)),
}), {});

module.exports = {
    rules,
    configs: {
        'eslint-plugin': {
            rules,
        },
    },
};
