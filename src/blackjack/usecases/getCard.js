/**
 * @description Function that get a card from deck
 * 
 * @param {Array} deck - The array that contains the cards of the game
 * @returns {String} returns a card from the deck
 */
export const getCard = (deck) => {
  if (deck.length === 0) throw new Error("There are no more cards");
  return deck.pop();
}
