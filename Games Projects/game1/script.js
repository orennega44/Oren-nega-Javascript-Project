
const boxes = document.querySelector('.boxes');
const box = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.resetBtn');
const statusText = document.querySelector('.status')
const score = document.querySelector('.score')


const winCondition = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
];


let option = ["", "", "", "", "", "", "", "", ""]; 
let currentPlayer = 'X';
let running = false;

initializeGame();

function initializeGame() {
    box.forEach(box => box.addEventListener('click', callClick));
    resetBtn.addEventListener('click', restartGame);
    statusText.innerHTML = `player: ${currentPlayer}`;
    running = true;
}

function callClick() {
    const cellIndex = this.getAttribute("cellIndex");

    if (option[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);

    checkWiner();
}

function updateCell(cell, index) {
    option[index] = currentPlayer;
    cell.innerHTML = currentPlayer;

}
function changePlayer() {
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    statusText.innerHTML = `player: ${currentPlayer}`

}
function checkWiner() {
    let roundWon = false;
    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const boxA = option[condition[0]];
        const boxB = option[condition[1]];
        const boxC = option[condition[2]];

        if (boxA == "" || boxB == "" || boxC == "") {
            continue;
        }

        if (boxA == boxB && boxB == boxC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.innerHTML = `${currentPlayer} wins!`;
        
        running = false;
    } else if (!option.includes("")) {
        statusText.innerHTML = `Draw!`;
        running = false;
    } else {
        changePlayer();
    }

}
function restartGame() {

    currentPlayer = "X";
    option = ["", "", "", "", "", "", "", "", ""];
    statusText.innerHTML = `${currentPlayer}'s turn`;
    box.forEach((box)=> box.innerHTML = "");
    running = true;

}
