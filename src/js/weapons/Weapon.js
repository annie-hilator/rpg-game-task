export default class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        return this.isBroken() ? 0 : this.attack;
    }

    isBroken() {
        return this.durability === 0;
    }
}
