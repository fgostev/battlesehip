// import  Ship from "./ship.js";

// create a 10 by 10 array for the game board
// create ship placement by calling the ship function
// figure out how to place ship - 
        // if horizontally add + 10 to the placement
        // if vertically as it is


//  dot equals miss
//  x equals hit
//  ! equals have a ship

const GameBoard = () => {
    let board = [];
    
    // add 10 rows
    for(let i = 0; i < 10; i++){
        const newRow = Array.from({length: (10)}, () => '');
        board.push(newRow);
    }
    
    // x = horizontal aka row
    // y = vertical aka column 

    // return the correct row


const placeShip = (x, y, ship) => {

    // change after to the interact with the module
        const row = board[x];
        const colStart = y;
        const colEnd = y + ship;

        row.fill("ship", colStart, colEnd);

        return row;
    }
    
    return {board, placeShip};
}

const newBoard = GameBoard();
console.log(newBoard.placeShip(2, 6, 4))

export default GameBoard;