import { Personaje } from "./Personaje.js";
import { Rey } from "./Rey.js";
import { Luchador } from "./Luchador.js";
import { Asesor } from "./Asesor.js";
import { Escudero } from "./Escudero.js";

const arrayPersonajes = [];

arrayPersonajes.push(new Rey('Joffrey Baratheon', 14, 'Baratheon', 1));
arrayPersonajes.push(new Luchador('Jaime Lannister', 32, 'Lannister', 'sword', 10));
arrayPersonajes.push(new Luchador('Daenerys Targaryen', 20, 'Targaryen', 'dagger', 8));
arrayPersonajes.push(new Asesor('Tyrion Lannister', 60, 'Lannister', arrayPersonajes[2]));
arrayPersonajes.push(new Escudero('Bronn', 60, 'black Waters', arrayPersonajes[1], 5));

console.log(arrayPersonajes)