import { getHeroStatus } from '../game.js';

test('test hero is wounded', () => {
    const hero = {name: 'маг', health: 50};
    const result = getHeroStatus(hero);
    expect(result).toBe('wounded');
});

test('test hero is healthy', () => {
    const hero = {name: 'маг', health: 70};
    const result = getHeroStatus(hero);
    expect(result).toBe('healthy');
});

test('test hero is critical', () => {
    const hero = {name: 'маг', health: 10};
    const result = getHeroStatus(hero);
    expect(result).toBe('critical');
});

