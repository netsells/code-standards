module.exports = {
    meta: {
        type: 'suggestion',

        docs: {
            description: 'disallow global use of the timeout functions',
            category: 'Possible Memory Leaks',
            recommended: true,
        },
        schema: [
            {
                type: 'array',
                default: ['vue'],
                items: {
                    type: 'string',
                },
            }
        ],
    },
    create(context) {
        const matchingFunctionNames = [
            'setTimeout',
            'setInterval',
            'clearTimeout',
            'clearInterval',
        ];

        const [
            allowedExts = ['vue'],
        ] = context.options;

        const fileExt = context.getFilename().split('.').slice(-1)[0];

        if (!allowedExts.includes(fileExt)) {
            return {};
        }

        return {
            CallExpression(node) {
                if (node.callee.type === 'Identifier') {
                    if (matchingFunctionNames.includes(node.callee.name)) {
                        context.report({
                            node,
                            message: `Do not use global ${ node.callee.name }, you should use @netsells/vue-set-timeout to avoid memory leaks`,
                        });
                    }
                }
            }
        };
    },
};
