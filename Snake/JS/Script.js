let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32, jogo;
let direction = "right";

let snake = []; //head cobra
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let Apple = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function createBackGround(){
    context.fillStyle = 'green';

    // x, y, widht, height 
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake(){
    for(i = 0; i < snake.length; ++i){
        context.fillStyle='brown';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "lightred";
    context.fillRect(Apple.x, Apple.y, box, box);
}

document.addEventListener('keydown', Update);

function Update(event){

    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
    
}

function startGame(){
    
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game Over!");
        }
    }

    createBackGround();
    createSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX == Apple.x && snakeY == Apple.y){

        Apple.x = Math.floor(Math.random() * 15 + 1) * box;
        Apple.y = Math.floor(Math.random() * 15 + 1) * box;

    }
    else{
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

jogo = setInterval(startGame, 100); //100ms