const cards = ["1up", "blueshell", "bobomb", "bulletbill", "coin", "goomba", "luigi", "mario", "mushroom", "peach", "question", "star", "thwomp", "wario"];
const rows = 6;
const columns = 4;
let flippedCards = [];
let hiddenImage = "./images/question.gif";

window.onload = () => {
    startGame();
}

const startGame = () => {
    createBoard();
}

const createBoard = () => {
    const myBoard = document.getElementById("board");
    let tileValues = [...cards, ...cards];
    tileValues = shuffleArray(tileValues);
    
    for (let i = 0; i < rows * columns; i++) {
        const tile = document.createElement("img");
        tile.classList.add("tile");
        tile.src = hiddenImage;
        tile.dataset.value = tileValues[i];
        myBoard.appendChild(tile);
        tile.addEventListener("click", flipCard);

        // Debugging: Log created tiles
        console.log(`Created tile with value: ${tile.dataset.value}`);
    }
}

const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random());
}

const flipCard = (event) => {
    const tile = event.target;
    console.log(`Clicked tile with value: ${tile.dataset.value}`);

    if (flippedCards.length < 2 && !tile.classList.contains("flipped")) {
        tile.classList.add("flipped");
        tile.src = `./images/${tile.dataset.value}.png`;
        flippedCards.push(tile);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

const checkForMatch = () => {
    const [firstCard, secondCard] = flippedCards;
    console.log(`Checking match: ${firstCard.dataset.value} vs ${secondCard.dataset.value}`);

    if (firstCard.dataset.value === secondCard.dataset.value) {
        flippedCards = [];
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard.src = hiddenImage;
            secondCard.src = hiddenImage;
            flippedCards = [];
        }, 1000);
    }
}