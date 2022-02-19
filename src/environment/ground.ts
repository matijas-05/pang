import * as ex from "excalibur";
import { game } from "../game";

export class Ground extends ex.Actor {
    constructor() {
        super({
            name: "Ground",
            width: game.canvasWidth,
            height: 50,
            collisionType: ex.CollisionType.Fixed,
            color: ex.Color.Green
        });
    }
    onInitialize(_engine: ex.Engine): void {
        this.transform.pos = ex.vec(_engine.halfCanvasWidth, game.canvasHeight - this.height / 2);
    }
}