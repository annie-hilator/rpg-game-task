import Arm from '../weapons/Arm';
import Knife from '../weapons/Knife';

export default class Player {
    constructor(position, name) {
        this.life = 100;
        this.magic = 20;
        this.maxLife = this.life;
        this.maxMagic = this.magic;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;

        this.description = 'Игрок';

        this.weapon = new Arm();
        this.position = position;
        this.name = name;

        this._defaultWeapon = new Knife();
    }

    getLuck() {
        const randomNumber = Math.random() * 100;
        return (randomNumber + this.luck) / 100;
    }

    getDamage(distance) {
        if (distance > this.weapon.range) {
            return 0;
        }

        const weaponDamage = this.weapon.getDamage();
        return (this.attack + weaponDamage) * this.getLuck() / distance;
    }

    takeDamage(damage) {
        this.life -= damage;
        if (this.life < 0) {
            this.life = 0;
        }
    }

    isDead() {
        return this.life === 0;
    }

    moveLeft(distance) {
        const step = Math.min(Math.abs(distance), this.speed);
        this.position -= step;
    }

    moveRight(distance) {
        const step = Math.min(Math.abs(distance), this.speed);
        this.position += step;
    }

    move(distance) {
        if (distance < 0) {
            this.moveLeft(distance);
        } else {
            this.moveRight(distance);
        }
    }

    isAttackBlocked() {
        return this.getLuck() > (100 - this.luck) / 100;
    }

    dodged() {
        return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
    }

    takeAttack(damage) {
        if (this.isAttackBlocked()) {
            this.weapon.takeDamage(damage);
            this.checkWeapon();
            return;
        }

        if (this.dodged()) {
            return;
        }

        this.takeDamage(damage);
    }

    checkWeapon() {
        if (!this.weapon.isBroken())
            return;

        const index = this.weapons.findIndex((w) => w.constructor === this.weapon.constructor);

        if (index === -1)
            return;

        const nextWeapon = this.weapons[index + 1];
        if (nextWeapon) {
            this.weapon = nextWeapon;
        }
    }

    tryAttack(enemy) {
        const distance = Math.abs(this.position - enemy.position);

        if (distance > this.weapon.range)
            return;

        this.weapon.takeDamage(10 * this.getLuck());
        this.checkWeapon();

        const damage = this.getDamage(distance);

        if (distance === 0) {
            enemy.position += 1;
            enemy.takeAttack(damage * 2);
            return;
        }

        enemy.takeAttack(damage);
    }

    chooseEnemy(players) {
        const enemies = players.filter((p) => p !== this && !p.isDead());
        if (enemies.length === 0)
            return null;

        return enemies.reduce((min, p) => (p.life < min.life ? p : min), enemies[0]);
    }

    moveToEnemy(enemy) {
        if (!enemy)
            return;

        const delta = enemy.position - this.position;
        if (delta === 0)
            return;

        this.move(delta);
    }

    turn(players) {
        if (this.isDead())
            return;

        const enemy = this.chooseEnemy(players);
        if (!enemy)
            return;

        this.moveToEnemy(enemy);
        this.tryAttack(enemy);
    }
}
