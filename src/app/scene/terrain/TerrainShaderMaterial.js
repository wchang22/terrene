import * as THREE from 'three';

import sceneParams from 'app/scene/params';

class TerrainShaderMaterial extends THREE.MeshStandardMaterial {
  constructor() {
    super({
      side: THREE.DoubleSide,
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
    this.metalness = terrain.metalness;
  }
}

export default TerrainShaderMaterial;
