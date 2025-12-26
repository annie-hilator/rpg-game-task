import Staff from './Staff';

export default class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох бури';
        this.attack = 10;
        this.range = 3;
    }
}
