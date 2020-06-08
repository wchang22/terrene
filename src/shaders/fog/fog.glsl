uniform vec3 fogColor;
uniform float fogDensity;

vec3 addFog(vec3 color, float dist) {
  float fogLevel = 1.0 - 1.0 / exp(dist * fogDensity);
  return mix(color, fogColor, fogLevel);
}

#pragma glslify: export(addFog)