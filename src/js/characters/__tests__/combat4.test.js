import Warrior from '../Warrior';
import Archer from '../Archer';
import { play } from '../../game';

describe('Combat: chooseEnemy/moveToEnemy/turn/play', () => {
    test('chooseEnemy picks enemy with minimal life', () => {
        const p1 = new Warrior(0, 'W1');
        const p2 = new Archer(5, 'A1');
        const p3 = new Archer(10, 'A2');

        p2.life = 30;
        p3.life = 10;

        const enemy = p1.chooseEnemy([p1, p2, p3]);
        expect(enemy).toBe(p3);
    });

    test('moveToEnemy moves towards enemy', () => {
        const w = new Warrior(6, 'W');
        const a = new Archer(0, 'A');

        w.moveToEnemy(a);
        expect(w.position).toBe(4);
    });

    test('turn calls move and attack', () => {
        const w = new Warrior(0, 'W');
        const a = new Archer(2, 'A');

        w.getLuck = () => 1;
        a.isAttackBlocked = () => false;
        a.dodged = () => false;

        w.turn([w, a]);
        expect(a.life).toBeLessThan(80);
    });

    test('play returns a winner', () => {
        const w = new Warrior(0, 'W');
        const a = new Archer(1, 'A');

        w.getLuck = () => 1;
        a.getLuck = () => 1;
        w.isAttackBlocked = () => false;
        a.isAttackBlocked = () => false;
        w.dodged = () => false;
        a.dodged = () => false;

        const winner = play([w, a]);
        expect(winner === w || winner === a).toBe(true);
    });
});
