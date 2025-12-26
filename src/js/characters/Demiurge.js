import Mage from './Mage';
import StormStaff from '../weapons/StormStaff';
import Knife from '../weapons/Knife';
import Arm from '../weapons/Arm';

export default class Demiurge extends Mage {
    constructor(position, name) {
        super(position, name);

        this.life = 80;
        this.magic = 120;
        this.attack = 6;
        this.luck = 12;
        this.description = 'Демиург';

        this.weapon = new StormStaff();
        this.weapons = [this.weapon, new Knife(), new Arm()];
    }

    getDamage(distance) {
        let damage = super.getDamage(distance);

        if (this.magic > 0 && this.getLuck() > 0.6) {
            damage *= 1.5;
        }

        return damage;
    }
}
