import { DisplayMode, Engine, Physics, Vector } from "excalibur";
import { Player } from "./player_controller";

// Force parcel to reload page when saving .ts file
if (module.hot) {
    module.hot.dispose(() => {
        window.location.reload();
        throw 'whatever'
    })
}

class Game extends Engine {
    constructor() {
        super({
            width: 800,
            height: 600,
            displayMode: DisplayMode.FitScreen
        });

        // Create player
        const player = new Player();
        this.add(player);
    }
}

// Start game
export const game = new Game();
game.start();

// Setup physics
Physics.useArcadePhysics();
Physics.acc = Vector.Down.scale(9.807);
