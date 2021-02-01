import intro from '../components/Intro';
import resetGameState from './resetGameState';

export default function startNewGame() {
  document.querySelector('.intro').remove();
  resetGameState();
  document.querySelector('.chat-block').innerText = '';
  document.querySelector('.log-block').innerText = '';
  intro.init();
}
