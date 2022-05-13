import React, { useState } from 'react';
import './Home.css';
import Popup from '../components/Popup';

export default function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);

  return (
  <div className="homeContainer">
    <h1 className="homeTitle">Bienvenue sur Beecolo</h1>
    <p className="homeText">Qui a dit qu'écologie ne pouvait rimer avec économie? 
    Sur cette application vous allez pouvoir retrouver les infos qu'il vous faut afin 
    de rénover votre maison ce qui permettra d'aider à sauvegarder la planète et votre 
    porte-monnaie, que demandez de mieux !</p>
    <img className="house" src="/house.jpg" alt="cutaway house" />
    <button className="windowButton" onClick={() => setButtonPopup(true)}>O</button>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h3 style={{fontWeight: 'bold' }}>Fenêtres</h3>
      <p>Avoir des ouvertures et fermetures performantes vous garantissent un confort thermique optimal tout au long de l’année. <br />
        Du point de vue écologique, la limitation de la consommation d’énergie par les ménages est plus importante que le choix de matériaux précis.</p>
    </Popup>
    <button className="doorButton" onClick={() => setButtonPopup2(true)}>O</button>
    <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
      <h3 style={{fontWeight: 'bold' }}>Porte</h3>
      <p> Les menuiseries sont responsables de 10 à 15 % des déperditions thermiques d’un logement.<br />
      Nous vous conseillons de vous orienter vers des portes d’entrée en bois certifiées PEFC, c’est-à-dire constituées d’au moins 70% de bois issu de forêt gérées durablement.<br />
      Il faut également faire attention à l’effet de serre que génère votre porte, mesuré à partir des Analyses du Cycle de Vie (ACV) qui quantifie les impacts sur l’environnement durant tout la vie de la porte : production, transport, mise en œuvre, entretien, fin de vie. Les impacts sont généralement calculés pour une période de 30 ans.<br />
      De plus changer pour une porte d’entrée écolo est éligible au CITE « Crédit d’Impôt pour la Transition Énergétique ».</p>
    </Popup>
    <button className="wallButton" onClick={() => setButtonPopup3(true)}>O</button>
    <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
      <h3 style={{fontWeight: 'bold' }}>Murs</h3>
      <p>La laine de lin.<br />
      Elle fait partie des meilleurs isolants naturels du fait de sa forte capacité à réduire les ponts thermiques. En plus d'être un excellent isolant, il s'agit d'un produit respectueux de l'environnement qui ne présente aucun risque pour la santé</p>
    </Popup>
      <button className="atticButton" onClick={() => setButtonPopup4(true)}>O</button>
    <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}>
    <h3 style={{fontWeight: 'bold' }}>Combles</h3>
      <p>Le chanvre, un isolant naturel idéal pour l'isolation des combles.<br />
    La laine de coton, légère et performante.<br />
    La laine de mouton présente une forte résistance au tassement.<br />
    La laine de bois ou les fibres de bois, pour une atmosphère saine.</p>
    </Popup>

    <h2 className="homeSlogan">La meilleure énergie est celle que tu ne consommes pas ! </h2>
  </div>
  );
}
