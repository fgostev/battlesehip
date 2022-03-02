// import  Ship from "./ship.js";

// import { cli } from "webpack";


//  dot equals miss
//  x equals hit
//  ! equals have a ship


const GameBoard = () => {
    let board = [];
    let ships = [];
    
    // add 10 rows
        // x = horizontal aka row
        // y = vertical aka column 

    for(let i = 0; i < 10; i++){
        let x = i;
        const newRow = Array.from({length: (10)}, () => ({empty: true, wasShot: false, positionX: i, positionY: undefined}));
        board.push(newRow);
            board.forEach(row => {
                row.forEach((col, indx) => {
                    col.positionY = indx
                })
            })
        }

const placeShipH = (x, y, ship) => {
        const row = board[x];
        const colStart = y;
        const colEnd = y + ship.size;

        if( x >= board.length || colEnd >= board.length ||
            row[colStart].empty === false || row[colEnd].empty === false)
        {
            return "not acceptable position for the ship";
        } 
        else{
            row.forEach(col => {
                if(col.positionY >= colStart && col.positionY <= colEnd && col.empty === true){
                col.empty = false;
                col.shipId = ships.length;
                }
            })
            ship.shipId = ships.length;
            ships.push(ship);

        }
    return row;
}

const placeShipV = (x, y, ship) => {

        const shipLength = ship.size;
        const rowStart = x ;
        const rowEnd = x + shipLength;
        const colEnd = y + ship.size;

        if( rowEnd >= board.length || colEnd >= board.length ||
            board[rowStart][y].empty === false || board[rowEnd][y].empty === false)
        {
            return "not acceptable position for the ship";
        }
        else{
            board.forEach((row, indx)=> {
                    if(indx >= rowStart && indx <= rowEnd){
                    row[y].empty = false;
                }
            })
    }

    return board;
}

const areAllShipsSunk = () => {
    let shipsSunk = 0;

        ships.forEach( ship => {
            if(ship.isSunk() === true){
                shipsSunk += 1; 
            }
        })
    return shipsSunk === ships.length;

}

const receiveAttack = (x, y) => {
    const shootingPosition = board[x][y];
    if(shootingPosition.empty  === true || shootingPosition.wasShot === true){
        shootingPosition.wasShot = true;
        return "miss!";
    }else{
        shootingPosition.wasShot = true;
        const damagedShip = ships[shootingPosition.shipId];
        damagedShip.hp = damagedShip.hit();
        areAllShipsSunk();
        return `ship got hit!`;
    }

}

    
return {board, placeShipH, placeShipV, ships, receiveAttack, areAllShipsSunk};
}



// const gameBoard = GameBoard();

// const newShip = Ship(0);
// const newShip2 = Ship(2);

// gameBoard.placeShipH(0, 0, newShip);
// gameBoard.placeShipH(0, 6, newShip2);
// gameBoard.receiveAttack(0, 0);
// console.log(gameBoard.ships[0].isSunk());
// console.log(gameBoard.receiveAttack(2, 6))
// console.log(gameBoard.board[2][6]);

// console.log(gameBoard.areAllShipsSunk())


export default GameBoard; 
