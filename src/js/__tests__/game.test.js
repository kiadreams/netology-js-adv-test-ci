import { getHeroStatus, showStatusOfAllHeroes } from '../game.js';


test.each([
  ['wounded', { name: 'маг', health: 50 }, 'wounded'],
  ['healthy', { name: 'маг', health: 70 }, 'healthy'],
  ['critical', { name: 'маг', health: 10 }, 'critical'],
])('testing getHeroStatus function: %s', (status, hero, expected) => {
  const result = getHeroStatus(hero);
  expect(result).toBe(expected);
});


test('testing showStatusOfAllHeroes function', () => {
  const result = showStatusOfAllHeroes([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual([
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ]);
});
