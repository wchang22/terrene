import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sideDrawer: {
    width: '20%',
    overflowX: 'hidden',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  options: {
    flexGrow: 1,
  },
  resetButton: {
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
