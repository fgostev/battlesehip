import GameBoard from "./gameBoard";
import {winMessage} from './dom.js';
import Player from "./player";
import Ship from "./ship";
import AI from "./AI.js"
import {selectionBoard, shipSelectionEventListeners} from "./shipPlacement";
import computerRandomizedShips from "./computerShipPlacement";


const player1 = selectionBoard;
const player2 =  computerRandomizedShips();

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

// display board
displayShips(player1,"human");
displayShips(player2,"computer");


let possibleTargets = player1.board.flat(1);

function displayAttacks(){
    const x = this.dataset.x;
    const y = this.dataset.y;
   
    const attackAI = AI(possibleTargets);

    player2.receiveAttack(x, y);
    player1.receiveAttack(attackAI.positionX, attackAI.positionY);

console.log(player1.ships);

console.log(player2.areAllShipsSunk());
console.log(player2.ships);

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