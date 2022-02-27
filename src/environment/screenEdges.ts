import * as ex from "excalibur";
import { game } from "../game";

export class TopScreenEdge extends ex.Actor {
	constructor() {
		super({
			name: "Top edge",
			pos: ex.vec(game.halfCanvasWidth, 0),
			width: game.canvasWidth,
			height: 1
		})
	}
}
export class RightScreenEdge extends ex.Actor {
	constructor() {
		super({
			name: "Right edge",
			pos: ex.vec(game.canvasWidth, game.halfCanvasHeight),
			width: 1,
			height: game.canvasHeight,
		})
	}
}
export class LeftScreenEdge extends ex.Actor {
	constructor() {
		super({
			name: "Left edge",
			pos: ex.vec(0, game.halfCanvasHeight),
			width: 1,
			height: game.canvasHeight
		})
	}
}