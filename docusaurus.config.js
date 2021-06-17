/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Sharek.dev',
    tagline: 'Sharek\'s Geek Cookbook',
    url: 'https://helkaroui.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'helkaroui', // Usually your GitHub org/user name.
    projectName: 'helkaroui.github.io', // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ["java", "scala"],
            theme: require('prism-react-renderer/themes/dracula'),
        },
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: true,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,

            // Dark/light switch icon options
            switchConfig: {
                // Icon for the switch while in dark mode
                darkIcon: '🌙',

                // CSS to apply to dark icon,
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '2px',
                },

                // Unicode icons such as '\u2600' will work
                // Unicode with 5 chars require brackets: '\u{1F602}'
                lightIcon: '\u{1F602}',

                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
        },

        navbar: {
            title: 'Sharek.dev',
            logo: {
                alt: 'Sharek',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'home_cloud/overview/',
                    activeBasePath: 'home_cloud',
                    label: 'Home Cloud Cookbook',
                    position: 'left',
                },
                {
                    to: 'big_data/overview/',
                    activeBasePath: 'big_data',
                    label: 'Big Data Cookbook',
                    position: 'left',
                },
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
                id: 'home_cloud_notes', // omitted => default instance
                path: 'notes/home_cloud_notes/',
                routeBasePath: 'home_cloud',
                sidebarPath: require.resolve('./sidebars/sidebarHomeCloud.js'),
            },
        ],

        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'software_engineering_notes', // omitted => default instance
                path: 'notes/software_engineering_notes/',
                routeBasePath: 'software_engineering',
                sidebarPath: require.resolve('./sidebars/sidebarSoftwareEngineering.js'),
            },
        ],
    ]
};
