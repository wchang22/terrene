import React, {
  useMemo,
  useEffect,
  useRef,
  memo,
} from 'react';
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import { useThree } from 'react-three-fiber';

import sceneParams from 'app/scene/params';
import TerrainGenerator from 'app/scene/terrain/TerrainGenerator';
import TerrainShaderMaterial from 'app/scene/terrain/TerrainShaderMaterial';
import { getTerrainOptions } from 'state/terrain/selectors';
import { getWaterOptions } from 'state/water/selectors';

const Terrain = () => {
  const plane = useRef();
  const { gl } = useThree();

  const { terrain } = sceneParams;

  const terrainShaderMaterial = useMemo(() => new TerrainShaderMaterial(), []);
  const terrainGenerator = useMemo(() => new TerrainGenerator(), []);

  const terrainOptions = useSelector(getTerrainOptions);

  useEffect(() => {
    const context = gl.getContext();
    const { geometry, geometry: { vertices } } = plane.current;

    const vertexBatchSize = Math.min(context.getParameter(context.MAX_TEXTURE_SIZE),
      vertices.length);

    for (let i = 0; i < vertices.length; i += vertexBatchSize) {
      const vertexBatch = vertices.slice(i, i + vertexBatchSize);
      const terrainElevations = terrainGenerator.generateElevation(
        vertexBatch.map((v) => [v.x, v.y]),
        vertexBatch.length,
        terrainOptions.heightMajor,
        terrainOptions.spacingMajor,
        terrainOptions.heightMinor,
        terrainOptions.spacingMinor,
      );
      vertexBatch.forEach((vertex, index) => vertex.setZ(terrainElevations[index]));
    }
    geometry.verticesNeedUpdate = true;
  }, [gl, terrainGenerator, terrainOptions]);

  const waterOptions = useSelector(getWaterOptions);

  return (
    <group rotation={terrain.rotation}>
      <mesh
        ref={plane}
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
