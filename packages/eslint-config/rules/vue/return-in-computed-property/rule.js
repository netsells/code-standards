const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue/return-in-computed-property': [
_THROW.ERROR,
{
            treatUndefinedAsUnspecified: true,
        },
],
    },
};
