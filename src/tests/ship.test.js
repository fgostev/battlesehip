import  Ship from "../scripts/ship.js";


test('return damage',() =>{
  const cruiser = Ship(5);
  expect(cruiser.hit()).toBe(4);
})

test('return damage 2',() =>{
  const anotherCruiser = Ship(5);
  anotherCruiser.hit()
  expect(anotherCruiser.hit()).toBe(3);
})


test('check if ship is sunk',() =>{
  const sinkAShip = Ship(3);
  sinkAShip.hit();
  sinkAShip.hit();
  sinkAShip.hit();
  sinkAShip.hit();
  expect(sinkAShip.isSunk()).toBe(true);
})