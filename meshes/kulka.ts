import {Mesh} from "../common/material.js";
import {GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_STATIC_DRAW} from "../common/webgl.js";

export function mesh_kulka(gl: WebGLRenderingContext) {
    let Vertices = gl.createBuffer();
    gl.bindBuffer(GL_ARRAY_BUFFER, Vertices);
    gl.bufferData(GL_ARRAY_BUFFER, vertices, GL_STATIC_DRAW);
    let Normals = gl.createBuffer();
    gl.bindBuffer(GL_ARRAY_BUFFER, Normals);
    gl.bufferData(GL_ARRAY_BUFFER, normals, GL_STATIC_DRAW);
    let Indices = gl.createBuffer();
    gl.bindBuffer(GL_ELEMENT_ARRAY_BUFFER, Indices);
    gl.bufferData(GL_ELEMENT_ARRAY_BUFFER, indices, GL_STATIC_DRAW);
    return <Mesh>{
        Vertices,
        Normals,
        Indices,
        Count: indices.length,
    };
}

let vertices = Float32Array.from([
    0,
    -0.5,
    0,
    0.212661,
    -0.425327,
    0.154506,
    -0.081228,
    -0.425327,
    0.249998,
    0.361804,
    -0.22361,
    0.262863,
    0.212661,
    -0.425327,
    0.154506,
    0.425324,
    -0.262868,
    0,
    0,
    -0.5,
    0,
    -0.081228,
    -0.425327,
    0.249998,
    -0.262865,
    -0.425326,
    0,
    0,
    -0.5,
    0,
    -0.262865,
    -0.425326,
    0,
    -0.081228,
    -0.425327,
    -0.249998,
    0,
    -0.5,
    0,
    -0.081228,
    -0.425327,
    -0.249998,
    0.212661,
    -0.425327,
    -0.154506,
    0.361804,
    -0.22361,
    0.262863,
    0.425324,
    -0.262868,
    0,
    0.475529,
    0,
    0.154506,
    -0.138194,
    -0.22361,
    0.425325,
    0.131434,
    -0.262869,
    0.404506,
    0,
    0,
    0.5,
    -0.447213,
    -0.223608,
    0,
    -0.344095,
    -0.262868,
    0.249998,
    -0.475529,
    0,
    0.154506,
    -0.138194,
    -0.22361,
    -0.425325,
    -0.344095,
    -0.262868,
    -0.249998,
    -0.293893,
    0,
    -0.404508,
    0.361804,
    -0.22361,
    -0.262863,
    0.131434,
    -0.262869,
    -0.404506,
    0.293893,
    0,
    -0.404508,
    0.361804,
    -0.22361,
    0.262863,
    0.475529,
    0,
    0.154506,
    0.293893,
    0,
    0.404508,
    -0.138194,
    -0.22361,
    0.425325,
    0,
    0,
    0.5,
    -0.293893,
    0,
    0.404508,
    -0.447213,
    -0.223608,
    0,
    -0.475529,
    0,
    0.154506,
    -0.475529,
    0,
    -0.154506,
    -0.138194,
    -0.22361,
    -0.425325,
    -0.293893,
    0,
    -0.404508,
    0,
    0,
    -0.5,
    0.361804,
    -0.22361,
    -0.262863,
    0.293893,
    0,
    -0.404508,
    0.475529,
    0,
    -0.154506,
    0.138194,
    0.22361,
    0.425325,
    0.344095,
    0.262868,
    0.249998,
    0.081228,
    0.425327,
    0.249998,
    -0.361804,
    0.22361,
    0.262863,
    -0.131434,
    0.262869,
    0.404506,
    -0.212661,
    0.425327,
    0.154506,
    -0.361804,
    0.22361,
    -0.262863,
    -0.425324,
    0.262868,
    0,
    -0.212661,
    0.425327,
    -0.154506,
    0.138194,
    0.22361,
    -0.425325,
    -0.131434,
    0.262869,
    -0.404506,
    0.081228,
    0.425327,
    -0.249998,
    0.447213,
    0.223608,
    0,
    0.344095,
    0.262868,
    -0.249998,
    0.262865,
    0.425326,
    0,
    0.262865,
    0.425326,
    0,
    0.081228,
    0.425327,
    -0.249998,
    0,
    0.5,
    0,
    0.262865,
    0.425326,
    0,
    0.344095,
    0.262868,
    -0.249998,
    0.081228,
    0.425327,
    -0.249998,
    0.344095,
    0.262868,
    -0.249998,
    0.138194,
    0.22361,
    -0.425325,
    0.081228,
    0.425327,
    -0.249998,
    0.081228,
    0.425327,
    -0.249998,
    -0.212661,
    0.425327,
    -0.154506,
    0,
    0.5,
    0,
    0.081228,
    0.425327,
    -0.249998,
    -0.131434,
    0.262869,
    -0.404506,
    -0.212661,
    0.425327,
    -0.154506,
    -0.131434,
    0.262869,
    -0.404506,
    -0.361804,
    0.22361,
    -0.262863,
    -0.212661,
    0.425327,
    -0.154506,
    -0.212661,
    0.425327,
    -0.154506,
    -0.212661,
    0.425327,
    0.154506,
    0,
    0.5,
    0,
    -0.212661,
    0.425327,
    -0.154506,
    -0.425324,
    0.262868,
    0,
    -0.212661,
    0.425327,
    0.154506,
    -0.425324,
    0.262868,
    0,
    -0.361804,
    0.22361,
    0.262863,
    -0.212661,
    0.425327,
    0.154506,
    -0.212661,
    0.425327,
    0.154506,
    0.081228,
    0.425327,
    0.249998,
    0,
    0.5,
    0,
    -0.212661,
    0.425327,
    0.154506,
    -0.131434,
    0.262869,
    0.404506,
    0.081228,
    0.425327,
    0.249998,
    -0.131434,
    0.262869,
    0.404506,
    0.138194,
    0.22361,
    0.425325,
    0.081228,
    0.425327,
    0.249998,
    0.081228,
    0.425327,
    0.249998,
    0.262865,
    0.425326,
    0,
    0,
    0.5,
    0,
    0.081228,
    0.425327,
    0.249998,
    0.344095,
    0.262868,
    0.249998,
    0.262865,
    0.425326,
    0,
    0.344095,
    0.262868,
    0.249998,
    0.447213,
    0.223608,
    0,
    0.262865,
    0.425326,
    0,
    0.475529,
    0,
    -0.154506,
    0.344095,
    0.262868,
    -0.249998,
    0.447213,
    0.223608,
    0,
    0.475529,
    0,
    -0.154506,
    0.293893,
    0,
    -0.404508,
    0.344095,
    0.262868,
    -0.249998,
    0.293893,
    0,
    -0.404508,
    0.138194,
    0.22361,
    -0.425325,
    0.344095,
    0.262868,
    -0.249998,
    0,
    0,
    -0.5,
    -0.131434,
    0.262869,
    -0.404506,
    0.138194,
    0.22361,
    -0.425325,
    0,
    0,
    -0.5,
    -0.293893,
    0,
    -0.404508,
    -0.131434,
    0.262869,
    -0.404506,
    -0.293893,
    0,
    -0.404508,
    -0.361804,
    0.22361,
    -0.262863,
    -0.131434,
    0.262869,
    -0.404506,
    -0.475529,
    0,
    -0.154506,
    -0.425324,
    0.262868,
    0,
    -0.361804,
    0.22361,
    -0.262863,
    -0.475529,
    0,
    -0.154506,
    -0.475529,
    0,
    0.154506,
    -0.425324,
    0.262868,
    0,
    -0.475529,
    0,
    0.154506,
    -0.361804,
    0.22361,
    0.262863,
    -0.425324,
    0.262868,
    0,
    -0.293893,
    0,
    0.404508,
    -0.131434,
    0.262869,
    0.404506,
    -0.361804,
    0.22361,
    0.262863,
    -0.293893,
    0,
    0.404508,
    0,
    0,
    0.5,
    -0.131434,
    0.262869,
    0.404506,
    0,
    0,
    0.5,
    0.138194,
    0.22361,
    0.425325,
    -0.131434,
    0.262869,
    0.404506,
    0.293893,
    0,
    0.404508,
    0.344095,
    0.262868,
    0.249998,
    0.138194,
    0.22361,
    0.425325,
    0.293893,
    0,
    0.404508,
    0.475529,
    0,
    0.154506,
    0.344095,
    0.262868,
    0.249998,
    0.475529,
    0,
    0.154506,
    0.447213,
    0.223608,
    0,
    0.344095,
    0.262868,
    0.249998,
    0.293893,
    0,
    -0.404508,
    0,
    0,
    -0.5,
    0.138194,
    0.22361,
    -0.425325,
    0.293893,
    0,
    -0.404508,
    0.131434,
    -0.262869,
    -0.404506,
    0,
    0,
    -0.5,
    0.131434,
    -0.262869,
    -0.404506,
    -0.138194,
    -0.22361,
    -0.425325,
    0,
    0,
    -0.5,
    -0.293893,
    0,
    -0.404508,
    -0.475529,
    0,
    -0.154506,
    -0.361804,
    0.22361,
    -0.262863,
    -0.293893,
    0,
    -0.404508,
    -0.344095,
    -0.262868,
    -0.249998,
    -0.475529,
    0,
    -0.154506,
    -0.344095,
    -0.262868,
    -0.249998,
    -0.447213,
    -0.223608,
    0,
    -0.475529,
    0,
    -0.154506,
    -0.475529,
    0,
    0.154506,
    -0.293893,
    0,
    0.404508,
    -0.361804,
    0.22361,
    0.262863,
    -0.475529,
    0,
    0.154506,
    -0.344095,
    -0.262868,
    0.249998,
    -0.293893,
    0,
    0.404508,
    -0.344095,
    -0.262868,
    0.249998,
    -0.138194,
    -0.22361,
    0.425325,
    -0.293893,
    0,
    0.404508,
    0,
    0,
    0.5,
    0.293893,
    0,
    0.404508,
    0.138194,
    0.22361,
    0.425325,
    0,
    0,
    0.5,
    0.131434,
    -0.262869,
    0.404506,
    0.293893,
    0,
    0.404508,
    0.131434,
    -0.262869,
    0.404506,
    0.361804,
    -0.22361,
    0.262863,
    0.293893,
    0,
    0.404508,
    0.475529,
    0,
    0.154506,
    0.475529,
    0,
    -0.154506,
    0.447213,
    0.223608,
    0,
    0.475529,
    0,
    0.154506,
    0.425324,
    -0.262868,
    0,
    0.475529,
    0,
    -0.154506,
    0.425324,
    -0.262868,
    0,
    0.361804,
    -0.22361,
    -0.262863,
    0.475529,
    0,
    -0.154506,
    0.212661,
    -0.425327,
    -0.154506,
    0.131434,
    -0.262869,
    -0.404506,
    0.361804,
    -0.22361,
    -0.262863,
    0.212661,
    -0.425327,
    -0.154506,
    -0.081228,
    -0.425327,
    -0.249998,
    0.131434,
    -0.262869,
    -0.404506,
    -0.081228,
    -0.425327,
    -0.249998,
    -0.138194,
    -0.22361,
    -0.425325,
    0.131434,
    -0.262869,
    -0.404506,
    -0.081228,
    -0.425327,
    -0.249998,
    -0.344095,
    -0.262868,
    -0.249998,
    -0.138194,
    -0.22361,
    -0.425325,
    -0.081228,
    -0.425327,
    -0.249998,
    -0.262865,
    -0.425326,
    0,
    -0.344095,
    -0.262868,
    -0.249998,
    -0.262865,
    -0.425326,
    0,
    -0.447213,
    -0.223608,
    0,
    -0.344095,
    -0.262868,
    -0.249998,
    -0.262865,
    -0.425326,
    0,
    -0.344095,
    -0.262868,
    0.249998,
    -0.447213,
    -0.223608,
    0,
    -0.262865,
    -0.425326,
    0,
    -0.081228,
    -0.425327,
    0.249998,
    -0.344095,
    -0.262868,
    0.249998,
    -0.081228,
    -0.425327,
    0.249998,
    -0.138194,
    -0.22361,
    0.425325,
    -0.344095,
    -0.262868,
    0.249998,
    0.425324,
    -0.262868,
    0,
    0.212661,
    -0.425327,
    -0.154506,
    0.361804,
    -0.22361,
    -0.262863,
    0.425324,
    -0.262868,
    0,
    0.212661,
    -0.425327,
    0.154506,
    0.212661,
    -0.425327,
    -0.154506,
    0.212661,
    -0.425327,
    0.154506,
    0,
    -0.5,
    0,
    0.212661,
    -0.425327,
    -0.154506,
    -0.081228,
    -0.425327,
    0.249998,
    0.131434,
    -0.262869,
    0.404506,
    -0.138194,
    -0.22361,
    0.425325,
    -0.081228,
    -0.425327,
    0.249998,
    0.212661,
    -0.425327,
    0.154506,
    0.131434,
    -0.262869,
    0.404506,
    0.212661,
    -0.425327,
    0.154506,
    0.361804,
    -0.22361,
    0.262863,
    0.131434,
    -0.262869,
    0.404506,
]);

