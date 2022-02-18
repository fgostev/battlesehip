// List of ships:
//  4 - 1 slots, 3 - 2 slots, 2 - 3 slots, 1 - 4 slot 


const Ship = (type) => {

    let shipType = Array.from({length: (type)}, () => 0);


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
            shipType.splice(num - 1, 1, 1);
            return shipType;
            }
        }
    }

    const isSunk = () =>{
        const sunk = !shipType.includes(0);
        return sunk;
    }

    return {type, hit, isSunk};
}
export default Ship;