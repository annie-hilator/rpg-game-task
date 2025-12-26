import Warrior from '../Warrior';
import Arm from '../../weapons/Arm';
import Knife from '../../weapons/Knife';

describe('Combat: takeAttack & weapon change', () => {
    test('if blocked: weapon takes damage', () => {
        const p = new Warrior(0, 'Кандакия');

        p.isAttackBlocked = () => true;
        p.dodged = () => false;

        const before = p.weapon.durability;
        p.takeAttack(10);
        expect(p.weapon.durability).toBeLessThan(before);
    });

    test('if dodged no life loss', () => {
        const p = new Warrior(0, 'Коллеи');

        p.isAttackBlocked = () => false;
        p.dodged = () => true;

        const before = p.life;
        p.takeAttack(999);
        expect(p.life).toBe(before);
    });

    test('if not blocked and not dodged - life decreases', () => {
        const p = new Warrior(0, 'Тигнари');

        p.isAttackBlocked = () => false;
        p.dodged = () => false;

        p.takeAttack(10);
        expect(p.life).toBe(110);
    });

    test('checkWeapon switches to next weapon when broken', () => {
        const p = new Warrior(0, 'Нахида');

        p.weapon.takeDamage(1000);
        p.checkWeapon();
        expect(p.weapon).toBeInstanceOf(Knife);

        p.weapon.takeDamage(1000);
        p.checkWeapon();
        expect(p.weapon).toBeInstanceOf(Arm);
    });
});
