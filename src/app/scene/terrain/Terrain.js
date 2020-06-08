import React, { useMemo, memo } from 'react';

import sceneParams from 'app/scene/params';
import TerrainShaderMaterial from 'app/scene/terrain/TerrainShaderMaterial';

const Terrain = () => {
  const {
    position, size, divisions,
  } = sceneParams.terrain;

  const terrainShaderMaterial = useMemo(() => new TerrainShaderMaterial(), []);

  return (
    <group>
      <mesh
        position={position}
        rotation={[Math.PI / 2, 0, 0]}
        material={terrainShaderMaterial}
      >
        <planeGeometry
          attach="geometry"
          args={[size, size, divisions, divisions]}
        />
      </mesh>
    </group>
  );
};

export default memo(Terrain);
