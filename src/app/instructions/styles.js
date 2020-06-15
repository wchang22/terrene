import { makeStyles } from '@material-ui/core/styles';
import { SIDE_DRAWER_WIDTH } from 'app/side-drawer/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    width: `calc(100% - ${SIDE_DRAWER_WIDTH})`,
    left: SIDE_DRAWER_WIDTH,
    zIndex: theme.zIndex.drawer,
  },
}));

export default useStyles;
