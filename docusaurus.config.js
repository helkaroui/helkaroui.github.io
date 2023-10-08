/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Sharek.dev',
    tagline: 'Made by developers for developers with ❤️',
    url: 'https://helkaroui.github.io',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'helkaroui', // Usually your GitHub org/user name.
    projectName: 'helkaroui.github.io', // Usually your repo name.
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
    themeConfig: {
        announcementBar: {
            id: 'support_us',
            content:
              '⭐️ If you like Sharek.dev, give it a star on <a href="https://github.com/helkaroui/helkaroui.github.io">GitHub</a>',
            backgroundColor: '#fafbfc',
            textColor: '#091E42',
            isCloseable: true,
        },
        docs: {
            sidebar: {
                autoCollapseCategories: true,
            }
        },
        prism: {
            additionalLanguages: ["java", "scala", "python", "go", "yaml", "sql", "docker", "batch"],
            theme: require('prism-react-renderer/themes/dracula'),
        },
        metadata: [
            {name: 'keywords', content: 'tech, big data, spark, GitOps'},
            {name: 'description', content: 'Demystifying inner-workings of Apache Spark, Kafka, Airflow and other big data tools'},
            {name: 'author', content: 'Hamza EL KAROUI'},
            {name: 'twitter:site', content: '@stringly_typed'},
            {name: 'twitter:creator', content: '@stringly_typed'},
        ],
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: true,

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
                /* TODO : Enable back after making progress with Airflow
                {
                    type: 'dropdown',
                    label: 'Architecture',
                    position: 'left',
                    items: [
                        {
                            to: 'architecture/airflow/quick_start',
                            activeBasePath: 'architecture/airflow',
                            label: 'Apache Airflow',
                        },
                    ]
                },
                */
                {
                    type: 'dropdown',
                    label: 'Data Processing',
                    position: 'left',
                    items: [
                        {
                            to: 'data_processing/spark',
                            activeBasePath: 'data_processing/spark',
                            label: 'Apache Spark',
                        },
                        {
                            to: 'data_processing/kafka/',
                            activeBasePath: 'data_processing/kafka',
                            label: 'Apache Kafka',
                        },
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Containers',
                    position: 'left',
                    items: [
                        {
                            to: 'containers/docker/quick_start',
                            activeBasePath: 'containers/docker',
                            label: 'Docker',
                        },
                        {
                            to: 'containers/kubernetes/quick_start',
                            activeBasePath: 'containers/kubernetes',
                            label: 'Kubernetes',
                        },
                        {
                            to: 'containers/podman/quick_start',
                            activeBasePath: 'containers/podman',
                            label: 'Podman',
                        },
                    ]
                },
//                {
//                    type: 'dropdown',
//                    label: 'Cloud',
//                    position: 'left',
//                    items: [
//                    ]
//                },
                {
                    type: 'dropdown',
                    label: 'Developer\'s Corner',
                    position: 'left',
                    items: [
                        {
                            to: 'developer/languages/scala/quick_start',
                            activeBasePath: 'developer/languages/scala',
                            label: 'Scala',
                        },
                        {
                            to: 'developer/languages/python/quick_start',
                            activeBasePath: 'developer/languages/python',
                            label: 'Python',
                        },
                        {
                            to: 'developer/languages/go/quick_start',
                            activeBasePath: 'developer/languages/go',
                            label: 'Go',
                        },
                        {
                            to: 'developer/languages/rust/quick_start',
                            activeBasePath: 'developer/languages/rust',
                            label: 'Rust',
                        },
                        {
                            to: 'developer/languages/java/quick_start',
                            activeBasePath: 'developer/languages/java',
                            label: 'Java',
                        }
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Home Lab',
                    position: 'left',
                    items: [
                        {
                            to: 'home_lab',
                            activeBasePath: 'home_lab',
                            label: 'My Home Lab',
                        },
                        {
                            to: 'home_lab/media_center/funkwhale',
                            activeBasePath: 'home_lab/media_center',
                            label: 'FunkWhale',
                        },
                    ]
                },
                {
                    type: 'dropdown',
                    label: 'Projects',
                    position: 'right',
                    items: [
                        {
                            to: 'projects/scheduler',
                            activeBasePath: 'projects/scheduler',
                            label: 'Scheduler',
                        },
                    ]
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'right'
                },
                {
                    to: 'about',
                    label: 'About',
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
                            label: 'Spark on k8s: the complete guide',
                            to: 'data_processing/spark/articles/spark-meets-kubernetes',
                        },
                        {
                            label: 'Spark meets Go!',
                            to: 'data_processing/spark/articles/spark-meets-go',
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
                    editUrl: 'https://github.com/helkaroui/helkaroui.github.io/edit/develop/blog/',
                    readingTime: ({content, frontMatter, defaultReadingTime}) => defaultReadingTime({content, options: {wordsPerMinute: 300}})
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
                id: 'data_processing',
                path: 'sections/data_processing/',
                routeBasePath: 'data_processing',
                sidebarPath: require.resolve('./sidebars/data_processing.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'containers',
                path: 'sections/containers/',
                routeBasePath: 'containers',
                sidebarPath: require.resolve('./sidebars/containers.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'architecture',
                path: 'sections/architecture/',
                routeBasePath: 'architecture',
                sidebarPath: require.resolve('./sidebars/architecture.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'developer',
                path: 'sections/developer/',
                routeBasePath: 'developer',
                sidebarPath: require.resolve('./sidebars/developer.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'projects',
                path: 'sections/projects/',
                routeBasePath: 'projects',
                sidebarPath: require.resolve('./sidebars/projects.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'home_lab',
                path: 'sections/home_lab/',
                routeBasePath: 'home_lab',
                sidebarPath: require.resolve('./sidebars/home_lab.js'),
            },
        ],
    ]
};
