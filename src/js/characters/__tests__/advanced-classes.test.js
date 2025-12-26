import Dwarf from '../Dwarf';
import Crossbowman from '../Crossbowman';
import Demiurge from '../Demiurge';

describe('Advanced character classes', () => {
    test('Dwarf has increased stats', () => {
        const d = new Dwarf(0, 'Гном');
        expect(d.life).toBe(130);
        expect(d.attack).toBe(15);
        expect(d.luck).toBe(20);
    });

    test('Crossbowman defaults', () => {
        const c = new Crossbowman(0, 'Арбалетчик');
        expect(c.life).toBe(85);
        expect(c.attack).toBe(8);
        expect(c.agility).toBe(20);
    });

    test('Demiurge damage increases with magic', () => {
        const d = new Demiurge(0, 'Демиург');
        const dmg = d.getDamage(1);
        expect(typeof dmg).toBe('number');
    });
});
