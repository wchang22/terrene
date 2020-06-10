import * as THREE from 'three';

import sceneParams from 'app/scene/params';

import terrainVS from 'shaders/terrain/terrain.vs.glsl';
import terrainFS from 'shaders/terrain/terrain.fs.glsl';

class TerrainShaderMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: terrainVS,
      fragmentShader: terrainFS,
      side: THREE.DoubleSide,
      fog: true,
      lights: true,
    });

    const { terrain, terrain: { uniforms } } = sceneParams;

    const textureLoader = new THREE.TextureLoader();

    const colorMap = textureLoader.load(terrain.colorMap);
    colorMap.wrapS = THREE.RepeatWrapping;
    colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(...terrain.colorMapScale);
    colorMap.updateMatrix();

    const normalMap = textureLoader.load(terrain.normalMap);
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;

    const displacementMap = textureLoader.load(terrain.displacementMap);
    displacementMap.wrapS = THREE.RepeatWrapping;
    displacementMap.wrapT = THREE.RepeatWrapping;

    const roughnessMap = textureLoader.load(terrain.roughnessMap);
    roughnessMap.wrapS = THREE.RepeatWrapping;
    roughnessMap.wrapT = THREE.RepeatWrapping;

    this.map = colorMap;
    this.normalMap = normalMap;
    this.normalMapType = THREE.TangentSpaceNormalMap;
    this.displacementMap = displacementMap;
    this.roughnessMap = roughnessMap;

    Object.assign(this.uniforms,
      THREE.ShaderLib.standard.uniforms,
      {
        map: { value: colorMap },
        normalMap: { value: normalMap },
        displacementMap: { value: displacementMap },
        uvTransform: { value: colorMap.matrix },
        roughnessMap: { value: roughnessMap },
        metalness: { value: terrain.metalness },

        terrainHeightMajor: { value: uniforms.heightMajor },
        terrainSpacingMajor: { value: uniforms.spacingMajor },
        terrainHeightMinor: { value: uniforms.heightMinor },
        terrainSpacingMinor: { value: uniforms.spacingMinor },
      });
  }
}

export default TerrainShaderMaterial;
