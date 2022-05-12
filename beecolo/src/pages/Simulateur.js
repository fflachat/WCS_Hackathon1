import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import { useState } from 'react';
import ChoixTravaux from '../components/simulateur/ChoixTravaux';
import Logement from '../components/simulateur/Logement';
import SimulateurResult from '../components/simulateur/SimulateurResult';
import styles from './Simulateur.module.css';
import CoutTravaux from '../components/simulateur/CoutTravaux';

export default function Simulateur() {
  const [questionIndex, setQuestionIndex] = useState(1);

  const switchQuestion = () => {
    if (questionIndex < 3) setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className={styles.simulateur}>
      <h1 className={styles.title}>Simulateur</h1>
      <p className={styles.explication}>
        Tu peux simuler ici, le cout de tes travaux et les aides auxquels tu as
        le droit.{' '}
      </p>
      {questionIndex === 1 ? <Logement /> : null}
      {questionIndex === 2 ? <ChoixTravaux /> : null}
      {questionIndex >= 3 ? <CoutTravaux /> : null}
      {questionIndex >= 4 ? <SimulateurResult /> : null}

      <Button
        className={styles.next}
        variant="contained"
        onClick={switchQuestion}
        endIcon={<SendIcon />}
      >
        Suivant
      </Button>
    </div>
  );
}
