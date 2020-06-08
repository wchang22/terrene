import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    height: '100%',
  },
  canvas: {
    background: 'lightgrey',
  },
  stats: {
    left: 'auto !important',
    top: 'auto !important',
    right: '0px !important',
    bottom: '0px !important',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
