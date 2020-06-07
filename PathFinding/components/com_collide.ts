import {AABB} from "../../common/aabb.js";
import {Vec3} from "../../common/math.js";
import {Entity, Game} from "../game.js";
import {Has} from "./com_index.js";

export interface Collide extends AABB {
    readonly EntityId: Entity;
    New: boolean;
    /**
     * Dynamic colliders collide with all colliders. Static colliders collide
     * only with dynamic colliders.
     */
    Dynamic: boolean;
    /** Collisions detected with this collider during this tick. */
    Collisions: Array<Collision>;
}

export function collide(Dynamic: boolean = true, Size: [number, number, number] = [1, 1, 1]) {
    return (game: Game, EntityId: Entity) => {
        game.World.Mask[EntityId] |= Has.Collide;
        game.World.Collide[EntityId] = {
            EntityId,
            New: true,
            Dynamic,
            Size,
            Min: [0, 0, 0],
            Max: [0, 0, 0],
            Center: [0, 0, 0],
            Half: [0, 0, 0],
            Collisions: [],
        };
    };
}

export interface Collision {
    /** The other entity in the collision. */
    Other: Entity;
    /** The direction and magnitude of the hit from this collider's POV. */
    Hit: Vec3;
}
