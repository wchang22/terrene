import React, {
  useMemo,
  useEffect,
  useRef,
  memo,
} from 'react';
import { useSelector } from 'react-redux';
import { useThree } from 'react-three-fiber';

import sceneParams from 'app/scene/params';
import TerrainGenerator from 'app/scene/terrain/TerrainGenerator';
import TerrainShaderMaterial from 'app/scene/terrain/TerrainShaderMaterial';
import { getTerrainOptions } from 'state/terrain/selectors';

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

  return (
    <mesh
      ref={plane}
      position={terrain.position}
      material={terrainShaderMaterial}
      rotation={terrain.rotation}
    >
      <planeGeometry
        attach="geometry"
        args={[terrain.size, terrain.size, terrain.divisions, terrain.divisions]}
      />
    </mesh>
  );
};

export default memo(Terrain);
