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
    });

    const { terrain } = sceneParams;

    const textureLoader = new THREE.TextureLoader();

    const colorMap = textureLoader.load(terrain.colorMap);
    colorMap.wrapS = THREE.RepeatWrapping;
    colorMap.wrapT = THREE.RepeatWrapping;

    Object.assign(this.uniforms,
      THREE.UniformsLib.fog,
      {
        colorMap: { type: 't', value: colorMap },
        colorMapOffset: { type: 'v2', value: [0, 0] },
        colorMapScale: { type: 'v2', value: terrain.colorMapScale },

        terrainHeight: { type: 'f', value: terrain.height },
        terrainSpacing: { type: 'f', value: terrain.spacing },
      });
  }
}

export default TerrainShaderMaterial;
