import  GameBoard from "../scripts/gameBoard";
import createPlayer from "../scripts/player.js";
// import  Ship from "../scripts/ship.js";
import Player from '../scripts/player.js';


test('test if player has a board' ,() =>{
    const newBoard = GameBoard();
    const player1 = Player("player1");
    console.log(player1.board.length)
    console.log(newBoard.board.length)

    expect(player1.board).toStrictEqual(newBoard.board);
  })
  