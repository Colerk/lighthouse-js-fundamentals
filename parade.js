let loc = [0, 0];

function finalPosition(moves){
  for (let move of moves) {
    if (move === 'north'){
      loc[1] += 1;
    } else if (move === 'south'){
      loc[1] -= 1;
    } else if (move === 'west'){
      loc[0] -= 1;
    } else if (move === 'east'){
      loc[0] += 1;
  }
  return loc;
}