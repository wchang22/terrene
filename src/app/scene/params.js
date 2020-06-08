const params = Object.freeze({
  camera: {
    target: [0, 0, 0],
    position: [0, 1, 2.5],
    zoomSpeed: 2.0,
    dampingFactor: 0.1,
  },
  lights: {
    directional: [
      {
        direction: [1, 1, 1],
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
    size: 30,
    divisions: 250,
    position: [0, 0, 0],
    colorMap: '/assets/aerial_grass_rock/aerial_grass_rock_diff_2k.jpg',
    colorMapScale: [10, 10],
    normalMap: '/assets/aerial_grass_rock/aerial_grass_rock_nor_2k.jpg',
    height: 3.0,
    spacing: 0.25,
  },
});

export default params;
