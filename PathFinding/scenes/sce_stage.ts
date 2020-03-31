import {from_euler} from "../../common/quat.js";
import {integer, set_seed} from "../../common/random.js";
import {blueprint_camera} from "../blueprints/blu_camera.js";
import {draw_marker} from "../components/com_draw.js";
import {light_directional} from "../components/com_light.js";
import {pickable} from "../components/com_pickable.js";
import {render_basic} from "../components/com_render_basic.js";
import {render_diffuse} from "../components/com_render_diffuse.js";
import {instantiate} from "../core.js";
import {Game} from "../game.js";
import {nav_bake} from "../navmesh.js";
import {path_find, path_follow} from "../pathfind.js";
import {World} from "../world.js";

export function scene_stage(game: Game) {
    game.World = new World();
    game.Camera = undefined;
    game.ViewportResized = true;
    game.GL.clearColor(1, 1, 1, 1);

    // Camera.
    instantiate(game, {
        ...blueprint_camera(game),
        Translation: [0, 100, 30],
        Rotation: from_euler([0, 0, 0, 0], 75, 180, 0),
    });

    // Light.
    instantiate(game, {
        Translation: [-1, 1, 1],
        Using: [light_directional([1, 1, 1], 1.2)],
    });

    instantiate(game, {
        Using: [
            render_diffuse(game.MaterialDiffuseGouraud, game.MeshTerrain, [0.3, 0.3, 0.8, 1]),
            pickable(game.MeshTerrain),
        ],
    });

    if (false) {
        instantiate(game, {
            Translation: [0, 0.1, 0],
            Using: [render_basic(game.MaterialBasicWireframe, game.MeshTerrain, [1, 1, 0, 1])],
        });
    }

    console.time("nav_bake");
    let nav = nav_bake(game.MeshTerrain);
    console.timeEnd("nav_bake");

    for (let face = 0; face < nav.Centroids.length; face++) {
        if (false && nav.Centroids[face]) {
            instantiate(game, {
                Translation: nav.Centroids[face],
                Using: [draw_marker(`${face}`)],
            });
        }
    }

    let origin = 190;
    let goal = 117;
    console.time("path_find");
    let path = path_find(nav, origin, goal);
    console.timeEnd("path_find");

    if (path) {
        for (let waypoint of path_follow(path, goal)) {
            instantiate(game, {
                Translation: nav.Centroids[waypoint],
                Scale: [2, 2, 2],
                Using: [render_diffuse(game.MaterialDiffuseGouraud, game.MeshCube, [1, 0, 0, 1])],
            });
        }
        let visited = path.filter((x) => x !== undefined).length;
        console.log({visitied: visited});
    }

    if (false) {
        set_seed(1234567890);
        console.time("bench");
        for (let i = 0; i < 10000; i++) {
            let a = integer(0, nav.Graph.length - 1);
            let b = integer(0, nav.Graph.length - 1);
            if (nav.Graph[a] && nav.Graph[b]) {
                path_find(nav, a, b);
            }
        }
        console.timeEnd("bench");
    }
}
