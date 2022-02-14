import { Actor, CollisionType, Color, Vector } from "excalibur";

export class Player extends Actor{
    constructor(){
        super({
            x: 0,
            y: 0,
            width: 75,
            height: 200,
            color: Color.Red,
            collisionType: CollisionType.Passive
        })
    }
}

console.log("player");