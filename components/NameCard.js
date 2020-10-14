import { Avatar, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import theme from '../styles/theme';
import EditBtn from './EditBtn';

const useStyles = makeStyles({
  nameCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',
    padding: theme.spacing(3),

    '@media (max-width: 576px)': {
      padding: theme.spacing(1),
    },
  },
  
  user: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.625rem',
    padding: 0,

    '@media (max-width: 576px)': {
      gap: '0.625rem',
    },
  },

  avatar: {
    height: theme.spacing(10),
    width: theme.spacing(10),

    '@media (max-width: 576px)': {
      height: theme.spacing(5),
      width: theme.spacing(5),
    },
  },

  name: {
    '@media (max-width: 576px)': {
      fontSize: '0.875rem',
    },
  },
})

function NameCard({ editMode, setEditMode }) {
  const classes = useStyles();

  return (
    <Card className={classes.nameCard}>
      <CardContent className={classes.user}>
        <Avatar src="/user-photo.jpg" className={classes.avatar} />
        <Typography variant="h1" className={classes.name}>Иванова Анна Михайловна</Typography>
      </CardContent>
      <CardActions>
        <EditBtn editMode={editMode} setEditMode={setEditMode} />
      </CardActions>
    </Card>
  )
}

export default NameCard;