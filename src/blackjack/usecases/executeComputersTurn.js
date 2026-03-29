import { getCard } from "./getCard";
import { getWinner } from "./getWinner";
import { acumulatePoints } from "./acummulatePoints";
import { renderCard } from "./renderCard";
import { updatePointsUI } from "./updatePointsUI";

/**
 * @description Function that execute the computers turn
 * 
 * @param {Number} currentPlayerScore - The current score of the player
 * @param {Array} deck - The array that contains the cards of the game
 * @param {Array} scores - The array that contains the scores of the players
 * @param {Number} COMPUTER_INDEX - The index of the computer in the scores array
 * @param {NodeList} HTMLpoints - The NodeList of the HTML elements that display the points
 * @param {NodeList} playerCardsContainer - The NodeList of the HTML elements that contain the cards of the players
 * @param {Node} messageContainer - The HTML element that contains the victory message
 * @param {Node} messageContent - The HTML element that contains the content of the victory message
 * @returns {void}
 */
export const executeComputersTurn = (
  currentPlayerScore, 
  deck, 
  scores, 
  COMPUTER_INDEX, 
  HTMLpoints, 
  playerCardsContainer, 
  messageContainer, 
  messageContent
) => {
  if (currentPlayerScore > 21) {
    getWinner(scores, messageContainer, messageContent);
    return;
  }
  do {
    const card = getCard(deck);
    const score = acumulatePoints(card, COMPUTER_INDEX, scores);
    updatePointsUI(score, COMPUTER_INDEX, HTMLpoints);
    renderCard(card, COMPUTER_INDEX, playerCardsContainer);

  } while (scores[COMPUTER_INDEX] < currentPlayerScore);
  getWinner(scores, messageContainer, messageContent);
}
