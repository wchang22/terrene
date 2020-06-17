#version 300 es

out vec3 worldPos;
out vec2 texCoords;
out mat3 invViewMatrix;

#include <fog_pars_vertex>

void main() {
  vec4 worldPos4 = modelMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * worldPos4;
  worldPos = worldPos4.xyz;
  texCoords = uv;
  invViewMatrix = inverse(mat3(viewMatrix));

  gl_Position = projectionMatrix * mvPosition;

  #include <fog_vertex>
}