// insertion sort using the pointer-based strategy
function insertiontSort(arr, comp) {
  for (let i = 1; i < arr.length; i++) {
    let prev = i - 1;
    let curr = arr[i];
    while(prev >= 0 && comp(arr[prev], curr) > 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
  }
}

let compare = (a, b) => a - b;

let array = [ 1, 3, 0, 2, 7, 6 ];
insertiontSort(array, compare); 
console.log(array); // [0, 1, 2, 3, 6, 7]

let array2 = [4345, 1, 3425, 64, 2, 5,];
insertiontSort(array2, compare);
console.log(array2); // [1, 2, 5, 64, 3425, 4345]

let array3 = [6, 0, -1,  -5, -300];
insertiontSort(array3, compare);
console.log(array3); // [-300, -5, -1, 0, 6]
