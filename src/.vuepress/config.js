module.exports = {
    title: 'Netsells Code Standards',

    dest: 'docs',

    base: '/code-standards/',

    themeConfig: {
        repo: 'https://github.com/netsells/code-standards',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        nav: [
            {
                text: 'Netsells',
                link: 'https://netsells.co.uk',
            },
        ],
        sidebar: [
            {
                title: 'General',
                collapsable: false,
                children: [
                    ['general/', 'Introduction'],
                    'general/git',
                ],
            },
            {
                title: 'Frontend',
                collapsable: false,
                children: [
                    ['frontend/', 'Introduction'],
                    'frontend/html',
                    'frontend/css',
                    'frontend/stylelint/',
                    'frontend/javascript',
                    'frontend/vue',
                    'frontend/eslint/',
                    'frontend/blade',
                ],
            },
            {
                title: 'Backend',
                collapsable: false,
                children: [
                    ['backend/', 'Introduction'],
                    'backend/apis',
                    'backend/php',
                    'backend/laravel',
                    'backend/hatchly',
                ],
            },
            {
                title: 'iOS',
                collapsable: false,
                children: [
                    ['ios/', 'Introduction'],
                    'ios/control-statements'
                ],
            },
            {
                title: 'Android',
                collapsable: false,
                children: [
                    ['android/', 'Introduction'],
                ],
            },
        ],
    },

    configureWebpack(config, isServer) {
        if (!isServer && process.env.NODE_ENV === 'production') {
            config.output.filename = 'assets/js/[name].[contenthash:8].js'
        }
    },
};
