// sort using pointer-based strategy

function selectMax(arr, left, right, comp) {
  let maxPos = left;
  let i = left;

  while (++i <= right) {
    if (comp(arr[i], arr[maxPos]) > 0) {
      maxPos = i;
    }
  }

  return maxPos;
}

function selectionSort(arr, comp) {
  for (let i = arr.length - 1; i>= 1; i--) {
    let maxPos = selectMax(arr, 0, i, compare);
    if (maxPos !== i) {
      let temp = arr[i];
      arr[i] = arr[maxPos];
      arr[maxPos] = temp;
    }
  }
}

const compare = (a, b) => a - b;

let array = [1, -5, 1, 0, 10];
selectionSort(array, compare);
console.log(array); // [-5, 0, 1, 1, 10]