import { Personaje } from "./Personaje.js";

export class Asesor extends Personaje {
    #advised;
    constructor(name, age, family, img, emoji, advised = new Personaje()) {
        super(name, age, family, img, emoji);
        this.#advised = advised;
    }
    saludar() {
        return 'No sé por qué, pero creo que voy a morir pronto'
    }
}