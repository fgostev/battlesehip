import  Ship from "../scripts/ship.js";


test('return damage',() =>{
  const cruiser = Ship(5);
  expect(cruiser.hit(2)).toStrictEqual([0, 1, 0, 0, 0]);
})

test('return damage 2',() =>{
  const anotherCruiser = Ship(5);
  expect(anotherCruiser.hit(2)).toStrictEqual([0, 1, 0, 0, 0]);
})


test('check if ship is sunk',() =>{
  const sinkAShip = Ship(3);
  sinkAShip.hit(1);
  sinkAShip.hit(2);
  sinkAShip.hit(3);
  expect(sinkAShip.isSunk()).toBe(true);
})