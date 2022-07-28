import GameBoard from "./gameBoard";
import Ship from "./ship";
import { shipSelectionEventListeners } from "./shipPlacement";

const destroyer = Ship(1);
const submarine = Ship(2);
const cruiser = Ship(3);
const carrier = Ship(4);

// START THINK AS OBJECT RATHER THAN NUMBERS! THINK ON HOW TO PLACE THE OBJECTS!
// HOW TO AVOID REPETITION AND EMPTYNESS!

const newBoard = GameBoard();

function horizonOrVertical(board, x, y, type){
        let randomAlignment = Math.floor(Math.random() * 2);
        if(randomAlignment === 1){
                board.placeShipH(x, y, type);
        }else{
                board.placeShipV(x, y, type);
        }
}

// num1 for iteration, num 2 as a constant. 


// try to approach with pushing ships. 

function fillWithShips(num, num2, type){

        if(num <= 0 && shipsAmountByType(type.size) === num2) {
                console.log("done");
                return;
        }
   console.log(num);

   let x = Math.floor(Math.random() * 10);
   let y = Math.floor(Math.random() * 10);
   horizonOrVertical(newBoard, x, y, type);
   num--;
   fillWithShips(num, num2, type);
}

function shipsAmountByType(size){
let counter = 0;
        newBoard.ships.forEach(ship => {
                if(ship.size === size){
                        counter++
                }
        })
        return counter;
}

function allShips(){
        fillWithShips(3, 3, destroyer);
        fillWithShips(2, 2, submarine);
        fillWithShips(1, 1, cruiser);
        fillWithShips(1, 1, carrier);
}

allShips();


const computerRandomizedShips = () => {

     return newBoard;   
}



export default computerRandomizedShips;