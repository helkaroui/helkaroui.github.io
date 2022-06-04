module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Programming Languages',
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'Scala',
                    collapsed: true,
                    items: [
                        'languages/scala/quick_start',
                        {
                            type: 'category',
                            label: 'Tips',
                            collapsed: true,
                            items: [
                                'languages/scala/tips/case-class-fields'
                            ]
                        },
                    ]
                }
            ],
        },
    ],
};
