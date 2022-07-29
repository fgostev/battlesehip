import  Ship from "./ship.js"   

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
        const newRow = Array.from({length: (10)}, () => ({empty: true, wasShot: false, damaged: false, positionX: i, positionY: undefined}));
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
            console.log("nope");
            return "not acceptable position for the ship";
        } 
        else{
            row.forEach(col => {
                if(col.positionY >= colStart && col.positionY <= colEnd && col.empty === true){
                col.empty = false;
                col.shipId = ships.length;
                }
            })
            ships.push(ship);
            ship.shipId = ships.length;

        }
    return row;
}


const placeShipV = (x, y, ship) => {

        const shipLength = ship.size;
        const rowStart = x ;
        const rowEnd = x + shipLength;
        const colEnd = y + ship.size;

        if( rowEnd >= board.length ||  
            board[rowStart][y].empty === false || board[rowEnd][y].empty === false)
        {
            return "not acceptable position for the ship";
        }
        else{
            board.forEach((row, indx)=> {
                    if(indx >= rowStart && indx <= rowEnd){
                    row[y].empty = false;
                    row[y].shipId = ships.length;
                }
            })
            ships.push(ship);
            ship.shipId = ships.length;
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
        shootingPosition.damaged = true;
        const damagedShip = ships[shootingPosition.shipId];
        damagedShip.hp = damagedShip.hit();
        areAllShipsSunk();
        return `ship ${damagedShip.shipId} got hit! Left ${damagedShip.hp} hp! The ship is dead = ${damagedShip.isSunk()}`;
    }
}


    
return {board, placeShipH, placeShipV, ships, receiveAttack, areAllShipsSunk};
}

export default GameBoard; 
