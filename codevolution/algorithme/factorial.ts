function factorial(n: number): number {
  let res = 1;
  for (let idx = 1; idx < n + 1; idx++) {
    res = res * idx;
  }
  return res;
}

//? Big-O = O(n)
function factorialRec(n: number): number {
  if(n===1 || n===0) return 1

  return n * factorialRec(n-1)
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorialRec(6));
