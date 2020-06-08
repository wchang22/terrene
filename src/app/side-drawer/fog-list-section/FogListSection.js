import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  ListItemText,
  ListSubheader,
  Slider,
} from '@material-ui/core';

import FogOptions from 'app/side-drawer/fog-list-section/options';
import { setFogOptions } from 'state/fog/actions';
import { getFogOptions } from 'state/fog/selectors';

import useStyles from './styles';

// Side panel on left
const FogListSection = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const fogOptions = useSelector(getFogOptions);

  return (
    <>
      <ListSubheader>Fog</ListSubheader>
      {
        FogOptions.map(({
          displayName,
          name,
          min,
          max,
          step,
        }) => (
          <ListItem dense key={name}>
            <ListItemText className={styles.listItemText}>{ displayName }</ListItemText>
            <Slider
              component="div"
              color="secondary"
              min={min}
              max={max}
              step={step}
              valueLabelDisplay="auto"
              value={fogOptions[name]}
              onChange={(e, value) => dispatch(setFogOptions(name, value))}
            />
          </ListItem>
        ))
      }
    </>
  );
};

export default memo(FogListSection);
