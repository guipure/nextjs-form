import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  profileTitle: {
    paddingBottom: '2rem',

    '@media (max-width: 576px)': {
      paddingBottom: '0.625rem',
    },
  },
  
  title: {
    paddingBottom: '0.625rem',

    '@media (max-width: 576px)': {
      fontSize: '0.875rem',
    },
  },
  
  subtitle: {
    '@media (max-width: 576px)': {
      fontSize: '0.75rem',
    },
  },
})

function ProfileTitle() {
  const classes = useStyles();

  return (
    <div className={classes.profileTitle}>
      <Typography variant="h2" className={classes.title}>Личный профиль</Typography>
      <Typography variant="body2" className={classes.subtitle}>Главная/Личный профиль</Typography>
    </div>
  )
}

export default ProfileTitle;