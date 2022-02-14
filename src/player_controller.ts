import { Actor, Color } from "excalibur";
import { game } from "./game";

const player = new Actor({
    x: 0,
    y: 0,
    width: 20,
    height: 200,
    color: Color.Red
})
game.add(player);