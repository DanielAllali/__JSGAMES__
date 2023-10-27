let playDiv = document.getElementById("playDiv")
let playBtn = document.getElementById("playBtn")
let board = document.getElementById("board");
let verticleLines = document.getElementById("verticleLines");
let boardLoc = ["c", "c", "c", "c", "c", "c", "c", "c", "c"];
function startGame() {
    playDiv.style.display = "none";
    board.style.display = "block";
    verticleLines.style.display = "block";
}
playBtn.addEventListener("click", startGame)

/* click */
let cellImg1 = document.getElementById("cellImg1");
let cellImg2 = document.getElementById("cellImg2");
let cellImg3 = document.getElementById("cellImg3");
let cellImg4 = document.getElementById("cellImg4");
let cellImg5 = document.getElementById("cellImg5");
let cellImg6 = document.getElementById("cellImg6");
let cellImg7 = document.getElementById("cellImg7");
let cellImg8 = document.getElementById("cellImg8");
let cellImg9 = document.getElementById("cellImg9");



let turn = document.getElementById("turn").innerHTML;
turn = Math.floor(Math.random() * 2);
console.log(turn);
if (turn == 1) {
    turn = "x"
}
else {
    turn = "circle"
}

cellImg1.src = "./images/" + turn + "Hover.png";
cellImg2.src = "./images/" + turn + "Hover.png";
cellImg3.src = "./images/" + turn + "Hover.png";
cellImg4.src = "./images/" + turn + "Hover.png";
cellImg5.src = "./images/" + turn + "Hover.png";
cellImg6.src = "./images/" + turn + "Hover.png";
cellImg7.src = "./images/" + turn + "Hover.png";
cellImg8.src = "./images/" + turn + "Hover.png";
cellImg9.src = "./images/" + turn + "Hover.png";


