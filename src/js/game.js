import Archer from './characters/Archer';
import Warrior from './characters/Warrior';
import Mage from './characters/Mage';
import Dwarf from './characters/Dwarf';
import Crossbowman from './characters/Crossbowman';
import Demiurge from './characters/Demiurge';

export const characters = [Archer, Warrior, Mage, Dwarf, Crossbowman, Demiurge];

export function play(players) {
    let alive = players.filter((p) => !p.isDead());

    let rounds = 0;

    while (alive.length > 1 && rounds < 10000) {
        alive.forEach((p) => p.turn(alive));
        alive = players.filter((p) => !p.isDead());
        rounds += 1;
    }

    return alive[0] || null;
}
