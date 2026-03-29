/**
 * @description Function that is responsible for rendering the player's card
 * 
 * @param {String} card - The card to render
 * @param {Number} turn - The turn of the player (0 for player, 1 for computer)
 * @param {NodeList} playerCardsContainer - The NodeList of the HTML elements that contain the player's cards
 * @return {void}
 */
export const renderCard = (card, turn, playerCardsContainer) => {
  const cardImage = document.createElement('img');
    cardImage.src = `assets/cards/${card}.png`;
    cardImage.classList.add('carta');
    playerCardsContainer[turn].append(cardImage);
}
