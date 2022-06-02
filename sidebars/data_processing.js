module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Apache Spark',
            collapsed: true,
            items: [
                'spark/quick_start',
                {
                    type: 'category',
                    label: 'Internals',
                    items: [
                        'spark/internals/overview',
                        'spark/internals/distinct-vs-groupby'
                    ],
                },
                {
                    type: 'category',
                    label: 'Optimizations',
                    items: [
                        'spark/optimizations/quick_wins',
                        'spark/optimizations/reducebykey_vs_groupbykey'
                    ],
                },
                {
                    type: 'category',
                    label: 'Customizations',
                    items: [
                        'spark/customization/create-plugin',
                        'spark/customization/extend-ui',
                    ],
                },
                {
                    type: 'category',
                    label: 'Tutorials',
                    items: [
                        'spark/tutorials/setup_standalone_cluster'
                    ]
                },
            ],
        },

        {
            type: 'category',
            label: 'Kafka',
            collapsed: true,
            items: [
                'kafka/quick_start',
                'kafka/cheat_sheet',
                'kafka/best_practices',
                {
                    type: 'category',
                    label: 'Internals',
                    collapsed: true,
                    items: [
                        'kafka/internals/kafka_streams'
                    ]
                },
            ]
        },
    ],
};
