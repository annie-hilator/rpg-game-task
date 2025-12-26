import Warrior from '../Warrior';

describe('Combat: movement & chance', () => {
    test('moveLeft/moveRight respect speed', () => {
        const p = new Warrior(6, 'Вельт');

        p.moveLeft(5);
        expect(p.position).toBe(4);

        p.moveRight(2);
        expect(p.position).toBe(6);

        p.moveRight(1);
        expect(p.position).toBe(7);
    });

    test('isAttackBlocked returns boolean', () => {
        const p = new Warrior(0, 'Дань Хэн');
        const r = p.isAttackBlocked();
        expect(typeof r).toBe('boolean');
    });

    test('dodged returns boolean', () => {
        const p = new Warrior(0, 'Март 7');
        const r = p.dodged();
        expect(typeof r).toBe('boolean');
    });
});
