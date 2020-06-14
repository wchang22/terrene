import React, {
  useMemo,
  useEffect,
  useRef,
  createRef,
  memo,
} from 'react';
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import PropTypes from 'prop-types';

import sceneParams from 'app/scene/params';
import { getWaterOptions } from 'state/water/selectors';

const Water = ({ tileOffsets, numTiles }) => {
  const tiles = useMemo(() => [...new Array(numTiles).keys()], [numTiles]);
  const planes = useRef(tiles.map(() => createRef()));
  const { terrain } = sceneParams;

  const waterOptions = useSelector(getWaterOptions);

  useEffect(() => {
    tileOffsets.forEach((offset, index) => {
      const { position } = planes.current[index].current;
      position.set(...offset, waterOptions.height);
    });
  }, [tileOffsets, waterOptions.height]);

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
              args={[terrain.size, terrain.size, 1, 1]}
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
        ))
      }
    </group>
  );
};

Water.propTypes = {
  tileOffsets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  numTiles: PropTypes.number.isRequired,
};

export default memo(Water);
