function judgeVegetable(veggies, metric) {
  let best = 1
  let submitterName = '';
  for (let i = 0; i < veggies.length; i ++) {
    if (veggies[i][metric] > best) {
      best = veggies[i][metric];
      submitterName = veggies[i]['submitter']
    }
  }
  return console.log(submitterName)
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)
