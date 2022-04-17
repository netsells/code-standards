const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        '@netsells/require-jsdoc-except/require-jsdoc': [_THROW.WARNING, {
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

                // Nuxt methods
                'asyncData',
                'beforeRouteLeave',
                'head',

                // Ignore the vue default prop method
                'default',
                'get',
                'set',
                'handler',
                'validator',

                // Ignore constructors
                'constructor',
            ],
        }],
    },
};
