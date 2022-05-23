export class Personaje {
    #name;
    #family;
    #age;
    #state;
    constructor(name, age, family) {
        this.#name = name;
        this.#family = family;
        this.#age = age;
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
    get state() {
        return this.#state;
    };
    saludar() {};
}

