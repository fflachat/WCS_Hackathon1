import React from 'react';
import useLocalStorage from 'use-local-storage';
import styles from './Logement.module.css';

export default function Logement() {
  const [logement, setLogement] = useLocalStorage('logement', '');

  return (
    <div className={styles.questionCard}>
      <h3>Quel est votre type d'habitation ?</h3>

      <button
        className={styles.cardButton}
        onClick={() => setLogement('maison')}
      >
        Maison
      </button>

      <button
        className={styles.cardButton}
        onClick={() => setLogement('appartement')}
      >
        Appartement
      </button>
    </div>
  );
}
