#version 300 es

in vec3 worldPos;
in vec3 vViewPosition;
in vec3 vNormal;
in vec2 vUv;
in mat3 invViewMatrix;

out vec4 out_FragColor;
#define gl_FragColor out_FragColor

uniform sampler2D map;

uniform float kAmbient;
uniform float kDiffuse;
uniform float kSpecular;
uniform float shininess;

#include <common>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <normalmap_pars_fragment>

#pragma glslify: computeLighting = require('../lighting/directional-blinn-phong.glsl')

void main() {
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>

  vec3 viewDir = normalize(cameraPosition - worldPos);

  vec3 diffuseColor = texture(map, vUv).xyz;
  vec3 color = kAmbient * diffuseColor;

  for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
    color += computeLighting(directionalLights[i], invViewMatrix,
                             viewDir, normal,
                             diffuseColor, kDiffuse, kSpecular, shininess);
  }

  out_FragColor = vec4(color, 1.0);

  #include <fog_fragment>
}