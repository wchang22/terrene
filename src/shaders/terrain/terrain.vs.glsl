#version 300 es

#pragma glslify: perlinNoise = require(../noise/perlin-noise.glsl)

out vec2 fragUV;
out vec3 fragPos;

uniform vec2 colorMapOffset;
uniform vec2 colorMapScale;

uniform float terrainHeight;
uniform float terrainSpacing;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  worldPos.y += terrainHeight * perlinNoise(worldPos.xz * terrainSpacing);

  fragUV = (uv + colorMapOffset) * colorMapScale;
  fragPos = worldPos.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
