import  Ship from "./ship.js";

// create test for calling ship and checking the placement
// update the ships


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

        // || row[colStart + ship] === "!" || row[colEnd - 2] === "!" )

        if( colEnd > row.length || row[colEnd] === "!" || row[colStart - 1] === "!"){
            return "not acceptable position for the ship"
        }else{
            row.fill("!", colStart, colEnd);
        }
        return row;
    }

const placeShipV = (x, y, ship) => {
        const colStart = board[y];

        const rowStart = x ;
        const rowEnd = x + ship;


        if(rowEnd > board.length)
    {
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

// function needs to accept coordinates and tell if the object was hit


const receiveAttack = (x, y) => {
    return x;
}

    
    return {board, placeShipH, placeShipV, receiveAttack};
}

const newBoard = GameBoard();
// console.log(newBoard.placeShipV(1, 2, 8));
// console.log(newBoard.board)

export default GameBoard;