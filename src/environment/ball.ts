import * as ex from "excalibur"
import Tags from "../utils/tags";

export class Ball extends ex.Actor {
    constructor() {
        super({
            name: "Ball",
            radius: 25,
            color: ex.Color.Red,
            collisionType: ex.CollisionType.Fixed,
            pos: ex.vec(100, 100)
        });
    }
    onInitialize(_engine: ex.Engine): void {
        this.addTag(Tags.Destructible);
    }
}