import _ from 'underscore';
import {
  createDeck,
  getCard,
  acumulatePoints,
  updatePointsUI,
  renderCard,
  executeComputersTurn,
} from './usecases/index.js';

// Self-invoking function
(() => {
  'use strict';

  /* ******** VARIABLES ******** */
  let deck = [],
      suits = ['C','D','H','S'],
      types = ['2','3','4','5','6','7','8','9','10','A','J','Q','K'],
      scores = [];
  const PLAYER_INDEX = 0,
        COMPUTER_INDEX = 1;      
  
  /* ******** DOM REFERENCES ******** */
  const btnNewGame = document.querySelector("#btn-new-game"),
        btnHitCard = document.querySelector("#btn-hit-card"),
        playerCardsContainer = document.querySelectorAll(".cardsContainer"),
        btnStand = document.querySelector("#btn-stand"),
        HTMLpoints = document.querySelectorAll("small"),
        messageContainer = document.querySelector("#victory-message-container"),
        messageContent = document.querySelector("#message-content");

  /**
   * @description Function that initialize the game
  */
  const initializeGame = ( totalPlayers = 2) => {
    deck = createDeck(suits, types);
    scores = [];

    for (let i=0; i<totalPlayers; i++) {
      scores.push(0);
      HTMLpoints[i].innerText = 0;
      playerCardsContainer[i].innerHTML = '';
    }

    btnHitCard.disabled = false;
    btnStand.disabled = false;
  }
  
  /* ******** EVENTS ******** */
  
  /**
   * @description Event that runs when user makes clic to hit a card
  */
  btnHitCard.addEventListener('click', function() {
    // Get Card & Points
    const card = getCard(deck);
    const currentPlayerScore = acumulatePoints(card, PLAYER_INDEX, scores);
    updatePointsUI(currentPlayerScore, PLAYER_INDEX, HTMLpoints);
    renderCard(card, 0, playerCardsContainer)

    if (currentPlayerScore > 21) {
      btnHitCard.disabled = true;
      executeComputersTurn(currentPlayerScore, deck, scores, COMPUTER_INDEX, HTMLpoints, playerCardsContainer, messageContainer, messageContent);
    } else if (currentPlayerScore === 21) {
      btnHitCard.disabled = true;
    }
  })
  
  /**
   * @description Event that runs when user makes click on Stand
  */
  btnStand.addEventListener('click', function() {
    btnHitCard.disabled = true;
    btnStand.disabled = true;
  
    executeComputersTurn(scores[PLAYER_INDEX], deck, scores, COMPUTER_INDEX, HTMLpoints, playerCardsContainer, messageContainer, messageContent)
  });
  
  /**
   * @description Event that runs when user makes click on New Game and clear all
  */
  btnNewGame.addEventListener('click', function() {
    messageContainer.style.display = 'none';
    initializeGame();
  });
})();
