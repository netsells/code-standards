module.exports = {
    title: 'Netsells Code Standards',

    dest: 'docs',

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
                title: 'Frontend',
                collapsable: false,
                children: [
                    ['frontend/', 'Introduction'],
                    'frontend/html',
                    'frontend/css',
                    'frontend/javascript',
                    'frontend/vue',
                ],
            },
            {
                title: 'Backend',
                collapsable: false,
                children: [
                    ['backend/', 'Introduction'],
                    'backend/php',
                    'backend/laravel',
                ],
            },
            {
                title: 'iOS',
                collapsable: false,
                children: [
                    ['ios/', 'Introduction'],
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
};
