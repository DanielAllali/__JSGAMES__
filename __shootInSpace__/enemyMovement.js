let bulletXY = playerXY;
let bulletXYNumber = [playerX, playerY];
let bulletXMinusEnemyX;
let enemyXMinusBulletX;
console.log(bulletXYNumber);
enemyXYNumber[0] = 600;
function randomX() {
    let enemyRandomX = Math.floor(Math.random() * (1200 - 450) + 450);
    if (enemyRandomX + 400 > enemyXYNumber[0] || enemyRandomX - 400 < enemyXYNumber[0]) {
        enemyMove();
    }
    else {
        randomX();
        console.log(enemyRandomX);
        console.log(enemyXYNumber[0]);
    }
    function enemyMove() {
        timesRunEnemy = enemyXYNumber[0];
        let enemyMoveInterval = setInterval(enemyMove2, 1)
        function enemyMove2() {
            if (timesRunEnemy > enemyRandomX) {
                if (timesRunEnemy > enemyRandomX) {
                    enemyXY[0] = '' + timesRunEnemy + 'px';
                    enemy.style.left = enemyXY[0];
                    enemyXYNumber[0] = enemyRandomX;
                    bulletXMinusEnemyX = bulletXYNumber[0] - enemyXYNumber[0];
                    enemyXMinusBulletX = enemyXYNumber[0] - bulletXYNumber[0];
                    if (bulletXYNumber[0] > enemyXYNumber[0] && bulletXMinusEnemyX < 20 || bulletXYNumber[0] < enemyXYNumber[0] && enemyXMinusBulletX < 20) {
                        console.log("win");
                        clearInterval(gameEnemyMove);
                    }
                    else {
                        console.log("missed");
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
                    enemyXYNumber[0] = enemyRandomX;
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