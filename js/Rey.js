import { Personaje } from "./Personaje.js";

export class Rey extends Personaje {
    #yearsKingdom;
    constructor(name, age, family, yearsKingdom) {
        super(name, age, family);
        this.#yearsKingdom = yearsKingdom
    }
    saludar() {
        return 'Vais a morir todos!!!'
    }
}