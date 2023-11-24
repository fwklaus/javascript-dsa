function linearSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return true;
    }
  }

  return false;
}

let array = [2, 3, 3, 4, 5, 2];
let hasItem = linearSearch(array, 4);
console.log(hasItem); // true

let array2 = [2, 3, 3, 4, 5, 2];
let hasItem2 = linearSearch(array, 1);
console.log(hasItem2); // false
