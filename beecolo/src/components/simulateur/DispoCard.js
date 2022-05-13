import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import styles from './Dispositif.module.css';

export default function DispoCard({ dispoId }) {
  const [dispositif, setDispositif] = useLocalStorage('dispositifs', '');
  const [displayDescription, setDisplayDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://koumoul.com/data-fair/api/v1/datasets/simul'aideuros-dispositifs/lines?format=json&q_mode=simple&qs=id%3A${dispoId}&size=1&sampling=neighbors`
      )
      .then((res) => res.data)
      .then((data) => data.results)
      .then((results) => results[0])
      .then((r) => {
        setDispositif(r);
        console.log(dispositif);
      })
      .finally(setIsLoading(false));
  }, [dispoId]);

  return (
    <div>
      {!isLoading && (
        <div
          className={styles.card}
          onClick={() => setDisplayDescription(!displayDescription)}
        >
          <h2>{dispositif.intitule}</h2>
          {displayDescription && <p>{dispositif.descriptif}</p>}
        </div>
      )}
    </div>
  );
}