let normals = Float32Array.from([
    0.1024,
    -0.9435,
    0.3151,
    0.1024,
    -0.9435,
    0.3151,
    0.1024,
    -0.9435,
    0.3151,
    0.7002,
    -0.6617,
    0.268,
    0.7002,
    -0.6617,
    0.268,
    0.7002,
    -0.6617,
    0.268,
    -0.268,
    -0.9435,
    0.1947,
    -0.268,
    -0.9435,
    0.1947,
    -0.268,
    -0.9435,
    0.1947,
    -0.268,
    -0.9435,
    -0.1947,
    -0.268,
    -0.9435,
    -0.1947,
    -0.268,
    -0.9435,
    -0.1947,
    0.1024,
    -0.9435,
    -0.3151,
    0.1024,
    -0.9435,
    -0.3151,
    0.1024,
    -0.9435,
    -0.3151,
    0.905,
    -0.3304,
    0.268,
    0.905,
    -0.3304,
    0.268,
    0.905,
    -0.3304,
    0.268,
    0.0247,
    -0.3304,
    0.9435,
    0.0247,
    -0.3304,
    0.9435,
    0.0247,
    -0.3304,
    0.9435,
    -0.8897,
    -0.3304,
    0.3151,
    -0.8897,
    -0.3304,
    0.3151,
    -0.8897,
    -0.3304,
    0.3151,
    -0.5746,
    -0.3304,
    -0.7488,
    -0.5746,
    -0.3304,
    -0.7488,
    -0.5746,
    -0.3304,
    -0.7488,
    0.5346,
    -0.3304,
    -0.7779,
    0.5346,
    -0.3304,
    -0.7779,
    0.5346,
    -0.3304,
    -0.7779,
    0.8026,
    -0.1256,
    0.5831,
    0.8026,
    -0.1256,
    0.5831,
    0.8026,
    -0.1256,
    0.5831,
    -0.3066,
    -0.1256,
    0.9435,
    -0.3066,
    -0.1256,
    0.9435,
    -0.3066,
    -0.1256,
    0.9435,
    -0.9921,
    -0.1256,
    0,
    -0.9921,
    -0.1256,
    0,
    -0.9921,
    -0.1256,
    0,
    -0.3066,
    -0.1256,
    -0.9435,
    -0.3066,
    -0.1256,
    -0.9435,
    -0.3066,
    -0.1256,
    -0.9435,
    0.8026,
    -0.1256,
    -0.5831,
    0.8026,
    -0.1256,
    -0.5831,
    0.8026,
    -0.1256,
    -0.5831,
    0.4089,
    0.6617,
    0.6284,
    0.4089,
    0.6617,
    0.6284,
    0.4089,
    0.6617,
    0.6284,
    -0.4713,
    0.6617,
    0.5831,
    -0.4713,
    0.6617,
    0.5831,
    -0.4713,
    0.6617,
    0.5831,
    -0.7002,
    0.6617,
    -0.268,
    -0.7002,
    0.6617,
    -0.268,
    -0.7002,
    0.6617,
    -0.268,
    0.0385,
    0.6617,
    -0.7488,
    0.0385,
    0.6617,
    -0.7488,
    0.0385,
    0.6617,
    -0.7488,
    0.724,
    0.6617,
    -0.1947,
    0.724,
    0.6617,
    -0.1947,
    0.724,
    0.6617,
    -0.1947,
    0.268,
    0.9435,
    -0.1947,
    0.268,
    0.9435,
    -0.1947,
    0.268,
    0.9435,
    -0.1947,
    0.4911,
    0.7947,
    -0.3568,
    0.4911,
    0.7947,
    -0.3568,
    0.4911,
    0.7947,
    -0.3568,
    0.4089,
    0.6617,
    -0.6284,
    0.4089,
    0.6617,
    -0.6284,
    0.4089,
    0.6617,
    -0.6284,
    -0.1024,
    0.9435,
    -0.3151,
    -0.1024,
    0.9435,
    -0.3151,
    -0.1024,
    0.9435,
    -0.3151,
    -0.1876,
    0.7947,
    -0.5773,
    -0.1876,
    0.7947,
    -0.5773,
    -0.1876,
    0.7947,
    -0.5773,
    -0.4713,
    0.6617,
    -0.5831,
    -0.4713,
    0.6617,
    -0.5831,
    -0.4713,
    0.6617,
    -0.5831,
    -0.3313,
    0.9435,
    0,
    -0.3313,
    0.9435,
    0,
    -0.3313,
    0.9435,
    0,
    -0.6071,
    0.7947,
    0,
    -0.6071,
    0.7947,
    0,
    -0.6071,
    0.7947,
    0,
    -0.7002,
    0.6617,
    0.268,
    -0.7002,
    0.6617,
    0.268,
    -0.7002,
    0.6617,
    0.268,
    -0.1024,
    0.9435,
    0.3151,
    -0.1024,
    0.9435,
    0.3151,
    -0.1024,
    0.9435,
    0.3151,
    -0.1876,
    0.7947,
    0.5773,
    -0.1876,
    0.7947,
    0.5773,
    -0.1876,
    0.7947,
    0.5773,
    0.0385,
    0.6617,
    0.7488,
    0.0385,
    0.6617,
    0.7488,
    0.0385,
    0.6617,
    0.7488,
    0.268,
    0.9435,
    0.1947,
    0.268,
    0.9435,
    0.1947,
    0.268,
    0.9435,
    0.1947,
    0.4911,
    0.7947,
    0.3568,
    0.4911,
    0.7947,
    0.3568,
    0.4911,
    0.7947,
    0.3568,
    0.724,
    0.6617,
    0.1947,
    0.724,
    0.6617,
    0.1947,
    0.724,
    0.6617,
    0.1947,
    0.8897,
    0.3304,
    -0.3151,
    0.8897,
    0.3304,
    -0.3151,
    0.8897,
    0.3304,
    -0.3151,
    0.7947,
    0.1876,
    -0.5773,
    0.7947,
    0.1876,
    -0.5773,
    0.7947,
    0.1876,
    -0.5773,
    0.5746,
    0.3304,
    -0.7488,
    0.5746,
    0.3304,
    -0.7488,
    0.5746,
    0.3304,
    -0.7488,
    -0.0247,
    0.3304,
    -0.9435,
    -0.0247,
    0.3304,
    -0.9435,
    -0.0247,
    0.3304,
    -0.9435,
    -0.3035,
    0.1876,
    -0.9342,
    -0.3035,
    0.1876,
    -0.9342,
    -0.3035,
    0.1876,
    -0.9342,
    -0.5346,
    0.3304,
    -0.7779,
    -0.5346,
    0.3304,
    -0.7779,
    -0.5346,
    0.3304,
    -0.7779,
    -0.905,
    0.3304,
    -0.268,
    -0.905,
    0.3304,
    -0.268,
    -0.905,
    0.3304,
    -0.268,
    -0.9822,
    0.1876,
    0,
    -0.9822,
    0.1876,
    0,
    -0.9822,
    0.1876,
    0,
    -0.905,
    0.3304,
    0.268,
    -0.905,
    0.3304,
    0.268,
    -0.905,
    0.3304,
    0.268,
    -0.5346,
    0.3304,
    0.7779,
    -0.5346,
    0.3304,
    0.7779,
    -0.5346,
    0.3304,
    0.7779,
    -0.3035,
    0.1876,
    0.9342,
    -0.3035,
    0.1876,
    0.9342,
    -0.3035,
    0.1876,
    0.9342,
    -0.0247,
    0.3304,
    0.9435,
    -0.0247,
    0.3304,
    0.9435,
    -0.0247,
    0.3304,
    0.9435,
    0.5746,
    0.3304,
    0.7488,
    0.5746,
    0.3304,
    0.7488,
    0.5746,
    0.3304,
    0.7488,
    0.7947,
    0.1876,
    0.5773,
    0.7947,
    0.1876,
    0.5773,
    0.7947,
    0.1876,
    0.5773,
    0.8897,
    0.3304,
    0.3151,
    0.8897,
    0.3304,
    0.3151,
    0.8897,
    0.3304,
    0.3151,
    0.3066,
    0.1256,
    -0.9435,
    0.3066,
    0.1256,
    -0.9435,
    0.3066,
    0.1256,
    -0.9435,
    0.3035,
    -0.1876,
    -0.9342,
    0.3035,
    -0.1876,
    -0.9342,
    0.3035,
    -0.1876,
    -0.9342,
    0.0247,
    -0.3304,
    -0.9435,
    0.0247,
    -0.3304,
    -0.9435,
    0.0247,
    -0.3304,
    -0.9435,
    -0.8026,
    0.1256,
    -0.5831,
    -0.8026,
    0.1256,
    -0.5831,
    -0.8026,
    0.1256,
    -0.5831,
    -0.7947,
    -0.1876,
    -0.5773,
    -0.7947,
    -0.1876,
    -0.5773,
    -0.7947,
    -0.1876,
    -0.5773,
    -0.8897,
    -0.3304,
    -0.3151,
    -0.8897,
    -0.3304,
    -0.3151,
    -0.8897,
    -0.3304,
    -0.3151,
    -0.8026,
    0.1256,
    0.5831,
    -0.8026,
    0.1256,
    0.5831,
    -0.8026,
    0.1256,
    0.5831,
    -0.7947,
    -0.1876,
    0.5773,
    -0.7947,
    -0.1876,
    0.5773,
    -0.7947,
    -0.1876,
    0.5773,
    -0.5746,
    -0.3304,
    0.7488,
    -0.5746,
    -0.3304,
    0.7488,
    -0.5746,
    -0.3304,
    0.7488,
    0.3066,
    0.1256,
    0.9435,
    0.3066,
    0.1256,
    0.9435,
    0.3066,
    0.1256,
    0.9435,
    0.3035,
    -0.1876,
    0.9342,
    0.3035,
    -0.1876,
    0.9342,
    0.3035,
    -0.1876,
    0.9342,
    0.5346,
    -0.3304,
    0.7779,
    0.5346,
    -0.3304,
    0.7779,
    0.5346,
    -0.3304,
    0.7779,
    0.9921,
    0.1256,
    0,
    0.9921,
    0.1256,
    0,
    0.9921,
    0.1256,
    0,
    0.9822,
    -0.1876,
    0,
    0.9822,
    -0.1876,
    0,
    0.9822,
    -0.1876,
    0,
    0.905,
    -0.3304,
    -0.268,
    0.905,
    -0.3304,
    -0.268,
    0.905,
    -0.3304,
    -0.268,
    0.4713,
    -0.6617,
    -0.5831,
    0.4713,
    -0.6617,
    -0.5831,
    0.4713,
    -0.6617,
    -0.5831,
    0.1876,
    -0.7947,
    -0.5773,
    0.1876,
    -0.7947,
    -0.5773,
    0.1876,
    -0.7947,
    -0.5773,
    -0.0385,
    -0.6617,
    -0.7488,
    -0.0385,
    -0.6617,
    -0.7488,
    -0.0385,
    -0.6617,
    -0.7488,
    -0.4089,
    -0.6617,
    -0.6284,
    -0.4089,
    -0.6617,
    -0.6284,
    -0.4089,
    -0.6617,
    -0.6284,
    -0.4911,
    -0.7947,
    -0.3568,
    -0.4911,
    -0.7947,
    -0.3568,
    -0.4911,
    -0.7947,
    -0.3568,
    -0.724,
    -0.6617,
    -0.1947,
    -0.724,
    -0.6617,
    -0.1947,
    -0.724,
    -0.6617,
    -0.1947,
    -0.724,
    -0.6617,
    0.1947,
    -0.724,
    -0.6617,
    0.1947,
    -0.724,
    -0.6617,
    0.1947,
    -0.4911,
    -0.7947,
    0.3568,
    -0.4911,
    -0.7947,
    0.3568,
    -0.4911,
    -0.7947,
    0.3568,
    -0.4089,
    -0.6617,
    0.6284,
    -0.4089,
    -0.6617,
    0.6284,
    -0.4089,
    -0.6617,
    0.6284,
    0.7002,
    -0.6617,
    -0.268,
    0.7002,
    -0.6617,
    -0.268,
    0.7002,
    -0.6617,
    -0.268,
    0.6071,
    -0.7947,
    0,
    0.6071,
    -0.7947,
    0,
    0.6071,
    -0.7947,
    0,
    0.3313,
    -0.9435,
    0,
    0.3313,
    -0.9435,
    0,
    0.3313,
    -0.9435,
    0,
    -0.0385,
    -0.6617,
    0.7488,
    -0.0385,
    -0.6617,
    0.7488,
    -0.0385,
    -0.6617,
    0.7488,
    0.1876,
    -0.7947,
    0.5773,
    0.1876,
    -0.7947,
    0.5773,
    0.1876,
    -0.7947,
    0.5773,
    0.4713,
    -0.6617,
    0.5831,
    0.4713,
    -0.6617,
    0.5831,
    0.4713,
    -0.6617,
    0.5831,
]);

