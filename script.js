const playground = document.getElementById("playground");
let eat = document.getElementById("food");
let span_score = document.querySelector(".score");
let score = 0;

class Item {
    shape;
    x;
    y;
    constructor(shape, x, y) {
        this.shape = shape;
        this.x = x;
        this.y = y;
        this.shape.style.left = x + "px";
        this.shape.style.top = y + "px";
    }
}

class Food extends Item {
    constructor(shape, x, y) {
        super(shape, x, y);
    }
}

class Player extends Item {
    constructor(shape, x, y) {
        super(shape, x, y);
    }
    moveTop() {
        this.y -= 35;
        this.shape.style.top = this.y + "px";
    }

    moveDown() {
        this.y += 35;
        this.shape.style.top = this.y + "px";
    }

    moveLeft() {
        this.x -= 35;
        this.shape.style.left = this.x + "px";
    }

    moveRight() {
        this.x += 35;
        this.shape.style.left = this.x + "px";
    }
}

function getRandom(end) {
    const value = Math.round(Math.random() * end);
    return value - (value % 35);
}

let player = new Player(
    document.getElementById("player"),
    getRandom(playground.clientWidth - 40),
    getRandom(playground.clientHeight - 40)
);
let food = new Food(
    document.getElementById("food"),
    getRandom(playground.clientWidth - 40),
    getRandom(playground.clientHeight - 40)
);

window.addEventListener("keydown", (event) => {
    if (player.y == food.y && player.x == food.x) {
        playground.removeChild(playground.children[1]);
        playground.appendChild(eat);
        food = new Food(
            document.getElementById("food"),
            getRandom(playground.clientWidth - 40),
            getRandom(playground.clientHeight - 40)
        );
        score++;
        span_score.innerHTML = `Score:  ${score}xp`;
    }

    switch (event.keyCode) {
        case 37:
            if (player.x != 0) {
                player.moveLeft();
            }
            break;
        case 38:
            if (player.y != 0) {
                player.moveTop();
            }
            break;
        case 39:
            if (player.x < playground.clientWidth - 40) {
                player.moveRight();
            }
            break;
        case 40:
            if (player.y < playground.clientHeight - 50) {
                player.moveDown();
            }
            break;
    }
});