#version 300 es

// Adapted from https://29a.ch/slides/2012/webglwater/

in vec3 worldPos;
in vec2 texCoords;
in mat3 invViewMatrix;

out vec4 out_FragColor;
#define gl_FragColor out_FragColor

uniform sampler2D normalMap;
uniform float time;

uniform float kAmbient;
uniform float kDiffuse;
uniform float kSpecular;
uniform float shininess;
uniform vec3 baseColor;

#include <common>
#include <lights_pars_begin>
#include <fog_pars_fragment>

vec4 getNoise(vec2 uv) {
  vec2 uvs[4];
  uvs[0] = uv / 103.0 + vec2(time / 17.0, time / 29.0);
  uvs[1] = uv / 107.0 - vec2(time / -19.0, time / 31.0);
  uvs[2] = uv / vec2(897.0, 983.0) + vec2(time / 101.0, time / 97.0);
  uvs[3] = uv / vec2(991.0, 877.0) - vec2(time / 109.0, time / -113.0);

  vec4 noise = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    noise += texture(normalMap, uvs[i] + vec2(time) / 100.0);
  }
  return 0.5 * noise - 1.0;
}

#if NUM_DIR_LIGHTS > 0
vec3 sunlight(DirectionalLight sun, vec3 viewDir, vec3 normalDir, vec3 diffuseColor) {
  // `sun.direction` is in view space
  vec3 lightDir = normalize(invViewMatrix * sun.direction);
  vec3 halfDir = normalize(lightDir + viewDir);

  vec3 diffuse = kDiffuse * diffuseColor * max(dot(normalDir, lightDir), 0.0);
  vec3 specular = vec3(kSpecular * pow(max(dot(normalDir, halfDir), 0.0), shininess));

  return (diffuse + specular) * sun.color;
}
#endif

void main() {
  vec4 noise = getNoise(worldPos.xz * 50.0);
  vec3 normalDir = normalize(noise.xzy * vec3(2.0, 1.0, 2.0));
  vec3 viewDir = normalize(cameraPosition - worldPos);

  vec3 color = kAmbient * baseColor;
#if NUM_DIR_LIGHTS > 0
  for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
    color += sunlight(directionalLights[i], viewDir, normalDir, baseColor);
  }
#endif
  out_FragColor = vec4(color, 1.0);

  #include <fog_fragment>
}