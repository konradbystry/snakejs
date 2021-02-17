import Snake from "./snake.js"

const game_board = document.querySelector("#game_canvas");

let ctx = game_board.getContext("2d");

function clear_canvas() {
    ctx.clearRect(0, 0, game_board.width, game_board.height);
}

const snake=new Snake();
let snake_body = snake.snake_body;

snake.draw_snake(snake_body);

window.addEventListener("keydown", (event)=>{
    event.preventDefault();
    
    if(event.key == "ArrowLeft"){
        snake.direction_x=-20;
        snake.direction_y=0;
    }
    if(event.key == "ArrowRight"){
        snake.direction_x=20;
        snake.direction_y=0;
    }  
    if(event.key == "ArrowUp"){
        snake.direction_x=0;
        snake.direction_y=-20;
    }  
    if(event.key == "ArrowDown"){
        snake.direction_x=0;
        snake.direction_y=20;
    }          
})

setInterval(function onTick(){console.log(snake.direction_x, snake.direction_y);clear_canvas(); snake.move(snake.direction_x, snake.direction_y); snake.draw_snake(snake_body)}, 100);

    









