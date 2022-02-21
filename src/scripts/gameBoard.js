// import  Ship from "./ship.js";

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


const placeShipH = (x, y, ship) => {
        const row = board[x];
        const colStart = y;
        const colEnd = y + ship;

        // review if need space 

        if( colEnd > row.length || row[colEnd - 1] === "!" || row[colStart] === "!" 
        || row[y] === "!"){
            return "not acceptable position for the ship"
        }else{
            row.fill("!", colStart, colEnd);
        }
        return row;
    }

const placeShipV = (x, y, ship) => {

        ship = ship - 1;
        const rowStart = x ;
        const rowEnd = x + ship;

        if( rowEnd >= board.length ||board[rowStart][y] === "!" || board[rowEnd][y] === "!")
        {
            return "not acceptable position for the ship"
        }
        else{
            board.forEach((row, indx)=> {
            if(indx >= rowStart && indx <= rowEnd){
                    row[y] = "!";
                }
            else{
                return "not acceptable position for the ship"
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


// testing ground to double check test


// const newBoard = GameBoard();
// console.log(newBoard.placeShipV(2, 2, 4));

// bug with x position + ship more than 10


// console.log(newBoard.placeShipV(2, 2, 1))
// console.log(newBoard.board.length)

// const newBoard = GameBoard();
// const cruiser = 3;
// const smallOne = 1;
// newBoard.placeShipH(2, 3, cruiser);

// console.log(newBoard.placeShipV(9,8,smallOne))

// console.log(newBoard.board);

export default GameBoard;