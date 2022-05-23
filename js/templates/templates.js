import { arrayPersonajes } from "../personajes.js";

function injectCard(arrayPersonajes){
    let html = '';
    arrayPersonajes.forEach(element => {
        html += `
        <li class="character col">
    <div class="card character__card">
      <img
        src="./img/${element.img}"
        alt="Nombre y familia del personaje"
        class="character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">${element.name} ${element.family}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${element.age}</li>
            <li>
              Estado:
              ${(element.state === 'alive') ? '<i class="fas fa-thumbs-up"></i>' : '<i class="fas fa-thumbs-down"></i>'}
              
              
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            ${(element.yearsKingdom !== undefined) ? `<li>Años de reinado: ${element.yearsKingdom}</li>` : ''}
            ${(element.arme !== undefined) ? `<li>Arma: ${element.arme}</li>` : ''}
            ${(element.skill !== undefined) ? `<li>Destreza: ${element.skill}</li>` : ''}
            ${(element.pelota !== undefined) ? `<li>Peloteo: ${element.pelota}</li>` : ''}
            ${(element.advised !== undefined) ? `<li>Asesora a: ${element.advised.name} ${element.advised.family}</li>` : ''}
            ${(element.maitre !== undefined) ? `<li>Sirve a: ${element.maitre.name} ${element.maitre.family}</li>` : ''}
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">${element.emoji}</i>
    </div>
  </li>
        `;
        // console.log(element.yearsKingdom);

    });
    return html
}
// injectCard(arrayPersonajes);

export function carrouselTemplate(arrayPersonajes) {
    let cards = injectCard(arrayPersonajes);
    // console.log(cards);

    let html = '<ul class="characters-list row list-unstyled">';
    html += cards;
    html += '</ul>'

    // console.log(html);

    return html;
}

carrouselTemplate(arrayPersonajes)

export function cardTemplate() {
    return `
    <li class="character col">
          <div class="card character__card">
            <img
              src="img/no-one.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">Nombre y familia</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: X años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>
    `
}
