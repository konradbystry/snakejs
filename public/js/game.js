import Snake from "./snake.js"
import Game_board from "./game_board.js"
import Food from "./food.js"

const game_board = new Game_board();
const snake = new Snake();
const food = new Food();
let snake_body = snake.snake_body;

snake.draw_snake(snake_body);
food.set_food_cords();


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




function main(){
    setTimeout(function onTick(){         //change to requestAnmiationFrame (move() function needs to be updated)
        game_board.clear_game_board();
        food.draw_food();
        snake.move(); 
        snake.draw_snake(snake_body);
        if(!snake.crash_into_wall(snake_body) && !snake.crash_into_snake(snake_body)){
            main();
        };
        }, 100);
    }
    main();







/*
function main(){
    
    snake.move();
    snake.draw_snake();
    if(!snake.crash_into_wall(snake_body) || !snkae.crash_into_snake(snake_body)){
         window.requestAnimationFrame(main);
    }
   
}  

main();
*/








