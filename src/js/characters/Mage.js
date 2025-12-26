import Player from './Player';
import Staff from '../weapons/Staff';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';

export default class Mage extends Player {
    constructor(position, name) {
        super(position, name);

        this.life = 70;
        this.magic = 100;
        this.attack = 5;
        this.agility = 8;
        this.description = 'Маг';

        this.weapon = new Staff();
        this.weapons = [this.weapon, new Knife(), new Arm()];
    }

    takeDamage(damage) {
        if (this.magic > this.maxMagic * 0.5) {
            this.life -= damage / 2;
            this.magic -= 12;
        } else {
            super.takeDamage(damage);
        }

        if (this.life < 0)
            this.life = 0;

        if (this.magic < 0)
            this.magic = 0;
    }
}
