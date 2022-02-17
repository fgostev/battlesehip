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


const placeShipH = (x, y, ship) => {

    // change after to the interact with the module
        const row = board[x];
        const colStart = y;
        const colEnd = y + ship;

// ship position and ship size not bigger than the array - in that case error
        if(colEnd > row.length){
            return "not acceptable position for the ship"
        }else{
            row.fill("!", colStart, colEnd);
        }
        return row;
    }

const placeShipV = (x, y, ship) => {
        // const rowStart = board[x];
        // const rowEnd = board[x + ship];
        const colStart = board[y];
        const colEnd = colStart + ship;

        const rowStart = x ;
        const rowEnd = x + ship;


        if(rowEnd > board.length){
            return "not acceptable position for the ship"
        }
        else{
            board.forEach((row, indx)=> {
                if(indx >= rowStart && indx < rowEnd){
                    row[y] = "!";
                }
            })
        }
        return board;
}
    
    return {board, placeShipH, placeShipV};
}

// const newBoard = GameBoard();
// console.log(newBoard.placeShipV(, 2, 8));
// console.log(newBoard.board)

export default GameBoard;