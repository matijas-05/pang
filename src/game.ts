import { DisplayMode, Engine } from "excalibur";
import { Player } from "./player_controller";

// Start game
class Game extends Engine{
   constructor() {
        super({
            displayMode: DisplayMode.FillScreen
        });
        
        const player = new Player();
        this.add(player);
   }
}

export const game = new Game();
game.start();
