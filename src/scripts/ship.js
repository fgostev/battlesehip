//  create a module ship
// length - will be the length of the array(the ship)
// hit - will be the points of the ship that is hit
// sun - if all points of the ship are sunk than the ship is sunk
const Ship = (type) => {

    let shipType = Array.from({length: (type - 1)}, () => 0);

    // add if miss return a message that missed

    const hit = (num) => {
        if(num > type || num <= 0)
        {
            return "missed";
        }
        else if(shipType[num - 1] === 1){
            return "already shot";
        }
        else{
        {   
            shipType.splice(num - 1, 0, 1);
            return shipType;
            }
        }
    }

    const sunkOrNot = () =>{
        return false;
    }

    return {type, hit, sunkOrNot};
}

const cruiser = Ship(5);

console.log(cruiser.hit(1));
console.log(cruiser.hit(1));
console.log(cruiser.hit(4));
console.log(cruiser);


export default Ship;