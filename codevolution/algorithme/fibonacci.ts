function fibonacci(n:number):number[] {
  let res=[0,1]
  if(n===1) return [0]

  for (let idx=2;idx<n;idx++){
    res[idx] = res[idx-1] + res[idx-2]
  }
  return res
}

console.log({fib:fibonacci(2)})