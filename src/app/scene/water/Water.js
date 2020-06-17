import React, {
  useMemo,
  useEffect,
  useRef,
  createRef,
  memo,
} from 'react';
import { useSelector } from 'react-redux';
import { useFrame } from 'react-three-fiber';
import PropTypes from 'prop-types';

import WaterShaderMaterial from 'app/scene/water/WaterShaderMaterial';
import sceneParams from 'app/scene/params';
import { getWaterOptions } from 'state/water/selectors';

const Water = ({ tileOffsets, numTiles }) => {
  const tiles = useMemo(() => [...new Array(numTiles).keys()], [numTiles]);
  const planes = useRef(tiles.map(() => createRef()));
  const { terrain } = sceneParams;

  const waterOptions = useSelector(getWaterOptions);
  const waterShaderMaterial = useMemo(() => new WaterShaderMaterial(), []);

  useEffect(() => {
    tileOffsets.forEach((offset, index) => {
      planes.current[index].current.position.set(...offset, waterOptions.height);
    });
  }, [tileOffsets, waterOptions.height]);

  useFrame(() => {
    const time = (new Date()).getTime();
    waterShaderMaterial.uniforms.time.value = (time % 1e7) / 10 ** (5 - waterOptions.speed);
  });

  return (
    <group rotation={terrain.rotation}>
      {
        tiles.map((value, index) => (
          <mesh
            ref={planes.current[index]}
            key={String(value)}
            material={waterShaderMaterial}
          >
            <planeBufferGeometry
              attach="geometry"
              args={[terrain.size, terrain.size, 1, 1]}
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
