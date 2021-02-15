class Snake{
    
    constructor(){
        this.snake=[{x : 280, y : 300}];   
    }
    
    draw_snake_part(snake_part) {
        ctx.fillRect(snake_part.x, snake_part.y, 20, 20);
    }

    draw_snake(snake_part) {
        snake.forEach(draw_snake_part) ;
    }

    score_point(snake) {
        this.snake.push()  //todo
    }
}

