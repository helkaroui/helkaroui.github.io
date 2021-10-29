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
                        'infrastructure/powerdns',
                        'infrastructure/openvpn',
                        'infrastructure/keycloak',
                        {
                            type: 'category',
                            label: 'Nginx',
                            items: [
                                'infrastructure/nginx/setup',
                                'infrastructure/nginx/nginx-security-best-practices',
                            ]
                        },
                    ]
                },
                {
                    type: 'category',
                    label: 'Storage',
                    items: [
                        'infrastructure/minio'
                    ]
                },
                {
                    type: 'category',
                    label: 'Applications',
                    items: [
                        'infrastructure/compare_used_cars'
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Tutorials',
            collapsed: false,
            items: [
                'tutorials/docker_cheatsheet',
                'tutorials/k8s_cheatsheet'
            ]
        }

    ],
};
