#version 300 es

out vec3 worldPos;
out vec3 vViewPosition;
out vec3 vNormal;
out vec2 vUv;
out mat3 invViewMatrix;

uniform mat3 uvTransform;

#include <fog_pars_vertex>

void main() {
  vec4 worldPos4 = modelMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * worldPos4;

  worldPos = worldPos4.xyz;
  vViewPosition = -mvPosition.xyz;
  vNormal = normalize(transpose(inverse(mat3(modelMatrix))) * normal);
  vUv = (uvTransform * vec3(uv, 1.0)).xy;

  invViewMatrix = inverse(mat3(viewMatrix));

  gl_Position = projectionMatrix * mvPosition;

  #include <fog_vertex>
}