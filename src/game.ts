import * as ex from "excalibur";
import { DevTool } from "@excaliburjs/dev-tools"
import { Player } from "./player/player_controller";
import { Ground } from "./environment/ground";
import "regenerator-runtime/runtime" // Force parcel to understand async/await inside excalibur

// Force parcel to reload page when saving .ts file
if (module.hot) {
	module.hot.dispose(() => {
		window.location.reload();
	})
}

class Game extends ex.Engine {
	constructor() {
		super({
			width: 800,
			height: 600,
			displayMode: ex.DisplayMode.FitScreen
		});
	}
}

// Start game
export const game = new Game();
const devTool = new DevTool(game);
game.start();

// Add actors
export const player = new Player();
export const ground = new Ground();
game.add(player);
game.add(ground);

// Setup physics
ex.Physics.useArcadePhysics();
ex.Physics.acc = ex.vec(0, 9.807);