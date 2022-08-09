function factorial(n: number): number {
  let res = 1;
  for (let idx = 1; idx < n + 1; idx++) {
    res = res * idx;
  }
  return res;
}

console.log(factorial(5));
console.log(factorial(8));

