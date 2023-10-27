//////////////////////
//////////////////////
//start click
//start click
//start click
//////////////////////
//////////////////////

function startOnClick() {
    document.body.style.animation = "none";
    document.body.style.backgroundColor = "black";
    start.style.display = "none";
    Game()
}
//////////////////////
//////////////////////
//Game
//Game
//Game
//////////////////////
//////////////////////
function Game() {
    console.log("dasda");
    document.addEventListener("keydown", up)
    document.addEventListener("keydown", down)
    document.addEventListener("keydown", left)
    document.addEventListener("keydown", right)
    document.addEventListener("keydown", space)
    document.body.style.overflow = "hidden";
    let boxTop = 400;
    let boxLeft = 1000;
    let newBox;
    function up() {
        if (event.key === "w" || up.key === "W") {
            boxTop = boxTop - 20;
            newBox.style.top = boxTop + "px";
        }
    }
    function down() {
        if (event.key === "s" || up.key === "S") {
            boxTop = boxTop + 20;
            newBox.style.top = boxTop + "px";
        }
    }
    function left() {
        if (event.key === "a" || up.key === "A") {
            boxLeft = boxLeft - 20;
            newBox.style.left = boxLeft + "px";
        }
    }
    function right() {
        if (event.key === "d" || up.key === "D") {
            boxLeft = boxLeft + 20;
            newBox.style.left = boxLeft + "px";
        }
    }
    function space() {
        if (event.keyCode === 32) {
            let colors = ["red", "darkred", "pink", "purple", "magenta"];
            let randomIndex = Math.floor(Math.random() * colors.length);
            let randomColor = colors[randomIndex];
            boxTop = 400;
            boxLeft = 1000;
            newBox = document.createElement("div");
            newBox.style.width = "25px";
            newBox.style.height = "25px";
            newBox.style.backgroundColor = randomColor;
            newBox.style.border = "2px solid white";
            newBox.style.position = "absolute";
            newBox.style.top = "400px";
            newBox.style.left = "1000px";
            document.body.appendChild(newBox);
        }
    }
}