let uvs = Float32Array.from([
    0.248707,
    0.844099,
    0.193936,
    0.680686,
    0.324993,
    0.713788,
    0.127333,
    0.543157,
    0.193936,
    0.680686,
    0.04775,
    0.680684,
    0.248707,
    0.844099,
    0.324993,
    0.713788,
    0.331147,
    0.911137,
    0.248707,
    0.844099,
    0.331147,
    0.911137,
    0.203892,
    1,
    0.248707,
    0.844099,
    0.203892,
    1,
    0.119092,
    0.857572,
    0.127333,
    0.543157,
    0.04775,
    0.680684,
    0.017115,
    0.536898,
    0.443639,
    0.442899,
    0.404492,
    0.536898,
    0.335396,
    0.370986,
    0.661592,
    0.26845,
    0.558994,
    0.370988,
    0.558994,
    0.16591,
    0.75145,
    0.153584,
    0.881332,
    0.146536,
    0.801977,
    0.319609,
    0.108244,
    0.4429,
    0.000001,
    0.370991,
    0.095488,
    0.26845,
    0.797299,
    0.997247,
    0.714222,
    0.863745,
    0.860317,
    0.856507,
    0.443639,
    0.442899,
    0.335396,
    0.370986,
    0.430883,
    0.268448,
    0.661592,
    0.26845,
    0.558994,
    0.16591,
    0.670791,
    0.10254,
    0.75145,
    0.153584,
    0.801977,
    0.319609,
    0.671855,
    0.280037,
    0.108244,
    0.4429,
    0.095488,
    0.26845,
    0.223598,
    0.370988,
    0.910844,
    0.690482,
    0.780962,
    0.683434,
    0.86204,
    0.536898,
    0.662294,
    0.844097,
    0.604589,
    1,
    0.543201,
    0.857572,
    0.534961,
    0.543157,
    0.614544,
    0.680684,
    0.468358,
    0.680686,
    0.108243,
    0.093999,
    0.069096,
    0,
    0.207286,
    0,
    0.326196,
    0.268448,
    0.223598,
    0.16591,
    0.335396,
    0.102538,
    0.331147,
    0.911137,
    0.337301,
    0.713789,
    0.413586,
    0.844099,
    0.335396,
    0.102538,
    0.223598,
    0.16591,
    0.207286,
    0,
    0.223598,
    0.16591,
    0.108243,
    0.093999,
    0.207286,
    0,
    0.337301,
    0.713789,
    0.468358,
    0.680686,
    0.413586,
    0.844099,
    0.337301,
    0.713789,
    0.408642,
    0.536899,
    0.468358,
    0.680686,
    0.408642,
    0.536899,
    0.534961,
    0.543157,
    0.468358,
    0.680686,
    0.468358,
    0.680686,
    0.543201,
    0.857572,
    0.413586,
    0.844099,
    0.468358,
    0.680686,
    0.614544,
    0.680684,
    0.543201,
    0.857572,
    0.614544,
    0.680684,
    0.662294,
    0.844097,
    0.543201,
    0.857572,
    0.543201,
    0.857572,
    0.458402,
    1,
    0.413586,
    0.844099,
    0.543201,
    0.857572,
    0.604589,
    1,
    0.458402,
    1,
    0.991503,
    0.619404,
    0.910844,
    0.690482,
    0.86204,
    0.536898,
    0.458402,
    1,
    0.331147,
    0.911137,
    0.413586,
    0.844099,
    0.86204,
    0.536898,
    0.780962,
    0.683434,
    0.715946,
    0.544137,
    0.780962,
    0.683434,
    0.662294,
    0.702798,
    0.715946,
    0.544137,
    0.223598,
    0.370988,
    0.223598,
    0.16591,
    0.326196,
    0.268448,
    0.223598,
    0.370988,
    0.095488,
    0.26845,
    0.223598,
    0.16591,
    0.095488,
    0.26845,
    0.108243,
    0.093999,
    0.223598,
    0.16591,
    0,
    0.165912,
    0.069096,
    0,
    0.108243,
    0.093999,
    0.671855,
    0.280037,
    0.801977,
    0.319609,
    0.738596,
    0.460349,
    0.801977,
    0.319609,
    0.864995,
    0.460349,
    0.738596,
    0.460349,
    0.645178,
    0.536898,
    0.614544,
    0.680684,
    0.534961,
    0.543157,
    0.670791,
    0.10254,
    0.558994,
    0.16591,
    0.542681,
    0,
    0.558994,
    0.16591,
    0.443639,
    0.093998,
    0.542681,
    0,
    0.430883,
    0.268448,
    0.335396,
    0.165907,
    0.443639,
    0.093998,
    0.430883,
    0.268448,
    0.335396,
    0.370986,
    0.335396,
    0.165907,
    0.990438,
    0.816935,
    0.910844,
    0.690482,
    0.991503,
    0.619404,
    0.860317,
    0.856507,
    0.780962,
    0.683434,
    0.910844,
    0.690482,
    0.860317,
    0.856507,
    0.714222,
    0.863745,
    0.780962,
    0.683434,
    0.714222,
    0.863745,
    0.662294,
    0.702798,
    0.780962,
    0.683434,
    0.095488,
    0.26845,
    0,
    0.165912,
    0.108243,
    0.093999,
    0.095488,
    0.26845,
    0.000001,
    0.370991,
    0,
    0.165912,
    0.670791,
    0.082506,
    0.75145,
    0.153584,
    0.671855,
    0.280037,
    0.801977,
    0.319609,
    0.948072,
    0.326848,
    0.864995,
    0.460349,
    0.801977,
    0.319609,
    0.881332,
    0.146536,
    0.948072,
    0.326848,
    0.881332,
    0.146536,
    1,
    0.1659,
    0.948072,
    0.326848,
    0.558994,
    0.16591,
    0.430883,
    0.268448,
    0.443639,
    0.093998,
    0.558994,
    0.16591,
    0.558994,
    0.370988,
    0.430883,
    0.268448,
    0.558994,
    0.370988,
    0.443639,
    0.442899,
    0.430883,
    0.268448,
    0.990438,
    0.816935,
    0.860317,
    0.856507,
    0.910844,
    0.690482,
    0.990438,
    0.816935,
    0.923698,
    0.997247,
    0.860317,
    0.856507,
    0.923698,
    0.997247,
    0.797299,
    0.997247,
    0.860317,
    0.856507,
    0.335396,
    0.434358,
    0.223598,
    0.370988,
    0.326196,
    0.268448,
    0.335396,
    0.434358,
    0.207286,
    0.536898,
    0.223598,
    0.370988,
    0.207286,
    0.536898,
    0.108244,
    0.4429,
    0.223598,
    0.370988,
    0.119092,
    0.857572,
    0.057705,
    1,
    0,
    0.844097,
    0.119092,
    0.857572,
    0.203892,
    1,
    0.057705,
    1,
    0.800254,
    0,
    0.75145,
    0.153584,
    0.670791,
    0.082506,
    0.800254,
    0,
    0.881332,
    0.146536,
    0.75145,
    0.153584,
    0.800254,
    0,
    0.946348,
    0.00724,
    0.881332,
    0.146536,
    0.946348,
    0.00724,
    1,
    0.1659,
    0.881332,
    0.146536,
    0.670791,
    0.434359,
    0.558994,
    0.370988,
    0.661592,
    0.26845,
    0.670791,
    0.434359,
    0.542682,
    0.536898,
    0.558994,
    0.370988,
    0.542682,
    0.536898,
    0.443639,
    0.442899,
    0.558994,
    0.370988,
    0.04775,
    0.680684,
    0.119092,
    0.857572,
    0,
    0.844097,
    0.04775,
    0.680684,
    0.193936,
    0.680686,
    0.119092,
    0.857572,
    0.193936,
    0.680686,
    0.248707,
    0.844099,
    0.119092,
    0.857572,
    0.542682,
    0.536898,
    0.404492,
    0.536898,
    0.443639,
    0.442899,
    0.324993,
    0.713788,
    0.193936,
    0.680686,
    0.253651,
    0.536899,
    0.193936,
    0.680686,
    0.127333,
    0.543157,
    0.253651,
    0.536899,
]);

