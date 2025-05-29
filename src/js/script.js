export let currentPlayer = "X";
export let gameOver = false;
export let scoreX = 0;
export let scoreO = 0;
export let gameMode = 'playerVsComputer';

export function getCells() {
    return Array.from(document.querySelectorAll(".cell"));
}

export function checkWinner() {
    const cells = getCells(); 
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    for (const combo of winCombinations) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            return true;
        }
    }
    return false;
}

export function checkDraw() {
    const cells = getCells(); 
    for (const cell of cells) {
        if (cell.textContent === "") {
            return false; 
        }
    }
    return true; 
}

export function findBestMove() {
    const cells = getCells(); 

    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winCombinations) {
        const [a, b, c] = combo;
        const combination = [cells[a], cells[b], cells[c]];
        if (combination.filter(cell => cell.textContent === "O").length === 2 && combination.some(cell => cell.textContent === "")) {
            return combination.find(cell => cell.textContent === "");
        }
    }

    for (const combo of winCombinations) {
        const [a, b, c] = combo;
        const combination = [cells[a], cells[b], cells[c]];
        if (combination.filter(cell => cell.textContent === "X").length === 2 && combination.some(cell => cell.textContent === "")) {
            return combination.find(cell => cell.textContent === "");
        }
    }

    const center = cells[4];
    if (center.textContent === "") {
        return center;
    }

    const availableCells = Array.from(cells).filter(cell => cell.textContent === "");
    if (availableCells.length > 0) {
        return availableCells[Math.floor(Math.random() * availableCells.length)];
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("game-board");
    const gameOverMessage = document.getElementById("game-over-message");
    const restartButton = document.getElementById("restart-button");
    const resetScoreButton = document.getElementById("reset-score-button");

    const themeToggle = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('darkmode');
        themeToggle.checked = true;
    }
    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('darkmode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('darkmode');
            localStorage.setItem('theme', 'light');
        }
    });

    const scoreXElement = document.getElementById("scoreX");
    const scoreOElement = document.getElementById("scoreO");
    const vsComputerRadio = document.getElementById('vsComputer');
    const vsPlayerRadio = document.getElementById('vsPlayer');

    const moveSound = new Audio('./src/sounds/move.mp3');
    const winSound = new Audio('./src/sounds/win.mp3');
    const loseSound = new Audio('./src/sounds/lose.mp3');
    const drawSound = new Audio('./src/sounds/draw.mp3');

    function updateScoreDisplay(prevX = scoreX, prevO = scoreO) {
        scoreXElement.textContent = scoreX;
        scoreOElement.textContent = scoreO;

        if (scoreX > prevX) {
            scoreXElement.classList.remove('score-animate');
            void scoreXElement.offsetWidth; // Force reflow for restart animation
            scoreXElement.classList.add('score-animate');
        }
        if (scoreO > prevO) {
            scoreOElement.classList.remove('score-animate');
            void scoreOElement.offsetWidth;
            scoreOElement.classList.add('score-animate');
        }
    }

    scoreXElement.addEventListener('animationend', () => {
        scoreXElement.classList.remove('score-animate');
    });
    scoreOElement.addEventListener('animationend', () => {
        scoreOElement.classList.remove('score-animate');
    });

    function highlightWinner(cellA, cellB, cellC) {
        cellA.style.backgroundColor = "#8bc34a";
        cellB.style.backgroundColor = "#8bc34a";
        cellC.style.backgroundColor = "#8bc34a";
    }

    function animateWinner() {
        const winningCells = document.querySelectorAll(".cell[style*='background-color: rgb(139, 195, 74)']");

        winningCells.forEach(cell => {
            cell.style.transition = "transform 0.5s ease-in-out";
            cell.style.transform = "scale(1)";
        });
    }

    function initializeBoard() {
        board.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            board.appendChild(createCell());
        }
        updateScoreDisplay();
    }

    function createCell() {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", handleCellClick);
        return cell;
    }

    function handleCellClick(event) {
        if (gameOver || event.target.textContent !== "") {
            return;
        }

        if (gameMode === 'playerVsComputer' && currentPlayer === "O") {
            return;
        }

        event.target.textContent = currentPlayer;

        moveSound.currentTime = 0; 
        moveSound.play();

        if (checkWinner()) { 
            gameOverMessage.textContent = `${currentPlayer} wins!`;
            gameOverMessage.style.display = "block";
            gameOver = true; 
            
            const cells = getCells(); 
            const winCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], 
                [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                [0, 4, 8], [2, 4, 6]             
            ];

            for (const combo of winCombinations) {
                const [a, b, c] = combo;
                if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
                    highlightWinner(cells[a], cells[b], cells[c]); 
                    break; 
                }
            }
            animateWinner(); 

            if (currentPlayer === 'X') {
                const prev = scoreX;
                scoreX++;
                updateScoreDisplay(prev, scoreO);
            } else {
                const prev = scoreO;
                scoreO++;
                updateScoreDisplay(scoreX, prev);
            }
            restartButton.style.display = "block"; 

            winSound.currentTime = 0; 
            winSound.play();

            return; 
        }

        if (checkDraw()) { 
            gameOverMessage.textContent = "It's a draw!";
            gameOverMessage.style.display = "block";
            gameOver = true; 
            restartButton.style.display = "block";

            drawSound.currentTime = 0;
            drawSound.play();

            return; 
        }

        if (gameMode === 'playerVsComputer') {
            currentPlayer = "O"; 
            if (!gameOver) { 
                setTimeout(computerMove, 500);
            }
        } else { 
            currentPlayer = currentPlayer === "X" ? "O" : "X"; 
        }
    }

    function computerMove() {

        const chosenCell = findBestMove(); 
        if (chosenCell) {
            chosenCell.textContent = "O"; 

            moveSound.currentTime = 0; 
            moveSound.play();

            if (checkWinner()) {
                gameOverMessage.textContent = "O wins!";
                gameOverMessage.style.display = "block";
                gameOver = true;
                
                const cells = getCells(); 
                const winCombinations = [
                    [0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]
                ];
                for (const combo of winCombinations) {
                    const [a, b, c] = combo;
                    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
                        highlightWinner(cells[a], cells[b], cells[c]);
                        break;
                    }
                }
                animateWinner();
                const prev = scoreO;
                scoreO++;
                updateScoreDisplay(scoreX, prev);
                restartButton.style.display = "block";

                loseSound.currentTime = 0; 
                loseSound.play();

            } else {
                currentPlayer = "X"; 
            }

            if (checkDraw() && !gameOver) { 
                gameOverMessage.textContent = "It's a draw!";
                gameOverMessage.style.display = "block";
                gameOver = true;
                restartButton.style.display = "block";

                drawSound.currentTime = 0; 
                drawSound.play();
            }
        }
    }
    
    window.restartGame = function () {
        currentPlayer = "X"; 
        gameOver = false;
        gameOverMessage.style.display = "none";
        
        const cells = document.querySelectorAll(".cell");
        const isDark = document.body.classList.contains('darkmode');
        cells.forEach(cell => {
            cell.textContent = "";
            cell.style.backgroundColor = isDark ? "#2c2f34" : "#f9f9f9"; // Sesuaikan dengan mode
            cell.style.color = isDark ? "#f0f4f8" : "#333"; // Sesuaikan warna teks juga
            cell.style.transform = "scale(1)";
            cell.style.transition = "";
        });
        updateScoreDisplay();
    };

    window.resetScores = function () {
        scoreX = 0;
        scoreO = 0;
        updateScoreDisplay(); 
        restartGame(); 
    };

    vsComputerRadio.addEventListener('change', () => {
        gameMode = 'playerVsComputer';
        restartGame(); 
    });

    vsPlayerRadio.addEventListener('change', () => {
        gameMode = 'playerVsPlayer'; 
        restartGame(); 
    });

    if (resetScoreButton) {
        resetScoreButton.addEventListener('click', resetScores);
    }

    initializeBoard();
});