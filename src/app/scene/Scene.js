import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useThree, useFrame } from 'react-three-fiber';

import sceneParams from 'app/scene/params';
import Terrain from 'app/scene/terrain';
import Water from 'app/scene/water';
import { getFogOptions } from 'state/fog/selectors';

const { terrain, lights: { hemisphere, directional } } = sceneParams;
const initialOffsets = [
  [0, 0],
  [terrain.size, 0],
  [0, terrain.size],
  [terrain.size, terrain.size],
];

const Scene = () => {
  const { camera } = useThree();

  const fogOptions = useSelector(getFogOptions);
  const [tileOffsets, setTileOffsets] = useState(initialOffsets);

  useFrame(() => {
    const { position } = camera;
    const x = Math.floor(position.x / terrain.size) * terrain.size;
    const y = -Math.floor(position.z / terrain.size) * terrain.size;

    if (Math.abs(x - tileOffsets[0][0]) < sceneParams.epsilon
      && Math.abs(y - tileOffsets[0][1]) < sceneParams.epsilon) {
      return;
    }

    setTileOffsets([
      [x, y],
      [x + terrain.size, y],
      [x, y - terrain.size],
      [x + terrain.size, y - terrain.size],
    ]);
  });

  return (
    <>
      <hemisphereLight
        args={[hemisphere.skyColor, hemisphere.groundColor, hemisphere.intensity]}
      />
      {
        directional.map(({ direction, intensity }) => (
          <directionalLight
            direction={direction}
            intensity={intensity}
            key={`${direction}-${intensity}`}
          />
        ))
      }
      <fogExp2
        attach="fog"
        args={[fogOptions.color, fogOptions.density]}
      />
      <Terrain tileOffsets={tileOffsets} />
      <Water tileOffsets={tileOffsets} />
    </>
  );
};

export default memo(Scene);
