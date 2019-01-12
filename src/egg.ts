import {drawEtwas, maxHeight, maxWidth} from './draw';

export class Egg {
  element : HTMLElement = null;

  constructor ( public  x : number, public y : number) {

  }

  draw() {
    this.element = drawEtwas(this.x, this.y, 'egg');
  }

  remove() {
    this.element.remove();
  }
}



export class Eggs {
  eggs : Array<Egg> = [];

  constructor() {
    this.addOne();
    this.addOne();
    this.addOne();
  }

  addOne():Egg {
    let x= Math.floor((Math.random() * maxWidth));
    let y= Math.floor((Math.random() * maxHeight));
    let egg  = new Egg(x,y);
    this.eggs.push(egg);
    return egg;
  }

    findEgg(x : number, y : number) :Egg {
      return this.eggs.find(anEgg => (anEgg.x == x) && (anEgg.y == y));
  }

  remove(e : Egg) {
    let index = this.eggs.indexOf(e);
    this.eggs.splice(index, 1);
  }


  draw() {
    this.eggs.forEach( a => a.draw());
  }
}
