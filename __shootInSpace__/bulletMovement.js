noBulletOnScreen = true;
if (noBulletOnScreen == true) {
    document.addEventListener("keydown", (bulletMov) => {
        if (bulletMov.keyCode == 32 && noBulletOnScreen == true) {
            noBulletOnScreen = false;
            bulletXYNumber = [playerX, playerY];
            let bullet = document.createElement("div");
            bullet.style.width = "60px";
            bullet.style.height = "20px";
            bullet.style.borderRight = "4px solid white";
            bullet.style.borderLeft = "4px solid white";
            bullet.style.position = "absolute";
            game.appendChild(bullet);
            let bulletXY = playerXY;
            bullet.style.left = bulletXY[0];
            bullet.style.top = bulletXY[1];
            console.log(bullet.getBoundingClientRect());
            let bulletMove = setInterval(bulletMovement, 1)
            let timesRun = 590;
            function bulletMovement() {
                if (timesRun > 0) {
                    bulletXY[1] = "" + timesRun + "px";
                    bullet.style.top = bulletXY[1];
                    timesRun = timesRun - 2;
                }
                else {
                    bullet.style.display = "none";
                    clearInterval(bulletMove);
                    noBulletOnScreen = true;
                }
            }
        }
    })
}
