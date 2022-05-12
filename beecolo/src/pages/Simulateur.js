import React from 'react';
import { useState } from 'react';
import ChoixTravaux from '../components/simulateur/ChoixTravaux';
import FoyerInfos from '../components/simulateur/FoyerInfos';
import Logement from '../components/simulateur/Logement';
import LogementInfos from '../components/simulateur/LogementInfos';
import SimulateurResult from '../components/simulateur/SimulateurResult';

export default function Simulateur() {
  const [questionIndex, setQuestionIndex] = useState(1);

  const switchQuestion = () => {
    if (questionIndex < 5) setQuestionIndex(questionIndex + 1);
    else setQuestionIndex(1);
  };

  return (
    <div>
      <h1>Simulateur</h1>
      <p>
        Tu peux simuler ici, le cout de tes travaux et les aides auxquels tu as
        le droit.{' '}
      </p>
      <div className="questions_card">
        {questionIndex === 1 ? <Logement /> : null}
        {questionIndex === 2 ? <LogementInfos /> : null}
        {questionIndex === 3 ? <FoyerInfos /> : null}
        {questionIndex === 4 ? <ChoixTravaux /> : null}
        {questionIndex === 5 ? <SimulateurResult /> : null}
      </div>
      <button type="button" onClick={switchQuestion}>
        Suivant
      </button>
    </div>
  );
}
