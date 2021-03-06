import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './CoutTravaux.module.css';
import { TravauxList } from '../../ressource/TravauxList';

const avg = (array) => {
  let sum = 0;
  let nullCompt = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (!isNaN(parseInt(array[i].prix_total))) {
      sum += parseInt(array[i].prix_total);
    } else nullCompt += 1;
  }
  return Math.floor(sum / (array.length - nullCompt));
};

export default function CoutTravaux() {
  const [averagePrice, setAveragePrice] = useState(0);
  const [prestationList, setprestationList] = useState([]);
  const cp = JSON.parse(localStorage.getItem('CP'));
  const selectedTravaux = JSON.parse(localStorage.getItem('selectedTravaux'));

  useEffect(() => {
    const TabPrestation = TravauxList.filter(
      (t) => t.travaux === selectedTravaux
    );
    const code = TabPrestation[0].prestation[0];
    axios
      .get(
        `https://data.ademe.fr/data-fair/api/v1/datasets/simul%27aideuros-cout-des-travaux/lines?format=json&q=${code}&q_mode=simple&size=5000&sampling=neighbors`
      )
      .then((res) => res.data)
      .then((data) => data.results)
      .then((results) =>
        results.filter((d) => typeof d.code_postal !== 'undefined')
      )
      .then((results) =>
        results.filter((d) => d.code_postal.startsWith(cp) === true)
      )
      .then((cpList) => setprestationList(cpList));

    setAveragePrice(avg(prestationList));
  }, [cp, prestationList, selectedTravaux]);

  return (
    <div className={styles.questionCard}>
      <h3>
        {' '}
        Dans votre département, la prestation :{' '}
        <span className={styles.presta}>{selectedTravaux}</span>, est en moyenne
        facturée :
      </h3>
      {!isNaN(averagePrice) ? (
        <h2 className="text-[50px] text-center">{averagePrice} euros</h2>
      ) : (
        <h2> Chargement </h2>
      )}
      <p>
        {' '}
        Pour réduire la facture, il existe des aides ! Renseignez vous et
        contribuer à la transition écologique tout en préservant votre
        portefeuille !{' '}
      </p>
    </div>
  );
}
