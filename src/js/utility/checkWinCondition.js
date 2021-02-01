import gameState from '../components/gameState';
import displayModal from '../display/displayNewTurnModal';

export default function checkWinCondition() {
  // update winPoints of each player
  gameState.players.forEach((player) => {
    player.winPoints = player.specialCards.length
      + player.leadershipCards.length;
  });
  // check win conditions
  if (gameState.activePlayer.winPoints >= gameState.winCondition.winPoints) {
    displayModal(null, null, gameState.activePlayer.name);
  } else if (gameState.ageDecks[`age${gameState.winCondition.finalAge}`].length === 0
    || gameState.activePlayer.currentAge >= gameState.winCondition.finalAge + 1) {
    gameState.players.sort((b, a) => {
      return a.winPoints - b.winPoints;
    });
    if (gameState.players[0].winPoints === gameState.players[1].winPoints) {
      gameState.players.sort((b, a) => {
        return a.influence.points - b.influence.points;
      });
      if (gameState.players[0].influence.points > gameState.players[1].influence.points) {
        displayModal(null, null, gameState.players[0].name);
      } else {
        displayModal(null, null, null, true);
      }
    } else {
      displayModal(null, null, gameState.players[0].name);
    }
  }
}
