// figure out how to highlight and storage the ship placement;

import GameBoard from "./gameBoard";
import { displayShips } from "./game";
import Ship from "./ship";

// fix the glitch of the text dragable
// make the vertical placing
// fix the glitch with where is selected from

const selectionBoard = GameBoard();
console.log(selectionBoard);



const ships  = document.getElementsByClassName('shipSelect');
const selectBoard = document.getElementsByClassName('select');


function dragOver(e){
    e.preventDefault();
    // console.log(this);
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add("over");

    console.log(this.dataset);
    console.log("enter");
    console.log(selectedShip.size);
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
console.log(x, y);
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

let selectedShip = 0;
let selectedShipPart = 0;

function dragStart(){
    selectedShip = Ship(this.children.length - 2);
     selectedShipPart = this.children[0];
    
    console.log(selectedShipPart);
}    


function dragEnd(){
 }


export {selectionBoard, shipSelectionEventListeners};