import * as ex from "excalibur"
import Tags from "../utils/tags";

export default class Ball extends ex.Actor {
	bounceForce = 5000;

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
		
		// Override default bouncing behaviour
		this.body.bounciness = 0;
		this.on("collisionstart", col => {
			this.body.applyImpulse(this.pos, col.contact.normal.scale(-this.bounceForce));
		});
	}
}