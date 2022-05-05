// figure out how to highlight and storage the ship placement;

import GameBoard from "./gameBoard";
import { displayShips } from "./game";
import Ship from "./ship";

// first part of drag and drop completed
// now need to figure out how to create ships based on the figure
// need to figure out how to do the Vertical and the limit on hom many


const selectionBoard = GameBoard();
const testShip = Ship(3);
console.log(selectionBoard);



const ships  = document.getElementsByClassName('shipSelect');
const selectBoard = document.getElementsByClassName('select');


function dragOver(e){
    e.preventDefault();
    console.log('over')
}

function dragEnter(e){
    e.preventDefault();
    console.log("enter");
}

function dragLeave(){
    console.log('leave')
}

function dragDrop(){

 const x = this.dataset.x;
 const y = this.dataset.y;
 selectionBoard.placeShipH(parseInt(x), parseInt(y), testShip);
 displayShips(selectionBoard, "select");

 console.log(selectionBoard);
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

function dragStart(){
    console.log('start');
    return this.children.length - 1
}

function dragEnd(){
    console.log('end');
}


export {selectionBoard, shipSelectionEventListeners};