import React, {
  useMemo,
  useEffect,
  useRef,
  createRef,
  memo,
} from 'react';
import { useSelector } from 'react-redux';
import { useThree } from 'react-three-fiber';
import PropTypes from 'prop-types';

import sceneParams from 'app/scene/params';
import TerrainGenerator from 'app/scene/terrain/TerrainGenerator';
import TerrainShaderMaterial from 'app/scene/terrain/TerrainShaderMaterial';
import { getTerrainOptions } from 'state/terrain/selectors';

const Terrain = ({ tileOffsets, numTiles }) => {
  const tiles = useMemo(() => [...new Array(numTiles).keys()], [numTiles]);
  const planes = useRef(tiles.map(() => createRef()));
  const { gl } = useThree();
  const { terrain } = sceneParams;

  const terrainGenerator = useMemo(() => new TerrainGenerator(), []);
  const terrainShaderMaterial = useMemo(() => new TerrainShaderMaterial(), []);
  const terrainOptions = useSelector(getTerrainOptions);

  useEffect(() => {
    const context = gl.getContext();
    const maxTextureSize = context.getParameter(context.MAX_TEXTURE_SIZE);

    tileOffsets.forEach((offset, offsetIndex) => {
      const { position, geometry: { attributes } } = planes.current[offsetIndex].current;
      position.set(...offset, 0);

      const { array } = attributes.position;
      const vertices = [];
      // Create vertex array of x, y elements from flat position array
      for (let i = 0; i < array.length; i += 3) {
        vertices.push([array[i], array[i + 1]]);
      }

      const vertexBatchSize = Math.min(maxTextureSize, vertices.length);
      for (let i = 0; i < vertices.length; i += vertexBatchSize) {
        const vertexBatch = vertices.slice(i, i + vertexBatchSize);
        const terrainElevations = terrainGenerator.generateElevation(
          vertexBatch,
          vertexBatch.length,
          offset,
          terrainOptions.heightMajor,
          terrainOptions.spacingMajor,
          terrainOptions.heightMinor,
          terrainOptions.spacingMinor,
        );
        // Set the z components in the position array
        for (let j = 0; j < vertexBatch.length; j += 1) {
          array[(j + i) * 3 + 2] = terrainElevations[j];
        }
      }
      attributes.position.needsUpdate = true;
    });
  }, [gl, terrainGenerator, terrainOptions, tileOffsets]);

  return (
    <group rotation={terrain.rotation}>
      {
        tiles.map((value, index) => (
          <mesh
            ref={planes.current[index]}
            key={String(value)}
            material={terrainShaderMaterial}
          >
            <planeBufferGeometry
              attach="geometry"
              args={[terrain.size, terrain.size, terrain.divisions, terrain.divisions]}
            />
          </mesh>
        ))
      }
    </group>
  );
};

Terrain.propTypes = {
  tileOffsets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  numTiles: PropTypes.number.isRequired,
};

export default memo(Terrain);
