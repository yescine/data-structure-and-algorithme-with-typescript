//? Big-o O(n^2)
function bubble(arr: number[]): number[] {
  let swap = true;
  while (swap) {
    for (let idx = 0; idx < arr.length; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        let big = arr[idx];
        let small = arr[idx + 1];
        arr[idx] = small;
        arr[idx + 1] = big;
      } else swap = false;
    }
  }
  return arr;
}

//? Big-o O(n^2)
function insertion(arr: number[]): number[] {
  for (let idx = 1; idx < arr.length; idx++) {
    let insert = arr[idx];
    let j = idx - 1;
    while (j >= 0 && arr[j] > insert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insert;
  }
  return arr;
}

//? Big-O O(n^2) worst
//? Theta-O O(nlog(n)) avg
function quick(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let idx = 0; idx < arr.length - 1; idx++) {
    arr[idx] < pivot ? leftArr.push(arr[idx]) : rightArr.push(arr[idx]);
  }
  return [...quick(leftArr), pivot, ...quick(rightArr)];
}

//? Big-O O(nlog(n))
function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(left: number[], right: number[]): number[] {
  const sorted = [];
  while (left.length && right.length) {
    left[0] <= right[0] ? sorted.push(left.shift()) : sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
}

const arr = [8, -6, -3, 16, 11];
console.log("buble", bubble(arr));
console.log("insertion", insertion(arr));
console.log("quick", quick(arr));
console.log("mergeSort", mergeSort(arr));
