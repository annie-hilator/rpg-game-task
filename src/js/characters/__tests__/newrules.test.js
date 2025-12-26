import Warrior from '../Warrior';
import Mage from '../Mage';

describe('New rules', () => {
    test('Warrior - on low HP and luck > 0.8 - damage goes to magic', () => {
        const w = new Warrior(0, 'W');
        w.life = 40;
        w.maxLife = 120;

        w.magic = 20;
        w.getLuck = () => 1;

        w.takeDamage(5);
        expect(w.life).toBe(40);
        expect(w.magic).toBe(15);
    });

    test('Warrior - if magic not enough, rest goes to life', () => {
        const w = new Warrior(0, 'W');
        w.life = 40;
        w.maxLife = 120;

        w.magic = 3;
        w.getLuck = () => 1;

        w.takeDamage(10);
        expect(w.magic).toBe(0);
        expect(w.life).toBe(33);
    });

    test('Mage: if magic > 50% maxMagic, damage is divided by two and magic -12', () => {
        const m = new Mage(0, 'M');
        m.maxMagic = 100;
        m.magic = 100;
        m.life = 70;

        m.takeDamage(50);
        expect(m.life).toBe(45);
        expect(m.magic).toBe(88);
    });
});
