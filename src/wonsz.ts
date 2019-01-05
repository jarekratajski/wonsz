import {drawEtwas, maxHeight, maxWidth} from './draw';
import {Eggs} from './egg';
import {updateGameState} from './game';

export class Wonsz {
  x: number;
  y: number;
  direction: string = 'ArrowUp';
  wonszLength: number = 6;

  segments: Array<Segment> = [];

  constructor(private eggs : Eggs) {
    this.x = maxWidth - 1;
    this.y = maxHeight - 1;
  }

  redraw() {
    //clearWonsz();
    //this.segments.forEach(s => s.redraw());
  }
  checkWonsz(){

    let zjedzon = this.segments.find(kawalWensza => (kawalWensza.x == this.x ) && (kawalWensza.y == this.y));
    if (zjedzon != null){
        updateGameState('gameOver');
        this.segments.forEach( s => s.remove());
        this.segments = [];
        this.wonszLength = 6;
    }

    let scoreOut = document.getElementsByClassName('score').item(0)
    scoreOut.textContent = ''+this.wonszLength;

  }
  addSegment() {
    if ( this.x < 0) {
      this.x = maxWidth -1;
    }
    if ( this.x >= maxWidth) {
      this.x = 0;
    }
    if ( this.y < 0) {
      this.y = maxHeight -1;
    }
    if ( this.y >= maxHeight) {
      this.y = 0;
    }
    this.checkWonsz();

    let newSegment = new Segment(this.x, this.y);
    this.segments.push(newSegment);
    if (this.segments.length >= this.wonszLength) {
      let removed = this.segments.shift();
      if ( removed != null) {
        removed.remove();
      }
    }
  }

  moveUp() {
    this.y = this.y - 1;
    this.addSegment();
  }

  moveDown() {
    this.y = this.y + 1;
    this.addSegment();
  }

  moveLeft() {
    this.x = this.x - 1;
    this.addSegment();
  }

  moveRight() {
    this.x = this.x + 1;
    this.addSegment();
  }

  go() {
    switch ( this.direction) {
      case 'ArrowUp': {
        this.moveUp();;
        break;
      }
      case 'ArrowDown': {
        this.moveDown();;
        break;
      }
      case 'ArrowLeft': {
        this.moveLeft();;
        break;
      }
      case 'ArrowRight': {
        this.moveRight();;
        break;
      }
    }


    this.redraw();

    this.checkEgg();

  }

  private checkEgg() {
    let egg = this.eggs.findEgg(this.x, this.y);
    if (egg != null) {
      this.eggs.remove(egg);
      egg.remove();
      let newEgg = this.eggs.addOne();
      newEgg.draw();

      this.wonszLength = this.wonszLength * 1.1+1;
    }
  }

  setDirection(key: string) {
    if ( this.allowedDir(key)) {
      this.direction = key;
    }

  }

  private allowedDir( key : string) : boolean {
    return (!isOpposite(key, this.direction) && !isOpposite(this.direction, key));
  }


}

function isOpposite( dir1: string, dir2: string) {
  return  (dir1 == 'ArrowUp' && dir2 == 'ArrowDown')
    || (dir1 == 'ArrowLeft' && dir2 == 'ArrowRight');
}


class Segment {
  element : HTMLElement = null;

  constructor(public  x: number, public y: number) {
      this.element = drawEtwas(this.x, this.y,'wonsz');
  }

  remove() {
      this.element.remove();
  }
}



/*function clearWonsz() {

  let wensze = document.getElementsByClassName('wonsz');
  for (let i = 0; i < wensze.length; i++) {
    let w = wensze.item(i);
    w.remove();

  }

}*/


