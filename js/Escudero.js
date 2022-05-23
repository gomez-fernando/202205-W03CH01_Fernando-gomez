import { Personaje } from "./Personaje.js";
import { Luchador } from "./Luchador.js";

export class Escudero extends Personaje {
    #maitre;
    #pelota;
    constructor(name, age, family, img, emoji, maitre = new Luchador(), pelota) {
        super(name, age, family, img, emoji);
        this.#maitre = maitre;
        this.#pelota = pelota;
    }
    saludar() {
        return 'Soy un loser';
    }
}