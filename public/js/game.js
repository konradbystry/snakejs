import Snake from "./snake.js"
import Game_board from "./game_board.js"

const game_board = new Game_board();
const snake = new Snake();
let snake_body = snake.snake_body;

snake.draw_snake(snake_body);

window.addEventListener("keydown", (event)=>{
    event.preventDefault();
    
    if(event.key == "ArrowLeft"){
        snake.set_direction_x(snake.move_left.x);
        snake.set_direction_y(snake.move_left.y);
    }  
    if(event.key == "ArrowRight"){
        snake.set_direction_x(snake.move_right.x);
        snake.set_direction_y(snake.move_right.y);
    }  
    if(event.key == "ArrowUp"){
        snake.set_direction_x(snake.move_up.x);
        snake.set_direction_y(snake.move_up.y);
    }  
    if(event.key == "ArrowDown"){
        snake.set_direction_x(snake.move_down.x);
        snake.set_direction_y(snake.move_down.y);
    }          
})

setInterval(function onTick(){
    console.log(snake.direction_x, snake.direction_y); 
    game_board.clear_game_board(); 
    snake.move(); 
    snake.draw_snake(snake_body)}, 100);

    









