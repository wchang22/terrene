#version 300 es

#pragma glslify: addFog = require(../fog/fog.glsl)

in vec2 fragUV;
in vec3 fragPos;

out vec4 out_FragColor;

uniform sampler2D colorMap;

void main() {
  vec3 color = texture(colorMap, fragUV).xyz;

#ifdef USE_FOG
  color = addFog(color, distance(fragPos, cameraPosition));
#endif

  out_FragColor = vec4(color, 1.0);
}
