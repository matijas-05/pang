import * as ex from "excalibur"
import Tags from "../utils/tags";

export class Ball extends ex.Actor {
	constructor() {
		super({
			name: "Ball",
			radius: 25,
			color: ex.Color.Red,
			collisionType: ex.CollisionType.Active,
			pos: ex.vec(100, 100)
		});
	}
	onInitialize(_engine: ex.Engine): void {
		this.addTag(Tags.Destructible);
		// this.body.bounciness = 1;
	}

	update(_engine: ex.Engine, _delta: number): void {
		this.on("collisionstart", e => {
			// this.body.vel = ex.Vector.Zero;
			this.body.applyImpulse(this.pos, e.contact.normal.scale(-10));
		});
	}
}