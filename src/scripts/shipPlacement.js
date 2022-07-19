// need to create a function that:
// tracks the amount of each ship placed
// once hits a specific amounts of ships placed - no more ships
// while placing each ship the number in front of the s



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

// work here on the change

let shipsLeftMarker;
let functionUsed = -1;


function changeShipsLeftDescription(){
    shipsLeftMarker = shipDragging.firstChild.firstChild;


    // sorting out ship number here

    let shipsPlaced = selectionBoard.ships.length;

            functionUsed = shipsPlaced;
            console.log("FU!" + functionUsed);
            console.log("SP!" + shipsPlaced);
            let shipsLeftNum = parseInt(shipDragging.firstChild.firstChild.textContent.charAt(0));
            let shipsLeftNumAfter = shipsLeftNum - 1;
            shipsLeftMarker.textContent =  shipsLeftNumAfter + "x";
        

    if(shipsLeftNum === 1){
        shipDragging.remove();
    }

}

function dragDrop(){
        
this.classList.toggle("over");

 const x = this.dataset.x;
 const y = this.dataset.y;

 const directionalBtn = document.getElementById('directionalBtn');

 if(directionalBtn.textContent === "HORIZONTAL" 
 && selectionBoard.placeShipH(parseInt(x), parseInt(y), selectedShip) !== "not acceptable position for the ship"){
    selectionBoard.placeShipH(parseInt(x), parseInt(y), selectedShip);
    changeShipsLeftDescription();
    displayShips(selectionBoard, "select");
    
// stop here - think about the comparasions and start from clean up!
// perhaps add x and y to the other function.

 }else if( directionalBtn.textContent === "VERTICAL" 
 && selectionBoard.placeShipV(parseInt(x), parseInt(y), selectedShip) !== "not acceptable position for the ship"){
    selectionBoard.placeShipV(parseInt(x), parseInt(y), selectedShip);
    changeShipsLeftDescription();
    displayShips(selectionBoard, "select");
    // console.log(selectedShip);
    } 
}

// here finish

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

let shipDragging;
let selectedShip = 0;
let selectedShipPart = 0;

function dragStart(){
    selectedShip = Ship(this.children.length - 2);
    selectedShipPart = this.children[0];

    shipDragging = this;
    console.log(shipDragging);
}    


function dragEnd(){
 }


export {selectionBoard, shipSelectionEventListeners, changeShipsLeftDescription, functionUsed};