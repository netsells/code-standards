const _THROW = require('../modules/throwables');
const Utils = require('../modules/utils');

module.exports = {
    extends: 'eslint:recommended',
    rules: {
        // Disallow the use of the eval() function
        'no-eval': [_THROW.ERROR],
        // Disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': [_THROW.WARNING],
        // Disallow empty block statements
        'no-empty': _THROW.WARNING,
        // Disallow empty functions
        'no-empty-function': _THROW.WARNING,
        // Require a space before function parenthesis 
        'space-before-function-paren': [_THROW.WARNING, 'never'],
        // Require a semi-colon at the end of every line
        'semi': [_THROW.WARNING, 'always'],
        // Requires trailing commas when the last element or property is in a different line than the closing ] or } and disallows trailing commas when the last element or property is on the same line as the closing ] or }
        'comma-dangle': [_THROW.WARNING, 'always-multiline'],
        // Require JSDoc on all functions and classes
        'require-jsdoc-except/require-jsdoc': [_THROW.WARNING, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
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
        // Require jsdoc data to be consistently valid
        'valid-jsdoc': [_THROW.WARNING, {
            requireParamDescription: false,
            requireReturnDescription: false,
            matchDescription: '.+',
            requireReturn: false,
        }],
        // Requires spacing before and after arrow functions arrow
        'arrow-spacing': [_THROW.WARNING, {
            before: true,
            after: true,
        }],
        // Discourage using 'var' for creating variables - require using let/const instead
        'no-var': _THROW.ERROR,
        // Disallow alert() function in production, throw a warning in development
        'no-alert': Utils.isProduction() ? _THROW.ERROR : _THROW.WARNING,
        // Disallow using the console in production, throw a warning in development
        'no-console': Utils.isProduction() ? _THROW.ERROR : _THROW.WARNING,
        'dot-notation': _THROW.WARNING,
        // Discourage using confusing and sometimes unreadable JS tricks to do simple functions.
        'no-implicit-coercion': [_THROW.WARNING, {
            boolean: true,
            number: true,
            string: true,
        }],
        // Throw a warning when a regular string contains a text which looks like a template literal placeholder
        'no-template-curly-in-string': _THROW.WARNING,
        // Prevents leaving unused imports & vars in code
        'no-unused-vars': _THROW.WARNING,
        // Forces equality operators to be type-safe
        'eqeqeq': _THROW.WARNING,
        // Discourage code typed like yoda would speak
        'yoda': [_THROW.ERROR, 'never', {
            exceptRange: true,
        }],
        // Disallow else blocks after return statements in if statements
        'no-else-return': [_THROW.WARNING, {
            allowElseIf: false,
        }],
        // Force new lines at end of files
        'eol-last': [_THROW.ERROR, 'always'],
        // Discourage placing the dot on the property rather than the property
        'dot-location': [_THROW.WARNING, 'property'],
        // disallow floating decimals. Cause they're disgusting!
        'no-floating-decimal': _THROW.ERROR,
        // Forces formatting of curly brace conventions
        'curly': _THROW.WARNING,
        // Encourage using template literals instead of '+' operator on strings
        'prefer-template': _THROW.WARNING,
        // discourage if statements as the only statement in else blocks
        'no-lonely-if': _THROW.WARNING,
        // Discourage conditional assignment of variables
        'no-cond-assign': _THROW.WARNING,
        // Forces use of ES6 arrow function expressions
        'prefer-arrow-callback': _THROW.ERROR,
        // Flags variables that are defined using 'let' but then never reassigned
        'prefer-const': _THROW.WARNING,
        // Disallow duplicate imports
        'no-duplicate-imports': _THROW.WARNING,
        // Disallows importing lodash
        'no-restricted-imports': ['error', 'lodash'],
        // Enforces spacing around the colon in object literal properties
        'key-spacing': _THROW.WARNING,
        // Enforce the use of single quotes when using JavaScript
        'quotes': [_THROW.WARNING, 'single'],
        // Restricts the number of allowed empty lines
        'no-multiple-empty-lines': [_THROW.WARNING, {
            max: 1,
            maxEOF: 1,
            maxBOF: 1,
        }],
        // Reports the use of redundant return statements
        'no-useless-return': _THROW.WARNING,
        // Prevents use of an identifier that has not yet been declared
        'no-use-before-define': _THROW.ERROR,
        // Disallows ternary operators when simpler alternatives exist
        'no-unneeded-ternary': _THROW.WARNING,
        // Enforces the use of spacing within curly braces
        'template-curly-spacing': [_THROW.WARNING, 'always'],
        // Disallows array literals with empty slots
        'no-sparse-arrays': _THROW.WARNING,
        // Disallows debugger statements
        'no-debugger': _THROW.WARNING,
    },
};
