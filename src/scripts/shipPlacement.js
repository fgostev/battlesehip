
import GameBoard from "./gameBoard";
import { game, displayShips, player2 } from "./game";
import Ship from "./ship";



const selectionBoard = GameBoard();

const ships  = document.getElementsByClassName('shipSelect');
const selectBoard = document.getElementsByClassName('select');


function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add("over");
}

function dragLeave(){
    this.classList.toggle("over");
}

// work here on the change

function hideStartContainer(){
    const startContainer = document.getElementById('startContainer');
    startContainer.remove();
}

function displayBoards(){
    const boardContainer = document.getElementById('boardContainer');
    boardContainer.style.display = "flex";
}

let shipsLeftMarker;

function startGame(){
    let shipsPlaced = selectionBoard.ships.length;

    if(shipsPlaced === 7){
        game();
        displayBoards();
        hideStartContainer();
        const boardContainer = document.getElementById('boardContainer');
        boardContainer.style.display = "flex";
    }
}



function changeShipsLeftDescription(){
    shipsLeftMarker = shipDragging.firstChild.firstChild;


    // sorting out ship number here

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
 }else if( directionalBtn.textContent === "VERTICAL" 
 && selectionBoard.placeShipV(parseInt(x), parseInt(y), selectedShip) !== "not acceptable position for the ship"){
    selectionBoard.placeShipV(parseInt(x), parseInt(y), selectedShip);
    changeShipsLeftDescription();
    displayShips(selectionBoard, "select");
    } 

startGame();

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
    })
}

let shipDragging;
let selectedShip = 0;
let selectedShipPart = 0;

function dragStart(){
    selectedShip = Ship(this.children.length - 2);
    selectedShipPart = this.children[0];

    shipDragging = this;
}    




export {selectionBoard, shipSelectionEventListeners, changeShipsLeftDescription};