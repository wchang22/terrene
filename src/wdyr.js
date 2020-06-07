import React from 'react';
import * as ReactRedux from 'react-redux';
import whyDidYouRender from '@welldone-software/why-did-you-render';

if (process.env.NODE_ENV === 'development') {
  // Set up why-did-you-render to log any unnecessary rerenders that may
  // hurt performance
  if (process.env.REACT_APP_WDYR) {
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      trackHooks: true,
      trackExtraHooks: [
        [ReactRedux, 'useSelector'],
      ],
    });
  }
}
