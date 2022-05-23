import { Personaje } from "./Personaje.js";

export class Rey extends Personaje {
    #yearsKingdom;
    constructor(name, age, family, img, emoji, yearsKingdom) {
        super(name, age, family, img, emoji);
        this.#yearsKingdom = yearsKingdom
    }
    saludar() {
        return 'Vais a morir todos!!!'
    }
}