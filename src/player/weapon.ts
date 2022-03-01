import * as ex from "excalibur";
import Tags from "../utils/tags";
import { player } from "../game";

export class Anchor extends ex.Actor {

	private get speed() { return 10; }

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

	onInitialize(_engine: ex.Engine): void {
		this.addTag(Tags.NoBounce);
	}
	update(_engine: ex.Engine): void {
		if (!this.actions.getQueue().hasNext()) this.pos = player.pos;
		if (this.pos.y < this.height / 2) this.reset();		// Also reset when reached top edge of the screen
	}
	shoot() {
		this.graphics.visible = true;

		// Stretch anchor vertically until it collides
		let newScale = 0;
		this.actions.repeatForever(ctx => {
			ctx.scaleTo(ex.vec(1, ++newScale), ex.vec(1, this.speed));
		})

		// Handle collision
		this.on("collisionstart", (col) => {
			if (col.other.hasTag(Tags.Destructible))
				col.other.kill();

			if (!col.other.hasTag(Tags.Player))
				this.reset();
		});
	}

	private reset() {
		this.graphics.visible = false;
		this.scale = ex.Vector.One;
		this.actions.clearActions();
	}
}