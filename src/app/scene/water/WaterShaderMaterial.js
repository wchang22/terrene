import * as THREE from 'three';

import sceneParams from 'app/scene/params';

import waterVS from 'shaders/water/water.vs.glsl';
import waterFS from 'shaders/water/water.fs.glsl';

class WaterShaderMaterial extends THREE.ShaderMaterial {
  constructor(props) {
    super({
      ...props,
      side: THREE.DoubleSide,
      vertexShader: waterVS,
      fragmentShader: waterFS,
      lights: true,
      fog: true,
    });

    const { water } = sceneParams;

    const textureLoader = new THREE.TextureLoader();

    const normalMap = textureLoader.load(water.normalMap);
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;

    Object.assign(this.uniforms,
      THREE.UniformsLib.lights,
      THREE.UniformsLib.fog,
      {
        normalMap: { value: normalMap },
        kAmbient: { value: water.uniforms.kAmbient },
        kDiffuse: { value: water.uniforms.kDiffuse },
        kSpecular: { value: water.uniforms.kSpecular },
        shininess: { value: water.uniforms.shininess },
        baseColor: { value: new THREE.Color(water.uniforms.baseColor) },
        time: { value: 0 },
      });
  }
}

export default WaterShaderMaterial;
