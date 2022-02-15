import * as ex from "excalibur";
import { DevTool } from "@excaliburjs/dev-tools"
import { Player } from "./player_controller";
import { Ground } from "./environment/ground";
import "regenerator-runtime/runtime" // needed to force parcel to understand async/await inside excalibur

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
	onInitialize(_engine: ex.Engine): void {
		// Add actors
		_engine.add(new Player());
		_engine.add(new Ground());
	}
}

// Start game
export const game = new Game();
const devTool = new DevTool(game);
game.start();

// Setup physics
ex.Physics.useArcadePhysics();
ex.Physics.acc = ex.vec(0, 9.807);