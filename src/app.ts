
import {Eggs} from './egg';
import {gameState, updateGameState} from './game';
import {Wonsz} from './wonsz';


document.addEventListener('keydown', listener);


function listener ( e: KeyboardEvent) {
    console.log('key:'+ e.key);
    if ( e.key.startsWith('Arrow')) {
        e.stopPropagation();
        e.preventDefault();
        naszWonsz.setDirection(e.key);
    }
    //

    return false;
}


/*for ( var i= 0; i < 10; i++ ) {
    drawWonsz( i + 5, 10 );

}
for ( var i= 0; i < 10; i++ ) {
    drawWonsz(  15,10+i);

}*/
//drawWonsz(50,50);
let eggs= new Eggs();
let naszWonsz = new Wonsz(eggs);


eggs.draw();


function goForward() {
    if (gameState =='play') {
        naszWonsz.go();
    }
}

function prepareStart() {
    let startButtons = document.getElementsByClassName('startGame');
    for (var i = 0; i < startButtons.length; i++) {
        (startButtons.item(i) as HTMLButtonElement).onclick = a => updateGameState('play');
    }
}


prepareStart();
window.setInterval( goForward, 200 );



console.log('dusza');


