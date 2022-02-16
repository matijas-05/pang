import * as ex from "excalibur";
import { game, player, ground } from "../game";

export class Anchor extends ex.Actor {

	get speed() { return 400; }

	constructor() {
		super({
			name: "Anchor",
			width: 10,
			height: 100,
			color: ex.Color.Gray,
			visible: false,
			z: -1
		})
	}

	update(_engine: ex.Engine): void {
		if (this.actions.getQueue().getActions().length == 0) this.pos = player.pos;
		if (this.pos.y < this.height / 2) this.onCollision();
	}
	shoot() {
		this.graphics.visible = true;
		this.actions.moveTo(ex.vec(this.pos.x, -this.height), this.speed);
		this.on("collisionstart", () => this.onCollision());
	}
	onCollision() {
		this.graphics.visible = false;
		this.actions.clearActions();
	}
}