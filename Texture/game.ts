import {GL_CULL_FACE, GL_DEPTH_TEST} from "../common/webgl.js";
import {mesh_kulka} from "../meshes/kulka.js";
import {Camera} from "./components/com_camera.js";
import {loop_start, loop_stop} from "./core.js";
import {mat_textured} from "./materials/mat_textured.js";
import {sys_camera} from "./systems/sys_camera.js";
import {sys_framerate} from "./systems/sys_framerate.js";
import {sys_render} from "./systems/sys_render.js";
import {sys_rotate} from "./systems/sys_rotate.js";
import {sys_transform} from "./systems/sys_transform.js";
import {World} from "./world.js";

export type Entity = number;

export class Game {
    World = new World();

    ViewportWidth = 0;
    ViewportHeight = 0;
    ViewportResized = false;

    UI = document.querySelector("main")!;
    Canvas = document.querySelector("canvas")!;
    GL = this.Canvas.getContext("webgl2")!;

    MaterialTextured = mat_textured(this.GL);
    MeshKulka = mesh_kulka(this.GL);

    Texture?: WebGLTexture;

    Camera?: Camera;

    constructor() {
        document.addEventListener("visibilitychange", () =>
            document.hidden ? loop_stop() : loop_start(this)
        );

        this.GL.enable(GL_DEPTH_TEST);
        this.GL.enable(GL_CULL_FACE);
    }

    FrameReset() {
        // Reset event flags for the next frame.
        this.ViewportResized = false;
    }

    FrameUpdate(delta: number) {
        let now = performance.now();
        sys_rotate(this, delta);
        sys_transform(this, delta);
        sys_camera(this, delta);
        sys_render(this, delta);
        sys_framerate(this, delta, performance.now() - now);
    }
}