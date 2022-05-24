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

    const carrousel = document.querySelector('#carrousel');
    // carrousel.innerHTML = carrouselTemplate(arrayPersonajes[0].name, arrayPersonajes[0].family);
    carrousel.innerHTML = carrouselTemplate(arrayPersonajes);

    const buttons = document.querySelectorAll('.character__action.btn');
    // const dieButtons = document.querySelectorAll('.character__action.btn');
    let comunications = document.querySelector('.comunications');

    
    // buttons.addEventListener('click', () => {alert("dfdf")})
    // console.dir(comunications);
    
        
                
       
        

    
    
    for (let i = 0; i < buttons.length; i++) {
        // buttons[i].addEventListener('click', (ev) => {console.log(ev.target.dataset.name)});
        // comunications.classList.add('on');

        buttons[i].addEventListener('click', (ev) => {
            if(ev.target.dataset.action === 'habla'){
                console.log(ev.target.dataset.action);
                comunications.classList.add('on');
                console.log(comunications);

                setTimeout(() =>{
                    comunications.classList.remove('on');
                }, 2)
            }
        });
    }

    // const deathCharacter = (buttons) => {

    // }

}
