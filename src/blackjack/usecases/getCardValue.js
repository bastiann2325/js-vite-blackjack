/**
 * @description Function that get the card value
 * 
 * @param {String} card - The card to get the value from
 * @returns {Number} The value of the card
 */
export const getCardValue = (card) => {
  const value = card.substring(0, card.length - 1); // Obtener todo excepto el palo
  if (isNaN(value)) return (value === 'A') ? 11 : 10;
  return parseInt(value);
}