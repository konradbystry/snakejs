export default class Food {
    constructor() {
        this.ctx = document.querySelector("#game_canvas").getContext("2d");
        this.food_cords;
        this.get_random_int = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        };
        this.get_random_20 = function () {
            return this.get_random_int(0, 30) * 20;
        };
    }

    set_food_cords() {
        this.food_cords = { x: this.get_random_20(), y: this.get_random_20() };
    }

    get_food_cords_x() {
        return this.food_cords.x;
    }

    get_food_cords_y() {
        return this.food_cords.y;
    }

    draw_food() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.get_food_cords_x(), this.get_food_cords_y(), 20, 20);
        this.ctx.fillStyle = "black";
    }
}