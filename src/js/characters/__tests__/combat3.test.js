import Warrior from '../Warrior';
import Archer from '../Archer';

describe('Combat tryAttack', () => {
    test('does nothing if out of range', () => {
        const w = new Warrior(0, 'Воин');
        const a = new Archer(5, 'Лучник');

        w.getLuck = () => 0.5;
        a.isAttackBlocked = () => false;
        a.dodged = () => false;

        const beforeLife = a.life;
        w.tryAttack(a);
        expect(a.life).toBe(beforeLife);
    });

    test('attacks if in range', () => {
        const w = new Warrior(0, 'Воин');
        const a = new Archer(1, 'Лучник');

        w.getLuck = () => 0.5;
        a.isAttackBlocked = () => false;
        a.dodged = () => false;

        w.tryAttack(a);
        expect(a.life).toBeLessThan(80);
    });

    test('if same position - enemy pushed and takes double damage', () => {
        const w = new Warrior(0, 'Воин');
        const a = new Archer(0, 'Лучник');

        w.getLuck = () => 1;
        a.isAttackBlocked = () => false;
        a.dodged = () => false;

        const beforePos = a.position;
        const beforeLife = a.life;

        w.tryAttack(a);

        expect(a.position).toBe(beforePos + 1);
        expect(a.life).toBeLessThan(beforeLife);
    });
});
