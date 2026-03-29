import _ from 'underscore'; 

/**
 * @description This function create a new deck of cards
 * 
 * @param {Array<string>} suits - ['C','D','H','S']
 * @param {Array<string>} types - ['2','3','4','5','6','7','8','9','10','A','J','Q','K']
 * @returns {Array<string>} returns a new shuffled deck of cards 
 */
 export const createDeck = (suits, types) => {
  if ( !suits ) throw new Error("Suits are required");
  if ( !types ) throw new Error("Types are required");

   let deck = []
   for (let suit of suits) {
     for (let type of types) {
        deck.push(type+suit);
      }
    }
    return _.shuffle(deck);
  }