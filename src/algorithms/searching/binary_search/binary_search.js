// pointer-based solution
function binarySearch(arr, el) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] < el) {
      left = middle + 1;
    } else if (arr[middle] > el) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// assumes pre-sorted collection
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let idx = binarySearch(arr, 7);
console.log(idx); // 6

let notFound = binarySearch(arr, 12);
console.log(notFound); // -1
