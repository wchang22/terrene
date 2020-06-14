import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import sceneParams from 'app/scene/params';
import Terrain from 'app/scene/terrain';
import Water from 'app/scene/water';
import { getFogOptions } from 'state/fog/selectors';

const Scene = () => {
  const { hemisphere, directional } = sceneParams.lights;

  const fogOptions = useSelector(getFogOptions);

  return (
    <>
      <hemisphereLight
        args={[hemisphere.skyColor, hemisphere.groundColor, hemisphere.intensity]}
      />
      {
        directional.map(({ direction, intensity }) => (
          <directionalLight
            direction={direction}
            intensity={intensity}
            key={`${direction}-${intensity}`}
            castShadow
          />
        ))
      }
      <fogExp2
        attach="fog"
        args={[fogOptions.color, fogOptions.density]}
      />
      <Terrain />
      <Water />
    </>
  );
};

export default memo(Scene);
