// import { Personaje } from "./Personaje.js";
import { Rey } from "./Rey.js";
import { Luchador } from "./Luchador.js";
import { Asesor } from "./Asesor.js";
import { Escudero } from "./Escudero.js";

export const arrayPersonajes = [];

arrayPersonajes.push(new Rey('Joffrey', 14, 'Baratheon', 1));
arrayPersonajes.push(new Luchador('Jaime', 32, 'Lannister', 'sword', 10));
arrayPersonajes.push(new Luchador('Daenerys', 20, 'Targaryen', 'dagger', 8));
arrayPersonajes.push(new Asesor('Tyrion', 60, 'Lannister', arrayPersonajes[2]));
arrayPersonajes.push(new Escudero('Bronn', 60, 'black Waters', arrayPersonajes[1], 5));

// console.log(arrayPersonajes)