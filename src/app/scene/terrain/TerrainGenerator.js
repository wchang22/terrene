import { GPU } from 'gpu.js';

import perlinNoiseShader from 'shaders/noise/perlin-noise.glsl';

class TerrainGenerator {
  constructor() {
    this.gpu = new GPU();

    this.elevationKernel = this.gpu.createKernel(`function (
      vertices, position, heightMajor, spacingMajor, heightMinor, spacingMinor,
    ) {
      const vertex = vertices[this.thread.x];
      const x = vertex[0] + position[0];
      const z = vertex[1] + position[1];

      let elevation = 0.0;
      /* eslint-disable no-undef */
      elevation += heightMajor * perlinNoise([x * spacingMajor, z * spacingMajor]);
      elevation += heightMinor * perlinNoise([x * spacingMinor, z * spacingMinor]);
      /* eslint-enable no-undef */
      return elevation;
    }`)
      .setDynamicOutput(true)
      .setArgumentTypes({
        vertices: 'Array1D(2)',
        position: 'Array(2)',
        heightMajor: 'Float',
        spacingMajor: 'Float',
        heightMinor: 'Float',
        spacingMinor: 'Float',
      })
      .addNativeFunction('perlinNoise', perlinNoiseShader);
  }

  generateElevation(
    vertices, numVertices, position, heightMajor, spacingMajor, heightMinor, spacingMinor,
  ) {
    this.elevationKernel.setOutput([numVertices]);
    return this.elevationKernel(
      vertices, position, heightMajor, spacingMajor, heightMinor, spacingMinor,
    );
  }
}

export default TerrainGenerator;
