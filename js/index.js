import { Personaje } from "./Personaje.js";
import { Rey } from "./Rey.js";
import { Luchador } from "./Luchador.js";
import { Asesor } from "./Asesor.js";
import { Escudero } from "./Escudero.js";


import { about } from './about.js';
import { index } from './index.js';

// IIFE
(() => {
    const path = location.pathname.split('/');

    if (
        path[path.length - 1] === '' ||
        path[path.length - 1] === 'index.html'
    ) {
        document.addEventListener('DOMContentLoaded', index);
    } else {
        document.addEventListener('DOMContentLoaded', about);
    }
})();



import { renderCommon } from './helpers.js';

export function index() {
    console.log('Cargado index');

    /* JS 
        - core
        - APIs (node / browser)
            APIS browser
                - BOM
                - DOM (estandar de W3C)
                - Web APIS (HTML5...)
    */

    // Accdemos al DOM

    console.log(document);
    console.dir(document);

    renderCommon('Home');

    const heading = document.querySelector('h1');
    let paragraphs = document.querySelectorAll('p');
    console.dir(heading);
    console.log(paragraphs);
    console.log(heading.textContent);

    // Respondemos a eventos del DOM

    heading.addEventListener('click', () => {
        console.log('Click');
        // Modificamos el DOM
        // heading.textContent += ' - <em>Primer día</em>';
        heading.innerHTML += ' - <em>Primer día</em>';
        paragraphs[0].outerHTML = '<h2>Primera sección</h>';
        paragraphs = document.querySelectorAll('p');
        heading.setAttribute('title', 'Hola amigo');
        paragraphs[0].title = 'Otro cambio de atributo';
        heading.classList.add('destacado');
        heading.style = 'font-size: 2.5rem';
    });
}
