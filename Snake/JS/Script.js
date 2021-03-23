let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = 'green';
    context.fillRect(0, 0, 16 * box, 16 * box);
    context.strokeRect(15, 15, 15 * box, 15 * box);
}

function createSnake(){
    for(i = 0; i < snake.length; ++i){
        context.fillStyle='brown';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
createSnake();