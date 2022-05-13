import { useState, useEffect } from 'react';
import styles from './ChoixTravaux.module.css';
import { TravauxList } from '../../ressource/TravauxList';
import useLocalStorage from 'use-local-storage';

export default function ChoixTravaux() {
  const [TravauxOptions, setTravauxOptions] = useState([]);
  const [cp, setCp] = useLocalStorage('CP', '');
  const [selectedTravaux, setSelectedTravaux] = useLocalStorage(
    'selectedTravaux',
    ''
  );

  const logement = JSON.parse(localStorage.getItem('logement'));

  useEffect(() => {
    setTravauxOptions(TravauxList.filter((t) => t[logement] === true));
  }, [logement]);

  return (
    <div className={styles.questionCard}>
      <h3> Quels types de travaux souhaiteriez-vous entreprendre ? </h3>
      <select
        className={styles.travaux}
        name="travaux"
        id="travaux_select"
        onChange={(e) => setSelectedTravaux(e.target.value)}
      >
        <option value="">----</option>
        {TravauxOptions.map((t) => {
          return (
            <option key={t.travaux} value={t.travaux}>
              {t.travaux}
            </option>
          );
        })}
      </select>

      <div className={styles.CP}>
        <label htmlFor="CP">Département</label>
        <input
          className={styles.CPinput}
          type="number"
          id="CP"
          name="CP"
          onChange={(e) => setCp(e.target.value)}
          value={cp}
        />
      </div>
    </div>
  );
}
