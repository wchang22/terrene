import * as THREE from 'three';

const terrainMap = (type) => (
  `${process.env.PUBLIC_URL}/assets/aerial_grass_rock/aerial_grass_rock_${type}_2k.jpg`
);
const waterMap = (type) => (
  `${process.env.PUBLIC_URL}/assets/water/${type}.jpg`
);

const params = Object.freeze({
  camera: {
    position: [0, 1, 2.5],
    movementSpeed: 5,
  },
  lights: {
    directional: [
      {
        direction: new THREE.Vector3(0.5, 1, -0.5).normalize(),
        intensity: 0.4,
      },
      {
        direction: new THREE.Vector3(0.5, 1, 0.5).normalize(),
        intensity: 0.4,
      },
      {
        direction: new THREE.Vector3(-0.5, 1, 0).normalize(),
        intensity: 0.4,
      },
    ],
    hemisphere: {
      skyColor: 'lightblue',
      groundColor: 'brown',
      intensity: 0.2,
    },
  },
  fog: {
    color: 'lightgrey',
    density: 0.05,
  },
  terrain: {
    size: 20,
    divisions: 150,
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    colorMap: terrainMap('diff'),
    colorMapScale: [10, 10],
    normalMap: terrainMap('nor'),
    roughnessMap: terrainMap('rough'),
    metalness: 0.5,
    uniforms: {
      heightMajor: 3.0,
      spacingMajor: 0.25,
      heightMinor: 0.3,
      spacingMinor: 1.25,
    },
  },
  water: {
    normalMap: waterMap('nor'),
    uniforms: {
      height: -0.3,
      speed: 2,
      kAmbient: 0.1,
      kDiffuse: 0.6,
      kSpecular: 0.8,
      shininess: 128.0,
      baseColor: 'lightblue',
    },
  },
  tileSideLength: 3,
  epsilon: 1e-7,
});

export default params;
