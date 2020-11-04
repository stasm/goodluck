import {blueprint_camera_main} from "../blueprints/blu_camera_main.js";
import {blueprint_camera_minimap} from "../blueprints/blu_camera_minimap.js";
import {render_textured_unlit} from "../components/com_render2.js";
import {rotate} from "../components/com_rotate.js";
import {instantiate} from "../entity.js";
import {Game} from "../game.js";
import {World} from "../world.js";

export function scene_stage(game: Game) {
    game.World = new World();
    game.ViewportResized = true;

    // Main Camera.
    instantiate(game, {
        Translation: [0, 0, 3],
        ...blueprint_camera_main(game),
    });

    // Minimap Camera.
    instantiate(game, {
        Translation: [0, 5, 0],
        ...blueprint_camera_minimap(game),
    });

    // Checker Box.
    instantiate(game, {
        Translation: [-0.5, 0, 0],
        Using: [
            render_textured_unlit(
                game.MaterialTexturedUnlit,
                game.MeshCube,
                game.Textures["checker1.png"]
            ),
            rotate([10, 20, 30]),
        ],
    });

    // Minimap Plane.
    instantiate(game, {
        Translation: [1, 0, 0],
        Rotation: [0.707, 0, 0, 0.707],
        Using: [
            render_textured_unlit(
                game.MaterialTexturedUnlit,
                game.MeshPlane,
                game.Textures.MinimapRgba
            ),
        ],
    });
}
