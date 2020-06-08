#version 300 es

out vec4 out_FragColor;
#define gl_FragColor out_FragColor

#define USE_UV
#include <fog_pars_fragment>
#include <uv_pars_fragment>

uniform sampler2D colorMap;

void main() {
  vec3 color = texture(colorMap, vUv).xyz;

  out_FragColor = vec4(color, 1.0);

  #include <fog_fragment>
}
