//? Big-O = O(nm)

function cartesianProd(arr1: number[], arr2: number[]): number[][] {
  const result = [];
  for (let idx = 0; idx < arr1.length; idx++) {
    for (let jdx = 0; jdx < arr2.length; jdx++) {
      result.push([arr1[idx], arr2[jdx]]);
    }
  }
  return result;
}
const arr1 = [1, 2];
const arr2 = [3, 4, 5];

//? Big-O = O(2^n)
function towerOfHanoi(n:number, fromRod:string, toRod:string, usingRod:string) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod)
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}



console.log("cartesianProd", cartesianProd(arr1, arr2));
console.log("towerOfHanoi", towerOfHanoi(3, 'A', 'C', 'B'));

