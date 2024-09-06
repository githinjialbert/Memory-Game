const cards = ["1up", "blueshell", "bobomb", "bulletbill", "coin", "goomba", "luigi", 
    "mario", "mushroom", "peach", "question", "star", "thwomp", "wario"];

const board = [];
const rows = 6;
const columns = 4;
let currentTile;
let otherTile;

const myBoard = document.getElementById("board");

window.onload = () => {
    startGame();


    window.setInterval(() => {

        flipCard();
        matchCard();
        endGame();
        
    }, 100);
}