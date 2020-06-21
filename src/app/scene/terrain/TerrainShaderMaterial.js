import * as THREE from 'three';

import sceneParams from 'app/scene/params';

import terrainVS from 'shaders/terrain/terrain.vs.glsl';
import terrainFS from 'shaders/terrain/terrain.fs.glsl';

class TerrainShaderMaterial extends THREE.ShaderMaterial {
  constructor(props) {
    super({
      ...props,
      side: THREE.DoubleSide,
      vertexShader: terrainVS,
      fragmentShader: terrainFS,
      lights: true,
      fog: true,
    });

    const { terrain } = sceneParams;

    const textureLoader = new THREE.TextureLoader();

    const colorMap = textureLoader.load(terrain.colorMap);
    colorMap.wrapS = THREE.RepeatWrapping;
    colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(...terrain.colorMapScale);
    colorMap.updateMatrix();

    const normalMap = textureLoader.load(terrain.normalMap);
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;

    this.map = colorMap;
    this.normalMap = normalMap;
    this.normalMapType = THREE.TangentSpaceNormalMap;

    Object.assign(this.uniforms,
      THREE.UniformsLib.lights,
      THREE.UniformsLib.fog,
      {
        map: { value: colorMap },
        uvTransform: { value: colorMap.matrix },
        normalMap: { value: normalMap },
        normalScale: { value: new THREE.Vector2(1, 1) },
        kAmbient: { value: terrain.uniforms.kAmbient },
        kDiffuse: { value: terrain.uniforms.kDiffuse },
        kSpecular: { value: terrain.uniforms.kSpecular },
        shininess: { value: terrain.uniforms.shininess },
      });
  }
}

export default TerrainShaderMaterial;
