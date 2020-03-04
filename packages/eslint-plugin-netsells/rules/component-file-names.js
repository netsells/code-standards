const path = require('path');
const Case = require('case');

module.exports = {
    meta: {
        type: 'suggestion',

        docs: {
            description: 'require consistent component name casing',
            category: undefined,
        },

        fixable: null,

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

    create (context) {
        const [
            allowedExts = ['vue'],
        ] = context.options;

        const fileExt = path.extname(context.getFilename());

        if (!allowedExts.includes(fileExt)) {
            return {};
        }

        const filename = path.basename(context.getFilename(), fileExt);

        function canVerify (node) {
            return node.type === 'Literal' || (
                node.type === 'TemplateLiteral' &&
                node.expressions.length === 0 &&
                node.quasis.length === 1
            )
        }

        return {
            'Program:exit' () {
                if (Case.of(filename) === 'pascal') {
                    return;
                }

                context.report({
                    message: 'File name `{{filename}}` should be PascalCase.',
                    data: {
                        filename,
                    },
                });
            },
        };
    },
};
