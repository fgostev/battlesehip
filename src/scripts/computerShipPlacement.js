import GameBoard from "./gameBoard";
import Ship from "./ship";
import { shipSelectionEventListeners } from "./shipPlacement";


const newBoard = GameBoard();

function horizonOrVertical(board, x, y, type){
        let randomAlignment = Math.floor(Math.random() * 2);
        if(randomAlignment === 1){
                board.placeShipH(x, y, type);
        }else{
                board.placeShipV(x, y, type);
        }
}


function fillWithShips(num, num2, type){

        if(num <= 0 && shipsAmountByType(type) === num2) {
                console.log("done");
                return;
        }
     
   const ship = Ship(type);     
   let x = Math.floor(Math.random() * 10);
   let y = Math.floor(Math.random() * 10);
   horizonOrVertical(newBoard, x, y, ship);

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
        fillWithShips(3, 3, 1);
        fillWithShips(2, 2, 2);
        fillWithShips(1, 1, 3);
        fillWithShips(1, 1, 4);
}



allShips();



const computerRandomizedShips = () => {

     return newBoard;   
}



export default computerRandomizedShips;