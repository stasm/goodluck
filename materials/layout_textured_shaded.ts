export interface TexturedShadedLayout {
    // Uniforms
    Pv: WebGLUniformLocation;
    World: WebGLUniformLocation;
    Self: WebGLUniformLocation;

    DiffuseMap: WebGLUniformLocation;
    DiffuseColor: WebGLUniformLocation;
    SpecularColor: WebGLUniformLocation;
    Shininess: WebGLUniformLocation;

    Eye: WebGLUniformLocation;
    LightPositions: WebGLUniformLocation;
    LightDetails: WebGLUniformLocation;

    // Attributes
    VertexPosition: GLint;
    VertexTexCoord: GLint;
    VertexNormal: GLint;
}