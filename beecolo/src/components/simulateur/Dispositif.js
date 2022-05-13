import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import DispoCard from './DispoCard';
import styles from './Dispositif.module.css';

const convertIdList = (idList) => {
  const uniList = [...new Set(idList)];
  let arg = '';
  for (let i = 0; i < uniList.length; i += 1) {
    if (i === 0) arg = `${uniList[i]}`;
    if (i > 0) arg += `+OR+${uniList[i]}`;
  }
  return arg;
};

export default function Dispositif() {
  const [idDispoList, setIdDispoList] = useLocalStorage('idDispoList', '');
  const [dispositifList, setDispositifList] = useState([]);

  const selectedTravaux = JSON.parse(localStorage.getItem('selectedTravaux'));
  const cp = JSON.parse(localStorage.getItem('CP'));

  useEffect(() => {
    axios
      .get(
        `https://data.ademe.fr/data-fair/api/v1/datasets/simul%27aideuros-dispositifs-travaux/lines?format=json&q_mode=simple&qs=intitule%3A${selectedTravaux}&size=2000&sampling=neighbors`
      )
      .then((res) => res.data.results)
      .then((results) => results.map((r) => r.id_dispositif))
      .then((list) => setIdDispoList(list));

    axios
      .get(
        `https://data.ademe.fr/data-fair/api/v1/datasets/simul'aideuros-dispositifs-perimetres-geographiques/lines?format=json&q_mode=simple&qs=code_departement%3A${cp}&size=100&sampling=neighbors`
      )
      .then((res) => res.data.results)
      .then((results) => results.map((r) => r.id))
      .then((idList) => setIdDispoList(idList));

    const arg2 = convertIdList(idDispoList);

    axios
      .get(
        `https://koumoul.com/data-fair/api/v1/datasets/simul%27aideuros-dispositifs/lines?format=json&q_mode=simple&qs=id%3A${arg2}&size=100&&sampling=neighbors`
      )
      .then((res) => res.data.results)
      .then((results) => results.map((r) => r.id))
      .then((results) => {
        const uniqueResult = [...new Set(results)];
        setDispositifList(uniqueResult);
      });
  }, [cp]);

  return (
    <div>
      <h3> Voici les dispositifs existants pour votre situation :</h3>
      <div className={styles.dispoList}>
        {dispositifList.map((d) => {
          return <DispoCard className={styles.card} key={d} dispoId={d} />;
        })}
      </div>
    </div>
  );
}
