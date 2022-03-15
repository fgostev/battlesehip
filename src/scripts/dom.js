import GameBoard from "./gameBoard";
import game from "./game";

const createHeader = () => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'BATTLESHIP';
    header.append(h1);
    return header;
}



const createBoard = (player) => {
    const container = document.createElement('div');
    container.classList = "board";
    container.id = `${player}Board`

    const boardObj = GameBoard();
    const board = boardObj.board.flat(1);

    for(let i = 0; i < 100; i++){
        const grid = document.createElement('div');
        grid.classList = `grid ${player}`;
        grid.dataset.x = `${board[i].positionX}`;
        grid.dataset.y = `${board[i].positionY}`;
        container.append(grid);
    }
    
return container;
}

const pageLoad = () => {
    const content = document.getElementById('content');
    const header = createHeader();
    const boardContainer = document.createElement("container");
    const board1 = createBoard("human");
    const board2 =  createBoard("computer")
    boardContainer.id = "boardContainer";
    boardContainer.append(board1, board2);    
    content.append(header, boardContainer);
}


export default pageLoad;