function concat(a, b){
  cm = [];
  for (let i = 0; i < a.length; i++){
    cm.push(a[i])
  }
  for (let i = 0; i < b.length; i++){
    cm.push(b[i])
  }
  return cm;
}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));