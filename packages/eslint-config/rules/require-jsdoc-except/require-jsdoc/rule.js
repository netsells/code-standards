const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'require-jsdoc-except/require-jsdoc': [_THROW.WARNING, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: false,
                ArrowFunctionExpression: true,
                FunctionExpression: true,
            },
            ignore: [
                // Ignore all the standard VueJS lifecycle methods
                'beforeCreate',
                'created',
                'beforeMount',
                'mounted',
                'beforeDestroy',
                'destroyed',
                'beforeUpdate',
                'updated',
                'data',

                // Ignore the vue default prop method
                'default',
            ],
        }],
    },
};
