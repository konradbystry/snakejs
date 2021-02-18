export default class Snake{
    
    constructor(){
        this.snake_body = [{x : 280, y : 300}, {x : 300, y : 300}, {x : 320, y :300}]; 
        this.ctx = document.querySelector("#game_canvas").getContext("2d");  
        this.move_directions = [-20, 20];
        this.direction_x=-20;
        this.direction_y=0;
        this.move_right={x : 20, y : 0};
        this.move_left={x :-20, y : 0};
        this.move_up={x : 0, y : -20};
        this.move_down={x : 0, y : 20};
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

    set_direction_x(direction_x){
        this.direction_x=direction_x
    }

    get_direction_x(){
        return this.direction_x;
    }

    set_direction_y(direction_y){
        this.direction_y=direction_y
    }

    get_direction_y(){
        return this.direction_y;
    }

    move(){
        let snake_head = this.snake_body[0]; 
        this.snake_body.pop();
        this.snake_body.unshift({ x : snake_head.x + this.get_direction_x() , y: snake_head.y + this.get_direction_y() })
    }


}

