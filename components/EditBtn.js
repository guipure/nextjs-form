import { Button, makeStyles, Typography } from '@material-ui/core';
import { Close, Create } from '@material-ui/icons';

const useStyles = makeStyles({
  button: {
    minWidth: '1.125rem',
  },

  text: {
    '@media (max-width: 576px)': {
      display: 'none',
    },
  },
});

function EditBtn({ editMode, setEditMode }) {
  const classes = useStyles();

  const handleClick = () => setEditMode(!editMode);

  return (
    <Button
      endIcon={ editMode ? <Close fontSize="small" /> : <Create fontSize="small" />}
      onClick={handleClick}
      className={classes.button}
    >
      <Typography variant="h3" className={classes.text}>{ editMode ? 'Закрыть' : 'Редактировать' }</Typography>
    </Button>
  )
}

export default EditBtn;