const terrainMap = (type) => `/assets/aerial_grass_rock/aerial_grass_rock_${type}_2k.jpg`;

const params = Object.freeze({
  camera: {
    position: [0, 1, 2.5],
    movementSpeed: 5,
  },
  lights: {
    directional: [
      {
        direction: [0, 1, 0],
        intensity: 0.75,
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
    size: 25,
    divisions: 80,
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    colorMap: terrainMap('diff'),
    colorMapScale: [10, 10],
    normalMap: terrainMap('nor'),
    displacementMap: terrainMap('disp'),
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
    uniforms: {
      height: -0.3,
    },
  },
  tileSideLength: 3,
  epsilon: 1e-7,
});

export default params;