function clickFunc(location) {
    let winCon1 = [turn, "c", "c", "c", turn, "c", "c", "c", turn]
    let winCon2 = ["c", "c", turn, "c", turn, "c", turn, "c", "c"]
    let winCon3 = [turn, turn, turn, "c", "c", "c", "c", "c", "c"]
    let winCon4 = ["c", "c", "c", turn, turn, turn, "c", "c", "c"]
    let winCon5 = ["c", "c", "c", "c", "c", "c", turn, turn, turn]
    let winCon6 = [turn, "c", "c", turn, "c", "c", turn, "c", "c"]
    let winCon7 = ["c", turn, "c", "c", turn, "c", "c", turn, "c"]
    let winCon8 = ["c", "c", turn, "c", "c", turn, "c", "c", turn]


    /* write x's and circles by turn */
    /* 1 */
    if (location == 0) {
        if (boardLoc[location] == "c") {
            cellImg1.style.visibility = 'visible';
            cellImg1.style.cursor = "not-allowed";
            cellImg1.src = './images/' + turn + '.png';
        }
    }
    /* 2 */
    if (location == 1) {
        if (boardLoc[location] == "c") {
            cellImg2.style.visibility = 'visible';
            cellImg2.style.cursor = "not-allowed";
            cellImg2.src = './images/' + turn + '.png';
        }
    }
    /* 3 */
    if (location == 2) {
        if (boardLoc[location] == "c") {
            cellImg3.style.visibility = 'visible';
            cellImg3.style.cursor = "not-allowed";
            cellImg3.src = './images/' + turn + '.png';
        }
    }
    /* 4 */
    if (location == 3) {
        if (boardLoc[location] == "c") {
            cellImg4.style.visibility = 'visible';
            cellImg4.style.cursor = "not-allowed";
            cellImg4.src = './images/' + turn + '.png';
        }
    }
    /* 5 */
    if (location == 4) {
        if (boardLoc[location] == "c") {
            cellImg5.style.visibility = 'visible';
            cellImg5.style.cursor = "not-allowed";
            cellImg5.src = './images/' + turn + '.png';
        }
    }
    /* 6 */
    if (location == 5) {
        if (boardLoc[location] == "c") {
            cellImg6.style.visibility = 'visible';
            cellImg6.style.cursor = "not-allowed";
            cellImg6.src = './images/' + turn + '.png';
        }
    }
    /* 7 */
    if (location == 6) {
        if (boardLoc[location] == "c") {
            cellImg7.style.visibility = 'visible';
            cellImg7.style.cursor = "not-allowed";
            cellImg7.src = './images/' + turn + '.png';
        }
    }
    /* 8 */
    if (location == 7) {
        if (boardLoc[location] == "c") {
            cellImg8.style.visibility = 'visible';
            cellImg8.style.cursor = "not-allowed";
            cellImg8.src = './images/' + turn + '.png';
        }
    }
    /* 9 */
    if (location == 8) {
        if (boardLoc[location] == "c") {
            cellImg9.style.visibility = 'visible';
            cellImg9.style.cursor = "not-allowed";
            cellImg9.src = './images/' + turn + '.png';
        }
    }
    boardLoc[location] = turn;
    console.log(boardLoc);
    if (
        boardLoc[0] == winCon1[0] && boardLoc[4] == winCon1[4] && boardLoc[8] == winCon1[8] ||
        boardLoc[2] == winCon2[2] && boardLoc[4] == winCon2[4] && boardLoc[6] == winCon2[6] ||
        boardLoc[0] == winCon3[0] && boardLoc[1] == winCon3[1] && boardLoc[2] == winCon3[2] ||
        boardLoc[3] == winCon4[3] && boardLoc[4] == winCon4[4] && boardLoc[5] == winCon4[5] ||
        boardLoc[6] == winCon5[6] && boardLoc[7] == winCon5[7] && boardLoc[8] == winCon5[8] ||
        boardLoc[0] == winCon6[0] && boardLoc[3] == winCon6[3] && boardLoc[6] == winCon6[6] ||
        boardLoc[1] == winCon7[1] && boardLoc[4] == winCon7[4] && boardLoc[7] == winCon7[7] ||
        boardLoc[2] == winCon8[2] && boardLoc[5] == winCon8[5] && boardLoc[8] == winCon8[8]) {
        /* this was the condition 💀💀 */
        let whoWon = document.getElementById("whoWon");
        whoWon.innerHTML = turn + " Won!!";
        whoWon.style.display = "block";
        anotherGame();
    }
    else {
        let wrapper = document.getElementById("wrapper")
        if (boardLoc[0] != "c" && boardLoc[1] != "c" && boardLoc[2] != "c" && boardLoc[3] != "c" && boardLoc[4] != "c" && boardLoc[5] != "c" && boardLoc[6] != "c" && boardLoc[7] != "c" && boardLoc[8] != "c") {
            whoWon.style.display = "block";
            whoWon.innerHTML = "Draw!";
            whoWon.style.Color = "white";
            setTimeout(function () {
                window.location.reload("Refresh")
            }, 3000)
        }
    }


    if (turn == "x") {
        turn = "circle"
    }
    else {
        turn = "x"
    }

    if (boardLoc[0] == "c") {
        cellImg1.src = "./images/" + turn + "Hover.png";
    }
    if (boardLoc[1] == "c") {
        cellImg2.src = "./images/" + turn + "Hover.png";
    }
    if (boardLoc[2] == "c") {
        cellImg3.src = "./images/" + turn + "Hover.png";
    }
    if (boardLoc[3] == "c") {
        cellImg4.src = "./images/" + turn + "Hover.png";
    }
    if (boardLoc[4] == "c") {
        cellImg5.src = "./images/" + turn + "Hover.png";
    }
    if (boardLoc[5] == "c") {
        cellImg6.src = "./images/" + turn + "Hover.png";
    }
    if (boardLoc[6] == "c") {
        cellImg7.src = "./images/" + turn + "Hover.png";
    }
    if (boardLoc[7] == "c") {
        cellImg8.src = "./images/" + turn + "Hover.png";
    }
    if (boardLoc[8] == "c") {
        cellImg9.src = "./images/" + turn + "Hover.png";
    }
}

function anotherGame() {
    wrapper.style.display = "block";
    setTimeout(function () {
        window.location.reload("Refresh")
    }, 3000)
}