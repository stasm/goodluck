import {Camera} from "./components/com_camera.js";
import {Children} from "./components/com_children.js";
import {Collide} from "./components/com_collide.js";
import {ControlAlways} from "./components/com_control_always.js";
import {Light} from "./components/com_light.js";
import {Move} from "./components/com_move.js";
import {Render} from "./components/com_render1.js";
import {Transform} from "./components/com_transform.js";
import {Trigger} from "./components/com_trigger.js";
import {Entity} from "./game.js";

const enum Component {
    Camera,
    Children,
    Collide,
    ControlAlways,
    Light,
    Move,
    Render,
    Transform,
    Trigger,
}

export const enum Has {
    Camera = 1 << Component.Camera,
    Children = 1 << Component.Children,
    Collide = 1 << Component.Collide,
    ControlAlways = 1 << Component.ControlAlways,
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
    Children: Array<Children> = [];
    Collide: Array<Collide> = [];
    ControlAlways: Array<ControlAlways> = [];
    Light: Array<Light> = [];
    Move: Array<Move> = [];
    Render: Array<Render> = [];
    Transform: Array<Transform> = [];
    Trigger: Array<Trigger> = [];
}
