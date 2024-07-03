// iterative
function sumToN(num) {
  let sum = 0;
  for (let index = 1; index <= num; index++) {
    sum += index;
  }
  return sum;
}

function sumToN2(num) {
  const nums = [];
  for (let index = 1; index <= num; index++) {
    nums.unshift(index);
  }
  return nums.reduce((a, n) => a + n, 0);
}

function sumToNRec(num) {
  if (num === 1) return 1; // Base
  return sumToNRec(num - 1) + num; // Recursive
}

// console.log(sumToN(1e6));
const amount = 1e6;
console.time('iterative');
sumToN(amount);
console.timeEnd('iterative');

console.time('iterative2');
sumToN2(amount);
console.timeEnd('iterative2');
// f(3) = 1 + 2 + 3 = 6
// f(4) = 1 + 2 + 3 + 4 = 10
