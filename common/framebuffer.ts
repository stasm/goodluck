import {resize_texture_depth24, resize_texture_rgba32f, resize_texture_rgba8} from "./texture.js";
import {
    GL_COLOR_ATTACHMENT0,
    GL_COLOR_ATTACHMENT1,
    GL_DEPTH_ATTACHMENT,
    GL_FRAMEBUFFER,
    GL_FRAMEBUFFER_COMPLETE,
    GL_TEXTURE_2D,
} from "./webgl.js";

export interface RenderTarget {
    Framebuffer: WebGLFramebuffer;
    Width: number;
    Height: number;
    DiffuseTexture: WebGLTexture;
    NormalTexture: WebGLTexture;
    DepthTexture: WebGLTexture;
}

export function create_render_target(gl: WebGL2RenderingContext, width: number, height: number) {
    let target: RenderTarget = {
        Framebuffer: gl.createFramebuffer()!,
        Width: width,
        Height: height,
        DiffuseTexture: resize_texture_rgba8(gl, gl.createTexture()!, width, height),
        NormalTexture: resize_texture_rgba32f(gl, gl.createTexture()!, width, height),
        DepthTexture: resize_texture_depth24(gl, gl.createTexture()!, width, height),
    };

    gl.bindFramebuffer(GL_FRAMEBUFFER, target.Framebuffer);
    gl.framebufferTexture2D(
        GL_FRAMEBUFFER,
        GL_COLOR_ATTACHMENT0,
        GL_TEXTURE_2D,
        target.DiffuseTexture,
        0
    );
    gl.framebufferTexture2D(
        GL_FRAMEBUFFER,
        GL_COLOR_ATTACHMENT1,
        GL_TEXTURE_2D,
        target.NormalTexture,
        0
    );
    gl.framebufferTexture2D(
        GL_FRAMEBUFFER,
        GL_DEPTH_ATTACHMENT,
        GL_TEXTURE_2D,
        target.DepthTexture,
        0
    );

    gl.drawBuffers([GL_COLOR_ATTACHMENT0, GL_COLOR_ATTACHMENT1]);

    let status = gl.checkFramebufferStatus(GL_FRAMEBUFFER);
    if (status != GL_FRAMEBUFFER_COMPLETE) {
        throw new Error(`Failed to set up the framebuffer (${status}).`);
    }

    return target;
}

export function resize_render_target(
    gl: WebGL2RenderingContext,
    target: RenderTarget,
    width: number,
    height: number
) {
    target.Width = width;
    target.Height = height;

    resize_texture_rgba8(gl, target.DiffuseTexture, target.Width, target.Height);
    resize_texture_rgba32f(gl, target.NormalTexture, target.Width, target.Height);
    resize_texture_depth24(gl, target.DepthTexture, target.Width, target.Height);
}
