document.addEventListener("keydown", (bulletMov) => {
    /* shoot */
    if (bulletMov.keyCode == 32) {
        let bullet = document.createElement("div");
        bullet.style.width = "4px";
        bullet.style.height = "20px";
        bullet.style.backgroundColor = "white";
        bullet.style.position = "absolute";
        game.appendChild(bullet);
        let bulletXY = playerXY;
        bullet.style.left = bulletXY[0];
        bullet.style.top = bulletXY[1];
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
            }
        }
    }
})
