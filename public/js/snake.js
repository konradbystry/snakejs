export default class Snake{
    
    constructor(){
        this.snake_body = [{x : 280, y : 300}, {x : 300, y : 300}, {x : 320, y :300}]; 
        this.ctx = document.querySelector("#game_canvas").getContext("2d");  
    }
    
    /*
    draw_snake_part(snake_part){
       
        this.ctx.fillRect(snake_part.x, snake_part.y, 20, 20);
    }
   */
    
   draw_snake(snake_part){
        this.snake_body.forEach((snake_part) => {
            this.ctx.fillRect(snake_part.x, snake_part.y, 20, 20);
        });
    }

    eat(snake_part){
       
        if(this.snake_body[0].x);
    }

    move(direction_x, direction_y){
        let snake_head = this.snake_body[0]; 
        console.log(snake_head);
        this.snake_body.pop();
        this.snake_body.unshift({ x : snake_head.x + direction_x , y: snake_head.y + direction_y })
    }

}

