const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const size = 580;
const bsize = 29;
var score = 0;
var restart = false;
var highestScore = 0;

if (localStorage.getItem('highestScore')) { highestScore = localStorage.getItem('highestScore') }

let snake = [];

snake[0] = {
    x: Math.floor((bsize / 2)) * scale,
    y: Math.floor((bsize / 2)) * scale
};


let dir; document.addEventListener("keydown", direction);



//Seting the direction being pressed by arrow keys
function direction(event) {
    if (event.keyCode == 37 && dir != "RIGHT")
        dir = "LEFT";
    if (event.keyCode == 38 && dir != "DOWN")
        dir = "UP";
    if (event.keyCode == 39 && dir != "LEFT")
        dir = "RIGHT";
    if (event.keyCode == 40 && dir != "UP")
        dir = "DOWN";

}
//choosing the placement of the food

var fx;
var fy;
fx = Math.floor(Math.random() * 28) + 1;
fy = Math.floor(Math.random() * 28) + 1;


var food;
food = {
    x: (bsize - fx) * scale,
    y: (bsize - fy) * scale
}



//drawing function
function draw() {
    ctx.fillStyle = "#7B9C3D";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //drawing the gray square
    ctx.fillStyle = "#9EB565";
    roundRect(ctx, 20, 20, canvas.height - 40, canvas.width - 40, 5, true, false);
    //drawing the snake and tail
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "#EDD691";
        roundRect(ctx, snake[i].x, snake[i].y, scale, scale, 5, true, false);
    }

    //move snake head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (dir == "LEFT")
        snakeX -= scale;

    if (dir == "RIGHT")
        snakeX += scale;

    if (dir == "UP")
        snakeY -= scale;

    if (dir == "DOWN")
        snakeY += scale;

    //Eating the food
    if (snakeX == food.x && snakeY == food.y) {

        fx = Math.floor(Math.random() * 28) + 1;
        fy = Math.floor(Math.random() * 28) + 1;
        food.x = (bsize - fx) * scale;
        food.y = (bsize - fy) * scale;
        score += 1;
        if (score > highestScore) {
            highestScore = score;
        }
    }
    else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };


    //Making the food
    ctx.fillStyle = "#DF4A1B";
    roundRect(ctx, food.x, food.y, scale, scale, 5, true, false);

    //Score
    ctx.fillStyle = "white";
    ctx.font = "18px sans-serif";
    ctx.textAlign = "left"
    ctx.fillText("score: " + score, scale, 0.8 * scale);
    ctx.textAlign = "right"
    ctx.fillText("High Score: " + highestScore, scale * 29, 0.8 * scale);




    //Restart screen
    function restart() {
        //window.location.reload()
        ctx.fillStyle = "#7B9C3D";
        ctx.fillRect(0, 0, canvas.height, canvas.width);
        ctx.fillStyle = "white";
        ctx.font = "40px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("\tYou Failed", 300, 150);
        ctx.fillText(" Score : " + score, 300, 200);
        ctx.fillText(" Press any key to restart", 300, 350);
        localStorage.setItem('highestScore', highestScore);
        ctx.fillText(" highestScore: " + localStorage.getItem("High Score"), 300, 250);
        document.addEventListener('keyup', () => {
            window.location.reload();
        })

    };


    //Collision detection
    function collision(head, array) {
        for (let i = 0; i < array.length; i++) {
            if (head.x == array[i].x && head.y == array[i].y) {
                return true;

            };
        };

        return false;
    };
    if (snakeX < scale || snakeY < scale ||
        snakeX > ((bsize - 1) * scale) || snakeY > ((bsize - 1) * scale) ||
        collision(newHead, snake)) {
        clearInterval(game);
        //window.location.reload();
        setTimeout(restart(), 2000)
    };


    snake.unshift(newHead);
}


let game = setInterval(draw, 100);






//function for rounded rects(stackoverflow)
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }

}



