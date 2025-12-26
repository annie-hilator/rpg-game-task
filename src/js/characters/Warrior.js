import Player from './Player';
import Sword from '../weapons/Sword';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';

export default class Warrior extends Player {
    constructor(position, name) {
        super(position, name);

        this.life = 120;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';

        this.weapon = new Sword();
        this.weapons = [this.weapon, new Knife(), new Arm()];
    }

    takeDamage(damage) {
        const lowHp = this.life < this.maxLife * 0.5;

        if (lowHp && this.magic > 0 && this.getLuck() > 0.8) {
            if (this.magic >= damage) {
                this.magic -= damage;
            } else {
                const rest = damage - this.magic;
                this.magic = 0;
                super.takeDamage(rest);
            }

            return;
        }

        super.takeDamage(damage);
    }
}
