# Binary Search
- Adds slight complexity, but much improved performance over sequential search 
- starts with a collection that is already sorted
- divides the collection in half and searches each half for a given item until the item is found or it's determined that the item does not exist in the collection

## Complexity
- Best: O(1) - in the case that the item is found on the first iteration
- Average, Worst: O(log n) - we split the search area in half on each iteration

## Use Cases
- Use for an array that won't change
- use when you want to conserve memory
