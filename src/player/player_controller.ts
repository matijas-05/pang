import * as ex from "excalibur";
import { game } from "../game";
import { Anchor } from "./anchor";

export class Player extends ex.Actor {
	get movementSpeed() { return 50 };
	weapon = new Anchor();

	constructor() {
		super({
			name: "Player",
			width: 30,
			height: 100,
			color: ex.Color.Red,
			collisionType: ex.CollisionType.Fixed,
		});
	}

	onInitialize(_engine: ex.Engine): void {
		this.transform.pos = ex.vec(_engine.halfCanvasWidth, _engine.canvasHeight - this.height);
		_engine.add(this.weapon);
	}
	update(engine: ex.Engine, delta: number): void {
		// Needed for 'actions' to work
		super.update(engine, delta);

		this.movement(engine, delta);
		this.shooting(engine);
	}

	movement(engine: ex.Engine, delta: number): void {
		this.actions.clearActions();
		let movement = 0;

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
	shooting(engine: ex.Engine): void {
		if (engine.input.keyboard.wasPressed(ex.Input.Keys.W)) {
			this.weapon.shoot();
		}
	}
}