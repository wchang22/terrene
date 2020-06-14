import React, {
  useMemo,
  useEffect,
  useRef,
  createRef,
  memo,
} from 'react';
import { useSelector } from 'react-redux';
import { useThree, extend } from 'react-three-fiber';
import PropTypes from 'prop-types';

import sceneParams from 'app/scene/params';
import TerrainGenerator from 'app/scene/terrain/TerrainGenerator';
import TerrainShaderMaterial from 'app/scene/terrain/TerrainShaderMaterial';
import { getTerrainOptions } from 'state/terrain/selectors';

extend({ TerrainShaderMaterial });

const tiles = [...new Array(4).keys()];

const Terrain = ({ tileOffsets }) => {
  const planes = useRef(tiles.map(() => createRef()));
  const { gl } = useThree();
  const { terrain } = sceneParams;

  const terrainGenerator = useMemo(() => new TerrainGenerator(), []);
  const terrainOptions = useSelector(getTerrainOptions);

  useEffect(() => {
    const context = gl.getContext();
    const maxTextureSize = context.getParameter(context.MAX_TEXTURE_SIZE);

    tileOffsets.forEach((offset, offsetIndex) => {
      const { position, geometry, geometry: { vertices } } = planes.current[offsetIndex].current;
      position.set(...offset, 0);

      const vertexBatchSize = Math.min(maxTextureSize, vertices.length);

      for (let i = 0; i < vertices.length; i += vertexBatchSize) {
        const vertexBatch = vertices.slice(i, i + vertexBatchSize);
        const terrainElevations = terrainGenerator.generateElevation(
          vertexBatch.map((v) => [v.x, v.y]),
          vertexBatch.length,
          offset,
          terrainOptions.heightMajor,
          terrainOptions.spacingMajor,
          terrainOptions.heightMinor,
          terrainOptions.spacingMinor,
        );
        vertexBatch.forEach((vertex, index) => vertex.setZ(terrainElevations[index]));
      }
      geometry.verticesNeedUpdate = true;
    });
  }, [gl, terrainGenerator, terrainOptions, tileOffsets]);

  return (
    <group rotation={terrain.rotation}>
      {
        tiles.map((value, index) => (
          <mesh
            ref={planes.current[index]}
            key={String(value)}
          >
            <planeGeometry
              attach="geometry"
              args={[terrain.size, terrain.size, terrain.divisions, terrain.divisions]}
            />
            <terrainShaderMaterial attach="material" />
          </mesh>
        ))
      }
    </group>
  );
};

Terrain.propTypes = {
  tileOffsets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default memo(Terrain);
