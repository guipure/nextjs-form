import { Container, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import InfoCard from '../components/InfoCard';
import Menu from '../components/Menu';
import NameCard from '../components/NameCard';
import ProfileTitle from '../components/ProfileTitle';

const useStyles = makeStyles({
  container: {
    backgroundImage: "url('wave.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: '100% 100%',
    margin: '0 auto',
    maxWidth: '1480px',

    '@media (min-width: 576px)': {
      padding: '20px 34px',
    }
  },
});

function Index() {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);

  return (
    <Container className={classes.container}>
      <Menu />
      <ProfileTitle />
      <NameCard editMode={editMode} setEditMode={setEditMode} />
      <InfoCard editMode={editMode} />
    </Container>
  );
}

export default Index;
