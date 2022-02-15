import * as ex from "excalibur";

export class Player extends ex.Actor {
	// Properties
	movementSpeed: number = 50
	
	// Methods
	constructor() {
		super({
			width: 30,
			height: 100,
			color: ex.Color.Red,
			collisionType: ex.CollisionType.Active
		})
	}

	onInitialize(_engine: ex.Engine): void {
		this.transform.pos = new ex.Vector(_engine.halfCanvasWidth, _engine.canvasHeight - this.height);
	}

	update(engine: ex.Engine, delta: number): void {
		// Needed for 'actions' to work
		super.update(engine, delta);

		// Movement
		this.actions.clearActions();
		let movement: number = 0;

		if(engine.input.keyboard.isHeld(ex.Input.Keys.D)) movement = 1;
		else if(engine.input.keyboard.isHeld(ex.Input.Keys.A)) movement = -1;

		this.actions.moveBy(movement, 0, this.movementSpeed * delta);
	}
}

