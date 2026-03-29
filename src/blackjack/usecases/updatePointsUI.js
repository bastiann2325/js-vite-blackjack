/**
 * @description Function that updates the number of points in the interface
 * 
 * @param {Number} points - The points to update
 * @param {Number} turn - The turn of the player (0 for player, 1 for computer)
 * @param {NodeList} HTMLpoints - The NodeList of the HTML elements that display the points
 * @returns {void}
 */
export const updatePointsUI = (points, turn, HTMLpoints) => {
  HTMLpoints[turn].innerHTML = points;
}
