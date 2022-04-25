// List of ships:

// 1	Carrier	5
// 2	Battleship	4
// 3	Cruiser	3
// 4	Submarine	3
// 5	Destroyer	2

import GameBoard from "./gameBoard";
import Ship from "./ship";

const Player = (name) => {        
    const boardObject = GameBoard();
    const board = boardObject.board.flat(1);
    return {name, board};
}

export default Player;