module.exports = {
    docs: [
        'overview',
        {
            type: 'category',
            label: 'Apache Spark',
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'How to ?',
                    items: [
                        'spark/how_to/setup_standalone_cluster'
                    ]
                },
                {
                    type: 'category',
                    label: 'Spark internals',
                    items: [
                        'spark/internals/overview'
                    ],
                },
                {
                    type: 'category',
                    label: 'Spark optimizations',
                    items: [
                        'spark/optimizations/quick_wins',
                        'spark/optimizations/reducebykey_vs_groupbykey'
                        //'spark/optimizations/groupby_imbalanced_dataset'
                    ],
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
        {
            type: 'category',
            label: 'ElasticSearch',
            collapsed: true,
            items: []
        },
        {
            type: 'category',
            label: 'BigQuery',
            collapsed: true,
            items: []
        },
        {
            type: 'category',
            label: 'Hive',
            collapsed: true,
            items: []
        }
    ],
};
