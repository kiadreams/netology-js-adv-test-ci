export function getHeroStatus(hero) {
  if (hero.health > 50) {
    return 'healthy';
  } else if (hero.health > 14) {
    return 'wounded';
  }
  return 'critical';
}


export function showStatusOfAllHeroes(heroes) {
  return heroes.sort((a, b) => a.health - b.health)
}


// const allHeroes = [
//   { name: 'мечник', health: 10 },
//   { name: 'маг', health: 100 },
//   { name: 'лучник', health: 80 },
// ]
// console.log(getHeroStatus({ name: 'маг', health: 10 }));
// console.log(showStatusOfAllHeroes(allHeroes));