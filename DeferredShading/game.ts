import {
    create_deferred_target,
    create_depth2_target,
    DeferredTarget,
    DepthTarget,
} from "../common/framebuffer.js";
import {GL_CULL_FACE, GL_DEPTH_TEST} from "../common/webgl.js";
import {mesh_cube} from "../meshes/cube.js";
import {mesh_icosphere_flat} from "../meshes/icosphere_flat.js";
import {mesh_icosphere_smooth} from "../meshes/icosphere_smooth.js";
import {mesh_quad} from "../meshes/quad.js";
import {frame_reset, frame_setup, loop_init} from "./impl.js";
import {mat2_deferred_colored} from "./materials/mat2_deferred_colored.js";
import {mat2_deferred_shading} from "./materials/mat2_deferred_shading.js";
import {mat2_forward_depth} from "./materials/mat2_forward_depth.js";
import {sys_camera} from "./systems/sys_camera.js";
import {sys_control_always} from "./systems/sys_control_always.js";
import {sys_framerate} from "./systems/sys_framerate.js";
import {sys_light} from "./systems/sys_light.js";
import {sys_move} from "./systems/sys_move.js";
import {sys_render_deferred} from "./systems/sys_render_deferred.js";
import {sys_render_depth} from "./systems/sys_render_depth.js";
import {sys_render_postprocess} from "./systems/sys_render_postprocess.js";
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
    Gl = this.Canvas.getContext("webgl2")!;

    MaterialColored = mat2_deferred_colored(this.Gl);
    MaterialShading = mat2_deferred_shading(this.Gl);
    MaterialDepth = mat2_forward_depth(this.Gl);

    MeshSphereSmooth = mesh_icosphere_smooth(this.Gl);
    MeshSphereFlat = mesh_icosphere_flat(this.Gl);
    MeshCube = mesh_cube(this.Gl);
    MeshQuad = mesh_quad(this.Gl);

    Targets: {
        Gbuffer: DeferredTarget;
        Sun: DepthTarget;
    };
    Textures: Record<string, WebGLTexture> = {};

    // The rendering pipeline supports 64 lights.
    LightPositions = new Float32Array(4 * 64);
    LightDetails = new Float32Array(4 * 64);
    Cameras: Array<Entity> = [];

    constructor() {
        loop_init(this);

        // Required for floating point g-buffer textures.
        this.Gl.getExtension("EXT_color_buffer_float");
        this.Targets = {
            // Create the main framebuffer for deferred rendering.
            Gbuffer: create_deferred_target(this.Gl, this.ViewportWidth, this.ViewportHeight),
            Sun: create_depth2_target(this.Gl, 1024, 1024),
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
        sys_light(this, delta);
        sys_render_depth(this, delta);
        sys_render_deferred(this, delta);
        sys_render_postprocess(this, delta);

        sys_framerate(this, delta, performance.now() - now);
        frame_reset(this);
    }
}
