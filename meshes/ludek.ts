import {Mesh} from "../common/mesh.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_ludek(gl: WebGLRenderingContext): Mesh {
    let vertex_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, vertex_buf);
    gl.bufferData(GL_ARRAY_BUFFER, vertex_arr, GL_STATIC_DRAW);

    let normal_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, normal_buf);
    gl.bufferData(GL_ARRAY_BUFFER, normal_arr, GL_STATIC_DRAW);

    let texcoord_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ARRAY_BUFFER, texcoord_buf);
    gl.bufferData(GL_ARRAY_BUFFER, texcoord_arr, GL_STATIC_DRAW);

    let index_buf = gl.createBuffer()!;
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, index_buf);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, index_arr, GL_STATIC_DRAW);

    return {
        VertexBuffer: vertex_buf,
        VertexArray: vertex_arr,
        NormalBuffer: normal_buf,
        NormalArray: normal_arr,
        TexCoordBuffer: texcoord_buf,
        TexCoordArray: texcoord_arr,
        IndexBuffer: index_buf,
        IndexArray: index_arr,
        IndexCount: index_arr.length,
    };
}

// prettier-ignore
let vertex_arr = Float32Array.from([
    -0.3, 1.2, -0.15,
    0.45, 1.47, 0,
    0.3, 1.2, -0.15,
    0.27, 0.63, 0,
    0, 0.63, 0.15,
    0.15, 0, 0,
    0.45, 1.47, 0,
    0.3, 1.2, 0.15,
    1.05, 1.35, 0,
    0.45, 1.47, 0,
    1.05, 1.35, 0,
    0.3, 1.2, -0.15,
    -1.05, 1.35, 0,
    -0.45, 1.47, 0,
    -0.45, 1.47, 0,
    -0.3, 1.2, 0.15,
    0.3, 1.2, 0.15,
    -0.3, 1.2, 0.15,
    -0.45, 1.47, 0,
    -1.05, 1.35, 0,
    0.27, 0.63, 0,
    0.15, 0, 0,
    0, 0.63, -0.15,
    -0.15, 0, 0,
    -0.27, 0.63, 0,
    -0.27, 0.63, 0,
    -0.15, 0, 0,
    0.3, 1.2, -0.15,
    1.05, 1.35, 0,
    0.3, 1.2, 0.15,
    -0.15, 0, 0,
    0, 0.63, -0.15,
    0, 0.63, 0.15,
    0, 2.25, -0.15,
    -0.45, 1.47, 0,
    0, 2.25, 0.45,
    -0.27, 0.63, 0,
    -0.3, 1.2, 0.15,
    -0.3, 1.2, -0.15,
    -1.05, 1.35, 0,
    -0.3, 1.2, -0.15,
    -0.3, 1.2, 0.15,
    0, 0.63, -0.15,
    0.15, 0, 0,
    0, 0.63, 0.15,
    -0.45, 1.47, 0,
    0, 2.25, -0.15,
    0.45, 1.47, 0,
    0.45, 1.47, 0,
    0.45, 1.47, 0,
    0, 2.25, 0.45,
    -0.45, 1.47, 0,
    0, 2.25, -0.15,
    0, 2.25, 0.45,
    0.45, 1.47, 0,
    0.27, 0.63, 0,
    0.3, 1.2, -0.15,
    0.3, 1.2, 0.15,
]);

