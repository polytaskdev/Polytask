const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

const size = 580;
const bsize = 29;

var score;

console.log("There are " + rows + " rows");
console.log("There are " + columns + " columns");

let snake = [];

snake[0] ={
    x:Math.floor((bsize/2)) * scale, 
    y:Math.floor((bsize/2)) * scale
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


let dir; document.addEventListener("keydown", direction); 
//Seting the direction being pressed by arrow keys
function direction(event)
{
    if(event.keyCode == 37)
        dir = "LEFT";
    if(event.keyCode == 38)
        dir = "UP";    
    if(event.keyCode == 39)
        dir = "RIGHT";    
    if(event.keyCode == 40)
        dir = "DOWN";    

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
        snake[0].x -= scale;

    if(dir == "RIGHT")
        snake[0].x += scale;

    if(dir == "UP")
        snake[0].y -= scale;

    if(dir == "DOWN")
        snake[0].y += scale;
 
    
    //Eating the food
    if(snake[0].x == food.x && snake[0].y == food.y){
        score +=1;
        console.log(score)
        fx = Math.floor(Math.random() * 28) + 1;
        fy = Math.floor(Math.random() * 28) + 1;

     }
    //Making the food
    ctx.fillStyle = "red";
    ctx.fillRect( food.x, food.y, scale, scale);

  

    

                   


    }


 



let game = setInterval(draw, 100);


