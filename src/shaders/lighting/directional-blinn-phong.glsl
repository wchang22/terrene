vec3 computeLighting(DirectionalLight light, mat3 invViewMatrix,
                     vec3 viewDir, vec3 normalDir, vec3 diffuseColor,
                     float kDiffuse, float kSpecular, float shininess) {
  // `sun.direction` is in view space
  vec3 lightDir = normalize(invViewMatrix * light.direction);
  vec3 halfDir = normalize(lightDir + viewDir);

  vec3 diffuse = kDiffuse * diffuseColor * max(dot(normalDir, lightDir), 0.0);
  vec3 specular = vec3(kSpecular * pow(max(dot(normalDir, halfDir), 0.0), shininess));

  return (diffuse + specular) * light.color;
}

#pragma glslify: export(computeLighting)