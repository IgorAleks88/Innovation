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

function getAffectedPlayers(cardID) {
  const cardObj = getCardObject.byID(cardID);
  const affectedPlayersArr = [];
  const dogmIcon = cardObj.dogma[0].icon[1];
  const dogmResource = getDogmResource(dogmIcon);

  if (cardObj.dogma[0].type === 'corporate') {
    console.log(`set corporate dogm on ${cardObj.innovation}`); //! remove
    gameState.players.forEach((player) => {
      if (player[dogmResource] >= gameState.currentPlayer[dogmResource]) {
        affectedPlayersArr.push(player);
      }
    });
    console.log('players affected by this dogm are:'); //! remove
    console.log(affectedPlayersArr); //! remove
    gameState.dogmPlayers = affectedPlayersArr;
  } else {
    console.log(`set aggresive dogm on ${cardObj.innovation}`); //! remove
    console.log('AGGRESIVE DOGM IS UNDER CONSTRUCTION');
    gameState.players.forEach((player) => {
      if (player[dogmResource] < gameState.currentPlayer[dogmResource]
        && player !== gameState.currentPlayer) {
        affectedPlayersArr.push(player);
      }
      gameState.dogmPlayers = affectedPlayersArr;
    });
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
        console.log(`сработала догма колесо, дала 2 карты 1 века игроку ${player.name}`); //! remove
      });
      if (gameState.dogmPlayers.length > 1) {
        takeCard(1, `age${gameState.currentPlayer.currentAge}`, gameState.currentPlayer);
        console.log(`за выполнение кооперативной догмы другими игроками одну карту взял ${gameState.currentPlayer.name}`); //! remove
      }
    };
  } else {
    console.log(`for ${cardID} card dogm not implemented yet`);
  }

  return dogmFunc;
}
