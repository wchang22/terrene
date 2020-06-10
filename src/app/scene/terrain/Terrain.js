import React, { useMemo, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import update from 'immutability-helper';

import sceneParams from 'app/scene/params';
import TerrainShaderMaterial from 'app/scene/terrain/TerrainShaderMaterial';
import { getTerrainOptions } from 'state/terrain/selectors';

const Terrain = () => {
  const {
    position, size, divisions,
  } = sceneParams.terrain;

  const terrainShaderMaterial = useMemo(() => new TerrainShaderMaterial(), []);

  const terrainOptions = useSelector(getTerrainOptions);

  useEffect(() => {
    const { uniforms } = terrainShaderMaterial;
    Object.assign(uniforms, update(uniforms, {
      terrainHeightMajor: {
        value: { $set: terrainOptions.heightMajor },
      },
      terrainSpacingMajor: {
        value: { $set: terrainOptions.spacingMajor },
      },
      terrainHeightMinor: {
        value: { $set: terrainOptions.heightMinor },
      },
      terrainSpacingMinor: {
        value: { $set: terrainOptions.spacingMinor },
      },
    }));
  }, [terrainShaderMaterial, terrainOptions]);

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
