import {ShadedAttribute} from "../components/com_render_shaded.js";
import {mat_create} from "./mat_common.js";

let vertex = `#version 300 es
    uniform mat4 pv;
    uniform mat4 world;
    uniform mat4 self;

    layout(location=${ShadedAttribute.position}) in vec3 position;
    layout(location=${ShadedAttribute.normal}) in vec3 normal;
    out vec3 vert_pos;
    out vec3 vert_normal;

    void main() {
        vert_pos = (world * vec4(position, 1.0)).xyz;
        vert_normal = normalize((vec4(normal, 0.0) * self).xyz);
        gl_Position = pv * vec4(vert_pos, 1.0);
    }
`;

let fragment = `#version 300 es
    precision mediump float;

    uniform vec4 color;
    uniform int light_count;
    uniform vec3 light_positions[100];
    uniform vec4 light_details[100];

    in vec3 vert_pos;
    in vec3 vert_normal;
    out vec4 frag_color;

    const float levels = 3.0;

    void main() {
        vec3 rgb = vec3(0.0, 0.0, 0.0);
        for (int i = 0; i < light_count; i++) {
            vec3 light_dir = light_positions[i] - vert_pos;
            vec3 light_normal = normalize(light_dir);
            float light_dist = length(light_dir);

            float diffuse_factor = max(dot(vert_normal, light_normal), 0.0);
            diffuse_factor = floor(diffuse_factor * levels + 0.5) / levels;

            float distance_factor = light_dist * light_dist;
            float intensity_factor = light_details[i].a;
            float attenuation = distance_factor / intensity_factor;

            rgb += color.rgb * light_details[i].rgb * diffuse_factor / attenuation;
        }

        frag_color = vec4(rgb, 1.0);
    }
`;

export function mat_toon(gl: WebGL2RenderingContext) {
    return mat_create(gl, gl.TRIANGLES, vertex, fragment);
}