// figure out how to highlight and storage the ship placement;

// may update:
// add as well updated count on how many ships can place. Update the paragraphs for each ship




import GameBoard from "./gameBoard";
import { displayShips } from "./game";
import Ship from "./ship";

// fix the glitch of the text draggable
// make the vertical placing
// fix the glitch with where is selected from

const selectionBoard = GameBoard();
console.log(selectionBoard);



const ships  = document.getElementsByClassName('shipSelect');
const selectBoard = document.getElementsByClassName('select');
// //////////



function makeDraggable(){

    const shipsOnBoard = document.querySelectorAll('[data-empty]');

    Array.from(shipsOnBoard).forEach(ship => {
        ship.draggable = true;
        ship.classList = 'shipSelect';
        ships  = document.getElementsByClassName('shipSelect');
    })

}




function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add("over");
}

function dragLeave(){
    this.classList.toggle("over");
    console.log('leave')
     
}

function dragDrop(){
    this.classList.toggle("over");

    const x = this.dataset.x;
    const y = this.dataset.y;
    selectionBoard.placeShipH(parseInt(x), parseInt(y), selectedShip);
    displayShips(selectionBoard, "select");

    makeDraggable();
}

function shipSelectionEventListeners(){

    for(const grid of selectBoard){
        grid.addEventListener('dragover', dragOver);
        grid.addEventListener('dragenter', dragEnter);
        grid.addEventListener('dragleave', dragLeave);
        grid.addEventListener('drop', dragDrop)

    }
    

    Array.from(ships).forEach(ship => {
        ship.addEventListener('dragstart', dragStart);
        ship.addEventListener('dragend', dragEnd);
    })
}

let selectedShip = 0;


// test this in a biy

function dragStart(){
    selectedShip = Ship(this.children.length - 2);
}    


function dragEnd(){
 }


export {selectionBoard, shipSelectionEventListeners};