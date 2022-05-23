import { Personaje } from "./Personaje.js";

export class Luchador extends Personaje {
    #arme;
    #skill;
    constructor(name, age, family, arme, skill) {
        super(name, age, family);
        this.#arme = arme;
        this.#skill = skill;
    }
    saludar() {
        return 'Primero pego y luego pregunto'
    }
}