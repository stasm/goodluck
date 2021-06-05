import {create_forward1_target, ForwardTarget} from "../common/framebuffer.js";
import {GL_CULL_FACE, GL_DEPTH_TEST} from "../common/webgl.js";
import {mat1_forward_textured_unlit} from "../materials/mat1_forward_textured_unlit.js";
import {mesh_cube} from "../meshes/cube.js";
import {mesh_plane} from "../meshes/plane.js";
import {frame_reset, frame_setup, loop_init} from "./impl.js";
import {sys_camera} from "./systems/sys_camera.js";
import {sys_control_always} from "./systems/sys_control_always.js";
import {sys_framerate} from "./systems/sys_framerate.js";
import {sys_move} from "./systems/sys_move.js";
import {sys_render_forward} from "./systems/sys_render1_forward.js";
import {sys_resize} from "./systems/sys_resize.js";
import {sys_transform} from "./systems/sys_transform.js";
import {World} from "./world.js";

export type Entity = number;

export class Game {
    World = new World();

    ViewportWidth = window.innerWidth;
    ViewportHeight = window.innerHeight;
    ViewportResized = true;

    InputState: Record<string, number> = {};
    InputDelta: Record<string, number> = {};
    InputDistance: Record<string, number> = {};
    InputTouches: Record<string, number> = {};

    Ui = document.querySelector("main")!;
    Billboard = document.querySelector("#billboard")! as HTMLCanvasElement;
    Canvas = document.querySelector("#scene")! as HTMLCanvasElement;
    Gl = this.Canvas.getContext("webgl")!;
    ExtVao = this.Gl.getExtension("OES_vertex_array_object")!;

    MaterialTexturedUnlit = mat1_forward_textured_unlit(this.Gl);
    MeshCube = mesh_cube(this.Gl);
    MeshPlane = mesh_plane(this.Gl);

    Textures: Record<string, WebGLTexture> = {};
    Targets: {
        Minimap: ForwardTarget;
    };

    // The rendering pipeline supports 8 lights.
    LightPositions = new Float32Array(4 * 8);
    LightDetails = new Float32Array(4 * 8);
    Cameras: Array<Entity> = [];

    constructor() {
        loop_init(this);

        this.Gl.getExtension("WEBGL_depth_texture");
        this.Targets = {
            Minimap: create_forward1_target(this.Gl, 256, 256),
        };

        this.Gl.enable(GL_DEPTH_TEST);
        this.Gl.enable(GL_CULL_FACE);
    }

    FrameUpdate(delta: number) {
        frame_setup(this);
        let now = performance.now();

        sys_control_always(this, delta);
        sys_move(this, delta);
        sys_transform(this, delta);
        sys_resize(this, delta);
        sys_camera(this, delta);
        sys_render_forward(this, delta);

        sys_framerate(this, delta, performance.now() - now);
        frame_reset(this);
    }
}