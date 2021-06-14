module.exports = {
    docs: [
        'overview',
        {
            type: 'category',
            label: 'Apache Spark',
            collapsed: false,
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
                        'spark/optimizations/overview',
                        'spark/optimizations/quick_wins',
                        'spark/optimizations/reducebykey_vs_groupbykey',
                        'spark/optimizations/groupby_imbalanced_dataset'
                    ],
                },
            ],
        },
    ],
};
