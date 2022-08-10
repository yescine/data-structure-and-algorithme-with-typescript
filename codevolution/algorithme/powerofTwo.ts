function powerOftwo(n: number): boolean {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

function powerOftwoBitwise (n: number): boolean {
  if (n < 1) return false;
  return (n & (n-1))===0
}

console.log(powerOftwo(16))