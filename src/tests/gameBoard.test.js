import  GameBoard from "../scripts/gameBoard";
import  Ship from "../scripts/ship.js";


test('amount of rows', () => {
    const newBoard = GameBoard();
    console.log(newBoard);
    expect(newBoard.board.length).toBe(10);
})

test('test horizontal positioning', () =>{
    const newBoard = GameBoard();
    const newShip = Ship(4);
    expect(newBoard.placeShipH(0, 2, newShip)).toStrictEqual([ 
    { empty: true, wasShot: false, positionX: 0, positionY: 0 },
    { empty: true, wasShot: false, positionX: 0, positionY: 1 },
    { empty: false, wasShot: false, positionX: 0, positionY: 2, shipId: 0},
    { empty: false, wasShot: false, positionX: 0, positionY: 3, shipId: 0 },
    { empty: false, wasShot: false, positionX: 0, positionY: 4, shipId: 0 },
    { empty: false, wasShot: false, positionX: 0, positionY: 5, shipId: 0 },
    { empty: false, wasShot: false, positionX: 0, positionY: 6, shipId: 0 },
    { empty: true, wasShot: false, positionX: 0, positionY: 7 },
    { empty: true, wasShot: false, positionX: 0, positionY: 8 },
    { empty: true, wasShot: false, positionX: 0, positionY: 9 } ])
})

test('error message if too big or too far off', () =>{
    const newBoard = GameBoard();
    const newShip = Ship(5)
    expect(newBoard.placeShipH(2, 6, newShip)).toBe("not acceptable position for the ship")
})

// // test for ship positioning


test('test vertical positioning', () => {
    const newBoard = GameBoard();
    const newShip = Ship(4);
    expect(newBoard.placeShipV(2,2,newShip)).toStrictEqual(
        [ [ { empty: true, wasShot: false, positionX: 0, positionY: 0 },
            { empty: true, wasShot: false, positionX: 0, positionY: 1 },
            { empty: true, wasShot: false, positionX: 0, positionY: 2 },
            { empty: true, wasShot: false, positionX: 0, positionY: 3 },
            { empty: true, wasShot: false, positionX: 0, positionY: 4 },
            { empty: true, wasShot: false, positionX: 0, positionY: 5 },
            { empty: true, wasShot: false, positionX: 0, positionY: 6 },
            { empty: true, wasShot: false, positionX: 0, positionY: 7 },
            { empty: true, wasShot: false, positionX: 0, positionY: 8 },
            { empty: true, wasShot: false, positionX: 0, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 1, positionY: 0 },
            { empty: true, wasShot: false, positionX: 1, positionY: 1 },
            { empty: true, wasShot: false, positionX: 1, positionY: 2 },
            { empty: true, wasShot: false, positionX: 1, positionY: 3 },
            { empty: true, wasShot: false, positionX: 1, positionY: 4 },
            { empty: true, wasShot: false, positionX: 1, positionY: 5 },
            { empty: true, wasShot: false, positionX: 1, positionY: 6 },
            { empty: true, wasShot: false, positionX: 1, positionY: 7 },
            { empty: true, wasShot: false, positionX: 1, positionY: 8 },
            { empty: true, wasShot: false, positionX: 1, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 2, positionY: 0 },
            { empty: true, wasShot: false, positionX: 2, positionY: 1 },
            { empty: false, wasShot: false, positionX: 2, positionY: 2 },
            { empty: true, wasShot: false, positionX: 2, positionY: 3 },
            { empty: true, wasShot: false, positionX: 2, positionY: 4 },
            { empty: true, wasShot: false, positionX: 2, positionY: 5 },
            { empty: true, wasShot: false, positionX: 2, positionY: 6 },
            { empty: true, wasShot: false, positionX: 2, positionY: 7 },
            { empty: true, wasShot: false, positionX: 2, positionY: 8 },
            { empty: true, wasShot: false, positionX: 2, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 3, positionY: 0 },
            { empty: true, wasShot: false, positionX: 3, positionY: 1 },
            { empty: false, wasShot: false, positionX: 3, positionY: 2 },
            { empty: true, wasShot: false, positionX: 3, positionY: 3 },
            { empty: true, wasShot: false, positionX: 3, positionY: 4 },
            { empty: true, wasShot: false, positionX: 3, positionY: 5 },
            { empty: true, wasShot: false, positionX: 3, positionY: 6 },
            { empty: true, wasShot: false, positionX: 3, positionY: 7 },
            { empty: true, wasShot: false, positionX: 3, positionY: 8 },
            { empty: true, wasShot: false, positionX: 3, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 4, positionY: 0 },
            { empty: true, wasShot: false, positionX: 4, positionY: 1 },
            { empty: false, wasShot: false, positionX: 4, positionY: 2 },
            { empty: true, wasShot: false, positionX: 4, positionY: 3 },
            { empty: true, wasShot: false, positionX: 4, positionY: 4 },
            { empty: true, wasShot: false, positionX: 4, positionY: 5 },
            { empty: true, wasShot: false, positionX: 4, positionY: 6 },
            { empty: true, wasShot: false, positionX: 4, positionY: 7 },
            { empty: true, wasShot: false, positionX: 4, positionY: 8 },
            { empty: true, wasShot: false, positionX: 4, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 5, positionY: 0 },
            { empty: true, wasShot: false, positionX: 5, positionY: 1 },
            { empty: false, wasShot: false, positionX: 5, positionY: 2 },
            { empty: true, wasShot: false, positionX: 5, positionY: 3 },
            { empty: true, wasShot: false, positionX: 5, positionY: 4 },
            { empty: true, wasShot: false, positionX: 5, positionY: 5 },
            { empty: true, wasShot: false, positionX: 5, positionY: 6 },
            { empty: true, wasShot: false, positionX: 5, positionY: 7 },
            { empty: true, wasShot: false, positionX: 5, positionY: 8 },
            { empty: true, wasShot: false, positionX: 5, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 6, positionY: 0 },
            { empty: true, wasShot: false, positionX: 6, positionY: 1 },
            { empty: false, wasShot: false, positionX: 6, positionY: 2 },
            { empty: true, wasShot: false, positionX: 6, positionY: 3 },
            { empty: true, wasShot: false, positionX: 6, positionY: 4 },
            { empty: true, wasShot: false, positionX: 6, positionY: 5 },
            { empty: true, wasShot: false, positionX: 6, positionY: 6 },
            { empty: true, wasShot: false, positionX: 6, positionY: 7 },
            { empty: true, wasShot: false, positionX: 6, positionY: 8 },
            { empty: true, wasShot: false, positionX: 6, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 7, positionY: 0 },
            { empty: true, wasShot: false, positionX: 7, positionY: 1 },
            { empty: true, wasShot: false, positionX: 7, positionY: 2 },
            { empty: true, wasShot: false, positionX: 7, positionY: 3 },
            { empty: true, wasShot: false, positionX: 7, positionY: 4 },
            { empty: true, wasShot: false, positionX: 7, positionY: 5 },
            { empty: true, wasShot: false, positionX: 7, positionY: 6 },
            { empty: true, wasShot: false, positionX: 7, positionY: 7 },
            { empty: true, wasShot: false, positionX: 7, positionY: 8 },
            { empty: true, wasShot: false, positionX: 7, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 8, positionY: 0 },
            { empty: true, wasShot: false, positionX: 8, positionY: 1 },
            { empty: true, wasShot: false, positionX: 8, positionY: 2 },
            { empty: true, wasShot: false, positionX: 8, positionY: 3 },
            { empty: true, wasShot: false, positionX: 8, positionY: 4 },
            { empty: true, wasShot: false, positionX: 8, positionY: 5 },
            { empty: true, wasShot: false, positionX: 8, positionY: 6 },
            { empty: true, wasShot: false, positionX: 8, positionY: 7 },
            { empty: true, wasShot: false, positionX: 8, positionY: 8 },
            { empty: true, wasShot: false, positionX: 8, positionY: 9 } ],
          [ { empty: true, wasShot: false, positionX: 9, positionY: 0 },
            { empty: true, wasShot: false, positionX: 9, positionY: 1 },
            { empty: true, wasShot: false, positionX: 9, positionY: 2 },
            { empty: true, wasShot: false, positionX: 9, positionY: 3 },
            { empty: true, wasShot: false, positionX: 9, positionY: 4 },
            { empty: true, wasShot: false, positionX: 9, positionY: 5 },
            { empty: true, wasShot: false, positionX: 9, positionY: 6 },
            { empty: true, wasShot: false, positionX: 9, positionY: 7 },
            { empty: true, wasShot: false, positionX: 9, positionY: 8 },
            { empty: true, wasShot: false, positionX: 9, positionY: 9 } ] ]
        )
})

