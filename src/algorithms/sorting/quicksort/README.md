# Quicksort
- Quicksort is a divide and conquer algorithm
- We select a pivot point in a given collection to partition the oritinal collection into two subarrays, and each half is recursively sorted

## Complexity
Best, Average: O(n log n)
Worst: O(n^2)

- quicksort exhibits worst-case quadratic behavior if the partitioning at each recursive step only divides the collection of n elements into an "empty" or "large set"

## Approach
1. Partition the array
2. Each subarray is recursively sorted

# Partition Step
- To partition the array we need to select a pivot point
- common pivot point selection strategies:
  - select first or last element
  - select random element
  - select median-of-k element

# Sort Step
- standard optimization is to use insertion sort when the size of the subarray to be sorted is small in size

# Use Cases
- Use when you are interested in good average-case behavior

## Note
- using a random element as a pivot point enables quicksort to provide average-case performance which usually outperforms sorting algorithms
- Combination of median-of-three pivot and insertion sort for small subarrays offers the best efficiency


