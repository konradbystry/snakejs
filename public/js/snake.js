export default class Snake{
    
    constructor(){
        this.snake_body = [{x : 280, y : 300}, {x : 300, y : 300}, {x : 320, y :300}, {x : 340, y :300}, {x : 360, y :300},, {x : 380, y :300}]; 
        this.ctx = document.querySelector("#game_canvas").getContext("2d");  
        this.move_directions = [-20, 20];
        this.direction_x = -20;
        this.direction_y = 0;
        this.move_right = {x : 20, y : 0};
        this.move_left = {x :-20, y : 0};
        this.move_up = {x : 0, y : -20};
        this.move_down = {x : 0, y : 20};
        this.direction = "left";
        this.snake_head = this.snake_body[0];
    }
    
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

    set_direction_left(){
        this.direction = "left";
        this.set_direction_x(this.move_left.x);
        this.set_direction_y(this.move_left.y);
    }

    set_direction_right(){
        this.direction = "right";
        this.set_direction_x(this.move_right.x);
        this.set_direction_y(this.move_right.y);
    }

    set_direction_up(){
        this.direction = "up";
        this.set_direction_x(this.move_up.x);
        this.set_direction_y(this.move_up.y);
    }

    set_direction_down(){
        this.direction = "down";
        this.set_direction_x(this.move_down.x);
        this.set_direction_y(this.move_down.y);
    }

    move(){
        let snake_head = this.snake_body[0]; 
        this.snake_body.pop();
        this.snake_body.unshift({ x : snake_head.x + this.get_direction_x() , y: snake_head.y + this.get_direction_y() })
    }

    stop(){
        this.set_direction_x(0);
        this.set_direction_y(0);
    }
    
    crash(snake_body){
        
        for ( var i = 1; i < snake_body.length; i++ ){
            if(snake_body[0].x > 580 || snake_body[0].y > 580 || snake_body[0].x < 0 || snake_body[0].y < 0){
                return true;
            }else return false;
        }
    }




}

