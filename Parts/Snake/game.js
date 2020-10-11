const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const size = 580;
const bsize = 29;
var score = 0;

console.log("There are " + rows + " rows");
console.log("There are " + columns + " columns");

let snake = [];

snake[0] ={
    x:Math.floor((bsize/2)) * scale,
    y:Math.floor((bsize/2)) * scale
};


let dir; document.addEventListener("keydown", direction);

//Seting the direction being pressed by arrow keys
function direction(event)
{
    if(event.keyCode == 37 && dir != "RIGHT")
        dir = "LEFT";
    if(event.keyCode == 38 && dir != "DOWN")
        dir = "UP";
    if(event.keyCode == 39 && dir != "LEFT")
        dir = "RIGHT";
    if(event.keyCode == 40 && dir != "UP")
        dir = "DOWN";

}
//choosing the placement of the food

var fx;
var fy;
fx = Math.floor(Math.random() * 28) + 1;
fy = Math.floor(Math.random() * 28) + 1;


var food;
food = {
    x :(bsize- fx) * scale,
    y :(bsize- fy) * scale
}




//drawing function
function draw(){
    //drawing the gray square
    ctx.fillStyle = "#828282";
    ctx.fillRect(20, 20, canvas.height-40, canvas.width-40);
    //drawing the snake and tail
    for(let i = 0; i < snake.length; i++)
    {
        ctx.fillStyle = "#4dff36";
        ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
    }

    //move snake head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(dir == "LEFT")
        snakeX -= scale;

    if(dir == "RIGHT")
        snakeX += scale;

    if(dir == "UP")
        snakeY -= scale;

    if(dir == "DOWN")
        snakeY += scale;

     //Eating the food
    if(snakeX == food.x && snakeY == food.y){

        fx = Math.floor(Math.random() * 28) + 1;
        fy = Math.floor(Math.random() * 28) + 1;
        food.x = (bsize-fx)*scale;
        food.y = (bsize-fy)*scale;
        score +=1;
        console.log(score);

    }
    else {
        snake.pop();
    }

    let newHead = {
        x : snakeX,
        y : snakeY
    };

       //Collision detection
    function collision(head, array){
        for(let i = 0; i<array; i++){
          if(head.x == array[i].x && head.y == array[i].y ){
            return true;
          };
        };

        return false;
        };
    if(snakeX < scale || snakeY < scale ||
        snakeX > ((bsize - 1) * scale) || snakeY > ((bsize - 1) * scale) ||
        collision(newHead, snake))
        {
            clearInterval(game);
        };
    

    snake.unshift(newHead);
    //Making the food
    ctx.fillStyle = "red";
    ctx.fillRect( food.x, food.y, scale, scale);

    //Score
    
    ctx.fillStyle = "white";
    ctx.font = "24px Avenir";
    ctx.clearRect(0, 0, 50, 25);
    ctx.fillText(score, scale, 0.8 * scale);
   
    
}


let game = setInterval(draw, 100);
