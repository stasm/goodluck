import {Material, Mesh} from "../../common/material.js";
import {Vec4} from "../../common/math.js";
import {GL_ARRAY_BUFFER, GL_CW, GL_ELEMENT_ARRAY_BUFFER, GL_FLOAT} from "../../common/webgl.js";
import {DiffuseLayout} from "../../materials/layout_diffuse.js";
import {Entity, Game} from "../game.js";
import {Has} from "./com_index.js";
import {RenderKind} from "./com_render.js";

export interface RenderDiffuse {
    readonly Kind: RenderKind.Diffuse;
    readonly Material: Material<DiffuseLayout>;
    readonly Mesh: Mesh;
    readonly FrontFace: GLenum;
    readonly VAO: WebGLVertexArrayObject;
    Color: Vec4;
}

let vaos: WeakMap<Mesh, WebGLVertexArrayObject> = new WeakMap();

export function render_diffuse(material: Material<DiffuseLayout>, mesh: Mesh, color: Vec4) {
    return (game: Game, entity: Entity) => {
        if (!vaos.has(mesh)) {
            // We only need to create the VAO once.
            let vao = game.GL.createVertexArray()!;
            game.GL.bindVertexArray(vao);

            game.GL.bindBuffer(GL_ARRAY_BUFFER, mesh.VertexBuffer);
            game.GL.enableVertexAttribArray(material.Locations.VertexPosition);
            game.GL.vertexAttribPointer(
                material.Locations.VertexPosition,
                3,
                GL_FLOAT,
                false,
                0,
                0
            );

            game.GL.bindBuffer(GL_ARRAY_BUFFER, mesh.NormalBuffer);
            game.GL.enableVertexAttribArray(material.Locations.VertexNormal);
            game.GL.vertexAttribPointer(material.Locations.VertexNormal, 3, GL_FLOAT, false, 0, 0);

            game.GL.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, mesh.IndexBuffer);

            game.GL.bindVertexArray(null);
            vaos.set(mesh, vao);
        }

        game.World.Mask[entity] |= Has.Render;
        game.World.Render[entity] = {
            Kind: RenderKind.Diffuse,
            Material: material,
            Mesh: mesh,
            FrontFace: GL_CW,
            VAO: vaos.get(mesh)!,
            Color: color,
        };
    };
}
