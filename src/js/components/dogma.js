// import renderCard from '../cards/renderCard';
// import getCardElement from '../cards/getCardElement';
// import getCardObject from '../cards/getCardObject';
import gameState from './gameState';

function chooseAffectedPlayers(getResourse) {
  console.log(getResourse.dogma);
}

const dogmas = {
  письменность: (playingCardObj) => {
    console.log(chooseAffectedPlayers(playingCardObj));
    gameState.players.forEach((player) => {
      console.log(player);
      player.hand.push(gameState.ageDecks.age2.pop());
    });
  },
};

export default dogmas;
