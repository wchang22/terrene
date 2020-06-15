import React, { useState } from 'react';
import { Backdrop, Typography } from '@material-ui/core';
import useStyles from './styles';

const Instructions = () => {
  const styles = useStyles();

  const [open, setOpen] = useState(true);

  return (
    <Backdrop
      className={styles.backdrop}
      open={open}
      onClick={() => setOpen(false)}
    >
      <div>
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          paragraph
        >
          Terrene
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          align="center"
        >
          Move: WASD
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          align="center"
        >
          Ascend/Descend: Space/Shift
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          align="center"
        >
          Enable/Disable Controls: Click/Esc
        </Typography>
      </div>
    </Backdrop>
  );
};

export default Instructions;
