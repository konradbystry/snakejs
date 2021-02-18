import Snake from "./snake.js"
import Game_board from "./game_board.js"

const game_board = new Game_board();
const snake = new Snake();
let snake_body = snake.snake_body;

snake.draw_snake(snake_body);

window.addEventListener("keydown", (event)=>{
    event.preventDefault();
    
    if(snake.direction != "right" && event.key == "ArrowLeft"){
        snake.set_direction_left();
    }  
    if(snake.direction != "left" && event.key == "ArrowRight"){
        snake.set_direction_right();
    }  
    if(snake.direction != "down" && event.key == "ArrowUp"){
        snake.set_direction_up();
    }  
    if(snake.direction != "up" && event.key == "ArrowDown"){
        snake.set_direction_down();
    }          
})

setInterval(function onTick(){
    console.log(snake.direction_x, snake.direction_y); 
    game_board.clear_game_board(); 
    snake.move(); 
    snake.draw_snake(snake_body)}, 100);

    









