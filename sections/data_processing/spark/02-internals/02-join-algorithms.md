---
title: "Join algorithms"
---

In Apache Spark, join algorithms are strategies used to physically combine datasets during a join operation. These algorithms determine how Spark organizes and processes data to perform the join efficiently. Spark provides several join algorithms to cater to different use cases and optimize performance based on the characteristics of the data being joined. Here are some of the common join algorithms in Apache Spark:

1. **Sort Merge Join**:
   - **Description**: Sort Merge Join is used when both input datasets are large and can be sorted based on the join keys. It involves sorting both datasets by the join keys and then merging them using a technique similar to the merge step in merge sort.
   - **Advantages**: Efficient for large datasets, requires minimal memory overhead, performs well when data is already sorted or can be sorted without excessive shuffling.
   - **Limitations**: Can be slower if data isn't sorted initially, requires both datasets to fit in memory after sorting.

2. **Broadcast Hash Join**:
   - **Description**: Broadcast Hash Join is used when one of the input datasets (usually the smaller one) can fit entirely in memory. The smaller dataset is broadcasted to all worker nodes, and the larger dataset is partitioned and joined with the broadcasted data.
   - **Advantages**: Efficient for small tables, reduces network communication overhead, avoids shuffling for the broadcasted dataset.
   - **Limitations**: Limited by memory capacity for the smaller dataset, not suitable for very large datasets.

3. **Shuffled Hash Join**:
   - **Description**: Shuffled Hash Join is used when both input datasets are large and cannot fit in memory. It involves partitioning both datasets based on their join keys, shuffling the partitions to the appropriate worker nodes, and then performing the join locally on each node.
   - **Advantages**: Scalable for large datasets, can handle skewed data distribution, suitable for cases where data sizes are not known in advance.
   - **Limitations**: Involves data shuffling, which can lead to high network and I/O overhead, requires careful partitioning to avoid data skew.

4. **Broadcast Nested Loop Join**:
   - **Description**: Similar to the traditional nested loop join, but used when one of the input datasets is small enough to fit in memory. The small dataset is broadcasted, and the join is performed using nested loops on the larger dataset.
   - **Advantages**: Useful for small datasets, avoids shuffling and reduces network overhead for the broadcasted dataset.
   - **Limitations**: Slower for large datasets due to the nested loops, not suitable when data sizes are large and can't fit in memory.

5. **Cartesian Join**:
   - **Description**: Also known as a cross join, Cartesian Join combines every row from one dataset with every row from another dataset. It doesn't require any specific algorithms since it's a straightforward combination of rows.
   - **Advantages**: Simple to understand, no need for special algorithms.
   - **Limitations**: Generates a large number of output rows (size of dataset A * size of dataset B), can be extremely resource-intensive and slow for large datasets.

The choice of join algorithm depends on factors like the size of datasets, available memory, data distribution, and skewness of data. Spark's optimizer will automatically choose the appropriate join algorithm based on the context and available resources, but understanding these algorithms helps in designing efficient Spark applications.
