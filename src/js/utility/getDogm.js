import gameState from '../components/gameState';
import getCardObject from '../cards/getCardObject';
import getCardElement from '../cards/getCardElement';
import renderCard from '../cards/renderCard';

function getDogmResource(dogmIcon) {
  let dogmResource = null;
  if (dogmIcon === 'fa-fort-awesome') dogmResource = 'tower';
  else if (dogmIcon === 'fa-pagelines') dogmResource = 'tree';
  else if (dogmIcon === 'fa-crown') dogmResource = 'crown';
  else if (dogmIcon === 'fa-lightbulb') dogmResource = 'bulb';
  // else if (dogmIcon === 'fa-fort-awesome') dogmResource = 'tower'; // TODO add factories
  // else if (dogmIcon === 'fa-fort-awesome') dogmResource = 'tower'; // TODO add clock
  return dogmResource;
}

function getPlayersCorporate(cardObj) { // TODO
  console.log('set corporate dogm');
  const affectedPlayersArr = [];
  const dogmIcon = cardObj.dogma.icon[1];
  const dogmResource = getDogmResource(dogmIcon);

  affectedPlayersArr.push(gameState.players[0]); //! test
  affectedPlayersArr.push(gameState.players[1]); //! test
  return affectedPlayersArr;
}

function getPlayersAggressive(cardObj) { // TODO
  console.log('set aggressive dogm');
  const resArr = [];
  resArr.push(gameState.currentPlayer); //! test
  return resArr; //! test
}

function getAffectedPlayers(cardID) {
  const cardObj = getCardObject.byID(cardID);
  if (cardObj.dogma[0].type === 'corporate') {
    gameState.dogmPlayers = getPlayersCorporate(cardObj);
  } else {
    gameState.dogmPlayers = getPlayersAggressive(cardObj);
  }
}

function takeCard(num, age, player) {
  while (num > 0 && gameState.ageDecks[age].length > 0) {
    const cardID = gameState.ageDecks[age].pop();
    player.hand.push(cardID);
    num -= 1;
    if (player === gameState.currentPlayer) {
      const cardObj = getCardObject.byID(cardID);
      const cardElement = getCardElement(cardObj);
      renderCard.toHand(cardElement);
    }
  }
}

export default function getDogm(cardID) {
  getAffectedPlayers(cardID);

  let dogmFunc = null;
  if (cardID === 'колесо') {
    dogmFunc = () => {
      gameState.dogmPlayers.forEach((player) => {
        takeCard(2, 'age1', player);
        console.log(`сработала догма колесо, добавила 2 карты игроку ${player.name}`); //! remove
      });
      if (gameState.dogmPlayers.length > 1) {
        takeCard(1, `age${gameState.currentPlayer.currentAge}`, gameState.currentPlayer);
        console.log(`за выполнение кооперативной догмы 1 карту взял ${gameState.currentPlayer.name}`); //! remove
      }
    };
  } else {
    console.log(`for ${cardID} card dogm not implemented yet`);
  }

  return dogmFunc;
}
