/**
 *
 * @param {string} carta
 * @returns {HTMLImageElement} elemento HTML de retorno
 */
export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error('La carta es un documento obligatorio');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    imgCarta.alt = `${carta}`;

    return imgCarta;
}