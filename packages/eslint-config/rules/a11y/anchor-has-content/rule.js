const _THROW = require('../../../modules/throwables');

module.exports = {
    rules: {
        'vue-a11y/alt-text': [_THROW.WARNING, {
            elements: ['img', 'object', 'area', 'input[type="image"]'],
            img: ['Image'],
            object: ['Object'],
            area: ['Area'],
            'input[type="image"]': ['InputImage'],
        }],
    },
};
