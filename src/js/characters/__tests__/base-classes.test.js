import Warrior from '../Warrior';
import Archer from '../Archer';
import Mage from '../Mage';

describe('Base character classes', () => {
    test('Warrior defaults', () => {
        const w = new Warrior(0, 'Воин');
        expect(w.life).toBe(120);
        expect(w.speed).toBe(2);
        expect(w.description).toBe('Воин');
    });

    test('Archer getDamage override works', () => {
        const a = new Archer(0, 'Лучник');
        const dmg = a.getDamage(1);
        expect(typeof dmg).toBe('number');
    });

    test('Mage magic damage logic', () => {
        const m = new Mage(0, 'Маг');
        m.takeDamage(20);
        expect(m.magic).toBeLessThan(100);
    });
});
