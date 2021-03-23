let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32, jogo;
let direction = "right";

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function createBackGround(){
    context.fillStyle = 'green';

    // x, y, widht, height 
    context.fillRect(0, 0, 16 * box, 16 * box);
    context.strokeRect(15, 15, 15 * box, 15 * box);
}

function createSnake(){
    for(i = 0; i < snake.length; ++i){
        context.fillStyle='brown';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function startGame(){
    
    createBackGround();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

jogo = setInterval(startGame, 500); //100ms