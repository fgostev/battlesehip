import  Ship from "../scripts/ship.js";


  // figure out to test a hit function.
  // think about array of [0, 0] - length for no damage
  // array with damage to equal [1 1 ] or anything else
  // double check tic tack toe 

test('return damage',() =>{
  const cruiser = Ship(5);
  expect(cruiser.hit(5)).toStrictEqual([0, 0, 0, 0, 1]);
})

test('return damage 2',() =>{
  const cruiser = Ship(5);
  expect(cruiser.hit(2)).toStrictEqual([0, 1, 0, 0, 0]);
})