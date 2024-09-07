const cards = ["1up", "blueshell", "bobomb", "bulletbill", "coin", "goomba", "luigi", "mario", "mushroom", "peach", "question", "star", "thwomp", "wario"];
const rows = 6;
const columns = 4;
let flippedCards = [];
let hiddenImage = "./images/question.png"

window.onload = () => {
    startGame();
}

const startGame = () => {
    createBoard();
}

const createBoard = () => {
    const myBoard = document.getElementById("board");
    const tileValues = [...cards, ...cards];
    tileValues = shuffleArray(tileValues);
    
    for (let i = 0; i < rows * columns; i++) {
        const tile = document.createElement("img");
    }
}