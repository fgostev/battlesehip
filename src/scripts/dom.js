import GameBoard from "./gameBoard";
import game from "./game";


const createHeader = () => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'BATTLESHIP';
    header.append(h1);
    return header;
}

const shipGenerator = (text ,num) => {
    const ship = document.createElement('div');
    ship.classList = `shipSelect`;

    const para = document.createElement('p');
    para.textContent = text + "x";
    para.classList = "amountDescription";
    para.draggable = false;
    ship.append(para);
    
    for(let i = 0; i < num; i++) {
      const part = document.createElement('div');
      part.classList = `part length${num}`;
      ship.append(part);
    };
    ship.draggable = true;
 return ship;
}


const createInitialPage = () => {
    const startContainer =  document.createElement('div');
    startContainer.id = "startContainer";
    const boardSelect = createBoard("select");

    const shipReferenceContainer = document.createElement('div');
    shipReferenceContainer.id = "shipDescriptionContainer";
    const text = document.createElement('p');

    const carrier = shipGenerator(1,5);
    const battleship = shipGenerator(1,4);
    const destroyer = shipGenerator(2,3)
    const patrol = shipGenerator(3,2);

    shipReferenceContainer.append(text, carrier, battleship, destroyer, patrol);
    startContainer.append(boardSelect, shipReferenceContainer);
    return startContainer;
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
    // start page
    const shipSelection = createInitialPage(); 
    // modal
    const winModal = winMessage("test");
    const header = createHeader();
    // game
    const boardContainer = document.createElement("container");
    const board1 = createBoard("human");
    const board2 =  createBoard("computer")
    boardContainer.id = "boardContainer";
    boardContainer.append(board1, board2);    
    content.append(winModal, header, shipSelection, boardContainer);
}



export {pageLoad, winMessage};