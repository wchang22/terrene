import { makeStyles } from '@material-ui/core/styles';

export const SIDE_DRAWER_WIDTH = '20%';

const useStyles = makeStyles((theme) => ({
  sideDrawer: {
    width: SIDE_DRAWER_WIDTH,
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
