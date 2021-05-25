import {link, Material} from "../common/material.js";
import {GL_LINE_LOOP, GL_LINE_STRIP, GL_TRIANGLES} from "../common/webgl.js";
import {ColoredUnlitLayout} from "./layout_colored_unlit.js";

let vertex = `
    uniform mat4 pv;
    uniform mat4 world;

    attribute vec3 vert_position;

    void main() {
        gl_Position = pv * world * vec4(vert_position, 1.0);
    }
`;

let fragment = `
    precision mediump float;
    uniform vec4 color;

    void main() {
        gl_FragColor = color;
    }
`;

export function mat1_colored_unlit(
    gl: WebGLRenderingContext,
    mode: GLenum = GL_TRIANGLES
): Material<ColoredUnlitLayout> {
    let program = link(gl, vertex, fragment);
    return {
        Mode: mode,
        Program: program,
        Locations: {
            Pv: gl.getUniformLocation(program, "pv")!,
            World: gl.getUniformLocation(program, "world")!,
            Color: gl.getUniformLocation(program, "color")!,
            VertexPosition: gl.getAttribLocation(program, "vert_position")!,
        },
    };
}

export function mat1_colored_wireframe(gl: WebGLRenderingContext) {
    return mat1_colored_unlit(gl, GL_LINE_LOOP);
}

export function mat1_colored_line(gl: WebGLRenderingContext) {
    return mat1_colored_unlit(gl, GL_LINE_STRIP);
}
