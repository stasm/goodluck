import {Vec3} from "./math.js";
import {element, float} from "./random.js";
import {cross, length, normalize, subtract} from "./vec3.js";

export interface Mesh {
    VertexBuffer: WebGLBuffer;
    VertexArray: Float32Array;
    NormalBuffer: WebGLBuffer;
    NormalArray: Float32Array;
    TexCoordBuffer: WebGLBuffer;
    TexCoordArray: Float32Array;
    IndexBuffer: WebGLBuffer;
    IndexArray: Uint16Array;
    IndexCount: number;
}

/** Centroid of the face given by vertex indices a, b, and c. */
export function face_centroid(vertices: Float32Array, a: number, b: number, c: number): Vec3 {
    return [
        (vertices[a * 3 + 0] + vertices[b * 3 + 0] + vertices[c * 3 + 0]) / 3,
        (vertices[a * 3 + 1] + vertices[b * 3 + 1] + vertices[c * 3 + 1]) / 3,
        (vertices[a * 3 + 2] + vertices[b * 3 + 2] + vertices[c * 3 + 2]) / 3,
    ];
}

const edge1: Vec3 = [0, 0, 0];
const edge2: Vec3 = [0, 0, 0];

/** Cross product of two face edges: bc×ab. */
export function face_cross(vertices: Float32Array, a: number, b: number, c: number): Vec3 {
    subtract(
        edge1,
        [vertices[b * 3 + 0], vertices[b * 3 + 1], vertices[b * 3 + 2]],
        [vertices[a * 3 + 0], vertices[a * 3 + 1], vertices[a * 3 + 2]]
    );

    subtract(
        edge2,
        [vertices[c * 3 + 0], vertices[c * 3 + 1], vertices[c * 3 + 2]],
        [vertices[b * 3 + 0], vertices[b * 3 + 1], vertices[b * 3 + 2]]
    );

    return cross([0, 0, 0], edge2, edge1);
}

/** Normal of the face given by vertex indices a, b, and c. */
export function face_normal(vertices: Float32Array, a: number, b: number, c: number): Vec3 {
    let product = face_cross(vertices, a, b, c);
    return normalize(product, product);
}

/** Area of the face given by vertex indices a, b, and c. */
export function face_area(vertices: Float32Array, a: number, b: number, c: number): number {
    let product = face_cross(vertices, a, b, c);
    return length(product) / 2;
}

export function random_point_facing_up(mesh: Mesh, min_area = 3): Vec3 | null {
    let up_face_indices: Array<number> = [];

    let face_count = mesh.IndexCount / 3;
    for (let f = 0; f < face_count; f++) {
        let v0 = mesh.IndexArray[f * 3 + 0];
        let v1 = mesh.IndexArray[f * 3 + 1];
        let v2 = mesh.IndexArray[f * 3 + 2];

        let n = face_cross(mesh.VertexArray, v0, v1, v2);
        let face_area = length(n) * 0.5;

        if (face_area > min_area) {
            normalize(n, n);
            if (n[1] === 1) {
                let times = face_area - min_area + 1;
                for (let i = 0; i < times; i++) {
                    up_face_indices.push(f);
                }
            }
        }
    }

    if (up_face_indices.length === 0) {
        // No faces facing up.
        return null;
    }

    let f = element(up_face_indices);
    let v0 = mesh.IndexArray[f * 3 + 0];
    let v1 = mesh.IndexArray[f * 3 + 1];
    let v2 = mesh.IndexArray[f * 3 + 2];

    let p0: Vec3 = [
        mesh.VertexArray[v0 * 3 + 0],
        mesh.VertexArray[v0 * 3 + 1],
        mesh.VertexArray[v0 * 3 + 2],
    ];
    let p1: Vec3 = [
        mesh.VertexArray[v1 * 3 + 0],
        mesh.VertexArray[v1 * 3 + 1],
        mesh.VertexArray[v1 * 3 + 2],
    ];
    let p2: Vec3 = [
        mesh.VertexArray[v2 * 3 + 0],
        mesh.VertexArray[v2 * 3 + 1],
        mesh.VertexArray[v2 * 3 + 2],
    ];

    // Random barycentric coords.
    let t0 = float(0.1, 0.8);
    let t1 = float(0.1, 0.8);
    if (t0 + t1 > 1) {
        t0 = 1 - t0;
        t1 = 1 - t1;
    }
    let t2 = 1 - t0 - t1;

    // Convert barycentric to cartesian.
    return [
        t0 * p0[0] + t1 * p1[0] + t2 * p2[0],
        t0 * p0[1] + t1 * p1[1] + t2 * p2[1],
        t0 * p0[2] + t1 * p1[2] + t2 * p2[2],
    ];
}
