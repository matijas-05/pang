import * as ex from "excalibur";
import { DevTool } from "@excaliburjs/dev-tools"
import Player from "./player/playerController";
import Ground from "./environment/ground";
import Ball from "./environment/ball";
import { LeftScreenEdge, RightScreenEdge, TopScreenEdge } from "./environment/screenEdges";
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
export const ball = new Ball(50);
export const screenEdges = [new RightScreenEdge(), new LeftScreenEdge(), new TopScreenEdge()]

game.add(player);
game.add(ground);
game.add(ball);
for (const edge of screenEdges)
	game.add(edge);

// Setup physics
ex.Physics.useArcadePhysics();
ex.Physics.acc = ex.vec(0, 300);