import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { NotificationsNone } from '@material-ui/icons';
import theme from '../styles/theme';

const useStyles = makeStyles({
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '16px',
    gap: '20px',

    '@media (max-width: 576px)': {
      gap: 0,
    },
  },

  icon: {
    fontSize: '30px',

    '@media (max-width: 576px)': {
      fontSize: '24px',
    },
  },

  userInfo: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    paddingLeft: '20px',
    borderLeft: '1px solid #fff',

    '@media (max-width: 576px)': {
      paddingLeft: '10px',
    },
  },

  avatar: {
    '@media (max-width: 576px)': {
      height: theme.spacing(3),
      width: theme.spacing(3),
    },
  },

  name: {
    fontSize: '14px',
    fontWeight: '600',

    '@media (max-width: 576px)': {
      display: 'none',
    },
  }
});

function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <IconButton color="inherit">
        <NotificationsNone className={classes.icon} />
      </IconButton>
      <div className={classes.userInfo}>
        <Avatar className={classes.avatar} src='/user-photo.jpg' />
        <Typography className={classes.name}>Иванова А.</Typography>
      </div>
    </div>
  )
}

export default Menu;