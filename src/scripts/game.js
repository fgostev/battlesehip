import GameBoard from "./gameBoard";
import Player from "./player";
import Ship from "./ship";

// start a game
// steps to start:
// create two game boards
// one game board is a player - second game board computer
// need placement for all ships

const randomizeAttack = () => Math.floor(Math.random() * 10);

// const addDomCoord = () => {
//     const grid = document.getElementsByClassName('grid');
//     const board = Array.from(grid);

// }

// Start from here - goal is to add coordinates to all items in the dom

//  1 - Carrier 5
// 1 - Battleship 4
//  2- Destroyer 3
// 1 - Patrol 2


const game = () => {
    const humanPlayer = Player("human");
    const computerPlayer = Player("computer");
 

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
        newBoard.placeShipV(2,4, carrier);
        newBoard.placeShipV(1,6, battleship);
        newBoard.placeShipH(8,6, destroyer1);
        newBoard.placeShipH(0,1, destroyer2);
        newBoard.placeShipV(5,2, destroyer3);
        newBoard.placeShipV(5,7, patrol1);
        newBoard.placeShipH(0,8, patrol2);
        newBoard.placeShipH(9,2, patrol3);

        return newBoard;   
    }



    const displayShips = (player) => {
        const domBoard = document.getElementsByClassName('grid');
        const boardFlat = player.board.flat(1);
        
        boardFlat.forEach((grid, indx) => {
        if(boardFlat[indx].empty === false && boardFlat[indx].damaged !== true){
                domBoard[indx].dataset.empty = false;
            }
        else if(boardFlat[indx].wasShot === true && boardFlat[indx].damaged !== true){
            domBoard[indx].dataset.wasShot = true;
        }
        else if(boardFlat[indx].damaged === true){
            domBoard[indx].dataset.damaged = true;
            console.log("booo!");
        }
    })
}

    const player1 = shipPlacement();
    // console.log(player1.receiveAttack(2,2));
    // console.log(player1.receiveAttack(0,2));
    // console.log(player1.receiveAttack(4,6));

    // console.log(player1.receiveAttack(0,6));

    // console.log(player1.receiveAttack(0,8));
    // console.log(player1.receiveAttack(0,9));

    // console.log(player1.receiveAttack(2,4));

    console.log(player1.receiveAttack(1,6));
    console.log(player1.receiveAttack(2,6));
    console.log(player1.receiveAttack(3,6));
    console.log(player1.receiveAttack(4,6));


    console.log(player1.board)
    displayShips(player1);


    return {humanPlayer, computerPlayer}
}


export default game;