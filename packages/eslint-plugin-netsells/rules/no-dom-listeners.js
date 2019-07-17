module.exports = {
    meta: {
        type: 'suggestion',

        docs: {
            description: 'disallow use of DOM event listeners',
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
            'addEventListener',
            'removeEventListener',
        ];

        const [
            allowedExts = ['vue'],
        ] = context.options;

        const fileExt = context.getFilename().split('.').slice(-1)[0];

        if (!allowedExts.includes(fileExt)) {
            return {};
        }

        return {
            MemberExpression(node) {
                if (node.object.type === 'Identifier' && matchingFunctionNames.includes(node.property.name)) {
                    context.report({
                        node,
                        message: `Do not use ${ node.object.name }.${ node.property.name } directly, you should use Vue event listeners or a global event package such as 'vue-global-events'`,
                    });
                }
            }
        };
    },
};
