import * as ex from "excalibur";
import { game } from "../game";

export class Ground extends ex.Actor{
    constructor(){
        super({
            width: game.canvasWidth,
            height: 50,
            collisionType: ex.CollisionType.Fixed,
            color: ex.Color.Green
        })
    }
    onInitialize(_engine: ex.Engine): void {
        this.transform.pos = new ex.Vector(_engine.halfCanvasWidth, _engine.canvasHeight - this.height/2);
        this.width
    }
}