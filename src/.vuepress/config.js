const { path } = require('@vuepress/utils');

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

        navbar: [
            {
                text: 'Sections',
                children: [
                    '/general/README.md',
                    '/frontend/README.md',
                    '/backend/README.md',
                    '/ios/README.md',
                    '/android/README.md',
                    '/flutter/README.md',
                    '/dotNet/README.md',
                ],
            },
            {
                text: 'Netsells',
                link: 'https://netsells.co.uk',
            },
        ],


        sidebar: [
            {
                text: 'General',
                children: [
                    {
                        text: 'Introduction',
                        link: '/general/README.md',
                    },
                    '/general/git.md',
                    '/general/pull-requests.md',
                ],
            },
            {
                text: 'Frontend',
                children: [
                    {
                        text: 'Introduction',
                        link: '/frontend/README.md',
                    },
                    '/frontend/html.md',
                    '/frontend/css.md',
                    '/frontend/javascript.md',
                    '/frontend/vue.md',
                    '/frontend/accessibility.md',
                    '/frontend/storybook.md',
                    '/frontend/performance.md',
                    {
                        text: 'Recommended Packages',
                        link: '/frontend/recommended-packages/README.md',
                    },
                    {
                        text: 'Linting',
                        link: '/frontend/linting/README.md',
                        children: [
                            '/frontend/linting/eslint/README.md',
                            '/frontend/linting/stylelint/README.md',
                        ],
                    },
                    {
                        text: 'Testing',
                        link: '/frontend/testing/README.md',
                        children: [
                            '/frontend/testing/unit-testing.md',
                            '/frontend/testing/visual-regression-testing.md',
                        ],
                    },
                ],
            },
            {
                text: 'Backend',
                children: [
                    {
                        text: 'Introduction',
                        link: '/backend/README.md',
                    },
                    '/backend/general.md',
                    '/backend/apis.md',
                    '/backend/php.md',
                    '/backend/laravel.md',
                    '/backend/hatchly.md',
                ],
            },
            {
                text: 'Mobile',
                children: [
                    '/mobile/pull-requests.md',
                    {
                        text: 'Flutter',
                        children: [
                            {
                                text: 'Introduction',
                                link: '/flutter/README.md',
                            },
                            '/flutter/project-setup.md',
                            '/flutter/linting-rules.md',
                            '/flutter/architecture.md',
                            '/flutter/testing.md',
                            '/flutter/state-management.md',
                            '/flutter/third-party-packages.md',
                            '/flutter/recommended-packages.md',
                            '/flutter/codesigning.md',
                            '/flutter/continuous-integration.md',
                            '/flutter/continuous-delivery.md',
                            '/flutter/crash-reporting.md'
                        ],
                    },
                    {
                        text: 'iOS',
                        children: [
                            {
                                text: 'Introduction',
                                link: '/ios/README.md',
                            },
                            '/ios/architecture.md',
                            '/ios/bundler.md',
                            '/ios/codesigning.md',
                            '/ios/layouts.md',
                            '/ios/linting.md',
                            '/ios/testing.md',
                        ],
                    },
                    {
                        text: 'Android',
                        children: [
                            {
                                text: 'Introduction',
                                link: '/android/README.md',
                            },
                            '/android/kotlin.md',
                            '/android/code-style.md',
                            '/android/error-handling.md',
                            '/android/mvvm.md',
                            '/android/dependency-injection.md',
                            '/android/network-requests.md',
                            '/android/local-databases.md',
                            '/android/coroutines.md',
                            '/android/pull-request-labels.md',
                        ],
                    }
                ],
            },
            {
                text: 'DotNet',
                children: [
                    {
                        text: 'Introduction',
                        link: '/dotNet/README.md',
                    },
                    '/dotNet/c-sharp.md',
                    '/dotNet/general-guidelines.md',
                ],
            },
        ],
    },

    markdown: {
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@/, path.resolve(__dirname, '../../')),
        },
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
                id: 'UA-49744331-5',
            },
        ],
        [
            '@vuepress/register-components',
            {
                components: {
                    CodeHighlight: path.resolve(__dirname, './components/CodeHighlight.vue'),
                    Spoiler: path.resolve(__dirname, './components/Spoiler.vue'),
                },
            },
        ],
        [
            '@vuepress/plugin-search',
        ],
    ],
};
