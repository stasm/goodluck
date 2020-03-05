import {Material} from "../../common/material.js";
import {Mat4} from "../../common/math.js";
import {
    GL_COLOR_BUFFER_BIT,
    GL_DEPTH_BUFFER_BIT,
    GL_FRAMEBUFFER,
    GL_UNSIGNED_SHORT,
} from "../../common/webgl.js";
import {CameraKind, CameraPerspective, CameraXr} from "../components/com_camera.js";
import {Has} from "../components/com_index.js";
import {RenderKind} from "../components/com_render.js";
import {DiffuseUniform, RenderDiffuse} from "../components/com_render_diffuse.js";
import {Transform} from "../components/com_transform.js";
import {Game} from "../game.js";

const QUERY = Has.Transform | Has.Render;

export function sys_render(game: Game, delta: number) {
    let camera = game.Camera!;
    if (camera.Kind === CameraKind.Xr) {
        render_vr(game, camera);
    } else {
        render_screen(game, camera);
    }
}

function render_screen(game: Game, camera: CameraPerspective) {
    game.GL.bindFramebuffer(GL_FRAMEBUFFER, null);
    game.GL.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    if (game.ViewportResized) {
        game.GL.viewport(0, 0, game.ViewportWidth, game.ViewportHeight);
    }

    render(game, camera.PV);
}

function render_vr(game: Game, camera: CameraXr) {
    let layer = game.XrFrame!.session.renderState.baseLayer!;
    game.GL.bindFramebuffer(GL_FRAMEBUFFER, layer.framebuffer);
    game.GL.clear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

    for (let eye of camera.Eyes) {
        let viewport = layer.getViewport(eye.View);
        game.GL.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
        render(game, eye.Pv);
    }
}

function render(game: Game, pv: Mat4) {
    // Keep track of the current material to minimize switching.
    let current_material = null;
    let current_front_face = null;

    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) === QUERY) {
            let transform = game.World.Transform[i];
            let render = game.World.Render[i];

            if (render.Material !== current_material) {
                current_material = render.Material;
                switch (render.Kind) {
                    case RenderKind.Diffuse:
                        use_diffuse(game, current_material, pv);
                        break;
                }
            }

            if (render.FrontFace !== current_front_face) {
                current_front_face = render.FrontFace;
                game.GL.frontFace(render.FrontFace);
            }

            switch (render.Kind) {
                case RenderKind.Diffuse:
                    draw_shaded(game, transform, render);
                    break;
            }
        }
    }
}

function use_diffuse(game: Game, material: Material, pv: Mat4) {
    game.GL.useProgram(material.Program);
    game.GL.uniformMatrix4fv(material.Uniforms[DiffuseUniform.PV], false, pv);
    game.GL.uniform1i(material.Uniforms[DiffuseUniform.LightCount], game.LightPositions.length / 3);
    game.GL.uniform4fv(material.Uniforms[DiffuseUniform.LightPositions], game.LightPositions);
    game.GL.uniform4fv(material.Uniforms[DiffuseUniform.LightDetails], game.LightDetails);
}

function draw_shaded(game: Game, transform: Transform, render: RenderDiffuse) {
    game.GL.uniformMatrix4fv(
        render.Material.Uniforms[DiffuseUniform.World],
        false,
        transform.World
    );
    game.GL.uniformMatrix4fv(render.Material.Uniforms[DiffuseUniform.Self], false, transform.Self);
    game.GL.uniform4fv(render.Material.Uniforms[DiffuseUniform.Color], render.Color);
    game.GL.bindVertexArray(render.VAO);
    game.GL.drawElements(render.Material.Mode, render.Mesh.Count, GL_UNSIGNED_SHORT, 0);
    game.GL.bindVertexArray(null);
}
