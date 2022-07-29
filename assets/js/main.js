const player1 = "❌"
const player2 = "⚪"
let ScorePlayer1 = 0
let ScorePlayer2 = 0
let currentPlayer = player1
let turnPlayer = 1
let gameOver = false;
let conditionVictory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function aleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function displaySymbol(element) {
    if (element.innerText == "" && gameOver == false) {
        play2()
        element.innerText = currentPlayer
        victory()
        turnPlayer++
        setCurrentPlayer()
    }
}
function setCurrentPlayer() {
    if (turnPlayer % 2 == 0) {
        currentPlayer = player2
        setTimeout(function () {
            Ia()
        }, 750)
    } else {
        currentPlayer = player1
    }
}
function victory() {
    for (let i = 0; i < conditionVictory.length; i++) {
        let cell1 = document.querySelectorAll(".grid")[conditionVictory[i][0]].innerText
        let cell2 = document.querySelectorAll(".grid")[conditionVictory[i][1]].innerText
        let cell3 = document.querySelectorAll(".grid")[conditionVictory[i][2]].innerText
        if (cell1 == "" || cell2 == "" || cell3 == "") {
            continue
        }
        if (cell1 == cell2 && cell2 == cell3) {
            if (cell1 == player1) {
                document.querySelector("#win").innerText = "CROIX ❌ A GAGNÉ"
                ScorePlayer1++
                document.querySelector("#SPlayer1").innerText = `ScoreJoueur ❌ :${ScorePlayer1}`
                gameOver = true
                break
            } else if (cell2 == player2) {
                document.querySelector("#win").innerText = "ROND ⚪ A GAGNÉ"
                ScorePlayer1++
                document.querySelector("#SPlayer2").innerText = `ScoreCPU ⚪ :${ScorePlayer2}`
                gameOver = true
                break
            }
        }
        loser()
    }
}
function loser() {
    let count = 0
    for (let i = 0; i < document.querySelectorAll("td").length; i++) {
        let tab = document.querySelectorAll("td")[i].innerText;
        if (tab != "") {
            count++
        }
    }
    if (count == document.querySelectorAll("td").length) {
        document.querySelector("#win").innerText = "❌ GAME OVER ⚪ "
        gameOver = true
    }
}
function refresh() {
    let elm = document.getElementById('win').innerText = "";
    for (let i = 0; i < document.querySelectorAll("td").length; i++) {
        document.querySelectorAll("td")[i].innerText = ""
    }
    turnPlayer = 1
    gameOver = false
    currentPlayer = player1
}
function Ia() {
    for (let i = 0; i < document.querySelectorAll("td").length; i++) {
        random = aleatoire(0, document.querySelectorAll("td").length - 1)
        if (document.querySelectorAll("td")[random].innerText != "") {
            continue
        } else {
            document.querySelectorAll("td")[random].click()
            break
        }
    }
}
function play() {
    let audio = new Audio(
        'assets/audio/clic.wav');
    audio.play();
}
function play2() {
    let audio = new Audio(
        'assets/audio/clic2.wav');
    audio.play();
}












