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
        grid.dataset.wasShot = false;
        container.append(grid);
    }
    
return container;
}

function closeWindow(){
    console.log("close")
}

function restartGame(){
    console.log("Restart game!");
}

// stopped here, figure out fontawesome

function winMessage(){
    const modal = document.createElement('div');
    modal.classList = "winContainer";
    const content = document.createElement('div');
    content.id = "winContent";

    const playerMessage = document.createElement("p");
    playerMessage.id = "playerWinMessage";
    playerMessage.textContent = `somebody WON!`;

    const closeBtn = document.createElement("button");
    closeBtn.id = "closeBtn";
    closeBtn.textContent = "x";

    const restartBtn = document.createElement('button');
    restartBtn.id = "restartGameBtn";
    const restartIcon = document.createElement("i");
    restartIcon.classList = "fas fa-redo";
    restartBtn.append(restartIcon);

    closeBtn.addEventListener("click", closeWindow);
    restartBtn.addEventListener("click", restartGame);

    content.append(closeBtn, playerMessage, restartBtn);
    modal.append(content);
    return modal;
}

// start by making the win message visible

const pageLoad = () => {
    const content = document.getElementById('content');
    const winModal = winMessage("test");
    const header = createHeader();
    const boardContainer = document.createElement("container");
    const board1 = createBoard("human");
    const board2 =  createBoard("computer")
    boardContainer.id = "boardContainer";
    boardContainer.append(board1, board2);    
    content.append(winModal, header, boardContainer);
}



export {pageLoad, winMessage};