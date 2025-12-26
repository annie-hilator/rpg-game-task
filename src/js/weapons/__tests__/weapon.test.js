import Weapon from '../Weapon';
import Arm from '../Arm';
import Bow from '../Bow';
import Sword from '../Sword';
import Knife from '../Knife';
import Staff from '../Staff';
import LongBow from '../LongBow';
import Axe from '../Axe';
import StormStaff from '../StormStaff';

describe('Weapon base class', () => {
    test('constructor sets fields', () => {
        const w = new Weapon('Тест', 10, 100, 2);
        expect(w.name).toBe('Тест');
        expect(w.attack).toBe(10);
        expect(w.durability).toBe(100);
        expect(w.range).toBe(2);
    });

    test('takeDamage reduces durability but not below 0', () => {
        const w = new Weapon('Тест', 10, 50, 1);
        w.takeDamage(10);
        expect(w.durability).toBe(40);
        w.takeDamage(999);
        expect(w.durability).toBe(0);
    });

    test('isBroken true when durability is 0', () => {
        const w = new Weapon('Тест', 10, 1, 1);
        expect(w.isBroken()).toBe(false);
        w.takeDamage(1);
        expect(w.isBroken()).toBe(true);
    });

    test('getDamage returns 0 if broken else attack', () => {
        const w = new Weapon('Тест', 10, 1, 1);
        expect(w.getDamage()).toBe(10);
        w.takeDamage(1);
        expect(w.getDamage()).toBe(0);
    });
});

describe('Weapons presets', () => {
    test('Arm has correct defaults', () => {
        const w = new Arm();
        expect(w.name).toBe('Рука');
        expect(w.attack).toBe(1);
        expect(w.range).toBe(1);
        expect(w.durability).toBe(Infinity);
    });

    test('Bow defaults', () => {
        const w = new Bow();
        expect(w.name).toBe('Лук');
        expect(w.attack).toBe(10);
        expect(w.durability).toBe(200);
        expect(w.range).toBe(3);
    });

    test('Sword defaults', () => {
        const w = new Sword();
        expect(w.name).toBe('Меч');
        expect(w.attack).toBe(25);
        expect(w.durability).toBe(500);
        expect(w.range).toBe(1);
    });

    test('Knife defaults', () => {
        const w = new Knife();
        expect(w.name).toBe('Нож');
        expect(w.attack).toBe(5);
        expect(w.durability).toBe(300);
        expect(w.range).toBe(1);
    });

    test('Staff defaults', () => {
        const w = new Staff();
        expect(w.name).toBe('Посох');
        expect(w.attack).toBe(8);
        expect(w.durability).toBe(300);
        expect(w.range).toBe(2);
    });

    test('LongBow extends Bow and overrides fields', () => {
        const w = new LongBow();
        expect(w).toBeInstanceOf(Bow);
        expect(w.name).toBe('Длинный лук');
        expect(w.attack).toBe(15);
        expect(w.range).toBe(4);
        expect(w.durability).toBe(200);
    });

    test('Axe extends Sword and overrides fields', () => {
        const w = new Axe();
        expect(w).toBeInstanceOf(Sword);
        expect(w.name).toBe('Секира');
        expect(w.attack).toBe(27);
        expect(w.durability).toBe(800);
        expect(w.range).toBe(1);
    });

    test('StormStaff extends Staff and overrides fields', () => {
        const w = new StormStaff();
        expect(w).toBeInstanceOf(Staff);
        expect(w.name).toBe('Посох бури');
        expect(w.attack).toBe(10);
        expect(w.range).toBe(3);
        expect(w.durability).toBe(300);
    });
});
