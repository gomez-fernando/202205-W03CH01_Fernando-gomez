export class Personaje {
    #name;
    #family;
    #age;
    #state;
    #img
    #emoji
    constructor(name, age, family, img, emoji) {
        this.#name = name;
        this.#age = age;
        this.#family = family;
        this.#img = img;
        this.#emoji = emoji;
        this.#state = 'vivo';
    }
    get name() {
        return this.#name;
    };
    get family() {
        return this.#family;
    };
    get age() {
        return this.#age;
    };
    get img() {
        return this.#img;
    };
    get emoji() {
        return this.#emoji;
    };
    get state() {
        return this.#state;
    };
    saludar() {};
}

