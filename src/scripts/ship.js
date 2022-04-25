// List of ships:

// 1	Carrier	5
// 1 - cru

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