import React, { useMemo, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import update from 'immutability-helper';
import * as THREE from 'three';

import sceneParams from 'app/scene/params';
import TerrainShaderMaterial from 'app/scene/terrain/TerrainShaderMaterial';
import { getTerrainOptions } from 'state/terrain/selectors';
import { getWaterOptions } from 'state/water/selectors';

const Terrain = () => {
  const { terrain } = sceneParams;

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

  const waterOptions = useSelector(getWaterOptions);

  return (
    <group rotation={terrain.rotation}>
      <mesh
        position={terrain.position}
        material={terrainShaderMaterial}
      >
        <planeGeometry
          attach="geometry"
          args={[terrain.size, terrain.size, terrain.divisions, terrain.divisions]}
        />
      </mesh>
      <mesh position={[0, 0, waterOptions.height]}>
        <planeGeometry
          attach="geometry"
          args={[terrain.size, terrain.size, terrain.divisions, terrain.divisions]}
        />
        <meshPhysicalMaterial
          attach="material"
          color="lightblue"
          side={THREE.DoubleSide}
          transparent
          transparency={0.5}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

export default memo(Terrain);
