import {link, Material} from "../common/material.js";
import {GL_POINTS} from "../common/webgl.js";
import {ColoredUnlitLayout} from "./layout.js";

let vertex = `
    uniform mat4 pv;
    uniform mat4 world;

    attribute vec3 attr_position;

    void main() {
        gl_Position = pv * world * vec4(attr_position, 1.0);
        gl_PointSize = 8.0;
    }
`;

let fragment = `
    precision mediump float;
    uniform vec4 color;

    void main() {
        gl_FragColor = color;
    }
`;

export function mat1_forward_colored_points(
    gl: WebGLRenderingContext
): Material<ColoredUnlitLayout> {
    let program = link(gl, vertex, fragment);
    return {
        Mode: GL_POINTS,
        Program: program,
        Locations: {
            Pv: gl.getUniformLocation(program, "pv")!,
            World: gl.getUniformLocation(program, "world")!,

            Color: gl.getUniformLocation(program, "color")!,

            VertexPosition: gl.getAttribLocation(program, "attr_position")!,
        },
    };
}
