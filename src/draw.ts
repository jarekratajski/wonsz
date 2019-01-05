
export const maxWidth = 300;
export const maxHeight = 200;

//
export function drawEtwas(x: number, y: number, className : string) : HTMLElement {
  let playGround = document.getElementById('playGround');
  let elementDiv = document.createElement('div');
  let left = x / maxWidth * 100;
  let top = y / maxHeight * 100;
  let wi = 100 / maxWidth;
  let hi = 100 / maxHeight;

  elementDiv.setAttribute('style', `left: ${left}%;top: ${top}%; width: ${wi}%; height: ${hi}%;`);
  elementDiv.className = className;
  playGround.appendChild(elementDiv);
  return elementDiv;
}
