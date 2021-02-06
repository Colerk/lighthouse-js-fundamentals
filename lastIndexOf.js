function lastIndexOf(index, value) {
  for (let i = index.length -1; i >= 0; i--) {
    if (index[i] === value) {
      return i;
      break;
    }
  }
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));