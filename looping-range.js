

function range(start, end, step) {
  let numbers = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
  }
  return numbers;
}

console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));