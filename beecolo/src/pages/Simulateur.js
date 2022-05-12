import React from 'react';
import ChoixTravaux from '../components/simulateur/ChoixTravaux';
import FoyerInfos from '../components/simulateur/FoyerInfos';
import Logement from '../components/simulateur/Logement';
import LogementInfos from '../components/simulateur/LogementInfos';
import SimulateurResult from '../components/simulateur/SimulateurResult';

export default function Simulateur() {
  return (
    <div>
      <h1>Simulateur</h1>
      <p>
        Tu peux simuler ici, le cout de tes travaux et les aides auxquels tu as
        le droit.{' '}
      </p>
      <div className="questions_card">
        <Logement />
        <LogementInfos />
        <FoyerInfos />
        <ChoixTravaux />
        <SimulateurResult />
      </div>
    </div>
  );
}
