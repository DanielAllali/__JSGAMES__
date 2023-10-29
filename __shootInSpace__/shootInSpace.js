const game = document.getElementById("game");
let start = document.getElementById("start");
document.addEventListener("keydown", function (spacePressed) {
    if (spacePressed.keyCode == 32) {
        start.style.display = "none";
        game.style.backgroundImage = "url(images/background.jpg)";
        enemy.style.display = "block";
    } player.style.display = "block";
})

/* for now */
/* start.style.display = "none";
game.style.backgroundImage = "url(images/background.jpg)"; */
/* for now */

/* player */
const player = document.getElementById("player");
let playerXY = ["950px", "590px"]
let playerX = 950;

/* enemy */
let enemy = document.createElement("img");
game.appendChild(enemy);
enemy.src = "./images/enemy.png";
enemy.style.width = "70px";
enemy.style.height = "70px";
enemy.style.position = "absolute";
enemyXY = ["950px", "50px"]
enemy.style.left = enemyXY[0];
enemy.style.top = enemyXY[1];
enemy.style.transition = "left 0.1s";
enemy.style.display = "none";


/* player Movement */
document.addEventListener("keydown", (spaceShipMovement) => {
    /* move left */
    if (spaceShipMovement.keyCode == 65) {
        if (playerX > 450) {
            playerX = playerX - 40;
            playerXY[0] = '' + playerX + 'px'
            player.style.left = playerXY[0];
        }
        else {
            playerX = 1400;
            playerXY[0] = '' + playerX + 'px'
            player.style.left = playerXY[0];
        }
    }
    /* move right */
    if (spaceShipMovement.keyCode == 68) {
        if (playerX < 1400) {
            playerX = playerX + 40;
            playerXY[0] = '' + playerX + 'px'
            player.style.left = playerXY[0];
        }
        else {
            playerX = 450;
            playerXY[0] = '' + playerX + 'px'
            player.style.left = playerXY[0];
        }
    }
})






