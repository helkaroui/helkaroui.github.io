module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Overview',
            items: [
                'overview',
                'design',
            ],
        },
        {
            type: 'category',
            label: 'Infrastructure',
            collapsed: false,
            items: [
                {
                    type: 'category',
                    label: 'Network & Security',
                    items: [
                        'services/powerdns',
                        'services/openvpn',
                        'services/keycloak',
                        'services/nginx'
                    ]
                },
                {
                    type: 'category',
                    label: 'Storage',
                    items: [
                        'services/minio'
                    ]
                },
                {
                    type: 'category',
                    label: 'Applications',
                    items: [
                        'services/compare_used_cars'
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Tutorials',
            collapsed: false,
            items: [
                'tutorials/setup-nginx',
                'tutorials/nginx-security-best-practices',
                'tutorials/docker_cheatsheet'
            ]
        }

    ],
};
