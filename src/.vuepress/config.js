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
                    'ios/branching',
                    'ios/control-statements',
                    'ios/general',
                    'ios/naming',
                    'ios/storyboards'
                ],
            },
            {
                title: 'Android',
                collapsable: false,
                children: [
                    ['android/', 'Introduction'],
                    'android/kotlin',
                    'android/code-style',
                    'android/clean-architecture',
                    'android/mvvm',
                    'android/dependency-injection',
                    'android/network-requests',
                    'android/local-databases',
                    'android/coroutines',
                    'android/testing'
                ],
            },
            {
                title: 'Flutter',
                collapsable: false,
                children: [
                    ['flutter/', 'Introduction'],
                    'flutter/effective-dart.md',
                    'flutter/documentation.md',
                    'flutter/clean-architecture.md',
                    'flutter/stateful-widgets.md',
                    'flutter/avoiding-code-generation.md',
                    'flutter/testing.md',
                ],
            },
            {
                title: 'DotNet',
                collapsable: false,
                children: [
                    ['dotNet/', 'Introduction'],
                    'dotNet/c-sharp',
                    'dotNet/general-guidelines.md'
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
