import React, { memo } from 'react';

import sceneParams from 'app/scene/params';

const Scene = () => (
  <>
    {
      sceneParams.lights.directional.map(({ direction, intensity }) => (
        <directionalLight
          direction={direction}
          intensity={intensity}
          key={`${direction}-${intensity}`}
        />
      ))
    }
    <fogExp2
      attach="fog"
      args={[sceneParams.fog.color, sceneParams.fog.density]}
    />
    <gridHelper
      args={[
        sceneParams.grid.size,
        sceneParams.grid.divisions,
        sceneParams.grid.centerline_color,
        sceneParams.grid.grid_color,
      ]}
      position={sceneParams.grid.position}
    />
  </>
);

export default memo(Scene);
