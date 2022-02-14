import { Actor, CollisionType, Color, Engine } from "excalibur";
import { game } from "./game";

export class Player extends Actor {
    constructor() {
        super({
            x: 0,
            y: 0,
            width: 75,
            height: 200,
            color: Color.Red,
            collisionType: CollisionType.Active
        })
    }

    onInitialize(_engine: Engine): void {
        this.pos.y = game.drawHeight;
    }
    update(engine: Engine, delta: number): void {

    }
}
