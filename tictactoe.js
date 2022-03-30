var currentPlayer = "";
const player1 = "X";
const player2 = "O";

function $(id){
    return document.getElementById(id);
}

function changePlayer() {
    if(currentPlayer == player1) { currentPlayer = player2; }
    else { currentPlayer = player1; }
}

function startGame(){
    currentPlayer = player1;
}