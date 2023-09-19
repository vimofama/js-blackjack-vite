/**
 * Esta función me permite tomar una carta del deck
 * @param {array<string>} deck arreglo de baraja
 * @returns {string} retorna una carta Ejemplo: 3C
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
}