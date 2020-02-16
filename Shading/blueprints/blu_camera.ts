import {camera} from "../components/com_camera.js";
import {Blueprint} from "../core.js";
import {Game} from "../game.js";

export function blueprint_camera(game: Game) {
    return <Blueprint>{
        Rotation: [0, 1, 0, 0],
        Children: [
            {
                Rotation: [0, 1, 0, 0],
                Using: [camera(game.ViewportWidth / game.ViewportHeight, 1, 0.1, 1000)],
            },
        ],
    };
}
