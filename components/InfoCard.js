import { Card, makeStyles, ListItem, List, ListItemIcon, ListItemText, Grid, Button } from '@material-ui/core';
import { AlternateEmail, AssignmentInd, Phone } from '@material-ui/icons';
import { useState } from 'react';
import CustomTextField from './CustomTextField';
import SaveBtn from './SaveBtn';


const useStyles = makeStyles({
  infoCard: {
    marginTop: '1.5rem',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '0.625rem',

    '@media (max-width: 576px)': {
      marginTop: '0.625rem',
    },
  },

  editCard: {
    padding: '1.625rem 0 2.75rem',
  },
  
  row: {
    padding: '2rem 4.875rem',
  
    '&:not(:first-child)': {
      borderTop: '1px solid #CAE7FE',
    },

    '@media (max-width: 576px)': {
      padding: '0.75rem',
    },
  },
  
  column: {
    paddingTop: '1.25rem',
    gap: '2.625rem',

    '&:not(:first-child)': {
      borderLeft: '1px solid #CAE7FE',
    },
  },

  text: {
    color: '#313131',
    fontSize: '1.125rem',
    paddingLeft: '0.875rem',

    '@media (max-width: 576px)': {
      fontSize: '0.875rem',
      paddingLeft: 0,
    },
  },
  
  icon: {
    fontSize: '1.875rem',

    '@media (max-width: 576px)': {
      fontSize: '1.5rem',
    },
  },
  
  hiddenIcon: {
    fontSize: '1.875rem',
    marginBottom: '1.125rem',

    '@media (max-width: 480px)': {
      display: 'none',
    },
  },
});

function InfoCard({ editMode }) {
  const classes = useStyles();

  const localData = process.browser ? JSON.parse(localStorage.getItem('data')) : null;
  const initialData = localData || {
    name: '',
    email: '',
    phone: '',
    nameError: false,
    emailError: false,
    phoneError: false,
  };

  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);

  const validate = (data) => {
    let isValid = true;

    if (data.name.length < 5) {
      setData(prevState => {
        return { ...prevState, nameError: true }
      })
      isValid = false;
    }

    // General Email Regex (RFC 5322 Official Standard):
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!emailRegex.test(data.email)) {
      setData(prevState => {
        return { ...prevState, emailError: true }
      })
      isValid = false;
    }

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

    if (!phoneRegex.test(data.phone)) {
      setData(prevState => {
        return { ...prevState, phoneError: true }
      })
      isValid = false;
    }

    return isValid;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validate(data);

    setOpen(isValid);
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    const nameError = false;
    setData(prevState => {
      return { ...prevState, name, nameError }
    });
  };

  const handleEmailChange = (event) => {
    const email = event.target.value
    const emailError = false;
    setData(prevState => {
      return { ...prevState, email, emailError }
    });
  };

  const handlePhoneChange = (event) => {
    const phone = event.target.value
    const phoneError = false;
    setData(prevState => {
      return { ...prevState, phone, phoneError }
    });
  };

  const info = (
    <List disablePadding>
      <ListItem className={classes.row}>
        <ListItemIcon>
          <AlternateEmail color="secondary" className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text} disableTypography>Ivanova@mail.ru</ListItemText>
      </ListItem>
      <ListItem className={classes.row}>
        <ListItemIcon>
          <Phone color="secondary" className={classes.icon} />
        </ListItemIcon>
        <ListItemText className={classes.text} disableTypography>Укажите номер телефона</ListItemText>
      </ListItem>
    </List>
  );

  const edit = (
    <form onSubmit={handleSubmit}>
      <Grid container className={classes.editCard}>
        <Grid container item sm={12} md={4} alignItems="center" justify="center" className={classes.column}>
          <AssignmentInd color="secondary" className={classes.hiddenIcon} />
          <CustomTextField
            error={data.nameError}
            helperText={ data.nameError ? 'Вы неверно указали имя' : '' }
            fullWidth
            label="Фамилия и имя"
            placeholder="Укажите ваши фамилию и имя"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={handleNameChange}
            value={data.name}
          />
        </Grid>
        <Grid container item sm={12} md={4} alignItems="center" justify="center" className={classes.column}>
          <AlternateEmail color="secondary" className={classes.hiddenIcon} />
          <CustomTextField
            error={data.emailError}
            helperText={ data.emailError ? 'Вы неверно указали e-mail' : '' }
            fullWidth
            label="E-mail"
            placeholder="Ivanova@mail.ru"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={handleEmailChange}
            value={data.email}
          />
        </Grid>
        <Grid container item sm={12} md={4} alignItems="center" justify="center" className={classes.column}>
          <Phone color="secondary" className={classes.hiddenIcon} />
          <CustomTextField
            error={data.phoneError}
            helperText={ data.phoneError ? 'Вы неверно указали номер' : '' }
            fullWidth
            label="Номер телефона"
            placeholder="Укажите номер телефона"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={handlePhoneChange}
            value={data.phone}
          />
        </Grid>
        <Grid container item justify="center">
          <SaveBtn data={data} open={open} setOpen={setOpen}>Сохранить изменения</SaveBtn>
        </Grid>
      </Grid>
    </form>
  );

  return (
    <Card className={classes.infoCard}>
      { editMode ? edit : info }
    </Card>
  );
}

export default InfoCard;