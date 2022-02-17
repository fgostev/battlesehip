import  GameBoard from "../scripts/gameBoard";
import  Ship from "../scripts/ship.js";


test('amount of rows', () => {
    const newBoard = GameBoard();
    expect(newBoard.board.length).toBe(10);
})

test('return position function', () =>{
    const cruiser = Ship(4);
    const newBoard = GameBoard();
    expect(newBoard.placeShip(5, 2, cruiser)).toStrictEqual(['', '', '!', '!', '!', '!', '', '', '', ''])
})