// prettier-ignore
let normal_arr = Float32Array.from([
    -0.424, -0.0402, -0.9048,
    0.0555, 0.4611, -0.8856,
    0.424, -0.0402, -0.9048,
    0.9544, -0.2985, 0,
    0, -0.155, 0.9879,
    0.4836, -0.0921, 0.8704,
    0.0555, 0.4611, 0.8856,
    0.424, -0.0402, 0.9048,
    0.0891, 0.4454, 0.8909,
    0.0555, 0.4611, -0.8856,
    0.0891, 0.4454, -0.8909,
    0.424, -0.0402, -0.9048,
    -0.0891, 0.4454, -0.8909,
    -0.0555, 0.4611, -0.8856,
    -0.0555, 0.4611, 0.8856,
    -0.424, -0.0402, 0.9048,
    0.424, -0.0402, 0.9048,
    -0.424, -0.0402, 0.9048,
    -0.0555, 0.4611, 0.8856,
    -0.0891, 0.4454, 0.8909,
    0.9544, -0.2985, 0,
    0.4836, -0.0921, -0.8704,
    0, -0.155, -0.9879,
    -0.4836, -0.0921, -0.8704,
    -0.9544, -0.2985, 0,
    -0.9544, -0.2985, 0,
    -0.4836, -0.0921, 0.8704,
    0.424, -0.0402, -0.9048,
    0.1961, -0.9806, 0,
    0.424, -0.0402, 0.9048,
    0.9728, -0.2316, 0,
    0.9728, -0.2316, 0,
    0.9728, -0.2316, 0,
    -0.8662, 0.4997, 0,
    -0.8662, 0.4997, 0,
    -0.8662, 0.4997, 0,
    -0.9544, -0.2985, 0,
    -0.424, -0.0402, 0.9048,
    -0.424, -0.0402, -0.9048,
    -0.1961, -0.9806, 0,
    -0.424, -0.0402, -0.9048,
    -0.424, -0.0402, 0.9048,
    -0.9728, -0.2316, 0,
    -0.9728, -0.2316, 0,
    -0.9728, -0.2316, 0,
    0, -0.1888, -0.982,
    0, -0.1888, -0.982,
    0, -0.1888, -0.982,
    0.0555, 0.4611, 0.8856,
    0, -0.4997, 0.8662,
    0, -0.4997, 0.8662,
    0, -0.4997, 0.8662,
    0.8662, 0.4997, 0,
    0.8662, 0.4997, 0,
    0.8662, 0.4997, 0,
    0.9544, -0.2985, 0,
    0.424, -0.0402, -0.9048,
    0.424, -0.0402, 0.9048
]);

// prettier-ignore
let texcoord_arr = Float32Array.from([
    0.263835, 0.413572,
    0.018468, 0.349974,
    0.105534, 0.303621,
    0.545919, 0.548681,
    0.629887, 0.530965,
    0.623806, 0.748455,
    0.512776, 0.812615,
    0.588341, 0.748455,
    0.588341, 0.999648,
    0.588341, 0.935182,
    0.663705, 0.748455,
    0.663705, 1,
    0.43721, 0.589106,
    0.25592, 0.514901,
    0.717104, 0.231542,
    0.687404, 0.328136,
    0.500808, 0.367506,
    0.512776, 0.999648,
    0.437211, 0.935488,
    0.512776, 0.748455,
    0.213706, 0.153233,
    0.35806, 0,
    0.284942, 0.202711,
    0.437211, 0.054976,
    0.356177, 0.252189,
    0.713855, 0.513248,
    0.717104, 0.72877,
    0.812306, 0.232832,
    0.905658, 0,
    0.905658, 0.252234,
    0.904799, 0.499571,
    0.904799, 0.708428,
    0.812306, 0.684996,
    0.190403, 0.914462,
    0.285604, 0.645756,
    0.380806, 0.914462,
    0.717104, 0.593976,
    0.812306, 0.780472,
    0.717104, 0.780472,
    0.859907, 0.252234,
    0.907507, 0.499571,
    0.812306, 0.499571,
    0.812306, 0.893854,
    0.904799, 0.708428,
    0.904799, 0.917286,
    0.25592, 0.514901,
    0, 0.645756,
    0.018468, 0.349974,
    0.43721, 0.290597,
    0.43721, 0.290597,
    0.526152, 0,
    0.717104, 0.231542,
    0.190403, 0.914462,
    0, 0.914462,
    0.095201, 0.645756,
    0.812306, 0.20374,
    0.812306, 0.390236,
    0.717104, 0.390236
]);

// prettier-ignore
let index_arr = Uint16Array.from([
    57, 56, 55,
    54, 53, 52,
    51, 50, 49,
    47, 46, 45,
    44, 43, 42,
    41, 40, 39,
    38, 37, 36,
    35, 34, 33,
    32, 31, 30,
    29, 28, 27,
    19, 18, 17,
    11, 10, 9,
    8, 7, 6,
    14, 48, 16,
    16, 15, 14,
    15, 16, 4,
    15, 4, 25,
    26, 25, 4,
    16, 3, 4,
    5, 4, 3,
    24, 23, 22,
    22, 21, 20,
    22, 20, 2,
    0, 22, 2,
    0, 24, 22,
    1, 13, 0,
    13, 12, 0,
    2, 1, 0
]);