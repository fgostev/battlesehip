import  GameBoard from "../scripts/gameBoard";
import  Ship from "../scripts/ship.js";


test('amount of rows', () => {
    const newBoard = GameBoard();
    expect(newBoard.board.length).toBe(10);
})

test('test horizontal positioning', () =>{
    const newBoard = GameBoard();
    expect(newBoard.placeShipH(5, 2, 4)).toStrictEqual(['', '', '!', '!', '!', '!', '', '', '', ''])
})

test('error message if too big or too far off', () =>{
    const newBoard = GameBoard();
    expect(newBoard.placeShipH(2, 6, 5)).toBe("not acceptable position for the ship")
})



test('test vertical positioning', () => {
    const newBoard = GameBoard();
    expect(newBoard.placeShipV(2,2,4)).toStrictEqual(
        [
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '!', '', '', '', '', '', '', ''],
            ['', '', '!', '', '', '', '', '', '', ''],
            ['', '', '!', '', '', '', '', '', '', ''],
            ['', '', '!', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],

        ])
})

test('throw error message if too far off', () => {
    const newBoard = GameBoard();
    expect(newBoard.placeShipV(8,2,4)).toBe("not acceptable position for the ship")
})