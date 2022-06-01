/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Sharek.dev',
    tagline: 'Sharek\'s Geek Cookbook',
    url: 'https://helkaroui.github.io',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'helkaroui', // Usually your GitHub org/user name.
    projectName: 'helkaroui.github.io', // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ["java", "scala", "python", "go", "yaml", "sql", "docker", "batch"],
            theme: require('prism-react-renderer/themes/dracula'),
        },
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: false,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false
        },

        navbar: {
            title: 'Sharek.dev',
            logo: {
                alt: 'Sharek',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'Data engineering',
                    position: 'left',
                    items: [
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Data processing',
                    position: 'left',
                    items: [
                        {
                            to: 'big_data/spark/internals/overview/',
                            activeBasePath: 'big_data/spark',
                            label: 'Apache Spark',
                        },
                        {
                            to: 'big_data/kafka/quick_start/',
                            activeBasePath: 'big_data/kafka',
                            label: 'Apache Kafka',
                        },
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Cloud',
                    position: 'left',
                    items: [
                        {
                            to: 'cloud/docker/cheat_sheet',
                            activeBasePath: 'cloud/docker',
                            label: 'docker',
                        },
                        {
                            to: 'cloud/kubernetes/getting_started',
                            activeBasePath: 'cloud/kubernetes',
                            label: 'Kubernetes',
                        },
                    ]
                },
//                {
//                    type: 'dropdown',
//                    label: 'Functional Programming',
//                    position: 'left',
//                    items: []
//                },
//                {
//                    type: 'dropdown',
//                    label: 'Librairies',
//                    position: 'left',
//                    items: []
//                },
//                {
//                    type: 'dropdown',
//                    label: 'Programming languages',
//                    position: 'left',
//                    items: [
//                        {
//                            to: 'scala/quick_start/',
//                            activeBasePath: 'scala',
//                            label: 'Scala',
//                        },
//                        {
//                            to: 'python/quick_start/',
//                            activeBasePath: 'python',
//                            label: 'Python',
//                        },
//                        {
//                            to: 'go/quick_start/',
//                            activeBasePath: 'go',
//                            label: 'Go',
//                        },
//                    ]
//                },
                {
                    to: 'about',
                    label: 'About',
                    position: 'right'
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'right'
                },
                {
                    href: 'https://github.com/helkaroui',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Recent articles',
                    items: [
                        {
                            label: 'Getting started with Spark',
                            to: 'big_data/overview',
                        },
                        {
                            label: 'Spark optimization techniques you should know about',
                            to: 'big_data/spark/optimizations/overview',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/helkaroui',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Sharek.dev, Inc.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'big_data_notes', // omitted => default instance
                path: 'notes/big_data_notes/',
                routeBasePath: 'big_data',
                sidebarPath: require.resolve('./sidebars/sidebarBigData.js'),
            },
        ],

        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'home_lab_notes', // omitted => default instance
                path: 'notes/home_lab_notes/',
                routeBasePath: 'home_lab',
                sidebarPath: require.resolve('./sidebars/sidebarHomeCloud.js'),
            },
        ],

        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'scala_notes', // omitted => default instance
                path: 'notes/scala_notes/',
                routeBasePath: 'scala',
                sidebarPath: require.resolve('./sidebars/sidebarScala.js'),
            },
        ],

        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'python_notes', // omitted => default instance
                path: 'notes/python_notes/',
                routeBasePath: 'python',
                sidebarPath: require.resolve('./sidebars/sidebarPython.js'),
            },
        ],

        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'cloud_notes', // omitted => default instance
                path: 'notes/cloud_notes/',
                routeBasePath: 'cloud',
                sidebarPath: require.resolve('./sidebars/sidebarCloud.js'),
            },
        ],

        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'go_notes', // omitted => default instance
                path: 'notes/go_notes/',
                routeBasePath: 'go',
                sidebarPath: require.resolve('./sidebars/sidebarGo.js'),
            },
        ]
    ]
};
