import {Camera} from "./components/com_camera.js";
import {Collide} from "./components/com_collide.js";
import {ControlMove} from "./components/com_control_move.js";
import {Light} from "./components/com_light.js";
import {Move} from "./components/com_move.js";
import {Render} from "./components/com_render1.js";
import {Transform} from "./components/com_transform.js";
import {Trigger} from "./components/com_trigger.js";
import {Entity} from "./game.js";

const enum Component {
    Camera,
    Collide,
    ControlMove,
    Light,
    Move,
    Render,
    Transform,
    Trigger,
}

export const enum Has {
    Camera = 1 << Component.Camera,
    Collide = 1 << Component.Collide,
    ControlMove = 1 << Component.ControlMove,
    Light = 1 << Component.Light,
    Move = 1 << Component.Move,
    Render = 1 << Component.Render,
    Transform = 1 << Component.Transform,
    Trigger = 1 << Component.Trigger,
}

export class World {
    Signature: Array<number> = [];
    Graveyard: Array<Entity> = [];

    // Component data
    Camera: Array<Camera> = [];
    Collide: Array<Collide> = [];
    ControlMove: Array<ControlMove> = [];
    Light: Array<Light> = [];
    Move: Array<Move> = [];
    Render: Array<Render> = [];
    Transform: Array<Transform> = [];
    Trigger: Array<Trigger> = [];
}
