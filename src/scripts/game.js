import GameBoard from "./gameBoard";
import {winMessage} from './dom.js';
import Player from "./player";
import Ship from "./ship";
import AI from "./AI.js"
import {selectionBoard, shipSelectionEventListeners} from "./shipPlacement";


// now need to work on storage all the attacks
// need to make all random attacks non repeatable


// Start from here - goal is to add coordinates to all items in the dom

//  1 - Carrier 5
// 1 - Battleship 4
//  2- Destroyer 3
// 1 - Patrol 2

// !!!!!!!


const shipPlacement = () => {
    const newBoard = GameBoard();
    const carrier = Ship(4);
    const battleship = Ship(3);
    const destroyer1 = Ship(2);
    const destroyer2 = Ship(2);
    const destroyer3 = Ship(2);
    const patrol1 = Ship(1);
    const patrol2 = Ship(1);
    const patrol3 = Ship(1);
    newBoard.placeShipV(0,0, carrier);
    newBoard.placeShipV(2,9, battleship);
    newBoard.placeShipH(2,5, destroyer1);
    newBoard.placeShipH(0,3, destroyer2);
    newBoard.placeShipV(5,2, destroyer3);
    newBoard.placeShipV(5,7, patrol1);
    newBoard.placeShipH(0,8, patrol2);
    newBoard.placeShipH(9,2, patrol3);

    return newBoard;   
}


const player1 = shipPlacement();
const player2 = shipPlacement();

function displayShips (playerBoard, playerGrid) {
    const domBoard = document.getElementsByClassName(playerGrid);
    const boardFlat = playerBoard.board.flat(1);
    
    boardFlat.forEach((grid, indx) => {
    if(boardFlat[indx].empty === false && boardFlat[indx].damaged !== true){
            domBoard[indx].dataset.empty = false;
        }
    else if(boardFlat[indx].wasShot === true && boardFlat[indx].damaged !== true){
        domBoard[indx].dataset.wasShot = true;
    }
    else if(boardFlat[indx].damaged === true){
        domBoard[indx].dataset.damaged = true;
    }
})
}

const game = () => {

    shipSelectionEventListeners();

    displayShips(player1,"human");



let possibleTargets = player1.board.flat(1);

function displayAttacks(){
    const x = this.dataset.x;
    const y = this.dataset.y;
   
    const attackAI = AI(possibleTargets);

    player2.receiveAttack(x, y);
    player1.receiveAttack(attackAI.positionX, attackAI.positionY);
// check the display function


const winContent = document.getElementsByClassName("winContainer")[0];    
const winMessage =  document.getElementById("playerWinMessage")
    if(player1.areAllShipsSunk()){
        winContent.style.display = "block";
        winMessage.textContent = `Player 2 WON!`;
    }else if(player2.areAllShipsSunk()){
        winContent.style.display = "block";
        winMessage.textContent = `Player 1 WON!`;
    }

    displayShips(player1, "human")
    displayShips(player2, "computer");
    this.classList.add("used");
    disableUsedGrid();

    
}

function disableUsedGrid(){
    const usedGrid = document.getElementsByClassName("used");
    Array.from(usedGrid).forEach(grid => {
        grid.style.cursor = "default";
        grid.removeEventListener('click', displayAttacks, false);
    })
}


const listenerBoard = () => {
    const computerBoard = document.getElementsByClassName("computer");
    Array.from(computerBoard).forEach(grid => {
                grid.style.cursor = "pointer";
                grid.addEventListener("click", displayAttacks);

    })
}

listenerBoard();


}


export {game, player1, player2, displayShips};