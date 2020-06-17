import React, { memo, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useThree, useFrame } from 'react-three-fiber';

import sceneParams from 'app/scene/params';
import Terrain from 'app/scene/terrain';
import Water from 'app/scene/water';
import { getFogOptions } from 'state/fog/selectors';
import Tiles from 'app/scene/tiles';

const Scene = () => {
  const { camera } = useThree();
  const { terrain, lights: { hemisphere, directional }, tileSideLength } = sceneParams;

  const fogOptions = useSelector(getFogOptions);

  const tiles = useMemo(() => new Tiles(tileSideLength, terrain.size),
    [tileSideLength, terrain.size]);
  const [tileOffsets, setTileOffsets] = useState(tiles.getOffsets(0, 0));

  useFrame(() => {
    const { position } = camera;
    const x = position.x + terrain.size / 2;
    const y = -position.z + terrain.size / 2;

    const newTileOffsets = tiles.getOffsets(x, y);
    if (!Tiles.offsetsAreEqual(newTileOffsets, tileOffsets)) {
      setTileOffsets(newTileOffsets);
    }
  });

  return (
    <>
      <hemisphereLight
        args={[hemisphere.skyColor, hemisphere.groundColor, hemisphere.intensity]}
      />
      {
        directional.map(({ direction, intensity }) => (
          <directionalLight
            position={direction}
            intensity={intensity}
            key={`${direction.toArray()}-${intensity}`}
          />
        ))
      }
      <fogExp2
        attach="fog"
        args={[fogOptions.color, fogOptions.density]}
      />
      <Terrain tileOffsets={tileOffsets} numTiles={tiles.numTiles} />
      <Water tileOffsets={tileOffsets} numTiles={tiles.numTiles} />
    </>
  );
};

export default memo(Scene);
