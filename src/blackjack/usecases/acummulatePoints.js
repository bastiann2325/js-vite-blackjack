import { getCardValue } from "./getCardValue";

/**
 * @description Function that is responsible for accumulating the points of a player
 * 
 * @param {String} card - The card that was drawn
 * @param {Number} turn - The turn of the player (0 for player, 1 for computer)
 * @param {Array} scores - The array that contains the scores of the players
 * @returns {Number} The current points of the player
 */
export const acumulatePoints = (card, turn, scores) => {
  const cardValue = getCardValue(card);
  scores[turn] += cardValue;
  return scores[turn];
}