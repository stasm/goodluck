import {link, Material} from "../../common/material.js";
import {GL_TRIANGLES} from "../../common/webgl.js";

let vertex = `#version 300 es\n

    // See Game.LightPositions and Game.LightDetails.
    const int MAX_LIGHTS = 8;

    uniform mat4 pv;
    uniform mat4 world;
    uniform mat4 self;
    uniform vec3 palette[16];

    uniform int light_count;
    uniform vec4 light_positions[MAX_LIGHTS];
    uniform vec4 light_details[MAX_LIGHTS];

    in vec3 position;
    in vec3 normal;
    in vec4 offset;
    out vec4 vert_color;

    void main() {
        vec4 vert_pos = world * vec4(position + offset.xyz, 1.0);
        vec3 vert_normal = normalize((vec4(normal, 0.0) * self).xyz);
        gl_Position = pv * vert_pos;

        // Ambient light.
        vec3 color = palette[int(offset[3])];
        vec3 rgb = color * 0.1;

        for (int i = 0; i < MAX_LIGHTS; i++) {
            if (light_positions[i].w == 0.0) {
                break;
            }

            vec3 light_color = light_details[i].rgb;
            float light_intensity = light_details[i].a;

            vec3 light_normal;
            if (light_positions[i].w == 1.0) {
                // Directional light.
                light_normal = light_positions[i].xyz;
            } else {
                vec3 light_dir = light_positions[i].xyz - vert_pos.xyz;
                float light_dist = length(light_dir);
                light_normal = light_dir / light_dist;
                // Distance attenuation.
                light_intensity /= (light_dist * light_dist);
            }

            float diffuse_factor = dot(vert_normal, light_normal);
            if (diffuse_factor > 0.0) {
                // Diffuse color.
                rgb += color * diffuse_factor * light_color * light_intensity;
            }
        }

        vert_color = vec4(rgb, 1.0);
    }
`;

let fragment = `#version 300 es\n
    precision mediump float;

    in vec4 vert_color;
    out vec4 frag_color;

    void main() {
        frag_color = vert_color;
    }
`;

export function mat_instanced(gl: WebGL2RenderingContext): Material {
    let Program = link(gl, vertex, fragment);
    return {
        Mode: GL_TRIANGLES,
        Program,
        Uniforms: [
            gl.getUniformLocation(Program, "pv")!,
            gl.getUniformLocation(Program, "world")!,
            gl.getUniformLocation(Program, "self")!,
            gl.getUniformLocation(Program, "palette")!,
            gl.getUniformLocation(Program, "light_positions")!,
            gl.getUniformLocation(Program, "light_details")!,
        ],
        Attributes: [
            gl.getAttribLocation(Program, "position")!,
            gl.getAttribLocation(Program, "normal")!,
            gl.getAttribLocation(Program, "offset")!,
        ],
    };
}
