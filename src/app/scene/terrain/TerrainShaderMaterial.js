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

    const { terrain, terrain: { uniforms } } = sceneParams;

    const textureLoader = new THREE.TextureLoader();

    const colorMap = textureLoader.load(terrain.colorMap);
    colorMap.wrapS = THREE.RepeatWrapping;
    colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat = new THREE.Vector2(...terrain.colorMapScale);
    colorMap.offset = new THREE.Vector2();
    colorMap.updateMatrix();

    Object.assign(this.uniforms,
      THREE.UniformsLib.fog,
      {
        colorMap: { value: colorMap },
        uvTransform: { value: colorMap.matrix },

        terrainHeight: { value: uniforms.height },
        terrainSpacing: { value: uniforms.spacing },
      });
  }
}

export default TerrainShaderMaterial;
