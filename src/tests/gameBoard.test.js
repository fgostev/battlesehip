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

// test('test if function is returning something', () => {
//     const newBoard = GameBoard();
//     expect(newBoard.placeShipV()).toStrictEqual(
//         [
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//             ['', '', '', '', '', '', '', '', '', ''],
//         ])
// })

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