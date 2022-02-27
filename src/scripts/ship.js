// List of ships:

// 1	Carrier	5
// 2	Battleship	4
// 3	Cruiser	3
// 4	Submarine	3
// 5	Destroyer	2

const Ship = (size) => {

    const hp = size;

    const hit = () => {
        size -= 1;
        return size;
    }

    const isSunk = () =>{
        const sunk = 0;
        return size < sunk;
    }

    const shipId = undefined;

    return {size, hit, isSunk, shipId, hp};
}

export default Ship;