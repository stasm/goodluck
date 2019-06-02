import * as mat4 from "./gl-matrix/mat4.js";
import Material from "./material.js";

let vertex = `#version 300 es
    uniform mat4 pv;
    uniform float scale;
    uniform mat4 model;
    uniform mat4 model_inverse;

    in vec3 position;
    in vec3 normal;
    out vec3 vert_pos;
    out vec3 vert_normal;

    void main() {
        vert_pos = (model * scale * vec4(position, 1.0)).xyz;
        vert_normal = normalize((vec4(normal, 0.0) * model_inverse).xyz);
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

export default
class GouraudMaterial extends Material {
    constructor(gl) {
        super(gl, gl.TRIANGLES, vertex, fragment);
        this.regular = 1;
        this.outline = 1.01;
    }

    use(pv, lights) {
        super.use(pv);
        let {gl, uniforms} = this;
        gl.uniform3fv(uniforms.light_positions, lights.positions);
        gl.uniform4fv(uniforms.light_details, lights.details);
        gl.uniform1i(uniforms.light_count, lights.count);
    }

    draw(model, render) {
        let {gl, mode, uniforms, attribs} = this;
        gl.uniformMatrix4fv(uniforms.model, gl.FALSE, model);
        gl.uniformMatrix4fv(uniforms.model_inverse, gl.FALSE,
                mat4.invert([], model));
        gl.bindVertexArray(render.vao);
        gl.frontFace(gl.CCW);
        gl.uniform4fv(uniforms.color, [0, 0, 0, 1]);
        gl.uniform1f(uniforms.scale, this.outline);
        gl.drawElements(mode, render.count, gl.UNSIGNED_SHORT, 0);
        gl.frontFace(gl.CW);
        gl.uniform4fv(uniforms.color, render.color);
        gl.uniform1f(uniforms.scale, this.regular);
        gl.drawElements(mode, render.count, gl.UNSIGNED_SHORT, 0);
        gl.bindVertexArray(null);
    }
}
