import { Personaje } from "./Personaje.js";
import { Luchador } from "./Luchador.js";

export class Escudero extends Personaje {
    #maitre;
    #pelota;
    constructor(name, age, family, maitre = new Luchador(), pelota) {
        super(name, age, family);
        this.#maitre = maitre;
        this.#pelota = pelota;
    }
    saludar() {
        return 'Soy un loser';
    }
}