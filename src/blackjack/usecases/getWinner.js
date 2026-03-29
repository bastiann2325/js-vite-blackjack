/**
 * @description Function that determines who the winner was
 * 
 * @param {Array} scores - The array that contains the scores of the players
 * @param {Node} messageContainer - The HTML element that contains the victory message
 * @param {Node} messageContent - The HTML element that contains the content of the victory message
 * @returns {void}
 */
export const getWinner = (scores, messageContainer, messageContent) => {
  const [playerScore, computerScore] = scores;

  setTimeout(() =>{
    if (computerScore === playerScore) {
      messageContainer.style.display = 'flex';
      messageContent.classList.remove('victory-message');
      messageContent.classList.add('draw-message');
      messageContent.innerText = 'Tie';
    } else if (playerScore > 21) {
      messageContainer.style.display = 'flex';
      messageContent.innerText = '¡Computer Wins!'
    } else if (computerScore > 21) {
      messageContainer.style.display = 'flex';
      messageContent.innerText = '¡User Wins!'
    }
  }, 1000);
}
