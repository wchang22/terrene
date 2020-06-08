import React, { memo } from 'react';

import sceneParams from 'app/scene/params';
import Terrain from 'app/scene/terrain';

const Scene = () => {
  const { fog, lights: { hemisphere, directional } } = sceneParams;
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
        args={[fog.color, fog.density]}
      />
      <Terrain />
    </>
  );
};

export default memo(Scene);
