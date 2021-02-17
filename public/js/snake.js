export default class Snake{
    
    constructor(){
        this.snake = [{x : 280, y : 300}]; 
        this.ctx = document.querySelector("#game_canvas").getContext("2d");  
    }
    
    /*
    draw_snake_part(snake_part){
       
        this.ctx.fillRect(snake_part.x, snake_part.y, 20, 20);
    }
   */
    
   draw_snake(snake_part){
        this.snake.forEach((snake_part) => {
            this.ctx.fillRect(snake_part.x, snake_part.y, 20, 20);
        });
    }

}

