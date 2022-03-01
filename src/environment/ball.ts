import * as ex from "excalibur"
import { CircleCollider, RadiusAroundActorStrategy } from "excalibur";
import { game } from "../game";
import Tags from "../utils/tags";

export default class Ball extends ex.Actor {
	private initialVelocity: ex.Vector;
	private childIndex: number;

	constructor(initialPos: ex.Vector = ex.vec(0, 0), initialVelocity: ex.Vector, radius: number, childIndex: number) {
		super({
			name: `Ball (childIndex: ${childIndex})`,
			radius: radius,
			color: ex.Color.Red,
			collisionType: ex.CollisionType.Active,
			pos: initialPos
		});
		this.initialVelocity = initialVelocity;
		this.childIndex = childIndex;
	}
	onInitialize(_engine: ex.Engine): void {
		console.log(game.currentScene.actors)

		this.addTag(Tags.Destructible);
		this.body.applyImpulse(this.pos, this.initialVelocity)

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

	kill() {
		// TODO: Fix balls dividing into increasingly bigger numbers with childIndex >= 2
		if (this.childIndex === 1) {
			super.kill();
			return;
		}

		const radius = (this.collider.get() as CircleCollider).radius;
		game.add(new Ball(
			ex.vec(this.pos.x - radius / 2, this.pos.y),
			this.initialVelocity.scale(-1 / (this.childIndex + 1)),
			radius / 2,
			this.childIndex + 1,
		));
		game.add(new Ball(
			ex.vec(this.pos.x + radius / 2, this.pos.y),
			this.initialVelocity.scale(1 / (this.childIndex + 1)),
			radius / 2,
			this.childIndex + 1,
		));

		console.log(`added child ${this.childIndex + 1}`);
		super.kill();
	}
}