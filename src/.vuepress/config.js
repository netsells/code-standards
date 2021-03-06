module.exports = {
    title: 'Netsells Code Standards',

    dest: 'docs',

    base: process.env.NETLIFY
        ? '/'
        : '/code-standards/',

    themeConfig: {
        repo: 'https://github.com/netsells/code-standards',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',

        lastUpdated: 'Last Updated',

        logo: '/images/netsells-logo.png',

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
                    'general/pull-requests',
                ],
            },
            {
                title: 'Frontend',
                collapsable: false,
                children: [
                    ['frontend/', 'Introduction'],
                    'frontend/html',
                    'frontend/css',
                    'frontend/javascript',
                    'frontend/vue',
                    'frontend/blade',
                    'frontend/accessibility',
                    'frontend/storybook',
                    'frontend/performance',
                    ['frontend/recommended-packages', 'Recommended Packages'],
                    {
                        title: 'Linting',
                        collapsable: true,
                        path: '/frontend/linting',
                        children: [
                            'frontend/linting/eslint/',
                            'frontend/linting/stylelint/',
                        ],
                    },
                    {
                        title: 'Testing',
                        collapsable: true,
                        path: '/frontend/testing',
                        children: [
                            'frontend/testing/unit-testing',
                            'frontend/testing/visual-regression-testing',
                        ],
                    },
                ],
            },
            {
                title: 'Backend',
                collapsable: false,
                children: [
                    ['backend/', 'Introduction'],
                    'backend/general',
                    'backend/apis',
                    'backend/php',
                    'backend/laravel',
                    'backend/hatchly',
                ],
            },
            {
                title: 'Mobile',
                collapsable: false,
                children: [
                    'mobile/pull-requests.md',
                    {
                        title: 'Flutter',
                        collapsable: true,
                        children: [
                            ['flutter/', 'Introduction'],
                            'flutter/project-setup.md',
                            'flutter/linting-rules.md',
                            'flutter/architecture.md',
                            'flutter/testing.md',
                            'flutter/state-management.md',
                            'flutter/third-party-packages.md',
                            'flutter/recommended-packages.md',
                            'flutter/codesigning.md',
                            'flutter/continuous-integration.md',
                            'flutter/continuous-delivery.md'
                        ],
                    },
                    {
                        title: 'iOS',
                        collapsable: true,
                        children: [
                            ['ios/', 'Introduction'],
                            'ios/control-statements',
                            'ios/directory-structure',
                            'ios/general',
                            'ios/libraries',
                            'ios/local-storage',
                            'ios/naming',
                            'ios/networking',
                            'ios/security',
                            'ios/storyboards',
                            'ios/testing'
                        ],
                    },
                    {
                        title: 'Android',
                        collapsable: true,
                        children: [
                            ['android/', 'Introduction'],
                            'android/kotlin',
                            'android/code-style',
                            'android/error-handling',
                            'android/mvvm',
                            'android/dependency-injection',
                            'android/network-requests',
                            'android/local-databases',
                            'android/coroutines',
                            'android/pull-request-labels'
                        ],
                    }
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

    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-49744331-5',
            }
        ],
    ],
};
