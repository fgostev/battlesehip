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
    expect(newBoard.placeShipV(8,2,5)).toBe("not acceptable position for the ship")
})

test('test with calling a ship', () => {
    const newBoard = GameBoard();
    const cruiser = Ship(4);
    const smallOne = Ship(1);
    newBoard.placeShipV(2,2,cruiser.type);
    newBoard.placeShipV(0,0,smallOne.type);

    expect(newBoard.board).toStrictEqual(
        [
            ['!', '', '', '', '', '', '', '', '', ''],
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

// FOCUS ON THE TEST
// looks like the horizontal test works for now, double check details

test('throw error if ship is placed on the same spot as another', () => {
    const newBoard = GameBoard();
    const cruiser = Ship(4);
    const smallOne = Ship(1);

    newBoard.placeShipH(2, 3, cruiser.type);

    expect(newBoard.placeShipH(2,7,smallOne.type)).toBe("not acceptable position for the ship")
})