import { Personaje } from "./Personaje.js";
import { Rey } from "./Rey.js";
import { Luchador } from "./Luchador.js";
import { Asesor } from "./Asesor.js";
import { Escudero } from "./Escudero.js";
import { carrouselTemplate } from "./templates/templates.js";
import { arrayPersonajes } from "./personajes.js";


// IIFE
(() => {
        document.addEventListener('DOMContentLoaded', index);
})();



function index() {
    console.log(arrayPersonajes);

    const carrousel = document.querySelector('#carrousel');
    carrousel.innerHTML = carrouselTemplate(arrayPersonajes[0].name, arrayPersonajes[0].family);

}
