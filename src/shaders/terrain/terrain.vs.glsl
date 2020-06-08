#version 300 es

#pragma glslify: perlinNoise = require(../noise/perlin-noise.glsl)

#define USE_UV
#include <fog_pars_vertex>
#include <uv_pars_vertex>

uniform float terrainHeight;
uniform float terrainSpacing;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  worldPos.y += terrainHeight * perlinNoise(worldPos.xz * terrainSpacing);

  vec4 mvPosition = viewMatrix * worldPos;
  #include <fog_vertex>
  #include <uv_vertex>

  gl_Position = projectionMatrix * mvPosition;
}
