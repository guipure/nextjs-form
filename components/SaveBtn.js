import { Button, IconButton, makeStyles, Modal, Typography } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles({
  greenBtn: {
    color: '#fff',
    minWidth: '12.625rem',
    background: '#01BDA7',
    borderRadius: '2.25rem',
    padding: '0.875rem 1.125rem',
    marginTop: '1.8rem',

    '&:hover': {
      background: '#01BDA7',
      opacity: 0.7,
    }
  },

  whiteBtn: {
    color: '#01BDA7',
    minWidth: '12.625rem',
    background: '#fff',
    borderRadius: '2.25rem',
    border: '1px solid #01BDA7',
    padding: '0.75rem 1.125rem',
    marginTop: '1.8rem',

    '&:hover': {
      opacity: 0.7,
    }
  },

  modal: {
    minHeight: '19.875rem',
    maxWidth: '37.5rem',
    width: '100%',
    background: '#fff',
    padding: '1.5rem 1.5rem 3.5rem',
    borderRadius: '0.625rem',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,

    '@media (max-width: 576px)': {
      borderRadius: '0.625rem 0.625rem 0 0',
      transform: 'translate(-50%, 0)',
      top: '25%',
      bottom: 0,
      justifyContent: 'normal',
      padding: '1.875rem 1.5rem',
    }
  },

  successModal: {
    '@media (max-width: 576px)': {
      top: 'auto',
      minHeight: 'auto',
    },
  },

  close: {
    alignSelf: 'flex-end',
  },

  title: {
    opacity: 0.7,
    color: '#313131',
    fontSize: '1.5rem',

    '@media (max-width: 576px)': {
      fontSize: '1.125rem',
    },
  },

  hidden: {
    '@media (max-width: 576px)': {
      display: 'none',
    },
  }
});

function SaveBtn({ data, open, setOpen, children }) {
  const classes = useStyles();

  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClose = () => setOpen(false);

  const sendRequest = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token-access': 'random',
      },
    });
  };

  const handleOpenSuccess = () => {
    setOpen(false);
    setOpenSuccess(true);
    localStorage.setItem('data', JSON.stringify(data));
    sendRequest(data);
  };
  const handleCloseSuccess = () => setOpenSuccess(false);

  return (
    <>
      <Button className={classes.greenBtn} type="submit">{ children }</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.modal}>
          <IconButton onClick={handleClose} className={classes.close}>
            <Clear />
          </IconButton>
          <Typography variant="h1" className={classes.title}>Сохранить изменения?</Typography>
          <Button className={classes.greenBtn} onClick={handleOpenSuccess}>Сохранить</Button>
          <Button className={classes.whiteBtn} onClick={handleClose}>Не сохранять</Button>
        </div>
      </Modal>
      <Modal
        open={openSuccess}
        onClose={handleCloseSuccess}
      >
        <div className={`${classes.modal} ${classes.successModal}`}>
          <Typography variant="h1" className={classes.title}>Данные успешно сохранены</Typography>
          <Button className={`${classes.greenBtn} ${classes.hidden}`} onClick={handleCloseSuccess}>Хорошо</Button>
        </div>
      </Modal>
    </>
  );
}

export default SaveBtn;