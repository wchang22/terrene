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
  },
  fog: {
    color: 'lightgrey',
    density: 0.1,
  },
  grid: {
    size: 200,
    divisions: 500,
    position: [0, 0, 0],
    centerline_color: 'grey',
    grid_color: 'grey',
  },
});

export default params;
