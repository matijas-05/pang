import * as ex from "excalibur"
import Tags from "../utils/tags";

export default class Ball extends ex.Actor {
	constructor(radius: number) {
		super({
			name: "Ball",
			radius: radius,
			color: ex.Color.Red,
			collisionType: ex.CollisionType.Active,
			pos: ex.vec(radius, 100)
		});
	}
	onInitialize(_engine: ex.Engine): void {
		this.addTag(Tags.Destructible);
		this.body.applyImpulse(this.pos, ex.vec(1, 0).scale(500))

		// Override default bouncing behaviour
		this.body.bounciness = 0;
		this.body.friction = 0;
		this.body.limitDegreeOfFreedom = [ex.DegreeOfFreedom.Rotation];
		this.on("collisionstart", col => {
			if (col.other.hasTag(Tags.NoBounce))
				return;

			// Game over if ball touches player
			if (col.other.hasTag(Tags.Player)) {
				window.location.reload();
			}

			const normal = col.contact.normal;
			const newVel = ex.vec(this.oldVel.x - 2 * Math.round(normal.x) * Math.abs(this.oldVel.x), this.oldVel.y - 2 * Math.round(normal.y) * Math.abs(this.oldVel.y));
			this.vel = newVel;
			// console.log(`normal: ${normal}, oldVel: ${this.oldVel}, newVel: ${newVel}`);
		});
	}
}