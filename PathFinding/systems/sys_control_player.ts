import {get_translation} from "../../common/mat4.js";
import {GL_ARRAY_BUFFER} from "../../common/webgl.js";
import {Has} from "../components/com_index.js";
import {RenderPath, render_path} from "../components/com_render_path.js";
import {instantiate} from "../core.js";
import {Entity, Game} from "../game.js";
import {path_find} from "../pathfind.js";
import {Picked} from "./sys_pick.js";

const QUERY = Has.ControlPlayer | Has.NavAgent;

let line: Entity;

export function sys_control_player(game: Game, delta: number) {
    if (!line) {
        line = instantiate(game, {
            Translation: [0, 1, 0],
            Using: [render_path(512, [1, 1, 0, 1])],
        });
    }
    game.World.Mask[line] &= ~Has.Render;

    if (game.Pick) {
        for (let i = 0; i < game.World.Mask.length; i++) {
            if ((game.World.Mask[i] & QUERY) == QUERY) {
                update(game, i, game.Pick);
            }
        }
    }
}

function update(game: Game, entity: Entity, pick: Picked) {
    let agent = game.World.NavAgent[entity];
    let node = pick.TriIndex;
    let goal;

    if (node !== undefined && agent.NavMesh.Graph[node]) {
        // The cursor is over a pickable mesh and over a navigable triangle?
        goal = node;
        if (game.InputDelta["Mouse2"] === 1) {
            agent.Goal = {Node: goal, Position: pick.Point};
        }
    }

    // The path line for debugging.
    if (goal !== undefined) {
        let path = path_find(agent.NavMesh, goal, agent.Origin);
        if (path) {
            let transform = game.World.Transform[entity];
            let world_pos = get_translation([0, 0, 0], transform.World);

            // Remove the origin and the goal from the path.
            path = path.slice(1, path.length - 1);
            // Centroids are in the world space.
            let waypoints = path.map((x) => agent.NavMesh.Centroids[x]);
            // Add the entity's current position and the exact goal destination.
            waypoints = [world_pos, ...waypoints, pick.Point];

            game.World.Mask[line] |= Has.Render;
            let render = game.World.Render[line] as RenderPath;
            render.IndexCount = waypoints.length;
            game.Gl.bindBuffer(GL_ARRAY_BUFFER, render.VertexBuffer);
            game.Gl.bufferSubData(GL_ARRAY_BUFFER, 0, Float32Array.from(waypoints.flat()));
        }
    }
}
