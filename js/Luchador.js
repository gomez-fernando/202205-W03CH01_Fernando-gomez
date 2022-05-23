import { Personaje } from "./Personaje.js";

export class Luchador extends Personaje {
    #arme;
    #skill;
    constructor(name, age, family, img, emoji, arme, skill) {
        super(name, age, family, img, emoji);
        this.#arme = arme;
        this.#skill = skill;
    }
    get arme() {
        return this.#arme;
    };
    get skill() {
        return this.#skill;
    };
    saludar() {
        return 'Primero pego y luego pregunto'
    }
}