// Define the grid size
const gridSize = 5;
const grid = document.querySelector(".grid");
const tiles = document.querySelectorAll(".tile");

// Function to toggle the color of a tile and its adjacent tiles
function toggleColor(tile, row, col) {
    const adjacentTiles = [
        [row, col], [row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]
    ];

    adjacentTiles.forEach(([r, c]) => {
        if (r >= 0 && r < gridSize && c >= 0 && c < gridSize) {
            const adjacentTile = tiles[r * gridSize + c];
            toggleTileColor(adjacentTile);
        }
    });

    toggleTileColor(tile);
}

// Function to toggle the color of a tile
function toggleTileColor(tile) {
    tile.style.backgroundColor = tile.style.backgroundColor === "red" ? "blue" : "red";
}

// Function to check win condition
function checkWinCondition() {
    const isUniform = Array.from(tiles).every(tile => tile.style.backgroundColor === tiles[0].style.backgroundColor);

    if (isUniform) {
        window.location.href = "./stage4p.html"
    }
}

// Timer countdown function
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            window.location.href = "./stage4ta.html"
            // Add actions to handle the end of the game
            // You can reset the puzzle or perform other game-related tasks
        }
    }, 1000);
}

// Start the timer with 5 minutes
window.onload = function () {
    const fiveMinutes = 60 * 5;
    const display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};

// Event listener for tile clicks
tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
        toggleColor(tile, Math.floor(index / gridSize), index % gridSize);
        pal()
        checkWinCondition();
    });
});

var flip = new Audio("./music/page-flip-01a.mp3")
function  pal(){
    flip.play()
    flip.loop = false
}

