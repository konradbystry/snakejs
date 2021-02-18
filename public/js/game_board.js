export default class Game_board{

    constructor(){
        this.ctx = document.querySelector("#game_canvas").getContext("2d"); 
    }
    
    clear_game_board(){
        this.ctx.clearRect(0, 0, game_canvas.width, game_canvas.height);
    }

}