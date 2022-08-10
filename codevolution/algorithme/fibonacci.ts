function fibonacci(n:number):number[] {
  let res=[0,1]
  if(n===1) return [0]

  for (let idx=2;idx<n;idx++){
    res[idx] = res[idx-1] + res[idx-2]
  }
  return res
}

//? Big-O = O(2^n)
function fibRecursive(n:number):number {
  if(n<2) return n
  return fibRecursive(n-1) + fibRecursive(n-2)

}

console.log({fib:fibonacci(2)})
console.log({fibRecusive:fibRecursive(6)})
