import Snake from "./snake.js"

const game_board = document.querySelector("#game_canvas");

let ctx = game_board.getContext("2d");

function clear_canvas() {
    ctx.clearRect(0, 0, game_board.width, game_board.height);
}

const snake=new Snake();

let snake_body = snake.snake_body;

snake.draw_snake(snake_body);
console.log(snake_body)
snake.move(-20, 0); 

//snake.draw_snake(snake_body);
//setInterval(function onTick(){ console.log(snake_body); clearCanvas(); snake.move(-20, 0); snake.draw_snake(snake_body)}, 100);