let indices = Uint16Array.from([
    239,
    238,
    237,
    236,
    235,
    234,
    233,
    232,
    231,
    230,
    229,
    228,
    227,
    226,
    225,
    224,
    223,
    222,
    221,
    220,
    219,
    218,
    217,
    216,
    215,
    214,
    213,
    212,
    211,
    210,
    209,
    208,
    207,
    206,
    205,
    204,
    203,
    202,
    201,
    200,
    199,
    198,
    197,
    196,
    195,
    194,
    193,
    192,
    191,
    190,
    189,
    188,
    187,
    186,
    185,
    184,
    183,
    182,
    181,
    180,
    179,
    178,
    177,
    176,
    175,
    174,
    173,
    172,
    171,
    170,
    169,
    168,
    167,
    166,
    165,
    164,
    163,
    162,
    161,
    160,
    159,
    158,
    157,
    156,
    155,
    154,
    153,
    152,
    151,
    150,
    149,
    148,
    147,
    146,
    145,
    144,
    143,
    142,
    141,
    140,
    139,
    138,
    137,
    136,
    135,
    134,
    133,
    132,
    131,
    130,
    129,
    128,
    127,
    126,
    125,
    124,
    123,
    122,
    121,
    120,
    119,
    118,
    117,
    116,
    115,
    114,
    113,
    112,
    111,
    110,
    109,
    108,
    107,
    106,
    105,
    104,
    103,
    102,
    101,
    100,
    99,
    98,
    97,
    96,
    95,
    94,
    93,
    92,
    91,
    90,
    89,
    88,
    87,
    86,
    85,
    84,
    83,
    82,
    81,
    80,
    79,
    78,
    77,
    76,
    75,
    74,
    73,
    72,
    71,
    70,
    69,
    68,
    67,
    66,
    65,
    64,
    63,
    62,
    61,
    60,
    59,
    58,
    57,
    56,
    55,
    54,
    53,
    52,
    51,
    50,
    49,
    48,
    47,
    46,
    45,
    44,
    43,
    42,
    41,
    40,
    39,
    38,
    37,
    36,
    35,
    34,
    33,
    32,
    31,
    30,
    29,
    28,
    27,
    26,
    25,
    24,
    23,
    22,
    21,
    20,
    19,
    18,
    17,
    16,
    15,
    14,
    13,
    12,
    11,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
    0,
]);
