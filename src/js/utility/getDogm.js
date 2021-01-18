import gameState from '../components/gameState';
import getCardObject from '../cards/getCardObject';

function getPlayersCorporate() { // TODO
  console.log('set corporate dogm');
  const resArr = [];
  resArr.push(gameState.currentPlayer);
  return resArr; //! test
}

function getPlayersAggressive() { // TODO
  console.log('set aggressive dogm');
  const resArr = [];
  resArr.push(gameState.currentPlayer);
  return resArr; //! test
}

function takeCard(num, age, player) {
  while (num > 0 && gameState.ageDecks[age].length > 0) {
    player.hand.push(gameState.ageDecks[age].pop());
    num -= 1;
  }
}

export default function getDogm(cardID) {
  const cardObj = getCardObject.byID(cardID);
  if (cardObj.dogma[0].type === 'corporate') {
    gameState.dogmPlayers = getPlayersCorporate();
  } else {
    gameState.dogmPlayers = getPlayersAggressive();
  }

  let dogmFunc = null;
  if (cardID === 'колесо') {
    dogmFunc = () => {
      gameState.dogmPlayers.forEach((player) => {
        takeCard(2, 'age1', player);
      });
      console.log(`сработала догма колесо, добавила 2 карты игроку`);
    };
  } else {
    console.log(`for ${cardID} card dogm not implemented yet`);
  }

  return dogmFunc;
}
