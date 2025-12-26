import Player from '../Player';

describe('Player base class', () => {
    test('constructor sets base stats', () => {
        const p = new Player(10, 'Химеко');

        expect(p.position).toBe(10);
        expect(p.name).toBe('Химеко');

        expect(p.life).toBe(100);
        expect(p.magic).toBe(20);
        expect(p.speed).toBe(1);
        expect(p.attack).toBe(10);
        expect(p.agility).toBe(5);
        expect(p.luck).toBe(10);
        expect(p.description).toBe('Игрок');
        expect(p.weapon).toBeDefined();
    });

    test('takeDamage reduces life but not below 0', () => {
        const p = new Player(0, 'Чжунь Ли');
        p.takeDamage(10);
        expect(p.life).toBe(90);
        p.takeDamage(200);
        expect(p.life).toBe(0);
    });

    test('isDead works', () => {
        const p = new Player(0, 'Тарталья');
        expect(p.isDead()).toBe(false);
        p.takeDamage(999);
        expect(p.isDead()).toBe(true);
    });

    test('getDamage returns 0 if distance is greater than weapon range', () => {
        const p = new Player(0, 'Коломбина');
        expect(p.getDamage(2)).toBe(0);
    });

    test('getDamage returns a number when in range', () => {
        const p = new Player(0, 'Арлекино');
        const dmg = p.getDamage(1);
        expect(typeof dmg).toBe('number');
        expect(dmg).toBeGreaterThanOrEqual(0);
    });
});
