function searchLinear(arr: number[], target: number): number {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) return index;
  }
  return -1;
}

//? Big-o O(log(n))
function searchBinary(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    target > arr[middle] ? (left = middle + 1) : (right = middle - 1);
    if (target === arr[middle]) return middle;
  }

  return -1;
}

//? Big-o O(log(n))
function search(arr: number[], target: number, left: number, right: number): number {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  if (target === arr[middle]) return middle;
  if (target < arr[middle]) return search(arr, target, left, middle - 1);
  else return search(arr, target, middle + 1, right);
}
function searchBinaryRecur(arr: number[], target: number): number {
  return search(arr, target, 0, arr.length - 1);

  return -1;
}

const target = 12;
console.log(searchLinear([-1, -2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], target));
console.log(searchBinary([-1, -2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], target));
