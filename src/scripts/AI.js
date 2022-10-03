import game from "./game";
import {player1} from "./game";
import {player2} from "./game";

// possible targets equals the whole array
// to shoot something equals randomized array length
// once something in the array is shot - it gets away from the possible targets
// shoot the object


const randomizedAttack = (arr) => Math.floor(Math.random() * arr.length);

const AI = (arr) => {

    const attack = randomizedAttack(arr);

    const shotArray = arr[attack];
     arr.splice(attack, 1);

    return shotArray;
}

export default AI; 