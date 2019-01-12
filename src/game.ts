export var gameState = 'start';


export function updateGameState( newState : string) {
  gameState = newState;
  let gameEl = document.getElementsByClassName('game').item(0);
  gameEl.setAttribute('data-state', gameState);
}