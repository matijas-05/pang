import * as ex from "excalibur";
import { game } from "./game";

export class Player extends ex.Actor {
	movementSpeed: number = 50;

	constructor() {
		super({
			name: "Player",
			width: 30,
			height: 100,
			color: ex.Color.Red,
			collisionType: ex.CollisionType.Fixed
		});
	}

	onInitialize(_engine: ex.Engine): void {
		this.transform.pos = ex.vec(_engine.halfCanvasWidth, _engine.canvasHeight - this.height);
	}

	update(engine: ex.Engine, delta: number): void {
		// Needed for 'actions' to work
		super.update(engine, delta);

		// Reset movement
		this.actions.clearActions();
		let movement: number = 0;

		// Prevent player from leaving the screen
		if (engine.input.keyboard.isHeld(ex.Input.Keys.D)
			&& this.pos.x < game.canvasWidth - this.width / 2) {
			movement = 1;
		}
		else if (engine.input.keyboard.isHeld(ex.Input.Keys.A)
			&& this.pos.x > this.width / 2) {
			movement = -1;
		}

		this.actions.moveBy(movement, 0, this.movementSpeed * delta);
	}
}

