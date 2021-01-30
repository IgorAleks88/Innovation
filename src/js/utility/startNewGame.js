import intro from '../components/Intro';
import resetGameState from './resetGameState';

export default function startNewGame() {
  document.querySelector('.intro').remove();
  resetGameState();
  intro.init();
}
