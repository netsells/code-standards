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

        if (!allowedExts.includes(fileExt.slice(1))) {
            return {};
        }

        const basename = path.basename(context.getFilename());
        const filename = path.basename(context.getFilename(), fileExt);

        return {
            'Program:exit' () {
                const fileCasing = Case.of(filename);

                if (fileCasing === 'pascal') {
                    return;
                }

                context.report({
                    loc: {
                        start: {
                            line: 0,
                            column: 0,
                        },
                        end: {
                            line: 0,
                            column: 0,
                        },
                    },
                    message: 'File name `{{basename}}` should be PascalCase, got `{{fileCasing}}`.',
                    data: {
                        basename,
                        fileCasing,
                    },
                });
            },
        };
    },
};
