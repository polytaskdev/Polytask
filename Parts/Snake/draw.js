const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

const size = 580;


console.log("There are " + rows + " rows");
console.log("There are " + columns + " columns");

let snake = [];

snake[0] ={
    x: (size/2),
    y: (size/2)
}

//drawing function
function draw(){
    //drawing the gray square
    ctx.fillStyle = "#828282";
    ctx.fillRect(20, 20, canvas.height-40, canvas.width-40);
    //drawing the snake and tail
    ctx.fillStyle = "#4dff36";
    ctx.fillRect(snake[0].x, snake[0].y, scale, scale);
    //move snake head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if(dir == "LEFT")
        snake[0] -= scale;

    if(dir == "RIGHT")
        snake[0] += scale;

    if(dir == "UP")
        snake[0] -= scale;

    if(dir == "DOWN")
        snake[0] += scale;



} 

let dir; document.addEventListener("keydown", direction); 
//Seting the direction being pressed by arrow keys
function direction(event){
    if(event.keyCode == 37)
        dir = "LEFT";
    if(event.keyCode == 38)
        dir = "UP";    
    if(event.keyCode == 39)
        dir = "RIGHT";    
    if(event.keyCode == 40)
        dir = "DOWN";    

}


let game = setInterval(draw, 100);


