const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



function chooseStations(places) {
  let acceptable = [];
  for (let station of stations) {
    if (station[1] >= 20) {
      if (station[2] === 'community centre' || station[2] === 'school'){
        acceptable.push(station[0])
      }
    }
  }
  return acceptable;
}