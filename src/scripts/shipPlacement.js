// figure out how to highlight and storage the ship placement;

// GLITCH when trying to place on position 0 , 0  - try to figure out why the square dissapears. 


import GameBoard from "./gameBoard";
import { displayShips } from "./game";
import Ship from "./ship";


const selectionBoard = GameBoard();

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

 const directionalBtn = document.getElementById('directionalBtn');

 if(directionalBtn.textContent === "HORIZONTAL"){
    selectionBoard.placeShipH(parseInt(x), parseInt(y), selectedShip);
    displayShips(selectionBoard, "select");
 }else{
    selectionBoard.placeShipV(parseInt(x), parseInt(y), selectedShip);
    displayShips(selectionBoard, "select");
    // console.log(selectedShip);
}

console.log(selectionBoard);


}

function changeDirection(){
    if(this.textContent === "VERTICAL"){
        this.textContent = "HORIZONTAL";
    }else{
        this.textContent = "VERTICAL";
    }
}

function shipSelectionEventListeners(){
    const directionalBtn = document.getElementById('directionalBtn')
    directionalBtn.addEventListener('click', changeDirection);

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
    
    console.log(selectedShip);
}    


function dragEnd(){
 }


export {selectionBoard, shipSelectionEventListeners};