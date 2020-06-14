import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import * as THREE from 'three';

import sceneParams from 'app/scene/params';
import { getWaterOptions } from 'state/water/selectors';

const Water = () => {
  const { terrain } = sceneParams;

  const waterOptions = useSelector(getWaterOptions);

  return (
    <mesh
      position={[0, waterOptions.height, 0]}
      rotation={terrain.rotation}
    >
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
  );
};

export default memo(Water);
