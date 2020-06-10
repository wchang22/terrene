import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  ListSubheader,
  Slider,
} from '@material-ui/core';

import useStyles from './styles';

// Side panel on left
const ListSection = ({
  sectionName,
  optionsEnum,
  options,
  setOptions,
}) => {
  const styles = useStyles();

  return (
    <>
      <ListSubheader>{ sectionName }</ListSubheader>
      {
        optionsEnum.map(({
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
              value={options[name]}
              onChange={(e, value) => setOptions(name, value)}
            />
          </ListItem>
        ))
      }
    </>
  );
};

ListSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  optionsEnum: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  })).isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  setOptions: PropTypes.func.isRequired,
};

export default memo(ListSection);
