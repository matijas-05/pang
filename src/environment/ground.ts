import * as ex from "excalibur";
import { vec } from "excalibur";
import { vector } from "excalibur/build/dist/Util/DrawUtil";
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
        this.transform.pos = vec(_engine.halfCanvasWidth, _engine.canvasHeight - this.height / 2);
    }
}