test('throw error message if too far off', () => {
    const newBoard = GameBoard();
    const newShip = Ship(5)
    expect(newBoard.placeShipV(8,2,newShip)).toBe("not acceptable position for the ship")
})


test('throw error if ship is placed on the same spot as another horizontal fun', () => {
    const newBoard = GameBoard();
    const cruiser = Ship(4);
    const smallOne = Ship(1);

    newBoard.placeShipH(2, 3, cruiser);
    newBoard.placeShipH(9, 2, cruiser);


    expect(newBoard.placeShipH(2,6,smallOne)).toBe("not acceptable position for the ship")
})

test('throw error if ship is placed on the same spot as another vertical fun', () => {
    const newBoard = GameBoard();

    const cruiser = Ship(4);
    const smallOne = Ship(1);

    newBoard.placeShipV(2,2,cruiser);

    expect(newBoard.placeShipV(2,2,smallOne)).toBe("not acceptable position for the ship");
})

test('throw error if horizontal placed on vertical', () => {
    const newBoard = GameBoard();

    const cruiser = Ship(4);
    const smallOne = Ship(1);

    newBoard.placeShipV(2,2,cruiser);


    expect(newBoard.placeShipH(2,2,smallOne)).toBe("not acceptable position for the ship");
})

// testing receive attack function

test('check if ship gets hit', () => {

  const newBoard = GameBoard();

  const cruiser = Ship(4);
  newBoard.placeShipH(2,2,cruiser);


  expect(newBoard.receiveAttack(2,2)).toBe("ship got hit!");
});

test('check if ship hp changes and if is sunk', () =>{

  const newBoard = GameBoard();

  const cruiser = Ship(4);
  newBoard.placeShipH(2,2,cruiser);
  newBoard.receiveAttack(2,2);
  newBoard.receiveAttack(2,3);
  newBoard.receiveAttack(2,4);
  newBoard.receiveAttack(2,5);
  newBoard.receiveAttack(2,6);


  expect(newBoard.ships[0].isSunk()).toBe(true);
});