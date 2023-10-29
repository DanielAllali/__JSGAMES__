let bulletXY = playerXY;
let enemyX = 600;
function randomX() {
    let enemyRandomX = Math.floor(Math.random() * (1200 - 450) + 450);
    if (enemyRandomX + 400 > enemyX || enemyRandomX - 400 < enemyX) {
        enemyMove();
    }
    else {
        randomX();
        console.log(enemyRandomX);
        console.log(enemyX);
    }
    function enemyMove() {
        timesRunEnemy = enemyX;
        let enemyMoveInterval = setInterval(enemyMove2, 1)
        function enemyMove2() {
            if (timesRunEnemy > enemyRandomX) {
                if (timesRunEnemy > enemyRandomX) {
                    enemyXY[0] = '' + timesRunEnemy + 'px';
                    enemy.style.left = enemyXY[0];
                    enemyX = enemyRandomX;
                    if (enemyXY[0] == bulletXY[0] && enemyXY[1] == bulletXY[1]) {
                        console.log("win");
                        clearInterval(gameEnemyMove);
                    }
                }
                else {
                    clearInterval(enemyMoveInterval);
                }
            }
            else {
                if (timesRunEnemy < enemyRandomX) {
                    enemyXY[0] = '' + timesRunEnemy + 'px';
                    enemy.style.left = enemyXY[0];
                    enemyX = enemyRandomX;
                    if (enemyXY[0] == bulletXY[0] && enemyXY[1] == bulletXY[1]) {
                        console.log("win");
                        clearInterval(gameEnemyMove);
                    }
                }
                else {
                    clearInterval(enemyMoveInterval);
                }
            }
        }
    }
}
let gameEnemyMove = setInterval(randomX, 500);